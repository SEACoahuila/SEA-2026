<template>
<v-container>

    <v-row>
            <TitlePages 
          :color="page.color" 
          :title="page.title" 
          :icon="page.icon" 
          :botones="botones" 
        />
        <v-col>
      

                      <PresentCard :btnitem="btnitem" />


         

<v-card class="mt-8 rounded-xl elevation-1 overflow-hidden" border outlined>
  <v-toolbar flat color="grey lighten-4" height="48">
    <v-icon small color="grey darken-2" class="mr-2">mdi-database-eye-outline</v-icon>
    <v-toolbar-title class="text-overline font-weight-black grey--text text--darken-2" style="letter-spacing: 1px;">
      Recursos y Datos 
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon x-small color="grey"><v-icon>mdi-dots-vertical</v-icon></v-btn>
  </v-toolbar>

  <v-card-text class="pa-3 grey lighten-5">
    <v-row dense>
      <v-col 
        cols="12" 
        md="4" 
        sm="6" 
        v-for="(e, i) in botonesSec" 
        :key="i"
      >
        <v-hover v-slot="{ hover }">
          <v-card 
            :href="e.to" 
            target="_blank"
            :elevation="hover ? 3 : 0"
            :class="hover ? 'white' : 'transparent'"
            class="rounded-lg transition-swing border d-flex align-center"
            outlined
            height="64"
          >
            <div class="d-flex justify-center align-center ml-3 mr-1" style="width: 42px; min-width: 42px;">
              <v-img
                :src="'/img/' + e.icon"
                max-height="32"
                max-width="32"
                contain
                class="transition-swing"
                :style="hover ? '' : 'filter: grayscale(0.4); opacity: 0.8;'"
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-icon x-small color="grey lighten-2">mdi-file-document-outline</v-icon>
                  </v-row>
                </template>
              </v-img>
            </div>

            <v-card-text class="pa-0">
              <div 
                class="text-caption font-weight-bold grey--text text--darken-3 px-2"
                style="line-height: 1.2; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-transform: uppercase;"
              >
                {{ e.titulo }}
              </div>
            </v-card-text>

            <v-icon 
              x-small 
              class="mr-3 transition-swing" 
              :color="hover ? page.color : 'grey lighten-3'"
              :style="hover ? 'transform: translateX(0)' : 'transform: translateX(-5px)'"
            >
              mdi-chevron-right
            </v-icon>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-card-text>
</v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: 'declaraciones',
    data() {
        return {
            page: {
                color: '#156017',
                title: 'Declaraciones',
                icon: 'mdi-book-open-outline'
            },
            botones: [{
                    titulo: 'Bases Plataforma Nacional Digital',
                    icon: 'estandar de datos.png',
                     doc: 'https://www.plataformadigitalnacional.org/declaraciones'
                },
                {
                    titulo: 'Diccionario de datos',
                    icon: 'datos abiertos.png',
                     doc: 'https://docs.google.com/spreadsheets/d/19Kyq46YwJk9wM7znYLQdLEKfAF8jTF4WmGJINXd9Lwg/edit#gid=0'
                },

            ],
            btnitem: [{
                    title: 'Evolución patrimonial, declaración de intereses y constancia de presentación de declaración fiscal',
                    desc: 'La información de declaraciones de los servidores públicos de los diferentes niveles de gobierno se encuentra contenida en diversos formatos, bases de datos y sistemas de información; cada uno de ellos con particularidades tecnológicas y reglas de negocio distintas que complican la integración y la interoperabilidad de los datos.',
                    desc2: 'Por ello el sistema establece una herramienta que permitirá la consulta de información de las diferentes instituciones.',
                    src1: 'sistema1.jpg',
                    src2: 'sistema2.jpg',
                    link: '/peac'
                },

            ],
            botonesSec: [{
                    logo: true,
                    titulo: 'Plataforma Digital Nacional',
                    icon: 'pdn.png',
                    to: 'https://www.plataformadigitalnacional.org/'
                },
                {
                    logo: true,
                    titulo: 'Consultar declaraciónes patrimoniales',
                    icon: 'declara_net1.png',
                    to: 'https://servidorespublicos.sefircoahuila.gob.mx/'
                },
                {
                    logo: true,
                    titulo: 'Consultar declaraciónes patrimoniales previas al 30/03/2021',
                    icon: 'cc-sefirc.png',
                    to: 'https://www.declaranetcoahuila.gob.mx/sidp/publica/IUListadoDependencias.jsp'
                },

            ],

        }

    }
}
</script>

<style lang="scss" scoped>

        </style>
