<template>
  <v-container class="py-10">
    <v-row justify="center" class="mb-6">
      <TitlePages :color="page.color" :title="page.title" :icon="page.icon" />
      
      <v-col cols="12">
        <v-card variant="flat" class="rounded-xl bg-grey-lighten-4 pa-6 text-center">
          <h2 class="text-h5 font-weight-bold text-blue-grey-darken-4 mb-4">
            ¿Qué es el Comité de Ética?
          </h2>
          <p class="text-body-1 text-grey-darken-2 leading-relaxed">
            El <strong>CE</strong> promueve la cultura de integridad en la institución. 
            Difunde valores, vigila la conducta del personal, previene prácticas no éticas, 
            actualiza el Código de Conducta y reporta faltas a la OIC.
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
                  <div>
                    <h3 class="text-subtitle-1 font-weight-bold text-blue-grey-darken-4 pr-4">
                      {{ item.titulo }}
                    </h3>
                    <p v-if="item.texto" class="text-body-2 font-weight-black text-primary mt-1">
                      {{ item.texto }}
                    </p>
                  </div>
                  
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
  title: 'Comité de Ética',
  icon: 'mdi-scale-balance',
});

const items = ref([
  {
    color: '#58609F',
    titulo: 'Código de Ética',
    to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2F04%20C%C3%B3digo%20de%20%C3%A9tica%20Coahuila.pdf?alt=media&token=936958fc-9398-4157-8088-dbca156957e6",
    icon: 'mdi-gavel',
  },
  {
    color: '#58609F',
    titulo: 'Integrantes del Comité de Ética',
    to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2F05%20Integrantes%20del%20Comit%C3%A9%20de%20%C3%A9tica.pdf?alt=media&token=b7a9b3f0-6520-4470-af8b-4e0431262fb1",
    icon: 'mdi-account-group-outline',
  },
  {
    color: '#58609F',
    titulo: 'Manual de Procedimientos del CE',
    to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2F06%20Manual%20de%20procedimientos%20para%20la%20operaci%C3%B3n%20del%20comit%C3%A9%20de%20%C3%A9tica.pdf?alt=media&token=82c0caa9-2e15-4e46-b80d-f1d98a630214",
    icon: 'mdi-book-strategy',
  },
  {
    color: '#58609F',
    titulo: 'Formato de Denuncia Ética',
    to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2F07%20Formato%20de%20denuncia%20%C3%A9tica.pdf?alt=media&token=e167b953-4c5e-4434-b217-4d21d7e24f94",
    icon: 'mdi-alert-octagon-outline',
  },
  {
    color: '#58609F',
    titulo: 'Anexo 14: Formato de Dudas',
    to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2FANEXO%2014%20FORMATO%20DE%20PRESENTACI%C3%93N%20DE%20UNA%20DUDA.pdf?alt=media&token=f0939e9b-7fec-46eb-83e4-7345555f39a7",
    icon: 'mdi-help-circle-outline',
  },
  {
    color: '#58609F',
    titulo: 'Anexo 7: Conflicto de Intereses',
    to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FLbcD28hIEDbb8BJ83Ndm%2FANEXO%207%20CONFLICTO%20DE%20INTERES%20F-016.pdf?alt=media&token=62b2c0f6-3168-46b8-8074-dbe1de9bc780",
    icon: 'mdi-handshake-outline',
  },
  {
    color: '#77825e',
    titulo: 'Correo para Denuncias Éticas',
    texto: 'comite.etica@seacoahuila.org.mx',
    icon: 'mdi-email-seal-outline',
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