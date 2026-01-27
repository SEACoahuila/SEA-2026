<template>
    <v-container>

        <v-row>
            <TitlePages :color="page.color" :title="page.title" :icon="page.icon" :botones="botones"
                :subTitle="page.sub" />

            <v-col>

  <v-card 
    variant="outlined" 
    class="mt-12 mx-auto bg-grey-lighten-5 border-thin" 
    rounded="xl" 
    max-width="1000"
  >
    <v-card-item class="pa-6">
      <div class="d-flex align-center justify-center flex-column flex-md-row text-center text-md-left">
        <v-avatar size="64" rounded="0" class="me-md-4 mb-4 mb-md-0">
          <v-img :src="sistemaInfo.logo" alt="Logo SEI" contain />
        </v-avatar>
        <div class="text-h5 text-lg-h4 font-weight-bold text-grey-darken-3" style="line-height: 1.2;">
          {{ sistemaInfo.titulo }}
        </div>
      </div>
    </v-card-item>

    <v-divider class="mx-6"></v-divider>

    <v-card-text class="pa-8 pa-md-12">
      <div class="text-h5 font-weight-bold mb-4 text-center te">
        {{ sistemaInfo.secciones.queEs.titulo }}
      </div>
      <p class="text-body-1 text-justify text-grey-darken-2 leading-loose">
        {{ sistemaInfo.secciones.queEs.cuerpo }}
      </p>
    </v-card-text>

    <v-sheet color="grey-lighten-3" height="1" class="mx-12"></v-sheet>

    <v-card-text class="pa-8 pa-md-12 bg-white rounded-b-xl">
      <div class="text-h6 font-weight-bold mb-6 text-center">
        {{ sistemaInfo.secciones.formato.titulo }}
      </div>
      
      <div class="text-body-2 text-justify mb-4 text-grey-darken-1">
        {{ sistemaInfo.secciones.formato.descripcion }}
      </div>

      <v-alert
        type="info"
        variant="tonal"
        class="mb-8 rounded-lg"
        icon="mdi-information-outline"
      >
        {{ sistemaInfo.secciones.formato.invitacion }}
      </v-alert>

      <div class="text-center">
        <v-btn 
          size="large"
          elevation="2" 
          :color="sistemaInfo.colorBtn" 
          rounded="pill"
          :href="sistemaInfo.secciones.formato.link"
          target="_blank"
          prepend-icon="mdi-form-select"
          class="px-8 text-none"
        >
          Registro de instituciones públicas
        </v-btn>
      </div>
    </v-card-text>
  </v-card>





                <v-card class="mt-3 mb-3" cr="peac">
                    <v-col aling="center" justify="center">
                        <v-row justify="center" align="center" class="mt-5">


                            <PresentCard :btnitem="btnitem" />


                        </v-row>
                    </v-col>

                </v-card>

                <v-card class="mt-10 pa-10" color="sei">
                    <v-col cols="12">
                        <div class=" text-xl-h2 text-md-h4"> Filtros </div>
                    </v-col>
                    <v-row>

                        <v-col cols="12" lg="5" align="center"> <v-select v-model="IdDependencia"
                                @input="traerInstituciones" label="Seleccionar Dependencia" variant="solo"
                                :items="[{ 'Dependencia': 'Todas', 'IdDependencia': '' }].concat(allDependencias)"
                                item-text='Dependencia' item-value="IdDependencia"></v-select>
                        </v-col>
                        <v-col cols="12" lg="4" align="center"><v-select v-model="IdRamos" @input="traerInstituciones"
                                label="Seleccionar Ramo" :items="itemsRamos"></v-select>
                        </v-col>
                        <v-col cols="12" lg="3" align="center"><v-select v-model="EjercicioFiscal"
                                @input="traerInstituciones" label="Seleccionar Ejercicio Fiscal"
                                :items="itemsYears"></v-select>
                        </v-col>
                    </v-row>





                </v-card>
                <v-card>
                    <v-card-title class="justify-center">

                        <v-col cols="12" align="center">
                            <div class=" text-xl-h2 text-md-h4"> Datos </div>
                        </v-col>

                        <v-spacer></v-spacer>
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" single-line
                            hide-details></v-text-field>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-data-table :headers="headers" :items="servidores" :search="search" :loading='loading'>

                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
