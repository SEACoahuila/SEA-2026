<template>
  <div class="landing-section">
    <v-container class="py-10 py-md-16">
      
      <v-row justify="center">
        <v-col cols="12" lg="10" xl="8">
          
          <div v-for="(e, i) in btnitem" :key="i" class="mb-10">
            
            <v-card 
              class="mx-auto rounded-xl card-transition"
              elevation="4"
              color="#f7f7f9"
              
            >
              <v-row no-gutters>
                
                <v-col cols="12" md="6" class="d-flex flex-column justify-center pa-6 pa-md-10">
                  
                  <h2 class="text-h5 font-weight-bold text-blue-grey-darken-3 text-center  mb-3">
                    {{ e.title }}
                  </h2>
                  
                  <div class="text-subtitle-1 text-blue-grey-darken-1 text-justify mb-6" style="line-height: 1.6;">
                    {{ e.desc }}
                  </div>

                  <div class="d-flex flex-wrap align-center gap-3">
                    <v-btn
                      v-if="e.button"
                      :href="e.buttonlink"
                      color="#2C383D"
                      class="text-white text-capitalize px-6"
                      rounded="pill"
                      elevation="2"
                      size="small"
                    >
                      {{ e.button }}
                    </v-btn>

                    <v-btn
                      v-if="e.button2"
                      :href="e.button2link"
                      color="#2C383D"
                      variant="outlined"
                      class="text-capitalize px-4 ma-2"
                      rounded="pill"
                      size="small"
                      style="border-width: 2px;"
                    >
                      <span style="color: slategray; font-weight: bold;">{{ e.button2 }}</span>
                    </v-btn>
                  </div>
                </v-col>

                <v-col cols="12" md="6" class="bg-white d-flex align-center justify-center pa-4">
                   <nuxt-link :to="e.link" class="d-block w-100 h-100" style="text-decoration: none;">
                    
                    <v-hover v-slot="{ isHovering, props }">
                      <div 
                        v-bind="props" 
                        class="image-wrapper d-flex align-center justify-center rounded-lg overflow-hidden"
                      >
                        <v-img
                          :src="isHovering ? `/img/botonera/${e.src2}` : `/img/botonera/${e.src1}`"
                          alt="Imagen descriptiva"
                          class="img-hover-effect"
                          max-height="400" 
                          width="100%"
                          aspect-ratio="1.4"
                        >
                          <template v-slot:placeholder>
                            <div class="d-flex align-center justify-center fill-height">
                              <v-progress-circular indeterminate color="grey-lighten-4"></v-progress-circular>
                            </div>
                          </template>
                        </v-img>
                      </div>
                    </v-hover>

                  </nuxt-link>
                </v-col>

              </v-row>
            </v-card>
          </div>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const btnitem = [
        {
                title: 'Política Estatal Anticorrupción',
                desc: 'Conoce aquí el documento rector que guía los esfuerzos de las instituciones públicas y ciudadanas en materia de prevención, control y combate de los hechos de corrupción.',
                src1: 'peac1.jpg',
                src2: 'peac2.jpg',
                link: '/peac'
            },
            {
                title: 'Programa de Implementación de la Política Estatal Anticorrupción',
                desc: 'Conoce aquí el documento que establece las prioridades, objetivos, estrategias, líneas de acción e indicadores de la Política Estatal Anticorrupción de Coahuila.',
                src1: 'pipeac1.png',
                src2: 'pipeac2.png',
                link: '/pipeac',
                button: "Plataforma monitor SEA Coahuila",
                buttonlink: "https://monitor.seacoahuila.org.mx/",
                button2: "Manual de usuario",
                button2link:"https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FhydCDe7h1EAolvzP0tq0%2FManual%20del%20Usuario%20Plataforma%20Monitor%20SEA%20Coahuila.pdf?alt=media&token=e6e7fca1-cc2c-47ce-8dd7-b006a6b482ba"

            },
            {
                title: 'Sistema Estatal de Información',
                desc: 'Sistema de inteligencia para construir integridad y combatir la corrupción, que creará valor para el gobierno y la sociedad, a partir de grandes cantidades de datos.',
                src1: 'sistema1.jpg',
                src2: 'sistema1.jpg',
                link: '/sei'
            },
            {
                title: 'Hemeroteca Digital',
                desc: 'Sección especializada dedicada exclusivamente a la conservación, orden y consulta de publicaciones',
                src1: 'azimut1.jpg',
                src2: 'azimut2.jpg',
                link: '/hemeroteca'
            },

        ];


</script>

<style scoped>
/* Estilos extra para asegurar transiciones suaves y layout */
.gap-4 {
  gap: 16px;
}

.transition-opacity {
  transition: opacity 0.4s ease-in-out;
}

.image-container {
  /* Ajusta la altura mínima según tus imágenes */
  min-height: 300px; 
}
</style>