<template>
  <div  class="logos-full-width">
    <v-sheet 
      class="d-flex align-center justify-center logos-wrapper" 
      color="transparent"
      width="100%"
    >
      <v-row 
        justify="space-between" 
        align="center" 
        :class="smAndDown ? 'ga-2' : 'ga-16'"
        no-gutters
        class="ma-0 px-4 w-100"
      >
        <v-col 
          v-for="(i, index) in cc" 
          :key="index"
          cols="auto"
          class="d-flex justify-center align-center py-0" 
        >
          <v-tooltip location="bottom" :text="i.name">
            <template v-slot:activator="{ props }">
              <a 
                v-bind="props"
                :href="i.web" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="logo-link"
              >
                <v-img 
                  :width="smAndDown ? (Number(i.size) * 0.25) : (Number(i.size) - 10)" 
                  :src="`/img/${i.img}`" 
                  class="logo-img"
                  contain
                ></v-img>
              </a>
            </template>
          </v-tooltip>
        </v-col>
      </v-row>
    </v-sheet>
    <v-divider class="opacity-12" ></v-divider>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'

const { mobile, smAndDown } = useDisplay()

const cc = [
  { name: 'Auditoría Superior del Estado', img: 'ASEC.png', web: 'https://www.asecoahuila.gob.mx/', size: '160' },
  { name: 'Fiscalía Especializada', img: 'cc-fehc.png', web: 'https://sitio.fgecoahuila.gob.mx/', size: '140' },
  { name: 'SEFIRC', img: 'cc-sefirc.png', web: 'http://www.sefircoahuila.gob.mx/', size: '160' },
  { name: 'Poder Judicial', img: 'cc-pjecz.png', web: 'https://www.pjecz.gob.mx/', size: '190' },
  { name: 'Tribunal de Justicia Administrativa', img: 'cc-tjacz.png', web: 'http://www.tjacoahuila.org/', size: '135' },
  { name: 'CPC Coahuila', img: 'cpc-color.png', web: 'https://www.cpccoahuila.org.mx/', size: '116' },
  { name: 'SEAC', img: 'seac.png', web: '#', size: '108' }
];
</script>

<style lang="scss" scoped>
.logos-full-width {
  width: 100%;
  background-color: var(--v-theme-surface); /* Se adapta a tu modo claro/oscuro */
}

.logos-wrapper {
  min-height: 50px;
  transition: background-color 0.3s ease;
}

.logo-link {
  display: block;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  
  // Estado inicial: elegante y discreto
  filter: grayscale(0.4) opacity(0.5);
  mix-blend-mode: multiply; /* Esto ayuda a que el blanco del logo desaparezca si el fondo no es blanco puro */

  &:hover {
    filter: grayscale(0) opacity(1);
    transform: scale(1.1);
    mix-blend-mode: normal;
  }
}

.logo-img {
  // Asegura nitidez en monitores de alta resolución
  image-rendering: auto;
}

// En modo oscuro, ajustamos el blend mode para que no se vea el recuadro blanco
:deep(.v-theme--dark) {
  .logo-link {
    mix-blend-mode: screen; 
    filter: grayscale(1) invert(0.2) opacity(0.7);
    
    &:hover {
      filter: grayscale(0) invert(0) opacity(1);
    }
  }
}
</style>