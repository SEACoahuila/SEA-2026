<template>
    <v-container>

        <v-row>
            <TitlePages :color="page.color" :title="page.title" :icon="page.icon" />
            <PresentationPages :presentacion="page.presentacion" :color="page.color" />

            <v-col>
   

               
      
                <v-card class="mt-10 pa-6" elevation="0" color="article">
                    <div class="text-h4 text-center mb-8 font-weight-light">Miembros que integran la Comisión Ejecutiva</div>

                    <v-row>
                        <v-col cols="12" md="4" v-for="(i, index) in integrantes" :key="index">
                            <v-card elevation="3" class="mx-auto mt-4 overflow-visible" rounded="xl" min-height="320">

                                <v-dialog max-width="400">
                                    <template v-slot:activator="{ props }">
                                        <v-btn v-bind="props" icon="mdi-plus" :color="page.color" position="absolute"
                                            location="top right" class="mt-n4 mr-n2" elevation="4"></v-btn>
                                    </template>

                                    <v-card rounded="lg">
                                        <v-card-title class="bg-grey-lighten-3 d-flex align-center">
                                            <v-icon class="mr-2">mdi-email-outline</v-icon> Contacto
                                        </v-card-title>
                                        <v-card-text class="pa-6 text-center">
                                            <div class="text-subtitle-1 mb-2 font-weight-bold">{{ i.nombre }}</div>
                                            <v-chip color="primary" variant="tonal" prepend-icon="mdi-email">
                                                {{ i.mail }}
                                            </v-chip>
                                        </v-card-text>
                                        <v-divider></v-divider>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn variant="text" @click="null">Cerrar</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>

                                <div class="pa-4">
                                    <v-row align="center">
                                        <v-col cols="6">
                                            <v-avatar size="120" elevation="2">
                                                <v-img :src="`/img/cpc/${i.foto}`" alt="foto" cover></v-img>
                                            </v-avatar>
                                        </v-col>
                                        <v-col cols="6" class="d-flex justify-center">
                                            <v-img width="80" :src="`/img/${i.img}`"></v-img>
                                        </v-col>
                                    </v-row>

                                    <v-card-item class="mt-4">
                                        <v-card-title class="text-h6 font-weight-bold text-wrap">{{ i.nombre
                                            }}</v-card-title>
                                        <v-card-subtitle class="text-wrap mt-2" style="opacity: 1; line-height: 1.2;">
                                            {{ i.cargo }}
                                        </v-card-subtitle>
                                    </v-card-item>
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card>

    <v-card class="mt-10 pa-4" elevation="2" rounded="lg" color="article">
    <v-row justify="center" align="center">
      <v-col cols="12" class="text-center">
        
        <v-card-title class="justify-center">
          <div class="text-xl-h3 text-md-h3 text-h4 mb-5 font-weight-bold">
            Actas de sesiones
          </div>
        </v-card-title>

        <v-card-actions class="justify-center">
          <v-row justify="center">
            <v-col 
              v-for="(e, index) in seccionActas" 
              :key="index" 
              cols="12" 
              class="text-center"
            >
              <h2 class="text-h5 mb-2">{{ e.titulo }}</h2>
              <v-divider class="mb-4 mx-auto" max-width="200"></v-divider>
              
              <div class="d-flex flex-wrap justify-center">
                <v-btn 
                  v-for="(acta, idx) in e.actas" 
                  :key="idx"
                  :href="acta.link" 
                  class="ma-2 text-none" 
                  color="blue-grey-darken-4"
                  variant="outline"
                  elevation="3"
                >
                  {{ acta.nombre }}
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card-actions>

      </v-col>
    </v-row>
  </v-card>

  <v-card class="mt-10 pa-4" elevation="2" rounded="lg" color="article">
    <v-row justify="center" align="center">
      <v-col cols="12" class="text-center">

        <v-card-title class="justify-center">
          <div class="text-xl-h3 text-md-h3 text-h4 font-weight-bold">
            Acuerdos
          </div>
        </v-card-title>
        
        <v-divider class="my-4 mx-auto" max-width="300"></v-divider>

        <v-card-actions class="justify-center">
          <v-row justify="center">
            <v-col 
              v-for="(e, index) in acuerdos" 
              :key="index" 
              cols="12" 
              class="text-center"
            >
              <h2 class="text-h5 mb-2">{{ e.titulo }}</h2>

              <div class="d-flex flex-wrap justify-center">
                <v-btn 
                  v-for="(acta, idx) in e.actas" 
                  :key="idx"
                  :href="acta.link" 
                  class="ma-2 text-none"
                  color="secondary"
                  variant="elevated"
                >
                  {{ acta.nombre }}
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card-actions>

      </v-col>
    </v-row>
  </v-card>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'sei',
    data() {
        return {
            page: {
                color: '#607D8B',
                title: 'Comisión Ejecutiva',
                icon: 'mdi-cog',
                presentacion: [{
                    titulo: '¿Qué es?',
                    texto: 'Órgano técnico auxiliar de la Secretaría Ejecutiva integrada por la Secretaria Técnica y el Consejo de Participación Ciudadana, con excepción del miembro que fúnja en ese momento como su presidente.'
                },
                {
                    titulo: 'Objetivo',
                    texto: 'Generar los insumos técnicos necesarios para que el Comité Coordinador realice sus funciones, elaborando propuestas para ser sometidas a la aprobación de dicho Comité, respecto a las políticas integrales en prevención, control, y disuasión de faltas administrativas y hechos de corrupción, asi como la realización de informes, indicadores, evaluaciónes, y seguimiento de respecto a dichas políticas.',
                },

                ]
            },

            // Termina page

            seccionActas: [

                {
                    titulo: '2023-2024',
                    actas: [
                        {
                            nombre: 'Primera Ordinaria',
                            link: 'https://drive.google.com/file/d/1K86ymgGzPQAC9joL1vsAm_OWsAqsDTNX/view?usp=drive_link',
                        },
                        {
                            nombre: 'Segunda Ordinaria',
                            link: 'https://drive.google.com/file/d/1cjhHjvkFSkQscRIVBuEvFpjK26YkVuO7/view?usp=drive_link',
                        },
                        {
                            nombre: 'Tercera Ordinaria',
                            link: 'https://drive.google.com/file/d/1iAKwW27Kq-16lwxGuJ8UV7ErB7mt0pTq/view?usp=drive_link',
                        },
                        {
                            nombre: 'Cuarta Ordinaria',
                            link: 'https://drive.google.com/file/d/1CUqjeAYW6wFmwEPKNfc_PdhcpRLGwsrg/view?usp=drive_link',
                        },
                        {
                            nombre: 'Quinta Ordinaria',
                            link: 'https://drive.google.com/file/d/1YZKGcgeWzk9fzpd6wA7tdw4wOE_wwlnf/view?usp=drive_link',
                        },
                        {
                            nombre: 'Sexta Ordinaria',
                            link: 'https://drive.google.com/file/d/1knk3no1fgg0pSXQwhr_MYue2wa6Nzv9u/view?usp=sharing',
                        },
                        {
                            nombre: 'Séptima Ordinaria',
                            link: 'https://drive.google.com/file/d/1CFr7DJ-OOeBUFk7rcIRuXscJBvL8qnVH/view?usp=drive_link',
                        },
                        {
                            nombre: 'Octava Ordinaria',
                            link: 'https://drive.google.com/file/d/1ZC6m5eIi4bOb3jfzi5hwpB4x-1KXAcZb/view?usp=drive_link',
                        },
                        {
                            nombre: 'Novena Ordinaria',
                            link: 'https://drive.google.com/file/d/1K60XVohxW2ILx92pZAhVsmDJVrnaa0Pg/view?usp=drive_link',
                        },
                        {
                            nombre: 'Décima Ordinaria',
                            link: 'https://drive.google.com/file/d/1y7gz9e7DpUVNTjUwmcd1U3CDjpl9lP5X/view?usp=drive_link',
                        },
                        {
                            nombre: 'Décima Primera Ordinaria',
                            link: 'https://drive.google.com/file/d/1Wh0OqmRhcf_Bp2pZyWuLnUng8fHToVSe/view?usp=drive_link',
                        },

                    ]
                },


                {
                    titulo: '2022-2023',
                    actas: [
                        {
                            nombre: 'Primera Ordinaria',
                            link: 'https://drive.google.com/file/d/1ObHuFyhDTZPg7hQPrbbkmt-o062_UoQ3/view?usp=drive_link',
                        },
                        {
                            nombre: 'Segunda Ordinaria',
                            link: 'https://drive.google.com/file/d/1AajDaxxOOBuOShi6N9LmQErN17mPy-QH/view?usp=drive_link',
                        },
                        {
                            nombre: 'Tercera Ordinaria',
                            link: 'https://drive.google.com/file/d/1SgKaBBJC5U6SU2vDKCLH9zZljZ9kX5lv/view?usp=drive_link',
                        },
                        {
                            nombre: 'Cuarta Ordinaria',
                            link: 'https://drive.google.com/file/d/1-x6lHByW2jcg3APB7WxxXQzLO43UePyp/view?usp=drive_link',
                        },
                        {
                            nombre: 'Quinta Ordinaria',
                            link: 'https://drive.google.com/file/d/1X5dt2FsNFg3_ES8RUAOxiNie_zL08wC4/view?usp=drive_link',
                        },
                        {
                            nombre: 'Sexta Ordinaria',
                            link: 'https://drive.google.com/file/d/1BCMUWQG6c28pDQEjILxSz7rTGXNc8svQ/view?usp=drive_link',
                        },
                        {
                            nombre: 'Séptima Ordinaria',
                            link: 'https://drive.google.com/file/d/1DN9xzaEhHFKaFyEPKhN6g54xN-6QMHLH/view?usp=drive_link',
                        },
                        {
                            nombre: 'Octava Ordinaria',
                            link: 'https://drive.google.com/file/d/11TLXBFmKzXrin6IFrZ4CqnRqtPo6rxc-/view?usp=drive_link',
                        },
                        {
                            nombre: 'Novena Ordinaria',
                            link: 'https://drive.google.com/file/d/1lDJ-ZChqmlrsiXPfTzTl_mpi8ZS9tEIY/view?usp=drive_link',
                        },
                        {
                            nombre: 'Décima Ordinaria',
                            link: 'https://drive.google.com/file/d/1zlqyEYp9XzcqljqNzIMiqf_Z1I3YkjNX/view?usp=drive_link',
                        },
                        {
                            nombre: 'Décima Primera Ordinaria',
                            link: 'https://drive.google.com/file/d/1EOZ1EVJP1fDu6_FYpWYpfvmJe7rhjg2C/view?usp=drive_link',
                        }
                    ]
                },
                {
                    titulo: '2021-2022',
                    actas: [
                        {
                            nombre: 'Primera Ordinaria',
                            link: 'https://drive.google.com/file/d/1stwV7KAHylhSruXqwDTpp7Nsma0RZ_go/view?usp=drive_link',
                        },
                        {
                            nombre: 'Segunda Ordinaria',
                            link: 'https://drive.google.com/file/d/1CoAjwvKrgyqObMV_i9vHuovd1IJdwLRN/view?usp=drive_link',
                        },
                        {
                            nombre: 'Tercera Ordinaria',
                            link: 'https://drive.google.com/file/d/1MvuHydxSvLYbJsQzbvGCOxWvSTQnRSn_/view?usp=drive_link',
                        },
                        {
                            nombre: 'Cuarta Ordinaria',
                            link: 'https://drive.google.com/file/d/1OMiYsRY5NB9mMO6ySSgrHZpuXOcDwSfV/view?usp=drive_link',
                        },
                        {
                            nombre: 'Quinta Ordinaria',
                            link: 'https://drive.google.com/file/d/1HwK_tUTO1hDSDdAptc2eECwdbUodIpSe/view?usp=drive_link',
                        },
                        {
                            nombre: 'Sexta Ordinaria',
                            link: 'https://drive.google.com/file/d/1VjmKrlaNdcahRV9ClHcjinfGgN2OUvwJ/view?usp=drive_link',
                        },
                        {
                            nombre: 'Séptima Ordinaria',
                            link: 'https://drive.google.com/file/d/1FbJ5L7IHaIEEMpDbh0ZU5EQkwVKptEoe/view?usp=drive_link',
                        },
                        {
                            nombre: 'Octava Ordinaria',
                            link: 'https://drive.google.com/file/d/1-SNFaTWnduPDx35A2qYy4-bhGji18_bv/view?usp=drive_link',
                        },
                        {
                            nombre: 'Novena Ordinaria',
                            link: 'https://drive.google.com/file/d/1SsZwGyhc0o6PYdFAW6LumpIX6jloOSUG/view?usp=drive_link',
                        },
                        {
                            nombre: 'Décima Ordinaria',
                            link: 'https://drive.google.com/file/d/124-DmoMGtAbittp0shYzBs7P_2oMpl9N/view?usp=drive_link',
                        },
                        {
                            nombre: 'Décima Primera Ordinaria',
                            link: 'https://drive.google.com/file/d/1cORXspHpxGI2gKZHyJ_R6EknIHaq1kyg/view?usp=drive_link',
                        },
                        {
                            nombre: 'Décima Segunda Ordinaria',
                            link: 'https://drive.google.com/file/d/1uMMkEW7d1gI1KKZF81I5_80jTo6x3aR-/view?usp=drive_link',
                        },
                        {
                            nombre: 'Primera Extraordinaria',
                            link: 'https://drive.google.com/file/d/1yPJ5TP_rs-dmnVGKrSlBz2kBwNK_IveC/view?usp=drive_link',
                        },


                    ]
                },

                {
                    titulo: 'Informes',
                    actas: [
                        {
                            nombre: '2023-2024',
                            link: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FfbEbn8VAyXgLCRAznLDO%2FInforme%20CE2023-2024.pdf?alt=media&token=ade966ab-bd5e-4c82-a0d5-71d980b0a5e0',
                        },
                        {
                            nombre: '2022-2023',
                            link: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/archivos%2FInforme%20Comisi%C3%B3n%20ejecutiva%202022-2023.pdf?alt=media&token=625a3277-21a3-47f9-9ad6-e6daadcc1fd3&_gl=1*9yv9cm*_ga*MzMwNTI3MDQ5LjE2OTE2MjQ0MDA.*_ga_CW55HF8NVT*MTY5NjUxNjgwNi40LjEuMTY5NjUxNjgzNy4yOS4wLjA',
                        },
                    ]
                },



            ],
            acuerdos: [
                {
                    titulo: 'Calendario de sesiones',
                    actas: [
                        {
                            nombre: 'Calendario',
                            link: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FfbEbn8VAyXgLCRAznLDO%2FCALENDARIO%20DE%20SESIONES%202025-2026.pdf?alt=media&token=b1cdf858-b348-44b3-a94a-468cfae31997',
                        },

                    ]
                },
                {
                    titulo: 'Lineamientos para la Comisión Ejecutiva',
                    actas: [
                        {
                            nombre: 'Lineamientos',
                            link: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/archivos%2FLINEAMIENTOS%20PARA%20LA%20COMISIO%CC%81N%20EJECUTIVA.pdf?alt=media&token=91b77538-8eb9-4ed7-87a1-a78fa9432352&_gl=1*tpqmob*_ga*MzMwNTI3MDQ5LjE2OTE2MjQ0MDA.*_ga_CW55HF8NVT*MTY5ODE2MTE4OS45LjEuMTY5ODE2MTMzNC42MC4wLjA',
                        }
                    ]
                },
            ],

            integrantes: [
                {
                    nombre: 'Karla Ivonne Natividad González',
                    cargo: 'Cooordinadora de la Comisión Ejecutiva.',
                    foto: 'cpc-king.png',
                    img: 'cc-cpc.png',
                    mail: 'karla.natividad@cpccoahuila.org.mx'
                },
                {
                    nombre: 'Carlos Antonio Franco Flores',
                    cargo: 'Consejero del Consejo de Participación Ciudadana.',
                    foto: 'cpc-caff.png',
                    img: 'cc-cpc.png',
                    mail: 'carlos.franco@cpccoahuila.org.mx'
                },
                {
                    nombre: 'Diana Marisol Flores Rivera',
                    cargo: 'Consejera del Consejo de Participación Ciudadana.',
                    foto: 'cpc-dmfr.png',
                    img: 'cc-cpc.png',
                    mail: 'diana.flores@cpccoahuila.org.mx'
                },
                {
                    nombre: 'Elidé Alejandrina Acosta Reyes ',
                    cargo: 'Secretaria Técnica del Sistema Estatal Anticorrupción',
                    foto: 'st-ear.jpg',
                    img: 'seac.png',
                    mail: 'elide.acosta@seacoahuila.org.mx'
                },
                

            ]

        }

    }
}
</script>

<style lang="scss"></style>