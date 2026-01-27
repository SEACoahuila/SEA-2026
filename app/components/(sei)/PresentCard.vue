<template>
  
            <v-card class="mt-3 mb-3" >
                <v-col aling="center" justify="center">
                    <v-row justify="center" align="center" class="mt-5">
    <v-col cols="12" lg="10" sm="12" v-for="(e, i) in btnitem" :key="i">

                              <v-card class="mb-10 mx-auto overflow-hidden" elevation="3" rounded="xl" color="">
  <v-row no-gutters align="center">
    
    <v-col cols="12" md="7" class="pa-8 pa-md-10 d-flex flex-column justify-center">
      <div class="text-h6 font-weight-bold mb-4 ">
        {{ e.title }}
      </div>

      <div class="text-body-2 mb-4 text-medium-emphasis">
        {{ e.desc }}
      </div>

      <div v-if="e.desc2" class="text-body-2 font-italic text-disabled border-s-lg ps-4">
        {{ e.desc2 }}
      </div>
    </v-col>

    <v-col cols="12" md="5" class="pa-2"> <nuxt-link to="#" class="text-decoration-none">
        <v-hover v-slot="{ isHovering, props }">
          <v-img
            v-bind="props"
            :src="`/img/botonera/${e.src1}`"
            :aspect-ratio="1" 
            class="rounded-lg transition-medium"
            :class="{ 'elevation-6': isHovering }"
            cover
          >
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height bg-grey-lighten-4">
                <v-progress-circular indeterminate color="grey-lighten-1"></v-progress-circular>
              </div>
            </template>
          </v-img>
        </v-hover>
      </nuxt-link>
    </v-col>

  </v-row>
</v-card>
                            </v-col>

                                          </v-row>
                </v-col>

            </v-card>

</template>

<script setup lang="ts">
// 1. Definimos la estructura de cada elemento del botón
interface BotonItem {
  title: string;
  desc: string;
  desc2?: string; 
  src1: string;
  link: string;
}

// 2. Definimos las props usando la interfaz
// Usamos withDefaults para que si no llega nada, no rompa el v-for
const props = defineProps<{
  btnitem: BotonItem[]
}>()

</script>

<style lang="scss" scoped>

</style>