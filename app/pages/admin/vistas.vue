


<template>
<div>




    <v-container class="flex-grow-1 min-height-vh">

        <v-row justify="center">
           
               
                <v-col cols="12">

                <div class="text-h2" align="center">{{ $store.state.usuario.data.siglasInstitucion }}</div>
                <h3 align="center" class="mb-5">Datos</h3>
                <v-divider></v-divider>
                </v-col>
            
            
         
            
            <v-col cols="12" class="mb-10">
                <v-layout class="" >

                    <v-row justify="center" >
                
                        <v-col  cols="12" xl="4" lg="4"  v-if="userContratos || userGeneral">
                            <v-btn block @click="verPartSancionado = false ; verSancionados = false; verContratos = true">
                                <v-icon color="info">mdi mdi-eye-settings</v-icon>

                                Ver Servidores en Contratos <p style="color:green">{{ AllUsers.length }}</p>
                            </v-btn>
                        </v-col>
                        <v-col cols="12"  xl="4" lg="4"  v-if="userSancionados || userGeneral">
                            <v-btn  block @click="verPartSancionado =false; verContratos = false; verSancionados = true">
                                <v-icon color="warning">mdi mdi-eye-settings</v-icon>

                                Servidores Sancionados <p style="color:red">{{ allSancionados.length }}</p>
                            </v-btn>
                        </v-col>
                        <v-col cols="12"  xl="4" lg="4"  v-if="userSancionados || userGeneral">
                            <v-btn  block @click="verPartSancionado = true; verContratos = false; verSancionados = false">
                                <v-icon color="danger">mdi mdi-eye-settings</v-icon>

                                Particulares Sancionados <p style="color:red">{{ allParticularesSancionados.length }}</p>
                            </v-btn>
                        </v-col>
                        


                     
                     

                    </v-row>

                </v-layout>

            </v-col>

 
            
            <v-col cols="12"  v-if="verSancionados">
                <template>
                         <v-card-title>
                 <v-text-field
                     v-model="search"
                     append-icon="mdi-magnify"
                     label="Buscar"
                     single-line
                     hide-details
                 ></v-text-field>
                 </v-card-title>
                 <v-data-table
                     dense
                     :search="search"
                     :headers="sancionadosColumnas"
                     :items="allSancionados"
                     item-key="IdServidorPubSancionado"
                     class="elevation-1"
                 ></v-data-table>
                 </template>
            </v-col>
            
            <v-col cols="12"  v-if="verPartSancionado">
                <template>
                         <v-card-title>
                 <v-text-field
                     v-model="search"
                     append-icon="mdi-magnify"
                     label="Buscar"
                     single-line
                     hide-details
                 ></v-text-field>
                 </v-card-title>
                 <v-data-table
                     dense
                     :search="search"
                     :headers="patSancionadosColumnas"
                     :items="allParticularesSancionados"
                     item-key="IdServidorPubSancionado"
                     class="elevation-1"   
                 >
                 
                 <template v-slot:item.URLResolucion="{ item }">
                    <a :href="item.URLResolucion">
                    <v-chip
                     >
                     Ver Resolución
                    </v-chip>
                </a>
                 </template>

                </v-data-table>
                 </template>
            </v-col>
            <v-col cols="12" v-if="verContratos">
                     
                     <template>
                         <v-card-title>
                 <v-text-field
                     v-model="search2"
                     append-icon="mdi-magnify"
                     label="Buscar"
                     single-line
                     hide-details
                 ></v-text-field>
                 </v-card-title>
                 <v-data-table
                     dense
                     :search="search2"
                     :headers="nombresColumnas"
                     :items="AllUsers"
                     item-key="IdServidorEnContrataciones"
                     class="elevation-1"
                 ></v-data-table>
                 </template>
 
                
             </v-col>
   

        </v-row>
   

    </v-container>

    <v-dialog
      v-model="dialog"
      max-width="90%"
      v-if="dialog"
    >
      <v-card>
        <v-card-title class="text-h5">
            AVISO DE PRIVACIDAD SIMPLIFICADO
        </v-card-title>
        
        <v-card-text>
            La Secretaría Ejecutiva del Sistema Anticorrupción del Estado de Coahuila de Zaragoza, utilizará los datos personales aquí recabados para los trámites correspondientes del Organismo como lo son: solicitudes de información, procedimientos de recursos de revisión, contratos de prestación de servicios, servicios de proveedores, eventos de capacitación realizados por las Direcciones y Unidades Administrativas. Su información no será compartida con ninguna entidad, institución u órgano. En caso de que por alguna razón se tuviese que compartir algún dato personal, se avisará al titular de estos. Usted cuenta con la posibilidad de ejercer los derechos de Acceso, Rectificación, Cancelación y Oposición, así como el de portabilidad de los datos, ante la Dirección de Asuntos Jurídicos y Transparencia de este Secretaría Ejecutiva, ubicada en Blvd. Luis Donaldo Colosio # 703, Piso 3, Fracc. Valle Real, en Saltillo, Coahuila, una vez que haya otorgado su consentimiento para el tratamiento de estos, y se encuentren en poder de esta dependencia pública.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="amber darken-2"
            text
            to="../aviso-de-privacidad/"
            @click="dialog = false;"
          >
            Ver aviso integral
          </v-btn>

          <v-btn
            color=""
            text
            @click="noAvisoPrivacidad(false); dialog = false"
          >
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  
</div>
</template>

<script>
import axios from "axios";

