<template>
  <v-container>
    <v-row justify="center">
      <TitlePages :color="page.color" :title="page.title" :icon="page.icon" />

      <v-col cols="12" class="">
        <v-card variant="flat" class="pa-6 pa-md-10 border " color="article" rounded="lg">
          <v-card-title class="text-h4 font-weight-bold mb-2">Objetivo</v-card-title>
          <v-card-text class="text-body-1 text-justify">
            A Azimut tiene el propósito de orientar la integración, el análisis
                        y la discusión de la amplia agenda que compete al Sistema Estatal Anticorrupción. En otras
                        palabras, con
                        esta publicación se pretende contribuir a la generación y consolidación de una
                        cultura eficaz de combate a la corrupción y sus consecuencias, poniendo sobre
                        la mesa, y a la vista de todos, los elementos necesarios para dicho propósito.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" class="align-center ">
        <div class="text-h4 font-weight-light mt-8 mb-4 ">Revistas</div>
        <v-divider class="mb-6"></v-divider>
        <v-row class="justify-center ga-15">
          <v-col v-for="(e, i) in page.revistas" :key="i" cols="12" sm="6" md="4" lg="3" xl="2" >
            <v-card variant="outlined" class="h-100 d-flex flex-column border-0" rounded="lg">
              <v-img :src="('/revistas/' + e.img)" height="400" cover class="align-end rounded-lg elevation-2">
                <div class="bg-overlay pa-3">
                  <div class="text-subtitle-1 font-weight-bold text-white">{{ e.titulo }}</div>
                  <div class="text-caption text-grey-lighten-2">{{ e.edicion }}</div>
                </div>
              </v-img>

              <v-card-actions class="justify-space-around pt-4 px-0">
                <v-btn :href="('/revistas/' + e.doc)" download variant="text" color="pink-accent-3" prepend-icon="mdi-download">
                  PDF
                </v-btn>
                <v-btn :href="('/revistas/' + e.doc)" target="_blank" variant="text" color="grey-darken-1" prepend-icon="mdi-eye">
                  Leer
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12">
        <div class="text-h4 font-weight-light mt-10 mb-4">Colaboraciones</div>
        <v-divider class="mb-6"></v-divider>
        <v-row>
          <v-col v-for="(e, i) in page.colabs" :key="i" cols="12" sm="6" md="4">
            <v-card variant="flat" class="h-100 d-flex flex-column bg-transparent">
              <v-img :src="('/revistas/' + e.img)" height="350" contain class="align-end rounded-lg bg-grey-lighten-4 elevation-1">
                <div class="bg-overlay pa-3">
                  <div class="text-body-2 font-weight-medium text-white text-truncate">{{ e.titulo }}</div>
                </div>
              </v-img>

              <v-card-actions class="justify-center pt-3">
                <v-btn :href="e.to" download variant="outlined" size="small" color="pink-darken-2" class="rounded-pill px-4">
                  Descargar 
                </v-btn>
                <v-btn :href="e.to" target="_blank" icon="mdi-open-in-new" variant="text" size="small" color="grey"></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
/* Estilo para el título transparente sobre la imagen */
.bg-overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
  width: 100%;
}

/* Transición suave para las tarjetas */
.v-card {
  transition: transform 0.2s ease-in-out;
}
.v-card:hover {
  transform: translateY(-2px);
}

/* Eliminar bordes excesivos para vista limpia */
.border-0 {
  border: none !important;
}
</style>

<script>
export default {
    name: 'azimut',
    data() {
        return {
            page: {
                color: '#E91E63',
                title: 'Publicaciones',
                icon: 'mdi-book-open-outline',
                revistas: [{
                    titulo: 'Brechas',
                    img: '04.png',
                    edicion: 'Edición 04',
                    doc: '04.pdf'
                },
                {
                    titulo: 'La Tragedia de los Comunes',
                    img: '03.jpg',
                    edicion: 'Edición 03',
                    doc: '03.pdf'
                },
                {
                    titulo: 'Género y Corrupción',
                    img: '02.jpg',
                    edicion: 'Edición 02',
                    doc: '02.pdf'
                },
                {
                    titulo: 'Construcción y consolidación',
                    img: '01.jpg',
                    edicion: 'Edición 01',
                    doc: '01.pdf'
                }

                ],

                colabs: [{
                    titulo: 'El derecho humano a una vida libre de corrupción',
                    img: 'dhvlc.png',
                    to: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FksXq4Cz4WUJ4TcRF2tDt%2Fel%20derecho%20humano%20a%20una%20vida%20libre%20de%20corrupcion.pdf?alt=media&token=bb173de5-40f8-4afb-9fd3-4b8c5b35c10a'
                },
                {
                    titulo: 'Diccionario prointegridad',
                    img: 'dp.png',
                    to: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FksXq4Cz4WUJ4TcRF2tDt%2FDiccionario-prointegridad-vf.pdf?alt=media&token=03b2f28d-adca-41bb-a772-5730471af115'
                },
               

                ],
            }

        }

    }
}
</script>
