<template>
  <v-container class="min-height-vh py-8">
    
    <v-row v-if="loading" justify="center" align="center" class="min-height-vh">
      <v-col cols="12" class="text-center">
        <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
        <div class="mt-4 text-h6 text-grey-darken-1">Cargando información oficial...</div>
      </v-col>
    </v-row>

    <v-row v-else-if="Data">
      <v-col cols="12">
        <div class="text-center mb-2">
          <h1 class="text-h4 text-md-h3 font-weight-bold text-grey-darken-3 mb-4 leading-tight">
            {{ Data.titulo }}
          </h1>
          
          <v-chip color="orange-darken-4" variant="tonal" class="font-weight-bold px-4">
            <v-icon start icon="mdi-calendar-clock" class="mr-2"></v-icon>
            Última Actualización: {{ Data.actualizacion }}
          </v-chip>

          <div class="text-justify mx-auto mt-6" style="max-width: 900px;">
            <p v-for="(e, i) in Data.descripcion" :key="i" class="mb-4 text-body-1 text-grey-darken-2">
              {{ e.valor }}
            </p>
          </div>
          
          <v-divider class="mt-8 border-opacity-25"></v-divider>
        </div>
      </v-col>

      <v-col cols="12" class="mb-6">
        <v-card v-if="parametro === '21-13'" variant="outlined" color="primary" class="rounded-xl overflow-hidden">
          <v-card-title class="text-center py-4 bg-primary text-white">
            Registro y Solicitud de Acceso
          </v-card-title>
          <div class="video-container">
            <iframe width="100%" height="450" src="https://www.youtube.com/embed/fKOZ6Ep1Z2w" frameborder="0" allowfullscreen></iframe>
          </div>
        </v-card>

        <v-card v-if="parametro === '21-22'" variant="outlined" color="teal" class="rounded-xl overflow-hidden">
          <v-card-title class="text-center py-4 bg-teal text-white">
            Ubicación de la Unidad de Transparencia
          </v-card-title>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1151.810!" width="100%" height="450" style="border:0;" allowfullscreen loading="lazy"></iframe>
        </v-card>
      </v-col>

      <v-col cols="12">
        
        <template v-if="parametro !== '21-21'">
          <v-card 
            v-for="(e, i) in Data.secciones" :key="i"
            elevation="0" 
            class="mb-6 rounded-lg border"
            variant="flat"
          >
            <div class="bg-grey-lighten-4 pa-4 border-bottom">
              <h2 class="text-h5 font-weight-bold text-blue-grey-darken-3 text-center">
                {{ e.subtitulo }}
              </h2>
              <p v-if="e.descripcion" class="text-center text-body-2 text-grey-darken-1 mt-1 font-italic">
                {{ e.descripcion }}
              </p>
            </div>

            <v-card-text class="pa-4">
              <v-list density="comfortable" class="bg-transparent pa-0">
                <div v-for="(doc, j) in e.documentos" :key="j" class="mb-3">
                  <div v-if="doc.descripcion" class="text-caption font-weight-black text-teal-darken-2 mb-1 ml-4 d-flex align-center">
                    <v-icon size="14" class="mr-1">mdi-information-outline</v-icon>
                    {{ doc.descripcion.toUpperCase() }}
                  </div>
                  <v-list-item :href="doc.url" target="_blank" rounded="md" class="border mb-1 hover-shadow transition-all" link>
                    <template v-slot:prepend>
                      <v-avatar size="32" color="">
                        <v-icon color="teal-darken-2" size="20">mdi-folder-file-outline</v-icon>
                      </v-avatar>
                    </template>
                    <v-list-item-title class="text-body-2 text-wrap font-weight-medium">
                      {{ doc.nombre }}
                    </v-list-item-title>
                    <template v-slot:append>
                      <v-icon size="small" color="grey-lighten-1">mdi-download</v-icon>
                    </template>
                  </v-list-item>
                </div>
              </v-list>
            </v-card-text>
          </v-card>
        </template>

        <v-expansion-panels v-else variant="inset" class="mb-6">
          <v-expansion-panel v-for="(e, i) in Data.secciones" :key="i" elevation="1" class="mb-2 border rounded-lg">
            <v-expansion-panel-title class="text-h6 font-weight-medium text-blue-grey-darken-3">
              {{ e.subtitulo }}
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div v-if="e.descripcion" class="text-body-2 text-grey mb-4 border-s-lg border-primary pa-2 ml-2">
                {{ e.descripcion }}
              </div>
              <v-list density="comfortable" class="bg-transparent pa-0">
                <div v-for="(doc, j) in e.documentos" :key="j" class="mb-3">
                  <div v-if="doc.descripcion" class="text-caption font-weight-black text-teal-darken-2 mb-1 ml-4 d-flex align-center">
                    <v-icon size="14" class="mr-1">mdi-information-outline</v-icon>
                    {{ doc.descripcion.toUpperCase() }}
                  </div>
                  <v-list-item :href="doc.url" target="_blank" rounded="md" class="border mb-1 hover-shadow transition-all" link>
                    <template v-slot:prepend>
                      <v-icon color="red-darken-2">mdi-file-pdf-box</v-icon>
                    </template>
                    <v-list-item-title class="text-body-2 text-wrap">{{ doc.nombre }}</v-list-item-title>
                  </v-list-item>
                </div>
              </v-list>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>

      <v-col cols="12" class="mt-8">
        <v-alert variant="tonal" color="blue-grey" rounded="lg" border="start" class="text-center">
          <template v-slot:prepend>
            <v-icon size="large">mdi-account-tie</v-icon>
          </template>
          <div class="text-subtitle-1">
            <strong>Responsable de la información:</strong> 
            {{ Data.encargado.nombre }}
          </div>
          <div class="text-caption text-uppercase letter-spacing-1">
            {{ Data.encargado.cargo }}
          </div>
        </v-alert>
      </v-col>
    </v-row>
    
    <v-row v-else>
       <v-col class="text-center mt-10">
          <v-icon size="80" color="grey-lighten-1">mdi-folder-alert-outline</v-icon>
          <h3 class="text-h5 text-grey mt-4">No se encontró información para este módulo.</h3>
       </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { collection, query, where, getDocs, orderBy, getDoc, doc } from 'firebase/firestore'; 

