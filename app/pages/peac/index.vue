<template>
  <v-container fluid class="" ">

    
    <v-container class="">
      <v-row >
        <TitlePages :botones=botones color="#8c323f" title="Política Estatal Anticorrupción"
        icon="mdi-book-open-page-variant-outline" />
      <v-cols cols="12">

      </v-cols>
          <v-card variant="text">
            <v-container>
              <v-row justify="center" align="center" class="py-2">
    
                <v-col cols="12" lg="10">
                  <v-card class="pa-0 mb-8 rounded-xl overflow-hidden border" variant="flat" color="white">
                    <v-row no-gutters align="stretch">
    
                      <v-col cols="12" lg="6" class="pa-8 pa-md-12 d-flex flex-column justify-center">
                        <div class="mb-2">
                          <span class="text-overline font-weight-bold text-grey-darken-1 tracking-widest">PUBLICACIÓN
                            OFICIAL</span>
                        </div>
    
                        <h2 class="text-h3 font-weight-bold mb-4 text-blue-grey-darken-4 leading-tight">
                          {{ btnitem.title }}
                        </h2>
    
                        <p class="text-body-1 text-grey-darken-2 mb-8 leading-relaxed text-justify">
                          {{ btnitem.desc }}
                        </p>
    
                        <v-divider class="mb-8"></v-divider>
    
                        <div class="d-flex flex-wrap gap-4">
                          <v-btn variant="flat" class="text-none px-6 rounded-lg border neutral-btn mr-4"
                            href="/secretaria-ejecutiva/publicaciones/peac.pdf" target="_blank">
                            <div class="d-flex flex-column align-start">
                              <span class="text-subtitle-2 font-weight-bold text-grey-darken-4">Descargar PEAC</span>
                            </div>
                          </v-btn>
    
                          <v-btn variant="flat" class="text-none px-6 rounded-lg border neutral-btn"
                            href="/secretaria-ejecutiva/publicaciones/peac-anexos.pdf" target="_blank">
                            <div class="d-flex flex-column align-start">
                              <span class="text-subtitle-2 font-weight-bold text-grey-darken-4">Ver Anexos</span>
                            </div>
                          </v-btn>
                        </div>
                      </v-col>
    
                      <v-col cols="12" lg="6" class="bg-grey-lighten-5">
                        <nuxt-link to="#" class="text-decoration-none">
                          <v-hover v-slot="{ isHovering, props }">
                            <v-card v-bind="props" flat class="rounded-0 h-100 overflow-hidden">
                              <v-img
                                :src="isHovering ? ('/img/botonera/' + btnitem.src2) : ('/img/botonera/' + btnitem.src1)"
                                cover height="100%" class="transition-image">
                                <div class="fill-height transition-all"
                                  :style="isHovering ? 'background: rgba(0,0,0,0.05)' : 'background: transparent'"></div>
                              </v-img>
                            </v-card>
                          </v-hover>
                        </nuxt-link>
                      </v-col>
    
                    </v-row>
                  </v-card>
                </v-col>
    
              </v-row>
            </v-container>
          </v-card>
          <v-row class="mt-12">
            <v-col cols="12">
              <div class="d-flex align-center mb-6">
                <h3 class="text-h5 font-weight-bold">Recursos de Consulta</h3>
                <v-spacer></v-spacer>
                <v-icon color="grey">mdi-view-grid-outline</v-icon>
              </div>
            </v-col>
    
    
            <v-col v-for="(e, i) in todosLosSecundarios" :key="i" cols="12" sm="6" md="3">
              <v-card :href="e.to || ('/peac/' + e.doc)" target="_blank"
                class="pa-4 rounded-xl text-center bento-item h-100" elevation="2" border hover>
                <v-avatar size="70" color="grey-lighten-4" class="mb-4">
                  <v-img :src="('/peac/icons/' + e.icon)" cover></v-img>
                </v-avatar>
                <div class="text-body-2 font-weight-bold text-blue-grey-darken-3 leading-tight">
                  {{ e.titulo }}
                </div>
              </v-card>
            </v-col>
          </v-row>
    
          <v-card class="mt-12 mb-12 rounded-xl border-0 overflow-hidden" elevation="10">
            <v-row no-gutters>
              <v-col cols="12" md="4"
                class="bg-pink-darken-4 pa-2 d-flex flex-column justify-center text-white text-center">
                <h3 class="text-h4 font-weight-black">Indicadores</h3>
                <p class="text-subtitle-2 opacity-80">de seguimiento</p>
              </v-col>
    
              <v-col cols="12" md="8" class="pa-6 bg-white">
                <div v-if="seccionInd[0].indicadores.length > 0" class="d-flex flex-wrap gap-2">
                  <v-btn v-for="(ind, index) in seccionInd[0].indicadores" :key="index" :href="ind.link" variant="tonal"
                    color="blue-grey-darken-3" class="ma-1 text-none font-weight-bold" rounded="pill"
                    prepend-icon="mdi-link-variant">
                    {{ ind.nombre }}
                  </v-btn>
                </div>
                <v-alert v-else type="info" variant="tonal" text="Cargando indicadores desde el sistema..."></v-alert>
              </v-col>
            </v-row>
          </v-card>
    
        </v-row>
        </v-container>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';

