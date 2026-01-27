<template>
  <v-container class="min-height-vh py-10">
    <v-row v-if="loading" justify="center" align="center" class="py-12">
      <v-col cols="12" md="8" class="text-center">
        <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
        <p class="mt-4 text-grey">Preparando lectura...</p>
      </v-col>
    </v-row>

    <v-row v-else-if="!nota" justify="center" align="center" class="py-12">
      <v-col cols="12" md="6" class="text-center">
        <v-icon size="100" color="grey-lighten-2">mdi-file-search-outline</v-icon>
        <h1 class="text-h4 font-weight-bold mt-4">404</h1>
        <p class="text-body-1 text-grey-darken-1">La página o publicación solicitada no existe.</p>
        <v-btn to="/publicaciones" variant="outlined" class="mt-6 text-none" rounded="pill">
          Volver a noticias
        </v-btn>
      </v-col>
    </v-row>

    <v-row v-else justify="center">
      <v-col cols="12" lg="8">
        <header class="mb-10 text-center">
          <v-chip color="blue-grey-darken-3" variant="tonal" size="small" class="mb-4 font-weight-bold text-uppercase">
            Publicación Oficial
          </v-chip>
          <h1 class="text-h3 font-weight-black text-blue-grey-darken-4 mb-6 leading-tight">
            {{ nota.titulo }}
          </h1>
          <p class="text-h6 text-grey-darken-1 font-weight-medium mb-8 italic-excerpt">
            "{{ nota.excerpt }}"
          </p>
          
          <v-divider class="mb-6"></v-divider>
          
          <div class="d-flex align-center justify-center">
            <v-avatar size="48" class="mr-4 border">
              <v-img :src="nota.autor?.profilePic" alt="Autor"></v-img>
            </v-avatar>
            <div class="text-left">
              <div class="text-subtitle-2 font-weight-bold text-blue-grey-darken-4">
                {{ nota.autor?.nombre }}
              </div>
              <div class="text-caption text-grey">Sistema Estatal Anticorrupción</div>
            </div>
          </div>
        </header>

        <v-card variant="flat" class="rounded-xl overflow-hidden mb-12 shadow-article">
          <v-img 
            :src="nota.imagen" 
            height="500" 
            cover 
            class="align-end"
          >
            <div class="fill-height bottom-gradient"></div>
          </v-img>
        </v-card>

        <article 
          class="content-body text-body-1 text-grey-darken-3"
          v-html="nota.contenido"
        ></article>

        <v-divider class="mt-12 mb-6"></v-divider>
        <div class="d-flex justify-space-between align-center">
          <v-btn 
            prepend-icon="mdi-chevron-left" 
            variant="text" 
            to="/publicaciones" 
            class="text-none"
          >
            Ver más publicaciones
          </v-btn>
          <div class="d-flex gap-2">
            <v-btn icon="mdi-share-variant-outline" variant="tonal" size="small" color="grey"></v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { doc, getDoc, type DocumentData } from 'firebase/firestore';

// Interfaces para TS
interface Autor {
  nombre: string;
  profilePic: string;
  biografia?: string;
  links?: any;
}

interface Nota extends DocumentData {
  titulo: string;
  excerpt: string;
  imagen: string;
  contenido: string;
  autor?: Autor;
}

const { $db } = useNuxtApp();
const route = useRoute();

// Refs
const nota = ref<Nota | null>(null);
const loading = ref(true);
const id = route.query.id as string;

const getNote = async () => {
  if (!id) {
    loading.value = false;
    return;
  }

  try {
    loading.value = true;
    const docRef = doc($db as any, "publicaciones", id);
    const noteSnap = await getDoc(docRef);

    if (noteSnap.exists()) {
      const rawData = noteSnap.data();
      
      // Obtener autor
      let elAutor: Autor = {
        nombre: "Redacción SEA",
        profilePic: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/publicaciones%2Fstatic%2Fdefault_profile.jpg?alt=media&token=86c69bc1-25a3-4486-bc3b-643a62034a38"
      };

      if (rawData.autor) {
        const autorRef = doc($db as any, "autores", rawData.autor);
        const autorSnap = await getDoc(autorRef);
        if (autorSnap.exists()) {
          elAutor = autorSnap.data() as Autor;
        }
      }

      nota.value = { 
        ...rawData, 
        titulo: rawData.titulo,
        excerpt: rawData.excerpt,
        imagen: rawData.imagen,
        contenido: rawData.contenido,
        autor: elAutor 
      } as Nota;
    }
  } catch (error) {
    console.error("Error cargando la nota:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getNote();
});
</script>

<style scoped>
.min-height-vh {
  min-height: 80vh;
}

.leading-tight {
  line-height: 1.2 !important;
}

.italic-excerpt {
  font-style: italic;
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.shadow-article {
  box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
}

.bottom-gradient {
  background: linear-gradient(to top, rgba(0,0,0,0.2), transparent);
}

/* Estilos para el contenido inyectado por v-html */
.content-body :deep(p) {
  margin-bottom: 1.5rem;
  line-height: 1.8;
  font-size: 1.1rem;
}

.content-body :deep(img) {
  max-width: 100%;
  border-radius: 12px;
  margin: 2rem 0;
}

.content-body :deep(h2, h3) {
  color: #263238; /* blue-grey-darken-4 */
  margin: 2.5rem 0 1rem 0;
  font-weight: 800;
}
</style>