// import axios from "axios";
export default {

    name: 'servidores',
    data() {
        return {
            sistemaInfo: {
  titulo: "Sistema Estatal de servidores públicos en contrataciones",
  logo: "/sei/icons/logo_SEI.png",
  colorBtn: "gray", // O el color de tu 'page.color'
  secciones: {
    queEs: {
      titulo: "¿Qué es?",
      cuerpo: "Es un sistema que establece el mecanismo para que todas las dependencias y entidades de la Administración Pública, identifiquen y clasifiquen el nivel de responsabilidad de los servidores públicos que participan en los procedimientos de contratación. El objetivo es incrementar la eficiencia de los procesos y procedimientos del sistema para que las instituciones puedan llevar a cabo el desarrollo implementado, en tiempo y forma."
    },
    formato: {
      titulo: "Formato de pre-inscripción para incorporar el sistema dirigido las entidades públicas del Estado",
      descripcion: "Con la finalidad de establecer un canal directo, es necesaria la integración del sistema con cada una de las instituciones de Coahuila. Las instituciones, a través de un servidor público en cualquiera de sus áreas involucradas, como titulares de área, directivos, administrativos, recursos humanos y cabildos, podrán acceder y llevar a cabo el registro y seguimiento para incorporar a la institución en dichos procesos.",
      invitacion: "Para instituciones públicas del estado de Coahuila interesadas en incorporar el sistema estatal de servidores públicos en procesos de contratación, les invitamos a llenar este formato de pre-registro.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScKlik-KXfo5uvcO-5OMjcQBP0R4poGSWdG1lP6tquzxu6I_Q/viewform"
    }
  }
},
            page: {
                color: '#AD1457',
                title: 'Servidores en Contrataciones',
                sub: 'Sistema de los servidores públicos que intervengan en procedimientos de contrataciones públicas',
                icon: 'mdi-account-tie-outline'
            },
            IdDependencia: '',
            EjercicioFiscal: '',
            IdRamos: '',
            botones: [{
                titulo: 'Bases Plataforma Nacional Digital',
                icon: 'estandar de datos.png',
                href: 'https://www.plataformadigitalnacional.org/especificaciones/s2'
            },
            {
                titulo: 'Diccionario de datos',
                icon: 'datos abiertos.png',
                href: 'https://docs.google.com/spreadsheets/d/1fRhDfHtrBPYyR36zxpenXWind9FP1pLAQJOVS69QwUM/edit#gid=262781770'
            },
            {
                titulo: 'Log-In-Instituciones',
                icon: 'folder-account-outline.png',
                href: 'admin/'
            },

            ],
            btnitem: [{
                title: 'Servidores Públicos en Contrataciones:',
                desc: 'Se basa en los servidores públicos que llevan una responsabilidad con los ciudadanos ya que intervienen en procedimientos como: -Contrataciones públicas -Tramite, atención y resolución de contratos. -Concesiones, licencias, permisos o autorizaciones.',
                desc2: 'Las contrataciones públicas son uno de los pilares de un buen gobierno. Estos procesos permiten que las instituciones adquieran bienes y servicios en beneficio de las personas. Es necesario conocer quiénes son los servidores públicos responsables de llevar correctamente los procesos del gobierno.',
                src1: 'sistema1.jpg',
                src2: 'sistema1.jpg',
                link: '/peac'
            },

            ],
            servidores: [],
            allDependencias: [],
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
                value: 'Dependencium.Dependencia',
            },
            {
                text: 'Puesto',
                value: 'DatosServidor.Puesto.Puesto',
            },

            {
                text: 'Responsabilidad',
                value: 'NivelesResponsabilidad',
            },
            {
                text: 'Tipo de contrataciones',
                value: 'TipoProcedimiento',
            },
            {
                text: 'Ejercicio Fiscal',
                value: 'EjercicioFiscal',
            },
            {
                text: 'Ramo',
                value: 'Ramo.Ramo',
            },

            ],
            search: '',
            loading: true,
            itemsRamos: [
                {
                    text: 'Todos',
                    value: ""
                },
                {
                    text: 'Municipal',
                    value: "2"
                },
                {
                    text: 'Estatal',
                    value: "1"
                }
            ],
            itemsYears: [
                {
                    text: 'Todos',
                    value: ""
                },
                {
                    text: '2022',
                    value: "2022"
                },
                {
                    text: '2023',
                    value: "2023"
                }
            ],

        }

    }, // this.$axios.$post('https://pdncoah-6npsxhllvq-wl.a.run.app/Home/GetTabla?NombreTabla=Servidores&FechaIni=2021-01-01&FechaFin=2023-01-10')
    methods: {
        async traerInstituciones() {
            const _this = this;
            const queryData = {
                EjercicioFiscal: this.EjercicioFiscal,
                IdDependencia: this.IdDependencia,
                IdRamo: this.IdRamos
            }
            await axios.get(`${this.$store.state.URL}/api/servidores/public/`, { params: queryData })
                .then(res => {

                    _this.servidores = res.data.ServidoresContrataciones
                    this.loading = false

                })
                .catch(e => {
                    console.log(e)
                    _this.$swal({
                        title: 'Error!',
                        text: e.response.data.errors,
                        icon: 'error'
                    });

                });
        },
        async traerDependencias() {
            const _this = this;

            await axios.get(`${this.$store.state.URL}/api/servidores/dependencias/`)
                .then(res => {

                    this.allDependencias = res.data.allDependencias


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
    // mounted() {
    //     this.traerDependencias();
    //     this.traerInstituciones();

    // },

}


</script>

<style lang="scss" scoped></style>
