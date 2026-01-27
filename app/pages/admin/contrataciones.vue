<template>
<div>

    <v-container class="flex-grow-1 min-height-vh">

        <v-row justify="center">
            <v-col cols="12">

            <div class="text-h2" align="center">S2</div>
            <h3 align="center" class="mb-5">Servidores públicos que intervienen en contrataciones</h3>
            <v-divider ></v-divider>
            </v-col>
            <v-col cols="12" class="mb-10">
                <v-layout class="">

                    <v-row justify="center">

                        <v-col cols="12" md="3" v-if="userContratos || userGeneral">
                            <v-btn block @click="nuevaInstitucion = true;verSancionados = false; verContratos = false; nuevoSancionado =false">
                                <v-icon color="teal darken-1" class="pa-1">mdi mdi-plus-circle-outline</v-icon>
                                Nuevo servidor
                            </v-btn>
                        </v-col>

                    </v-row>

                </v-layout>

            </v-col>

            <v-col cols="12" xl="9" v-if="nuevaInstitucion">
                <v-card elevation="4" align="center">
                    <v-col align="right">
                            <v-icon  color="teal lighten-3" large class="pa-1 mr-8">mdi mdi-plus-circle-multiple</v-icon>
                        </v-col>
                   
                    
                    <h3><strong>ALTA SERVIDOR EN CONTRATACIONES </strong></h3>
                    <v-card-text>
                        <v-divider inset></v-divider>

                        <v-form ref="form" v-model="valid">
                            <v-row class="mt-4">
                                <v-col v-if="$store.state.usuario.data.Role === 'USER-CONTRATOS-CONCENTRADORA' || $store.state.usuario.data.Role === 'USER-INSTITUCION-CONCENTRADORA'">
                                    <v-icon large color="orange">mdi-office-building-marker-outline</v-icon><h4>{{  siglasInstitucion }}</h4>
                                    <v-col cols="12">
                                    <h3><strong>DEPENDENCIA A LA QUE PERTENECE EL FUNCIONARIO</strong></h3>
                                    </v-col>
                                    <v-col cols="10" >
                                        <v-autocomplete
                                    v-model="dependencia"
                                    :items="DependenciasCoahuila"
                                    item-text="Dependencia"
                                    item-value="SiglasDependencia"
                                    label="Selecciona una dependencia"
                                  
                                    @change="updateVariables"
                                    ></v-autocomplete>     
                                    </v-col>
                                    <v-divider ></v-divider>
                                    
                                </v-col>
                               
                                <v-col cols="12">
                                    <v-icon x-large color="blue darken-3">mdi-account-tie</v-icon>
                                    <h3><strong>DATOS DE FUNCIONARIO </strong></h3>
                                </v-col>

                                <v-col cols="12" md="6">
                                    <v-text-field label="Nombre" dense v-model="Nombres" :counter="50" required :rules="notNullRule"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field label="Primer Apellido" dense v-model="PrimerApellido" :counter="25" required :rules="notNullRule"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field label="Segundo Apellido" dense v-model="SegundoApellido" :counter="25" required :rules="notNullRule"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-select label="Género" dense v-model="Genero" :items="[
                                            { text: 'Masculino', value: 'M' },
                                            { text: 'Femenino', value: 'F' },
                                            { text: 'Otro', value: 'O' }
                                        ]" required :rules="notNullRule"></v-select>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field label="Puesto" dense v-model="Puesto" :counter="50" required :rules="notNullRule"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field label="ID de Puesto" dense v-model="IdPuesto" :counter="50" required :rules="notNullRule"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field label="CURP" dense v-model="CURP" :counter="18" required :rules="CURPRules"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field label="RFC" dense v-model="RFC" :counter="13" required :rules="RFCRules"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-select label="Año de Ejercicio Fiscal" dense v-model="EjercicioFiscal" :items="YearsEjercicioFiscal" required :rules="notNullRule"></v-select>
                                </v-col>

                                <v-col cols="12" md="6">
                                    <v-select label="ID de Ramo" dense v-model="IDRamo" :items="[{ text: 'Estatal', value: 1 }, { text: 'Municipal', value: 2 }]" required :rules="notNullRule"></v-select>
                                </v-col>
                                <v-col cols="12">
                                    <h3><strong>DATOS DE SUPERIOR INMEDIATO </strong></h3>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field label="Superior Inmediato Nombre" dense v-model="SINombres" :counter="50" required :rules="notNullRule"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field label="Superior Inmediato Primer Apellido" dense v-model="SIPrimerApellido" :counter="25" required :rules="notNullRule"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field label="Superior Inmediato Segundo Apellido" dense v-model="SISegundoApellido" :counter="25" required :rules="notNullRule"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-select label="Superior Inmediato Género" dense v-model="SIGenero" :items="[
                                            { text: 'Masculino', value: 'M' },
                                            { text: 'Femenino', value: 'F' },
                                            { text: 'Otro', value: 'O' }
                                        ]" required :rules="notNullRule"></v-select>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field label="Superior Inmediato Puesto" dense v-model="SIPuesto" :counter="50" required :rules="notNullRule"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field label="Superior Inmediato Siglas Puesto" dense v-model="SIIdPuesto" :counter="50" required :rules="notNullRule"></v-text-field>
                                </v-col>

                                <v-col cols="12" md="6">
                                    <v-text-field label="Superior Inmediato CURP" dense v-model="SICURP" :counter="18" required :rules="CURPRules"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field label="Superior Inmediato RFC" dense v-model="SIRFC" :counter="13" required :rules="RFCRules"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <h3><strong>DATOS DE SERVIDOR SOBRE RESPONSABILIDADES EN CONTRATOS </strong></h3>
                                </v-col>
                                <v-col cols="12" md="6">

                                    <v-select label="Áreas del Servidor" dense v-model="AreasServidor" :items="[
                                            { text: 'Técnica', value: 'T' },
                                            { text: 'Responsable de la ejecución de los trabajos', value: 'RE' },
                                            { text: 'Responsable de la contratación', value: 'RC' },
                                            { text: 'Otra', value: 'O' },
                                            { text: 'Contratante', value: 'C' },
                                            { text: 'Requirente', value: 'R' }]" multiple required :rules="notNullRule"></v-select>
                                </v-col>

                                <v-col cols="12" md="6">
                                    <v-select label="Responsabilidades del Servidor" dense v-model="ResponsabilidadesServidor" :items="[
                                                { text: 'Atención', value: 'A' },
                                                { text: 'Tramitación', value: 'T' },
                                                { text: 'Resolución', value: 'R' },
                                                { text: 'Otro', value: 'O' }]" multiple required :rules="notNullRule"></v-select>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-select label="Procedimientos del Servidor" dense v-model="ProcedimientosServidor" :items="[
                                                { text: 'Contrataciones Públicas', value: 1 },
                                                { text: 'Concesiones, licencias, permisos, autorizaciones y sus prórrogas', value: 2 },
                                                { text: 'Enajenación de bienes muebles', value: 3 },
                                                { text: 'Asignación y emisión de dictámenes de avalúos nacionales', value: 4 },
                                                { text: 'Otro', value: 5 }
                                            ]" multiple required :rules="notNullRule"></v-select>
                                </v-col>
                                <v-col cols="12">
                                    <v-card-actions>
                                        <v-btn block color="teal accent-4" @click="enviarDatos" :disabled="!valid">Enviar</v-btn>

                                    </v-card-actions>

                                </v-col>
                            </v-row>

                        </v-form>
                    </v-card-text>

                </v-card>

            </v-col>

        </v-row>

    </v-container>