const { $db } = useNuxtApp();
const route = useRoute();

const loading = ref(true);
const Data = ref(null);
const parametro = route.params.id; 

const moduloByFraccion = async (articulo) => {
  loading.value = true;
  try {
    if (!articulo) return;
    const [art, fra] = articulo.split('-');
    
    const q = query(collection($db, 'modulos'), where('articulo', '==', art), where('fraccion', '==', fra.toString()));
    const modsSnapshot = await getDocs(q);

    if (modsSnapshot.empty) {
      Data.value = null;
      return;
    }

    const moduloDoc = modsSnapshot.docs[0];
    const moduloData = { id: moduloDoc.id, ...moduloDoc.data() };

    // Secciones
    const qSecciones = query(collection($db, `modulos/${moduloDoc.id}/secciones`), orderBy('uid', 'asc'));
    const seccionesSnapshot = await getDocs(qSecciones);

    const seccionesFinales = [];
    for (const secDoc of seccionesSnapshot.docs) {
      const qDocs = query(collection($db, `modulos/${moduloDoc.id}/secciones/${secDoc.id}/documentos`), orderBy('uid', 'asc'));
      const docsSnap = await getDocs(qDocs);
      seccionesFinales.push({
        id: secDoc.id,
        ...secDoc.data(),
        documentos: docsSnap.docs.map(d => ({ id: d.id, ...d.data() }))
      });
    }

    // Encargado
    let encNombre = '', encCargo = '';
    if (moduloData.encargado) {
      const dptoSnap = await getDoc(doc($db, 'departamentos', moduloData.encargado));
      if (dptoSnap.exists()) {
        const userSnap = await getDoc(doc($db, 'usuarios', dptoSnap.data().titular));
        if (userSnap.exists()) {
          encNombre = userSnap.data().nombre;
          encCargo = userSnap.data().cargo + ' de ' + dptoSnap.data().nombre;
        }
      }
    }

    Data.value = {
      ...moduloData,
      encargado: { nombre: encNombre, cargo: encCargo },
      secciones: seccionesFinales
    };

  } catch (error) {
    console.error('Error:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  moduloByFraccion(parametro);
});
</script>

<style scoped>
.min-height-vh { min-height: 70vh; }
.border-bottom { border-bottom: 1px solid rgba(0, 0, 0, 0.05); }
.hover-shadow:hover {
  background-color: #f8f9fa;
  transform: translateX(4px);
  border-color: #1976d2 !important;
}
.transition-all { transition: all 0.2s ease-in-out; }
.video-container { aspect-ratio: 16 / 9; }
</style>