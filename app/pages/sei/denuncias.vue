<template>
<v-container>

    <v-row>
          <TitlePages :color="page.color" :title="page.title" :icon="page.icon" :botones="botones"
                :subTitle="page.sub" />
        <v-col>
     


                            <PresentCard :btnitem="btnitem" />

            
            
            <v-card class="mt-10 pa-5">

                <v-card-title class="justify-center mb-4">
                    <v-icon x-large :color="page.color">mdi-email-edit-outline</v-icon><div class=" text-xl-h3 text-md-h4"> Buzones de quejas</div>
                </v-card-title>
            <v-divider></v-divider>
                <v-col align="center" justify="center">
                    <v-row>
                        <v-col cols="12" md="4" sm="6" v-for="(e,i) in botonesSec" :key="i">
                            <v-card color="bluegreyt" :href="e.to">

                                <v-card-actions class="justify-center">

                                    <v-img contain max-width="80" min-height="80" class="mr-4" v-if=" e.logo" :src="('/sei/icons/' + e.icon)" alt="alt"></v-img>

                                    <div v-if=" !e.logo">
                                        <v-avatar size="50" color="" tile>

                                            <img :src="('/img/' + e.icon)" alt="alt">
                                        </v-avatar>
                                    </div>{{ e.titulo }}
                                </v-card-actions>

                            </v-card>
                        </v-col>

                    </v-row>

                </v-col>

            </v-card>

            <!-- <v-card class="mt-3 mb-3" color="peac">
                <v-col align="center" justify="center">
                    <v-row justify="center" align="center" class="mt-5">

                        <v-col cols="12" lg="8" sm="12" v-for="(e,i) in btnitem" :key="i">

                            <v-card class="pa-2 mb-10 mx-auto text-justify" tile color="article">
                                <v-row align="center">
                                    <v-col cols="12" lg="6" sm="12" class="pa-8" align="center" justify="center">

                                        <h3> {{e.title}}</h3>
                                        <v-card-subtitle class="text-justify">
                                            {{e.desc}}
                                        </v-card-subtitle>
                                        <v-card-subtitle class="text-justify">
                                            {{e.desc2}}
                                        </v-card-subtitle>
                                    </v-col>

                                    <v-col cols="12" lg="6" sm="12">

                                        <v-hover>

                                            <v-img slot-scope="{ hover }" v-if="hover" :src="require('@/static/img/botonera/'+ e.src1)">
                                            </v-img>
                                            <v-img v-else :src="require('@/static/img/botonera/'+ e.src1)">
                                            </v-img>

                                        </v-hover>

                                    </v-col>

                                </v-row>
                            </v-card>

                        </v-col>

                    </v-row>
                </v-col>

            </v-card> -->

            <!-- Inicio debotoneras denuncia -->

        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: 'denuncias',
    data() {
        return {
            page: {
                color: '#d1a112',
                title: 'Denuncias',
                sub: 'Denuncias públicas de faltas administrativas y hechos de corrupción',
                icon: 'mdi-account-voice'
            },
            botones: [{
                    titulo: 'Bases Plataforma Nacional Digital',
                    icon: 'estandar de datos.png',
                    doc: 'https://www.plataformadigitalnacional.org/denuncias'
                },
                {
                    titulo: 'Diccionario de datos',
                    icon: 'datos abiertos.png',
                    doc: ''
                },

            ],
            btnitem: [{
                    title: 'Sistema de Denuncias del Sistema Estatal de Información',
                    desc: ' Este sistema permite a los ciudadanos, organizaciones y empresas presentar denuncias de forma anónima o identificada, sobre irregularidades, violaciones, malversaciones, abusos, entre otros.',
                    desc2: 'Además, el sistema cuenta con medidas de protección para garantizar la privacidad y seguridad de las denuncias, proporcionando una capacitación continua para los funcionarios encargados del sistema, para garantizar la confidencialidad y la imparcialidad en la investigación.',
                    src1: 'sistema1.jpg',
                    src2: 'sistema2.jpg',
                    link: '#'
                },

            ],
            botonesSec: [{
                    logo: true,
                    titulo: 'Plataforma Digital Nacional',
                    icon: 'pdn.png',
                    to: 'https://www.plataformadigitalnacional.org/'
                },
                // {
                //     logo: true,
                //     titulo: 'Sistema Estatal de Denuncias SEAC',
                //     icon: 'logo_SEI.png',
                //     to: 'https://www.plataformadigitalnacional.org/'
                // },
                {
                    logo: true,
                    titulo: 'QuejaNet Coahuila',
                    icon: 'quejanet.png',
                    to: 'https://quejanet.tramitescoahuila.gob.mx/sidqcs/'
                },

            ],

        }

    }
}
</script>

<style lang="scss" scoped>

        </style>
