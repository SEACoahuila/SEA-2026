
<template>
    <v-container>
        <v-row>
        <TitlePages :color="page.color" :title="page.title" :icon="page.icon"  subTitle="PIPEAC"/>

      <v-col cols="12">
        <v-card class="mt-3 mb-3 pa-6" color="peac" rounded="lg">
          <v-row justify="center" align="center">
            <v-col cols="12" v-for="(e, i) in btnitem" :key="i">
              
              <v-card class="pa-4 mb-4 mx-auto" rounded="md" color="article" elevation="2">
                <v-row align="center">
                  <v-col cols="12" lg="6" class="text-center">
                    <h2 class="text-h5 font-weight-bold mb-4">{{ e.title }}</h2>
                    <p class="text-justify mb-6 text-body-1">
                      {{ e.desc }}
                    </p>
                    <v-divider class="mb-6"></v-divider>
                    <v-btn 
                      size="large" 
                      color="#15567F" 
                      theme="dark"
                      :href="e.doc"
                      rounded="pill"
                      prepend-icon="mdi-file-pdf-box"
                    >
                      Descargar PIPEAC
                    </v-btn>
                  </v-col>

                  <v-col cols="12" lg="6">
                    <NuxtLink :to="e.link">
                      <v-hover v-slot="{ isHovering, props }">
                        <v-card v-bind="props" flat class="transparent">
                          <v-img
                            :src="isHovering ? `/img/botonera/${e.src2}` : `/img/botonera/${e.src1}`"
                            transition="fade-transition"
                            class="rounded-lg shadow-img"
                            alt="Botonera PIPEAC"
                          ></v-img>
                        </v-card>
                      </v-hover>
                    </NuxtLink>
                  </v-col>
                </v-row>
              </v-card>

            </v-col>
          </v-row>
        </v-card>

        <v-card class="mt-3 pa-8" rounded="lg">
          <v-card-title class="text-center mb-6">
            <span class="text-h4 font-weight-light">Datos y Metodología</span>
          </v-card-title>

          <v-row justify="center" gap="4">
            <v-col 
              cols="12" 
              md="4" 
              v-for="(e, i) in botonesSec" 
              :key="i" 
              class="d-flex justify-center"
            >
              <v-btn
                v-if="e.to"
                :href="e.to"
                target="_blank"
                height="auto"
                class="pa-4 text-none"
                density="compact"
                block
              >
                <div class="d-flex align-center">
                  <v-avatar size="30" class="mr-3" rounded="0">
                    <v-img :src="`/peac/icons/${e.icon}`"></v-img>
                  </v-avatar>
                  <span class="text-subtitle-1">{{ e.titulo }}</span>
                </div>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
// Datos integrados (Script Setup)
const page = {
  color: '#15567f',
  title: 'Programa de Implementación de la Política Estatal Anticorrupción Coahuila',
  icon: 'mdi-dots-horizontal'
};

const btnitem = [{
  title: '¿Qué es?:',
  desc: 'El Programa de Implementación de la Política Estatal Anticorrupción de Coahuila (PIPEAC), es el documento en el que se establecen las prioridades, objetivos, estrategias y líneas de acción que serán implementados por los entes públicos y particulares del estado de Coahuila de Zaragoza para dar cumplimiento a la PEAC.',
  src1: 'pipeac1.png',
  src2: 'pipeac2.png',
  link: '/pipeac',
  doc: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FswfaOcLHsuCV2XHVVKDL%2FPIPEAC%202024.pdf?alt=media&token=59aab632-463f-4eb0-9fb7-8625c438182d'
}];

const botonesSec = [
  {
    titulo: 'Metodología para la PIPEAC',
    icon: 'metodologia_pipeac.png',
    to: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FhydCDe7h1EAolvzP0tq0%2FMetodología%20para%20la%20Implementación%20de%20la%20PEAC%20(3).pdf?alt=media&token=2e7559d5-f922-488f-91c6-a92d8695fa2f'
  }
];
</script>

<style lang="scss" scoped>
.shadow-img {
  filter: drop-shadow(0px 4px 8px rgba(0,0,0,0.1));
  transition: filter 0.3s ease;
  &:hover {
    filter: drop-shadow(0px 6px 12px rgba(0,0,0,0.2));
  }
}

// Aseguramos que el NuxtLink no tenga estilos de subrayado
a {
  text-decoration: none;
}
</style>