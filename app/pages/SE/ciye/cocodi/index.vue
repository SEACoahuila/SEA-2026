<template>
  <v-container class="py-10">
    <v-row justify="center" class="mb-6">
      <TitlePages :color="page.color" :title="page.title" :icon="page.icon" />
      
      <v-col cols="12">
        <v-card variant="flat" class="rounded-xl bg-grey-lighten-4 pa-6 text-center">
          <h2 class="text-h5 font-weight-bold text-blue-grey-darken-4 mb-4">
            ¿Qué es el Control y Desempeño Institucional (COCODI)?
          </h2>
          <p class="text-body-1 text-grey-darken-2 leading-relaxed">
            El <strong>COCODI</strong> evalúa el desempeño institucional para apoyar la toma de decisiones estratégicas. 
            Supervisa el avance de objetivos, revisa auditorías, valida la cuenta pública y da seguimiento al programa de ética.
          </p>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center" v-if="items.length > 0">
      <v-col cols="12" md="10" lg="8">
        <v-timeline align="start" :side="mobile ? 'end' : undefined" line-color="grey-lighten-3">
          <v-timeline-item
            v-for="(item, i) in items"
            :key="i"
            :dot-color="item.color"
            :icon="item.icon"
            size="large"
          >
            <v-card variant="outlined" class="rounded-lg border-thin mb-4 shadow-sm bg-white">
              <v-card-item>
                <v-col class="align-center justify-space-between">
                  <h3 class="text-subtitle-1 font-weight-bold text-blue-grey-darken-4 pr-4">
                    {{ item.titulo }}
                  </h3>
                  <v-btn
                    v-if="item.to"
                    :color="item.color"
                    variant="tonal"
                    size="small"
                    class="rounded-pill text-none px-4 mt-2"
                    :href="item.to"
                    target="_blank"
                    prepend-icon="mdi-eye-outline"
                  >
                    Ver
                  </v-btn>
                </v-col>
              </v-card-item>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-10">
      <v-col cols="12" md="10">
        <v-card variant="flat" border="thin" class="rounded-xl pa-8 bg-white shadow-sm">
          <div class="d-flex align-center justify-center mb-8">
            <v-icon color="blue-grey-darken-3" size="32" class="me-3">mdi-folder-text-outline</v-icon>
            <h2 class="text-h4 font-weight-black text-blue-grey-darken-4">Actas de Sesión</h2>
          </div>

          <v-row v-for="(seccion, index) in seccionActas" :key="index" class="mb-6">
            <v-col cols="12">
              <div class="d-flex align-center mb-4">
                <span class="text-h5 font-weight-bold text-grey-darken-3 me-4">{{ seccion.titulo }}</span>
                <v-divider></v-divider>
              </div>
              
              <div class="d-flex flex-wrap gap-4 justify-center">
                <v-btn
                  v-for="(acta, aIdx) in seccion.actas"
                  :key="aIdx"
                  :href="acta.link"
                  target="_blank"
                  variant="outlined"
                  color="blue-grey-darken-2"
                  class="ma-2 rounded-lg text-none"
                  prepend-icon="mdi-file-pdf-box"
                  min-width="200"
                >
                  {{ acta.nombre }}
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-12">
      <v-btn 
        color="blue-grey-darken-3" 
        variant="text" 
        to="/SE/ciye" 
        prepend-icon="mdi-arrow-left"
        class="text-none"
      >
        Regresar a Control Interno
      </v-btn>
    </v-row>
  </v-container>
</template>

<script setup >
import { ref } from 'vue';
import { useDisplay } from 'vuetify';

const { mobile } = useDisplay();

const page = ref({
  color: '#77825e',
  title: 'COCODI',
  icon: 'mdi-sort-bool-descending-variant',
});

// Lista vacía por ahora, lista para recibir datos
const items = ref([]);

const seccionActas = ref([
  {
    titulo: '2025',
    actas: [
      {
        nombre: 'Sesión de Instalación',
        link: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2FSesi%C3%B3n%20de%20instalaci%C3%B3n%20del%20COCODI.pdf?alt=media&token=e23460f0-5f6c-4a6e-b5c0-e7425c5bbd93',
      },
      {
        nombre: 'Primera Sesión',
        link: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2FPrimera%20Sesi%C3%B3n%20ordinaria%20COCODI.pdf?alt=media&token=de83f40c-4abe-48f4-871a-8c06702d4712',
      },
    ]
  },
]);
</script>

<style scoped>
.leading-relaxed {
  line-height: 1.6 !important;
}

.shadow-sm {
  box-shadow: 0 4px 20px rgba(0,0,0,0.03) !important;
}

.gap-4 {
  gap: 16px;
}

:deep(.v-timeline-divider__line) {
  background: #e0e0e0 !important;
}
</style>