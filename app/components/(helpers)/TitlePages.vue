<template>
  <v-col cols="12">
    
    <v-card 
      class="rounded-xl overflow-hidden position-relative mb-n4" 
      elevation="6" 
      border
      style="z-index: 1;"
    >
      <div 
        class="watermark-icon"
        :style="{ color: color }"
      >
        <v-icon :icon="icon" size="300"></v-icon>
      </div>

      <div 
        class="sidebar-accent" 
        :style="{ backgroundColor: color }"
      ></div>

      <v-container fluid class="pa-0 relative-z">
        <v-row no-gutters>
          <v-col cols="12" class="pa-6 d-flex align-center">
            
            <v-sheet 
              :color="color" 
              class="d-flex align-center justify-center rounded-lg mr-6 elevation-4 flex-shrink-0"
              height="72"
              width="72"
            >
              <v-icon :icon="icon" color="white" size="36"></v-icon>
            </v-sheet>

            <div>
              <div 
                class="text-overline mb-0 font-weight-bold" 
                style="letter-spacing: 2px !important;"
                :style="{ color: color }"
              >
                {{ subTitle }}
              </div>
              <h2 class="text-h5 text-md-h4 font-weight-black text-uppercase text-blue-grey-darken-4 mt-n1 line-height-tight">
                {{ title }}
              </h2>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <v-col v-if="botones" cols="12" class="d-flex justify-center justify-md-end position-relative" style="z-index: 2; margin-top: -20px;">
      <v-card 
        variant="flat" 
        color="blue-grey-darken-4" 
        elevation="8"
        class="rounded-xl pa-1 d-flex flex-column flex-md-row align-stretch align-md-center w-100 w-md-auto items-center border-white"
        style="border: 2px solid white;"
      >
        <v-btn 
          v-for="(e, i) in botones" 
          :key="i" 
          :href="e.doc" 
          variant="text" 
          density="comfortable"
          class="text-none text-caption text-white px-4 my-1 my-md-0 mx-md-1 rounded-pill justify-start justify-md-center font-weight-bold"
          :prepend-icon="i === 0 ? 'mdi-file-document' : 'mdi-download'"
        >
          {{ e.titulo }}
        </v-btn>
      </v-card>
    </v-col>

  </v-col>
</template>

<script setup lang="ts">
interface Boton {
  titulo: string;
  doc: string;
}

const { subTitle = "Sistema Estatal Anticorrupción" } = defineProps<{
  title: string;
  color: string;
  icon: string;
  botones?: Boton[]
  subTitle?: string
}>();
</script>

<style lang="scss" scoped>
// Clases para el diseño "No Simple" del título
.relative-z {
  position: relative;
  z-index: 2;
}

.watermark-icon {
  position: absolute;
  right: -50px;
  top: -80px;
  opacity: 0.08; 
  z-index: 1;
  transform: rotate(-15deg);
  pointer-events: none; 
}

.sidebar-accent {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 6px;
  z-index: 3;
}

.line-height-tight {
  line-height: 1.1 !important;
}

// Opcional: transición suave al pasar el mouse sobre los botones
.v-btn {
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
}
</style>