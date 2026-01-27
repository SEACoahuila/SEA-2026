     <template>
  <v-row class="mt-8">
      <v-col 
        v-for="(publicacion, i) in publicaciones" 
        :key="i" 
        cols="12" sm="6" lg="4" xl="3"
        class="pa-4"
      >
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            v-bind="props"
            :href="publicacion.enlace"
            target="_blank"
            class="mx-auto rounded-xl news-card-premium overflow-hidden"
            :elevation="isHovering ? 12 : 2"
          >
            <div class="position-relative overflow-hidden">
              <v-img
                height="280px"
                :src="publicacion.imagen"
                cover
                class="transition-all duration-500"
                :style="isHovering ? 'transform: scale(1.1)' : ''"
              >
                <div class="fill-height bottom-gradient"></div>
                
                <div class="glass-badge px-4 py-1 rounded-pill">
                  {{ publicacion.autor?.nombre || 'SEA' }}
                </div>
              </v-img>
            </div>

            <v-card-text class="pa-6">
              <h2 class="text-body-1 font-weight-black text-blue-grey-darken-4 mb-3 news-title">
                {{ publicacion.titulo }}
              </h2>
              <p class="text-caption text-grey-darken-1 mb-6 leading-relaxed">
                {{ publicacion.excerpt }}
              </p>

              <div class="d-flex align-center justify-space-between">
                <v-btn
                  variant="text"
                  :color="isHovering ? 'amber-darken-2' : 'grey-darken-2'"
                  class="px-0 text-none font-weight-bold"
                  suffix-icon="mdi-arrow-right"
                >
                  Continuar leyendo
                  <v-icon 
                    end 
                    :class="isHovering ? 'translate-x-icon' : ''"
                    class="transition-all"
                  >mdi-arrow-right</v-icon>
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <v-row v-if="btnShow" class="justify-center mt-12">
      <v-btn 
        variant="outlined" 
        color="cyan-darken-2" 
        size="small"
        rounded="xl"
        class="text-none px-12"
        @click="nextPage()"
      >
        Descubrir más historias
      </v-btn>
    </v-row>
    </template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { 
  collection, 
  query, 
  where, 
  orderBy, 
  limit, 
  getDocs, 
  startAfter, 
  doc, 
  getDoc,
  type DocumentData,
  QueryDocumentSnapshot,
  QuerySnapshot
} from 'firebase/firestore';

// 1. Definición de Interfaces
interface Autor {
  nombre: string;
}

interface Publicacion {
  titulo: string;
  excerpt: string;
  imagen: string;
  enlace: string;
  autor: Autor;
}

// 2. Props con tipos
const props = defineProps<{
  numberOfcards?: number
}>();

const { $db } = useNuxtApp();

// 3. Refs tipadas
const publicaciones = ref<Publicacion[]>([]);
const lastVisible = ref<QueryDocumentSnapshot<DocumentData> | null>(null);
const btnShow = ref(false);
const limitCount = props.numberOfcards || 6;

// 4. Utilidades tipadas
const truncate = (text: string, length: number): string => 
  text.length > length ? text.substring(0, length) + '...' : text;

// 5. Procesamiento con tipos de Firestore
const processDocs = async (snapshot: QuerySnapshot<DocumentData>): Promise<Publicacion[]> => {
  const news: Publicacion[] = [];
  
  for (const pubDoc of snapshot.docs) {
    const data = pubDoc.data();
    let autorData: Autor = { nombre: 'SEA Coahuila' };
    
    if (data.autor) {
      // @ts-ignore - En caso de que db no esté tipado globalmente
      const autorSnap = await getDoc(doc($db as any, "autores", data.autor));
      if (autorSnap.exists()) {
        autorData = autorSnap.data() as Autor;
      }
    }

    news.push({
      titulo: truncate(data.titulo || '', 40),
      excerpt: truncate(data.excerpt || '', 120),
      imagen: data.imagen || '',
      enlace: data.documento ? data.contenido : `/publicaciones/nota?id=${pubDoc.id}`,
      autor: autorData
    });
  }
  return news;
};

const getPublicaciones = async () => {
  try {
    const q = query(
      collection($db as any, "publicaciones"), 
      where("status", "==", "0"), 
      orderBy("publishAt", "desc"), 
      limit(limitCount)
    );
    
    const snapshot: any = await getDocs(q);
    if (!snapshot.empty) {
      lastVisible.value = snapshot.docs[snapshot.docs.length - 1];
      publicaciones.value = await processDocs(snapshot);
      btnShow.value = snapshot.docs.length === limitCount;
    }
  } catch (e) { 
    console.error("Error al obtener publicaciones:", e); 
  }
};

const nextPage = async () => {
  if (!lastVisible.value) return;
  
  try {
    const q = query(
      collection($db as any, "publicaciones"), 
      where("status", "==", "0"), 
      orderBy("publishAt", "desc"), 
      startAfter(lastVisible.value), 
      limit(limitCount)
    );
    
    const snapshot: any = await getDocs(q);
    if (!snapshot.empty) {
      lastVisible.value = snapshot.docs[snapshot.docs.length - 1];
      const nuevas = await processDocs(snapshot);
      publicaciones.value.push(...nuevas);
      btnShow.value = snapshot.docs.length === limitCount;
    } else { 
      btnShow.value = false; 
    }
  } catch (e) { 
    console.error("Error en paginación:", e); 
  }
};

onMounted(() => {
  getPublicaciones();
});
</script>

<style scoped>
.news-card-premium {
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  border: 1px solid rgba(0,0,0,0.05) !important;
  background: white;
}

.news-title {
  line-height: 1.2;
  letter-spacing: -0.5px;
}

.leading-relaxed {
  line-height: 1.6 !important;
}

.bottom-gradient {
  background: linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 40%);
  position: absolute;
  width: 100%;
  height: 100%;
}

.glass-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  color: #2c3e50;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  z-index: 2;
  border: 1px solid rgba(255,255,255,0.3);
}

.translate-x-icon {
  transform: translateX(6px);
}

.duration-500 {
  transition-duration: 0.5s !important;
}

.min-height-vh {
  min-height: 100vh;
}
</style>