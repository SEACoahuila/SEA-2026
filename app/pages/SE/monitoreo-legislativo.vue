<template>
  <v-container class="min-height-vh py-10">
    <v-row v-if="loading" justify="center" align="center" class="py-12">
      <v-col cols="12" class="text-center">
        <v-progress-circular indeterminate color="cyan" size="50"></v-progress-circular>
        <p class="mt-4 text-grey text-overline">Consultando base de datos...</p>
      </v-col>
    </v-row>

    <v-row v-else-if="!dataModule.id" justify="center">
      <v-col cols="12" md="6">
        <v-alert
          type="info"
          variant="tonal"
          text="Aún no se cuenta con información de Monitoreo Legislativo."
          rounded="xl"
          icon="mdi-information-outline"
        ></v-alert>
      </v-col>
    </v-row>

    <div v-else>
      <v-row>
        <v-col cols="12">
            <TitlePages color="#00838F" title="Monitoreo Legislativo" sub-title="Transparencia y seguimiento legislativo" icon="mdi-monitor-eye"/>
   

          <v-card v-if="dataModule.descripcion?.length" variant="flat" class="border-thin rounded-xl pa-4 mb-10 bg-grey-lighten-4">
            <v-card-text class="text-body-1 text-grey-darken-3">
              <div v-for="(desc, i) in dataModule.descripcion" :key="i" class="mb-2">
                {{ desc.valor }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <div v-for="(seccion, i) in dataModule.secciones" :key="seccion.id" class="mb-12">
        <div class="d-flex align-center mb-6">
          <h2 class="text-h4 font-weight-bold text-blue-grey-darken-4 mr-4">{{ seccion.subtitulo }}</h2>
          <v-divider class="border-opacity-25"></v-divider>
        </div>

        <p v-if="seccion.descripcion" class="text-body-1 text-grey-darken-1 mb-6 max-width-800">
          {{ seccion.descripcion }}
        </p>

        <v-row>
          <v-col 
            v-for="doc in seccion.documentos" 
            :key="doc.id" 
            cols="12" sm="6" lg="3"
          >
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                v-bind="props"
                variant="outlined"
                class="rounded-xl doc-card h-100 transition-all"
                :class="isHovering ? 'bg-cyan-lighten-5 border-cyan' : 'border-grey-lighten-2'"
                :href="doc.url"
                target="_blank"
              >
                <v-card-item class="pa-5">
                  <div class="d-flex justify-space-between align-start mb-4">
                    <v-icon size="45" :color="isHovering ? 'cyan-darken-2' : 'grey-lighten-1'">
                      mdi-file-pdf-box
                    </v-icon>
                    <v-btn
                      variant="tonal"
                      :color="isHovering ? 'cyan-darken-2' : 'grey'"
                      icon="mdi-download"
                      size="small"
                    ></v-btn>
                  </div>
                  
                  <v-card-title class="text-subtitle-1 font-weight-bold leading-tight mb-2">
                    {{ doc.nombre }}
                  </v-card-title>
                  
                  <v-card-subtitle class="text-caption text-wrap line-clamp-3">
                    {{ doc.descripcion }}
                  </v-card-subtitle>
                </v-card-item>
              </v-card>
            </v-hover>
          </v-col>

          <v-col v-if="seccion.documentos.length === 0" cols="12">
            <div class="text-center py-8 border-dashed rounded-xl text-grey">
              No hay documentos disponibles en esta sección.
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { collection, doc, getDoc, getDocs, orderBy, query, type DocumentData } from 'firebase/firestore';

// 1. Tipado de Estructuras
interface Documento {
  id: string;
  nombre: string;
  descripcion: string;
  url: string;
  uid: number;
}

interface Seccion {
  id: string;
  subtitulo: string;
  descripcion?: string;
  documentos: Documento[];
  uid: number;
}

interface ModuloData {
  id?: string;
  descripcion: { valor: string }[];
  secciones: Seccion[];
}

const { $db } = useNuxtApp();
const loading = ref(true);

const dataModule = ref<ModuloData>({
  descripcion: [],
  secciones: []
});

const getMonitoreo = async () => {
  const moduleId = '7WAXa5VqudVEzPLsQseb';
  
  try {
    loading.value = true;
    const docRef = doc($db as any, 'modulos', moduleId);
    const snap = await getDoc(docRef);

    if (snap.exists()) {
      const baseData = snap.data();
      const seccionesFinales: Seccion[] = [];

      // Obtener Secciones
      const qSecciones = query(collection(docRef, 'secciones'), orderBy('uid', 'asc'));
      const snapSecciones = await getDocs(qSecciones);

      // Usamos for...of para asegurar que las llamadas asíncronas de documentos se completen
      for (const sDoc of snapSecciones.docs) {
        const sData = sDoc.data();
        
        // Obtener Documentos de cada sección
        const qDocs = query(collection(sDoc.ref, 'documentos'), orderBy('uid', 'asc'));
        const snapDocs = await getDocs(qDocs);
        
        const docsLista = snapDocs.docs.map(d => ({
          id: d.id,
          ...d.data()
        })) as Documento[];

        seccionesFinales.push({
          id: sDoc.id,
          subtitulo: sData.subtitulo,
          descripcion: sData.descripcion,
          documentos: docsLista,
          uid: sData.uid
        });
      }

      dataModule.value = {
        id: snap.id,
        descripcion: baseData.descripcion || [],
        secciones: seccionesFinales
      };
    }
  } catch (error) {
    console.error("Error al cargar monitoreo:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getMonitoreo();
});
</script>

<style scoped>
.min-height-vh {
  min-height: 75vh;
}

.max-width-800 {
  max-width: 800px;
}

.doc-card {
  border-width: 1.5px !important;
  transition: all 0.3s ease;
}

.border-cyan {
  border-color: #00838f !important; /* cyan-darken-3 */
}

.border-dashed {
  border: 2px dashed #e0e0e0;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.leading-tight {
  line-height: 1.3 !important;
}

.shadow-lg {
  box-shadow: 0 10px 30px rgba(0, 131, 143, 0.2) !important;
}
</style>