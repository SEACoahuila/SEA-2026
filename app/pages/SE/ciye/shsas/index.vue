<template>
  <v-container class="py-10">
    <v-row justify="center" class="mb-6">
      <TitlePages :color="page.color" :title="page.title" :icon="page.icon" />
      
      <v-col cols="12">
        <v-card variant="flat" class="rounded-xl bg-grey-lighten-4 pa-6 text-center">
          <h2 class="text-h5 font-weight-bold text-blue-grey-darken-4 mb-4">
            ¿Qué es el Subcomité de Hostigamiento y Acoso Sexual?
          </h2>
          <p class="text-body-1 text-grey-darken-2 leading-relaxed">
            Este Subcomité atiende denuncias de hostigamiento y acoso sexual. 
            Brinda atención inicial, verifica requisitos, integra expedientes y los turna a la autoridad competente, 
            asegurando el seguimiento institucional y la protección de las víctimas.
          </p>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center">
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
                <div class="d-flex flex-column flex-sm-row align-sm-center justify-space-between gap-3">
                  <h3 class="text-subtitle-1 font-weight-bold text-blue-grey-darken-4 pr-4">
                    {{ item.titulo }}
                  </h3>
                  
                  <v-btn
                    v-if="item.to"
                    :color="item.color"
                    variant="tonal"
                    size="small"
                    class="rounded-pill text-none px-4"
                    :href="item.to"
                    target="_blank"
                    prepend-icon="mdi-eye-outline"
                  >
                    Ver Documento
                  </v-btn>
                </div>
              </v-card-item>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-8">
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

<script setup lang="ts">
import { ref } from 'vue';
import { useDisplay } from 'vuetify';

const { mobile } = useDisplay();

const page = ref({
  color: '#77825e',
  title: 'Hostigamiento y Acoso (SHSAS)',
  icon: 'mdi-account-group',
});

const items = ref([
  {
    color: '#58609F',
    titulo: 'Directorio del Subcomité',
    to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2F08%20Directorio%20del%20Subcomit%C3%A9%20de%20Hostigamiento%20Sexual%20y%20Acoso%20Sexual..pdf?alt=media&token=40aa3d58-eaa8-4c44-bf07-eac1797e8392",
    icon: 'mdi-card-account-details-outline',
  },
  {
    color: '#58609F',
    titulo: 'Vías para presentar la denuncia (Anexo 1)',
    to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2F09%20Anexo%201%2C%20V%C3%ADas%20para%20presentar%20la%20denuncia%20v%C3%ADa%20administrativa..jpeg?alt=media&token=63ef9777-ddbc-4a07-a1ea-7f47dc780484",
    icon: 'mdi-map-marker-path',
  },
  {
    color: '#58609F',
    titulo: 'Ruta de atención administrativa (Anexo 2)',
    to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2F10%20Anexo%202.%20Ruta%20para%20la%20atenci%C3%B3n%20del%20hostigamiento%20sexual%20y%20acoso%20sexual%20en%20la%20v%C3%ADa%20administrativa%2C.jpeg?alt=media&token=58fc9b49-46cd-4518-92d8-e61b07ce7fb5",
    icon: 'mdi-shuffle-variant',
  },
  {
    color: '#58609F',
    titulo: 'Formato de Denuncia (Anexo 5)',
    to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2FAnexo%205%20Formato%20de%20denuncia.pdf?alt=media&token=ab161643-037e-4a88-a1fc-3dc1fb88d8ae",
    icon: 'mdi-file-edit-outline',
  },
  {
    color: '#D81B60',
    titulo: 'Pronunciamiento Cero Tolerancia',
    to: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FkyYlvOBrjgH7F3p5TbcE%2FPronunciamiento%20Cero%20Tolerancia%20al%20HAS.pdf?alt=media&token=06d2e345-7656-4318-a684-71f58c935232',
    icon: 'mdi-shield-check-outline',
  },
]);
</script>

<style scoped>
.leading-relaxed {
  line-height: 1.6 !important;
}

.shadow-sm {
  box-shadow: 0 2px 10px rgba(0,0,0,0.04) !important;
}

.gap-3 {
  gap: 12px;
}

:deep(.v-timeline-divider__line) {
  background: #e0e0e0 !important;
}
</style>