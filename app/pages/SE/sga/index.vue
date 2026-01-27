<template>
  <v-container class="py-10">
    <v-row justify="center" class="mb-6">
      <TitlePages :color="page.color" :title="page.title" :icon="page.icon" />
      
      <v-col cols="12">
        <v-card variant="flat" class="rounded-xl bg-grey-lighten-4 pa-8 text-center">
          <p class="text-body-1 text-grey-darken-2 leading-relaxed max-width-800 mx-auto">
            El Sistema de Gestión Antisoborno (SGA) de la <strong>SESAEC</strong>, bajo normativa ISO, establece estándares rigurosos para la prevención y respuesta a actos ilícitos, proporcionando canales seguros y confidenciales para la denuncia.
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
                <h3 class="text-h6 font-weight-bold text-blue-grey-darken-4 mb-2">
                  {{ item.titulo }}
                </h3>
                <p class="text-body-2 text-grey-darken-1 mb-4 text-justify">
                  {{ item.texto }}
                </p>
                <div class="d-flex flex-wrap gap-2">
                  <v-btn
                    v-if="item.to || item.doc"
                    :color="item.color"
                    variant="tonal"
                    size="small"
                    class="rounded-pill text-none"
                    :href="item.to || item.doc"
                    target="_blank"
                  >
                    {{ item.nombre }}
                  </v-btn>
                  <v-btn
                    v-if="item.to2"
                    variant="outlined"
                    :color="item.color"
                    size="small"
                    class="rounded-pill text-none"
                    :href="item.to2"
                    target="_blank"
                  >
                    {{ item.nombre2 }}
                  </v-btn>
                </div>
              </v-card-item>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>

    <v-row class="mt-12">
      <v-col cols="12" class="text-center mb-6">
        <h3 class="text-h5 font-weight-light text-blue-grey-darken-2">Material Informativo SGA</h3>
        <v-divider class="mx-auto mt-2" width="50"></v-divider>
      </v-col>
      
      <v-col v-for="(img, i) in imgs" :key="i" cols="12" sm="4" md="3">
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            v-bind="props"
            :elevation="isHovering ? 8 : 1"
            class="rounded-lg transition-all cursor-pointer overflow-hidden border"
            @click="abrirImagen(img.src)"
          >
            <v-img
              :src="img.src"
              height="180"
              cover
              class="align-center justify-center text-white"
            >
              <v-expand-transition>
                <div
                  v-if="isHovering"
                  class="d-flex transition-fast-in-fast-out bg-blue-grey-darken-4 v-card--reveal text-body-2"
                  style="height: 100%; opacity: 0.8;"
                >
                  <v-icon class="me-2">mdi-magnify-plus</v-icon> Click para ver
                </div>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useDisplay } from 'vuetify';

const { mobile } = useDisplay();

const page = ref({
  color: '#D9AB2A',
  title: 'Gestión Antisoborno',
  icon: 'mdi-shield-check-outline',
});

const items = ref([
  {
    color: '#795A2F',
    titulo: 'Capacitación SGA',
    nombre: 'Ver Material',
    texto: 'Conceptos fundamentales para el cumplimiento de los requisitos del Sistema de Gestión Antisoborno.',
    doc: 'https://ejemplo.com/material.pdf',
    icon: 'mdi-book-open-variant',
  },
  {
    color: '#58609F',
    titulo: 'Denuncia Antisoborno',
    nombre: 'Formulario en línea',
    texto: 'Canal seguro y confidencial para informar cualquier conducta sospechosa o irregular.',
    to: "https://forms.gle/17YLoEMcogwKdhKg8",
    icon: 'mdi-form-select',
  },
  {
    color: '#CB9C2A',
    titulo: 'Políticas del Sistema',
    nombre: 'Política Antisoborno',
    nombre2: 'Política de Regalos',
    texto: 'Lineamientos oficiales para la transparencia y beneficios institucionales.',
    to: "https://firebasestorage.googleapis.com/.../politica1.pdf",
    to2: "https://firebasestorage.googleapis.com/.../politica2.pdf",
    icon: 'mdi-file-certificate-outline',
  },
]);

const imgs = ref([
  { src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FNGAsciavAJMXL4mLTlHu%2F2.png?alt=media&token=96b78c9b-cd55-44ba-b515-61af82f9fe51" },
  { src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FNGAsciavAJMXL4mLTlHu%2F5.png?alt=media&token=ee2235e4-c661-44fd-95ba-5a4c08d0b7e1" },
  { src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FNGAsciavAJMXL4mLTlHu%2F13.png?alt=media&token=da5c2fda-4028-444a-9176-d79bec740a76" },
  { src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FNGAsciavAJMXL4mLTlHu%2F14.png?alt=media&token=b16926e0-d91c-4236-bb94-cdac5477c32e" },
  { src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FNGAsciavAJMXL4mLTlHu%2F15.png?alt=media&token=7870dffc-5a5f-4258-9ec4-bebd61a3304f" },
  { src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FNGAsciavAJMXL4mLTlHu%2F16.png?alt=media&token=f946eae5-314b-47a4-89a6-2905959d8a08" },
]);

const abrirImagen = (url: string) => {
  window.open(url, '_blank');
};
</script>

<style scoped>
.max-width-800 {
  max-width: 800px;
}
.transition-all {
  transition: all 0.3s ease;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
}
.gap-2 {
  gap: 8px;
}
.cursor-pointer {
  cursor: pointer;
}
</style>