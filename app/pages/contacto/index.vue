

<template>
    <v-container class="">
        
        <!-- <v-row justify="center" class="mb-6">
            <v-col cols="12">
                <div class="d-flex align-center text-cyan-darken-3 mb-4">
                    <v-icon size="large" class="mr-3">{{ pageInfo.icon }}</v-icon>
                    <h1 class="text-h4 font-weight-bold">{{ pageInfo.title }}</h1>
                </div>
                <v-divider class="border-opacity-50" color="cyan-darken-3"></v-divider>
            </v-col>
        </v-row> -->
        
        <v-row>
        <TitlePages :color="pageInfo.color" :title="pageInfo.title" :icon="pageInfo.icon " />
      <v-col cols="12" v-for="(card, i) in contactos" :key="i">
        
        <v-card class="mb-6 rounded-lg mt-7" elevation="3">
          <v-row no-gutters>
            
            <v-col cols="12" md="4" class="bg-grey-lighten-4 d-flex align-center justify-center pa-6">
              <div class="text-center">
                <v-img
                  :src="`img/${card.icon}`"
                  :lazy-src="`img/${card.icon}`"
                  width="300"
                  class="mx-auto mb-4 hover-zoom"
                  alt="Logotipo dependencia"
                ></v-img>
              </div>
            </v-col>

            <v-col cols="12" md="8" class="pa-6">
              <div class="d-flex flex-column h-100">
                
                <div>
                  <h2 class="text-h5 text-md-h4 font-weight-bold text-teal mb-2">
                    {{ card.dependencia }}
                  </h2>
                  <p class="text-body-1 text-medium-emphasis mb-4">
                    {{ card.description }}
                  </p>
                  
                  <v-divider class="mb-4"></v-divider>

                  <v-list density="compact" class="pa-0 contact-list">
                    <template v-for="(item, idx) in card.info" :key="idx">
                      
                      <v-list-item v-if="item.type === 'list'" class="px-0">
                        <template v-slot:prepend>
                          <v-icon color="cyan-darken-3">{{ item.icon }}</v-icon>
                        </template>
                        <v-list-item-title class="font-weight-bold mb-2">{{ item.label }}</v-list-item-title>
                        <div class="d-flex flex-wrap gap-2">
                          <v-chip 
                            v-for="(email, eIdx) in item.emails" 
                            :key="eIdx" 
                            size="small" 
                            color="cyan-darken-3" 
                            variant="outlined"
                            :href="`mailto:${email}`"
                            tag="a"
                            class="mb-1 mr-1"
                          >
                            {{ email }}
                          </v-chip>
                        </div>
                      </v-list-item>

                      <v-list-item v-else class="px-0 mb-2">
                        <template v-slot:prepend>
                          <v-icon color="cyan-darken-3">{{ item.icon }}</v-icon>
                        </template>
                        
                        <v-list-item-title class="text-wrap" style="white-space: normal;">
                          <a v-if="item.type === 'link'" :href="item.url" target="_blank" class="text-decoration-none text-cyan-darken-3 font-weight-bold">
                            {{ item.text }}
                          </a>
                          <a v-else-if="item.type === 'mail'" :href="`mailto:${item.text}`" class="text-decoration-none text-high-emphasis">
                            {{ item.text }}
                          </a>
                       
                          <span v-else>{{ item.text }}</span>
                        </v-list-item-title>
                      </v-list-item>

                    </template>
                  </v-list>
                </div>

                <div class="mt-auto pt-4" v-if="card.hasMap">
                  <v-btn 
                    color="pink-darken-1" 
                    variant="flat" 
                    prepend-icon="mdi-map-marker-radius"
                    href="https://www.google.com/maps/dir//Secretar%C3%ADa+Ejecutiva+del+Sistema+Anticorrupci%C3%B3n+del+Estado+de+Coahuila+de+Zaragoza,+Blvd.+Luis+Donaldo+Colosio+No.+703.+Piso+3,+Fraccionamiento+Valle+Real,+25205+Saltillo,+Coah.,+M%C3%A9xico/@25.4705483,-100.9604294,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x86881331ebb6aadd:0x2c4069ae06e6a973!2m2!1d-100.9604294!2d25.4705483"
                    class="text-none font-weight-bold"
                    rounded="lg"
                  >
                    Ver ubicación en Google Maps
                  </v-btn>
                </div>

              </div>
            </v-col>
          </v-row>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
// En Nuxt 4 / Vuetify 3 no necesitamos importar componentes básicos manualmente si el módulo está bien configurado.
// Asumimos que TitlePages es un componente global o auto-importado. Si no, descomenta la línea de abajo.
// import TitlePages from '@/components/TitlePages.vue'; 

// Definición de datos usando reactive o ref (Composition API)
// He reestructurado ligeramente los "datos" para que sean objetos semánticos y poder ponerles íconos.
const pageInfo = {
  title: 'Contacto',
  color: '#00695C',
  icon: 'mdi-card-account-phone-outline'
};

const contactos = [
  {
    dependencia: 'Secretaría Ejecutiva',
    icon: 'seac.png', // Asegúrate de que esta imagen esté en /public/img/
    description: 'Organismo de apoyo técnico del Sistema Estatal Anticorrupción.',
    info: [
      { icon: 'mdi-phone', text: '(844) 688 2178', type: 'tel' },
      { icon: 'mdi-email', text: 'informacion@seacoahuila.org.mx', type: 'mail' },
      { icon: 'mdi-map-marker', text: 'Blvd. Luis Donaldo Colosio No. 703 Piso 3 Fracc. Valle Real Saltillo, Coahuila. C.P. 25205.', type: 'text' },
      { icon: 'mdi-clock-outline', text: 'Lun-Jue: 08:30 - 17:00 | Vie: 08:30 - 14:30', type: 'text' }
    ],
    hasMap: true
  },
  {
    dependencia: 'Consejo de Participación Ciudadana',
    icon: 'cc-cpc.png',
    description: 'Instancia de vinculación con las organizaciones sociales y académicas.',
    info: [
      { icon: 'mdi-phone', text: '(844) 688 2178', type: 'tel' },
      { icon: 'mdi-web', text: 'www.cpccoahuila.org.mx', url: 'https://www.cpccoahuila.org.mx', type: 'link' },
      { 
        icon: 'mdi-email-multiple', 
        type: 'list',
        label: 'Correos de contacto:',
        emails: [
          'yolanda.montes@cpccoahuila.org.mx',
          'carlos.guzman@cpccoahuila.org.mx',
          'diana.flores@cpccoahuila.org.mx',
          'carlos.franco@cpccoahuila.org.mx',
          'karla.natividad@cpccoahuila.org.mx'
        ]
      }
    ],
    hasMap: false
  }
];

// Función auxiliar para manejar el link de Google Maps
const openMap = () => {
  window.open('https://goo.gl/maps/TuLinkAqui', '_blank'); // Reemplaza con el link real corto de Google Maps
};
</script>
<style scoped lang="scss">
/* Pequeño efecto visual para la imagen */
.hover-zoom {
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
}

/* Ajustes finos para la lista */
.contact-list {
  .v-list-item__prepend {
    align-self: flex-start;
    margin-top: 4px; 
  }
}
</style>