// Acceso al plugin de Firebase
const { $db } = useNuxtApp();

// DATA ESTÁTICA
const botones = [
  { titulo: 'Resumen', icon: 'resumen.png', doc: 'peac/Resumen ejecutivo.pdf' },
  { titulo: 'PEAC Completa', icon: 'descarga-peac.png', doc: 'peac/peac.pdf' },
  { titulo: 'Metodología', icon: 'Metodologia.png', doc: 'peac/metodologia.pdf' },
  { titulo: 'Datos Abiertos', icon: 'datos.png', doc: 'peac/datosPeac.xlsx' },
];

const btnitem = {
  desc: 'La Política Estatal Anticorrupción (PEAC) es el documento rector que guiará los esfuerzos de las instituciones públicas y ciudadanas en materia de prevención, control y combate de los hechos de corrupción. Los insumos con los que se construyó surgen de mecanismos de participación ciudadana, de análisis académico y de alineación con la Política Nacional Anticorrupción (PNA).',
  src1: 'peac1.jpg',
  src2: 'peac2.jpg',
};

const botonesSec = [
  { titulo: 'Política Nacional', icon: 'PNA.png', to: 'https://www.sesna.gob.mx/wp-content/uploads/2020/02/Pol%C3%ADtica-Nacional-Anticorrupci%C3%B3n.pdf' },
  { titulo: 'Fichero de Corrupción', icon: 'IA.png', doc: 'Fichero.pdf' },
  { titulo: 'Implementación', icon: 'proceso-de-implementacion.png', doc: 'implementacion.pdf' },
  { titulo: 'Indicadores de Inicio', icon: 'indicadores.png', to: 'https://n9.cl/6sgdrm' },
];

const botonesSec2 = [
  { titulo: 'Percepción Social', icon: 'ipc.png', to: 'https://www.seacoahuila.org.mx/peac/metodologia-pipeac' },
  { titulo: 'Metodología PIPEAC', icon: 'metodologia_pipeac.png', to: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/...etc' },
];

const todosLosSecundarios = computed(() => [...botonesSec, ...botonesSec2]);

// DATA DINÁMICA (Firebase)
const seccionInd = ref([{ indicadores: [] }]);

const cargarBotones = async () => {
  try {
    const q = query(
      collection($db, "modulos/7eAirGn2xkIvvwwopLTd/secciones/6pXuXnJjdvc8hotEWDKS/documentos"),
      orderBy("uid", "desc")
    );
    const querySnapshot = await getDocs(q);
    seccionInd.value[0].indicadores = querySnapshot.docs.map(doc => ({
      nombre: doc.data().nombre,
      link: doc.data().url
    }));
  } catch (error) {
    console.error("Error cargando indicadores:", error);
  }
};

onMounted(() => {
  cargarBotones();
});
</script>

<style scoped>
/* Efecto de elevación al pasar el mouse en las tarjetas tipo Bento */
.bento-item {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.bento-item:hover {
  transform: translateY(-8px);
  background-color: #ECEFF1;
  border-color: #FFAB00 !important;
}

/* Espaciado de chips */
.gap-2 {
  gap: 8px;
}

/* Tracking de texto */
.tracking-widest {
  letter-spacing: 0.15em;
}
</style>