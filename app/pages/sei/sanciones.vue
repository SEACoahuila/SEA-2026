<template>
    <v-container>

        <v-row>
            <TitlePages :color="page.color" :title="page.title" :icon="page.icon" :botones="botones"
                :subTitle="page.sub" />
            <v-col>
                <PresentCard :btnitem="btnitem" />

                <v-card color="peac" class="pa-5 mt-12">

                    <v-card-title class=" justify-center">
                        <div class=" text-xl-h4 text-md-h5 mt-5">
                            <v-avatar size="40" tile>

                                <img :src="('/sei/icons/logo_SEI.png')" alt="alt">
                            </v-avatar>

                            Sistema Estatal de servidores públicos y particulares sancionados
                        </div>
                    </v-card-title>
                    <v-divider></v-divider>

                    <v-card-text align="center" class="pa-12">

                        <p class="text-h5">¿Qué es?:</p>
                        <p>Sistema que permitirá la publicación de los datos sobre las sanciones impuestas a los
                            funcionarios públicos y particulares, en relación con los procedimientos legales
                            establecidos
                            para emitir sanciones y faltas. Con el fin de hacer públicos los antecedentes de sancionados
                            en donde se involucran contratantes privados, los funcionarios públicos y los órganos
                            internos de control entre otras autoridades sancionadoras.</p>
                    </v-card-text>
                    <v-divider class="ma-8"></v-divider>
                    <v-card-text align="center" class="pa-6">

                        <p class="text-h5">Formato de pre-inscripción para incorporar el sistema dirigido las entidades
                            públicas del Estado</p>

                        <p class="text-justify">
                            Con la finalidad de establecer un canal directo, es necesaria la integración del sistema con
                            cada una de las instituciones de Coahuila. Las instituciones, a través de un servidor
                            público
                            en cualquiera de sus áreas involucradas, como titulares de área, directivos,
                            administrativos,
                            recursos humanos y cabildos, podrán acceder y llevar a cabo
                            el registro y seguimiento para incorporar a la institución en dichos procesos.
                        </p>
                        <p>Para instituciones públicas del estado de Coahuila interesadas en incorporar el sistema
                            estatal
                            de servidores públicos en procesos de contratación, les invitamos a llenar este formato de
                            pre-registro.
                        </p>
                        <v-btn elevation="3" :color="page.color" dark
                            href="https://docs.google.com/forms/d/e/1FAIpQLScKlik-KXfo5uvcO-5OMjcQBP0R4poGSWdG1lP6tquzxu6I_Q/viewform">
                            Registro de instituciones públicas</v-btn>
                    </v-card-text>

                </v-card>

                <!-- <v-card class="mt-10 pa-10" color="sei">

                    <v-card-title class="justify-center">
                        <div class=" text-xl-h2 text-md-h4"> Datos </div>
                    </v-card-title>
                    <v-divider></v-divider>
            

                </v-card> -->


                <!-- <template>

              


                <v-data-table
                    :headers="headers"
                    :items="allSancionados"
                
                    :expanded.sync="expanded"
                    item-key="IdServidorPubSancionado"
                    show-expand
                    class="elevation-1"
                >
                    <template v-slot:top>
                    <v-toolbar flat>
                        <v-toolbar-title>Servidores Sancionados</v-toolbar-title>
                        <v-spacer></v-spacer>
                    
                    </v-toolbar>
                    </template>
<template v-slot:expanded-item="{ headers, item }">
                    <td :colspan="headers.length">
                        <h4>Descripción de Falta:</h4> {{item.DescripFalta}} 
                        <h4>Fecha de resolución</h4> {{item.FechaResolucion}} 
                        <h4>Causa motivos y hechos:</h4> {{item.CausaMotivoHechos}} 
                        <h4 v-if="item.MontoMulta">Monto de multa:</h4> {{item.MontoMulta + item.IdMonedaMulta}}
                        <h4 v-if="item.Observaciones">Observaciónes</h4> {{item.Observaciones}}
                        <h4 v-if="item.PlazoInhabilitacion">Plazo de Inhabilitación</h4> {{item.PlazoInhabilitacion}}
                    </td>
                    </template>
</v-data-table>
</template> -->


            </v-col>

        </v-row>

    </v-container>
</template>


<script>
// import axios from "axios";
export default {
    name: 'sanciones',
    data() {
        return {
            page: {
                color: '#135c93',
                title: 'Sancionados',
                sub: 'Servidores públicos y particulares sancionados',
                icon: 'mdi-scale-balance'
            },
            botones: [{
                titulo: 'Bases Plataforma Nacional Digital',
                icon: 'estandar de datos.png',
                href: 'https://www.plataformadigitalnacional.org/especificaciones/s3'
            },
            {
                titulo: 'Diccionario de datos',
                icon: 'datos abiertos.png',
                href: 'https://docs.google.com/spreadsheets/d/1wVaVFEJQloanwasIAASFiKGC8mbNEmeijK0F58PxgCA/edit#gid=610045439'
            },
            {
                titulo: 'Log-In-Instituciones',
                icon: 'folder-account-outline.png',
                href: 'admin/'
            },


            ],
            btnitem: [{
                title: 'Sistema Estatal de servidores públicos y particulares sancionados',
                desc: 'En la actualidad, la información de los servidores públicos y particulares sancionados de los diferentes niveles de gobierno se encuentra contenida en diversos formatos, bases de datos y sistemas de información; cada uno de ellos con particularidades tecnológicas y reglas de negocio distintas, dificultando la integración y la interoperabilidad de los datos. El Estándar para la Interoperabilidad de Datos de Servidores Públicos y Particulares Sancionados surge a partir de la necesidad de distribuir, comparar y analizar la información de una manera uniforme e interoperable.',
                desc2: 'Por ello el sistema establece una herramienta que permitirá la consulta de información de las diferentes instituciones de los tres niveles de gobierno.',
                src1: 'sistema1.jpg',
                src2: 'sistema2.jpg',
                link: '#'
            },

            ],
            allSancionados: [],
            expanded: [],
            singleExpand: true,
            headers: [{
                text: 'Nombre',
                value: 'DatosServidor.Nombres',
                sortable: true,
                align: 'start',
            },
            {
                text: 'Primer Apellido',
                value: 'DatosServidor.PrimerApellido',
            },
            {
                text: 'Segundo Apellido',
                value: 'DatosServidor.SegundoApellido',
            },
            {
                text: 'Dependencia',
                value: 'Dependencia.Dependencia',
            },
            {
                text: 'Expediente',
                value: 'Expediente',
            },
            {
                text: 'Falta',
                value: 'Falta.TipoFalta',
            },
            {
                text: 'Autoridad Sancionadora',
                value: 'AutoridadSancionadora',
            },
            {
                text: '',
                value: 'data-table-expand'
            },
            ]


        }

    },
    methods: {
        traerSancionados() {
            const _this = this;
            axios.get(`${this.$store.state.URL}/api/sanciones/sancionados`)
                .then(res => {

                    this.allSancionados = res.data.Sancionados
                    console.log(this.allSancionados)

                })
                .catch(e => {
                    console.log(e)
                    _this.$swal({
                        title: 'Error!',
                        text: e.response.data.errors,
                        icon: 'error'
                    });

                });
        }
    },
    mounted() {
        // this.traerSancionados();
    }
}
</script>


<style lang="scss"></style>