</div>
</template>

<script>
import axios from "axios";

import {
    mapState,
    mapActions
} from 'vuex'
export default {
    name: 'Contrataciones',
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
            hidden: true,
            valid: false,
            loading: false,
            notNullRule: [v => !!v || "Este campo es requerido"],
            CURPRules: [
                v => !!v || "Este campo es requerido",
                v => v.length === 18 || "Este campo debe de llevar 18 carácteres ",
            ],
            RFCRules: [
                v => !!v || "Este campo es requerido",
                v => v.length === 13 || "Este campo debe de llevar 13 carácteres ",
            ],
            emailRules: [
                v => !!v || "El Email es requerido",
                v => /.+@.+/.test(v) || "El Email debe ser válido",
            ],

            //    Variables a enviar
            allSancionados: [],
            AllUsers: [],
            AreasServidor: null,
            AutoridadSancionadora: "",
            CausaMotivoHechos: "",
            CURP: '',
            dependencia: '',
            DependenciasCoahuila: [],
            Descripcion: "",
            DescripcionSancion: "",
            DescripFalta: "",
            EjercicioFiscal: '',
            Expediente: "Expediente",
            Fecha: "",
            FechaFinalInhabilitacion: "",
            FechaInicialInhabilitacion: "",
            FechaResolucion: "",
            Genero: '',
            IdInstitucion: '',
            IdMonedaMulta: "",
            IdPuesto: '',
            IDRamo: '',
            IdTipoDoc: "",
            IdTipoFalta: "",
            IdTipoSancion: [],
            menu: false,
            menu1: false,
            menu2: false,
            menu3: false,
            monedasMulta: ['MXN', 'USD'],
            MontoMulta: "",
            Nombres: '',
            Observaciones: "",
            picker: null,
            picker1: null,
            picker2: null,
            PlazoInhabilitacion: "",
            PrimerApellido: '',
            ProcedimientosServidor: null,
            Puesto: '',
            ResponsabilidadesServidor: null,
            RFC: '',
            search: '',
            search2: '',
            SegundoApellido: '',
            SICURP: '',
            SIGenero: '',
            siglasInstitucion: '',
            SIIdPuesto: '',
            SINombres: '',
            SIPrimerApellido: '',
            SIPuesto: '',
            SIRFC: '',
            SISegundoApellido: '',
            Titulo: "",
            URLDoc: "",
            URLResolucion: "",
            userContratos: false,
            userGeneral: false,
            userSancionados: false,
            YearsEjercicioFiscal: ['2022', '2023'],

        }

    },

    computed: {
        ...mapState(['usuario', 'URL']),

        hasM() {
            return this.IdTipoSancion ?.some(item => item === 'M');
        },
        hasI() {
            return this.IdTipoSancion ?.some(item => item === 'I');

        },

    },
    watch: {
        menu(val) {
            val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
        },
    },

    methods: {

        ...mapActions(['guardarUsuario', 'cerrarSesion']),
        updateVariables() {
            const selectedDependencia = this.DependenciasCoahuila.find( dep => dep.SiglasDependencia === this.dependencia);
            if (selectedDependencia){
                this.siglasInstitucion = selectedDependencia.SiglasDependencia;
                this.IdInstitucion = selectedDependencia.IdDependencia;
              
            }
        },

        verDependencias(){
            const _this = this;
            let config = {
                headers: {
                    "x-token": `${this.usuario.token}`,
                },
            };
            axios.get(
                    `${this.$store.state.URL}/api/institucion/dependencias`,
                    config
                )
                .then(res => {
                this.DependenciasCoahuila = res.data.dependencias
          
                })
                .catch(e => {
                    _this.$swal({
                        title: 'Error!',
                        text: e.response.data.msg,
                        icon: 'error'
                    });
             
                });
        },

        save(FechaResolucion) {
            this.$refs.menu.save(FechaResolucion)
        },

        enviarDatos() {
            const userData = {
                Nombres: this.Nombres,
                PrimerApellido: this.PrimerApellido,
                SegundoApellido: this.SegundoApellido,
                Genero: this.Genero,
                Puesto: this.Puesto,
                IdPuesto: this.IdPuesto,
                CURP: this.CURP,
                RFC: this.RFC,
                EjercicioFiscal: this.EjercicioFiscal,
                IDRamo: this.IDRamo,
                SINombres: this.SINombres,
                SIPrimerApellido: this.SIPrimerApellido,
                SISegundoApellido: this.SISegundoApellido,
                SIGenero: this.SIGenero,
                SIIdPuesto: this.SIIdPuesto,
                SIPuesto: this.SIPuesto,
                SICURP: this.SICURP,
                SIRFC: this.SIRFC,
                AreasServidor: this.AreasServidor,
                ResponsabilidadesServidor: this.ResponsabilidadesServidor,
                ProcedimientosServidor: this.ProcedimientosServidor,
                Dependencia: this.IdInstitucion,
                siglasDependencia: this.siglasInstitucion
               
            }
            console.log(userData)
            const _this = this;
            let config = {
                headers: {
                    "x-token": `${this.usuario.token}`,
                },
            };
            axios.post(
                    `${this.$store.state.URL}/api/servidores`, userData,
                    config
                )
                .then(res => {
                    _this.nuevaInstitucion = false,
                    _this.limpiarDatos();
                    _this.traerServidores();
                    _this.$swal({
                        title: 'Registro Exitoso!',
                        text: "Nuevo Servidor Creado",
                        icon: 'success'
                    });
                })
                .catch(e => {
                    _this.$swal({
                        title: 'Error!',
                        text: e.response.data.msg,
                        icon: 'error'
                    });

                });
        },
        limpiarDatos() {
            this.Nombres = "",
                this.PrimerApellido = "",
                this.SegundoApellido = "",
                this.Genero = "",
                this.Puesto = "",
                this.IdPuesto = "",
                this.CURP = "",
                this.RFC = "",
                this.EjercicioFiscal = "",
                this.IDRamo = "",
                this.SINombres = "",
                this.SIPrimerApellido = "",
                this.SISegundoApellido = "",
                this.SIGenero = "",
                this.SIIdPuesto = "",
                this.SIPuesto = "",
                this.SICURP = "",
                this.SIRFC = "",
                this.AreasServidor = [],
                this.ResponsabilidadesServidor = [],
                this.ProcedimientosServido = [],
                this.Expediente = '',
                this.AutoridadSancionadora = '',
                this.IdTipoFalta = '',
                this.DescripFalta = '',
                this.CausaMotivoHechos = '',
                this.URLResolucion = '',
                this.FechaResolucion = '',
                this.MontoMulta = '',
                this.IdMonedaMulta = '',
                this.PlazoInhabilitacion = '',
                this.FechaInicialInhabilitacion = '',
                this.FechaFinalInhabilitacion = '',
                this.Observaciones = '',
                this.IdTipoSancion = [],
                this.DescripcionSancion = '',
                this.IdTipoDoc = '',
                this.Titulo = '',
                this.Descripcion = '',
                this.URLDoc = '',
                this.Fecha = '',
                this.IdInstitucion= '',
                this.siglasInstitucion= ''
                this.ProcedimientosServidor = ''
        },

        userExist() {

            if (this.$store.state.usuario.data.Role == false) {

                this.$router.push('/admin')

            } else {
                this.traerServidores()
                
                if (this.usuario.data.Role == 'ADMIN' || 'USER-INSTITUCION'  || this.usuario.data.Role === 'USER-INSTITUCION-CONCENTRADORA') {
                    this.verDependencias()
                    this.userGeneral = true
                }
                if (this.usuario.data.Role == 'USER-SANCION') {
                    this.userSancionados = true
                }
                if (this.usuario.data.Role == 'USER-CONTRATOS' || this.usuario.data.Role === 'USER-CONTRATOS-CONCENTRADORA') {
                    this.verDependencias()
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
            await axios.get(
                    `${this.$store.state.URL}/api/servidores/institucion`,
                    config
                )
                .then(res => {
                    this.AllUsers = res.data.ServidoresContrataciones
                    
                })
                .catch(e => {
                    _this.$swal({
                        title: 'Error!',
                        text: e.response.data.msg,
                        icon: 'error'
                    });

                });
        },

    },
    beforeMount() {

    },
    mounted() {
        this.userExist()

    }
}
</script>

<style lang="scss" scoped>
.min-height-vh {
    min-height: 70vh;
}
</style>