import {
    mapState,
    mapActions
} from 'vuex'
export default {
    name: 'Vistas',
    data() {
        return {
            page: {
                color: 'blacl',
                title: 'SEA USER',
                icon: 'mdi-cogs'
            },
            menuFechaResolucion: false,
            nuevaInstitucion: false,
            nuevoSancionado: false,
            verSancionados: false,
            verContratos: false,
            verPartSancionado: false,
            hidden: true,
            valid: false,
            loading: false,
            dialog: false,
           
            //    Variables a enviar
           
            picker: null,
            picker1: null,
            picker2: null,
            menu: false,
            menu1: false,
            menu2: false,
            menu3: false,
            monedasMulta: ['MXN', 'USD'],
            userGeneral: false,
            userSancionados: false,
            userContratos: false,
            AllUsers: [],
            allSancionados: [],
            allParticularesSancionados: [],
            search: '',
            search2: '',
            permitidosSancion: ['ADMIN', 'USER-INSTITUCION', 'USER-SANCION', 'USER-SANCIONES-CONCENTRADORA', 'USER-INSTITUCION-CONCENTRADORA'],
            permitidosContratos: ['ADMIN', 'USER-INSTITUCION', 'USER-CONTRATOS', 'USER-CONTRATOS-CONCENTRADORA', 'USER-INSTITUCION-CONCENTRADORA'],
            nombresColumnas: [
            {
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
                text: 'Tipo de contrataciónes',
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
            patSancionadosColumnas: [
            {
                text: 'Nombre / Razón Social',
                value: 'Particular.NombreRazonSocial'
            },
            {
                text: 'Objeto Social',
                value: 'Particular.ObjetoSocial'
            },
            {
                text: 'Expediente',
                value: 'Expediente',
            },
            {
                text: 'Falta',
                value: 'Acto',
            },
            {
                text: 'Autoridad Sancionadora',
                value: 'AutoridadSancionadora',
            },
            {
                text: 'Sentido de la resolución',
                value: 'SentidoResolucion',
            },
            {
                text: 'Resolución',
                value: 'URLResolucion',
            },
            {
                text: 'Teléfono',
                value: 'Particular.Telefono'
            },

            ],
            sancionadosColumnas: [
            {
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
                text: 'Observaciones',
                value: 'Observaciones',
            },
            ]


        }

    },

    computed: {
        ...mapState(['usuario', 'URL']),
  
        hasM() {
            return this.IdTipoSancion?.some(item => item === 'M');
        },
        hasI() {
          return this.IdTipoSancion?.some(item => item === 'I');
        },

    },
    watch: {
        menu(val) {
            val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
        },
    },

    methods: {

        ...mapActions(['guardarUsuario', 'cerrarSesion', 'noAvisoPrivacidad']),

        save(FechaResolucion) {
            this.$refs.menu.save(FechaResolucion)
        },


       
        userExist() { 
     
            if (this.$store.state.usuario.data.Role == false) {
              
                this.$router.push('/admin')
  
                

            } else {
                this.traerServidores()
                this.traerSancionados()
                this.traerParticularesSancionados()

            if (this.usuario.data.Role === 'ADMIN'  || this.usuario.data.Role === 'USER-INSTITUCION' || this.usuario.data.Role === 'USER-INSTITUCION-CONCENTRADORA' ) {
                this.userGeneral = true
            }
            else if (this.usuario.data.Role === 'USER-SANCIONES' || this.usuario.data.Role === 'USER-SANCIONES-CONCENTRADORA' ) {
                this.userSancionados = true
            }
            else if (this.usuario.data.Role === 'USER-CONTRATOS' || this.usuario.data.Role === 'USER-CONTRATOS-CONCENTRADORA' ) {
                this.userContratos = true
            }
          
            }

          
    
           
            

        },
       async traerServidores() {
            const _this = this;
            let config = {
                headers: {
                    "x-token": `${this.usuario.token}`,
                },
            };
        if (_this.permitidosContratos.includes(this.usuario.data.Role)) {
            
            await axios.get(
                     `${this.$store.state.URL}/api/servidores/institucion`,
                     config
                 )
                 .then(res => {
                 this.AllUsers = res.data.ServidoresContrataciones
                 console.log(this.AllUsers)
                 })
                 .catch(e => {
                     _this.$swal({
                         title: 'Error!',
                         text: e.response.data.msg,
                         icon: 'error'
                     });
              
                 });
        }
        },
        async traerSancionados() {
            const _this = this;
            let config = {
                headers: {
                    "x-token": `${this.usuario.token}`,
                },
            };
      
        if (_this.permitidosSancion.includes(this.usuario.data.Role) ){
            
            await axios.get(
                    `${this.$store.state.URL}/api/sanciones/misSancionados`,
                    config
                )
                .then(res => {
                this.allSancionados = res.data.Sancionados
        
                })
                .catch(e => {
                    _this.$swal({
                        title: 'Error!',
                        text: e.response.data.msg,
                        icon: 'error'
                    });
             
                });
        }
        },
        async traerParticularesSancionados() {
            const _this = this;
            let config = {
                headers: {
                    "x-token": `${this.usuario.token}`,
                },
            };
    
        if (_this.permitidosSancion.includes(this.usuario.data.Role) ){ 

            await axios.get(
                    `${this.$store.state.URL}/api/sanciones/misParticularesSancionados`,
                    config
                )
                .then(res => {
                this.allParticularesSancionados = res.data.SancionadosParticulares
               
                })
                .catch(e => {
                    _this.$swal({
                        title: 'Error!',
                        text: e.response.data.msg,
                        icon: 'error'
                    });
             
                });
        }
        },
        dialogtrue() {
            if (this.$store.state.avisoPrivacidad){
                this.dialog = true
            }
            
        }


    },
    beforeMount(){
       
    },
    mounted() {
        this.userExist()
        this.dialogtrue()
    
    }
}
</script>

<style lang="scss" scoped>
.min-height-vh {
    min-height: 70vh;
}
</style>
