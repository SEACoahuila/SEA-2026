import { useDisplay } from 'vuetify';
<template>
  <v-container class="py-10">
    <v-row justify="center" class="mb-6">
      <TitlePages :color="page.color" :title="page.title" :icon="page.icon" />
      
      <v-col cols="12">
        <v-card variant="flat" class="rounded-xl bg-grey-lighten-4 pa-6 text-center">
          <h2 class="text-h5 font-weight-bold text-blue-grey-darken-4 mb-4">
            ¿Qué es la Unidad Especializada de Control Interno?
          </h2>
          <p class="text-body-1 text-grey-darken-2 leading-relaxed">
            La <strong>UECI</strong> coordina el sistema de control interno de la institución. 
            Se encarga de definir la base documental, evaluar riesgos y verificar el cumplimiento normativo 
            para asegurar la transparencia institucional.
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
            <v-card variant="outlined" class="rounded-lg border-thin mb-4 shadow-sm bg-white" >
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
                    class="rounded-pill text-none px-4"
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

import { useDisplay } from 'vuetify'

const { mobile} = useDisplay();



const page = ref({
  color: '#77825e',
  title: 'Unidad Especializada de Control Interno',
  icon: 'mdi-order-bool-ascending-variant',
});

const items = ref([
  {
    color: '#58609F',
    titulo: 'Carta compromiso',
    to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2F01%20Carta%20Compromiso.pdf?alt=media&token=c8631a77-f240-4056-ae86-9799c52dad5d",
    icon: 'mdi-file-certificate-outline',
  },
  {
    color: '#58609F',
    titulo: 'Integrantes de la UECI',
    to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2F02%20Integrantes%20de%20la%20Unidad%20Especializada%20de%20Control%20Interno.pdf?alt=media&token=42e7852d-cbf9-45fc-9dee-eff9261aef36",
    icon: 'mdi-account-group-outline',
  },
  {
    color: '#58609F',
    titulo: 'Integrantes del COCODI',
    to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2F03%20Integrantes%20del%20Comit%C3%A9%20de%20Control%20y%20Desempe%C3%B1o%20Institucional.%20(COCODI)..pdf?alt=media&token=03d0cf2f-44de-4b2a-97eb-1a882b08b2a9",
    icon: 'mdi-account-badge-outline',
  },
  {
    color: '#58609F',
    titulo: 'Anexo 3 F-DAD-065 Programa anual de trabajo PTCI',
    to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2FAnexo%203%20F-DAD-065%20Programa%20anual%20de%20trabajo%20de%20control%20interno%20PTCI.pdf?alt=media&token=91498b5d-1fed-475e-b1d7-ed73648999b5",
    icon: 'mdi-calendar-check-outline',
  },
]);
</script>

<style scoped>
.leading-relaxed {
  line-height: 1.6 !important;
}

.shadow-sm {
  box-shadow: 0 2px 8px rgba(0,0,0,0.05) !important;
}

/* Ajuste para que la línea de la línea de tiempo sea más discreta */
:deep(.v-timeline-divider__line) {
  background: #e0e0e0 !important;
}
</style>