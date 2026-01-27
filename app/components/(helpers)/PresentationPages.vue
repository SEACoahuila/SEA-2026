<template>
        <v-col cols="12" lg="12">
       
        <v-card class="mt-4 pa-6 pa-md-10" elevation="2" rounded="lg" color="article">

                    <v-row v-for="(e, index) in presentacion" :key="index" class="mb-6">
                        <v-col cols="12">
                            <div class="text-h4 text-md-h4 text-center font-weight-bold mb-4"
                                :style="{ color: color }">
                                {{ e.titulo }}
                            </div>
                            <p class="text-body-1 text-justify px-md-12">
                                {{ e.texto }}
                            </p>
                        </v-col>
                        <v-divider width="" class="mt-4" thickness="2" color="primary"></v-divider>
                    </v-row>
                </v-card>
      </v-col>
</template>

<script setup lang="ts">

interface PresentacionItem {
  titulo: string;
  texto: string;
}

defineProps<{
  presentacion: PresentacionItem[]
  color: string 
}>();
</script>

<style lang="scss" scoped>

</style>