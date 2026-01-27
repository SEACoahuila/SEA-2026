<template>
    <div v-if="esAdmin">

        

        <v-container class="flex-grow-1 min-height-vh" >

            <v-row justify="center">
                
                <template>
                    <v-col class="mx-auto my-4" cols="12" >
                    <v-layout  color="primary" >
                <v-bottom-navigation  grow  :fixed="$vuetify.breakpoint.xs" >
                   

                        <v-btn @click="nuevoUsuario = true; nuevaDependencia = false; verDependenciasCoahuila = false; verUsuarios= false">
                        <v-icon>mdi mdi-plus-circle-outline</v-icon>

                       Usuario
                    </v-btn>
                    <v-btn @click="nuevaDependencia = true; nuevoUsuario = false; verDependenciasCoahuila = false; verUsuarios= false">
                        <v-icon>mdi mdi-plus-circle-outline</v-icon>
                    Dependencia
                    </v-btn>

                    <v-btn @click="nuevoUsuario = false; verUsuarios= !verUsuarios;  verDependenciasCoahuila = false; nuevaDependencia = false">
                        <v-icon>mdi mdi-eye-settings</v-icon>

                        Usuarios
                    </v-btn>
                    <v-btn @click="nuevoUsuario = false; verUsuarios= false; verDependenciasCoahuila = !verDependenciasCoahuila">
                        <v-icon>mdi mdi-eye-settings</v-icon>

                       Dependencias
                    </v-btn>
               
       


                </v-bottom-navigation>
            </v-layout>
        </v-col>
                </template>
          

               

                <v-col cols="12" md="8" v-if="nuevaDependencia">
                    <v-card elevation="4" align="center" class="mt-10">

                        <v-card-subtitle></v-card-subtitle>
                        <h3><strong>ALTA NUEVA DEPENDENCIA </strong></h3>
                        <v-card-text>

                            <v-form ref="form" v-model="valid" >
                                <v-row class="mt-4">
                                    
                                  
                                    <v-col cols="12">
                                        <v-text-field label="Nombre de la dependencia" dense v-model="nombreInstitucion" :counter="200" required  :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" lg="4" md="6">
                                        <v-text-field label="Siglas de la dependencia" dense v-model="siglasInstitucion" :counter="25"
                                            required :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    

                                    <v-col cols="12">
                                        <v-card-actions>
                                            <v-btn block color="teal accent-4" @click="enviarDatosDependencia"
                                                :disabled="!valid">Crear</v-btn>

                                        </v-card-actions>


                                    </v-col>
                                </v-row>

                            </v-form>
                        </v-card-text>
                           
                    </v-card>


                </v-col>

                
                <v-col cols="12" md="8" v-if="nuevoUsuario">
                    <v-card elevation="4" align="center" class="mt-10">

                        <v-card-subtitle></v-card-subtitle>
                        <h3><strong>ALTA NUEVO USUARIO </strong></h3>
                        <v-card-text>

                            <v-form ref="form" v-model="valid" >
                                <v-row class="mt-4">
                                    
                                    <v-col cols="12" lg="4" md="6">
                                        <v-text-field label="Nombre" dense v-model="Nombres" :counter="50" required  :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" lg="4" md="6">
                                        <v-text-field label="Primer Apellido" dense v-model="PrimerApellido" :counter="25"
                                            required :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" lg="4" md="6">
                                        <v-text-field label="Segundo Apellido" dense v-model="SegundoApellido" :counter="25"
                                            required :rules="notNullRule">
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" lg="4" md="6">
                                        <v-text-field label="Correo" type="email" dense v-model="Correo" :counter="50"
                                            required :rules="emailRules"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" lg="4" md="6">
                                        <v-text-field label="Teléfono" type="number" dense v-model="telefono" :counter="10"
                                            required :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" lg="4" md="6">
                                        <v-text-field dense v-model="puestoActual" :rules="notNullRule" :counter="50"
                                            label="Puesto Actual" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" >
                                    <v-select
                                    v-model="dependencia"
                                    :items="DependenciasCoahuila"
                                    item-text="Dependencia"
                                    item-value="SiglasDependencia"
                                    label="Selecciona una dependencia"
                                  
                                    @change="updateVariables"
                                    ></v-select>                            
                                     </v-col>
                                 
                                    <v-col cols="12"  lg="4">
                                        <v-select v-model="Role" :rules="notNullRule" required dense :items=roles
                                            label="Rol de usuario"></v-select>

                                    </v-col>

                                    <v-col cols="12">
                                        <v-card-actions>
                                            <v-btn block color="teal accent-4" @click="enviarDatos"
                                                :disabled="!valid">Crear</v-btn>

                                        </v-card-actions>


                                    </v-col>
                                </v-row>

                            </v-form>
                        </v-card-text>
                          
                    </v-card>


                </v-col>

                <v-cols cols="12">
<!-- * TABLA PARA VER USUARIOS -->
                    <template v-if="verUsuarios">
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
                    :headers="nombresColumnas"
                    :items="AllUsers"
                    item-key="name"
                    class="elevation-1"
                >
                <template #item.Dependencia.SiglasDependencia="{ item }">
                <strong>{{ item.Dependencia.SiglasDependencia }}</strong>
                </template>
            </v-data-table>
                </template>
<!-- * TABLA PARA VER DEPENDENCIAS -->
                <template v-if="verDependenciasCoahuila">
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
                    :headers="nombresColumnasDependencia"
                    :items="DependenciasCoahuila"
                    item-key="Dependencias"
                    class="elevation-1"
                ></v-data-table>
                </template>

                </v-cols>
            </v-row>


        </v-container>

    </div>
</template>
    
        
<script>
import axios from "axios";
import { mapState, mapActions } from 'vuex'
export default {
    name: 'SuperUser',
    data() {
        return {
            page: {
                color: 'blacl',
                title: 'SEA USER',
                icon: 'mdi-cogs'
            },
            nuevoUsuario: false,
            nuevaDependencia: false,
            verUsuarios: false,
            verDependenciasCoahuila: false,
            search: '',
            hidden: true,
            valid: false,
            loading: false,
            notNullRule: [v => !!v || "Este campo es requerido"],
            emailRules: [
                v => !!v || "El Email es requerido",
                v => /.+@.+/.test(v) || "El Email debe ser válido",
            ],
            roles: ['ADMIN', 'USER-INSTITUCION', 'USER-INSTITUCION-CONCENTRADORA', 'USER-CONTRATOS', 'USER-CONTRATOS-CONCENTRADORA', 'USER-SANCIONES', 'USER-SANCIONES-CONCENTRADORA'],
        //    Variables a enviar
            Nombres: '',
            PrimerApellido: '',
            SegundoApellido: '',
            Correo: '',
            telefono: '',
            nombreInstitucion: '',
            siglasInstitucion: '',
            Role: '',
            puestoActual:'',
            Password: '1q2w3e',
            esAdmin: false,
            AllUsers: [],
            DependenciasCoahuila: [],
            dependencia: '',
            nombresColumnas: [
                {text: 'Dependencia', value: 'Dependencia.SiglasDependencia'},
                {text: 'Nombre', value: 'Nombres'},
                {text: 'Primer Apellido', value: 'PrimerApellido'},
                {text: 'Segundo Apellido', value: 'SegundoApellido'},
                {text: 'Segundo Apellido', value: 'SegundoApellido'},
                {text: 'Teléfono', value: 'Telefono'},
                {text: 'ROL', value: 'Role'},
                {text: 'Usuario', value: 'Correo'},
                {text: 'Estado', value: 'Estado'},
                {text: 'FirstCheck', value: 'CheckPass'},
                

            ],
            nombresColumnasDependencia: [
                {text: 'Nombre Dependencia', value: 'Dependencia'},
                {text: 'Siglas', value: 'SiglasDependencia'}
                

            ]

        }

    },

    computed: {
        ...mapState(['usuario', 'URL'])
    },
    methods: {

        ...mapActions(['guardarUsuario', 'cerrarSesion']),

        updateVariables() {
            const selectedDependencia = this.DependenciasCoahuila.find( dep => dep.SiglasDependencia === this.dependencia);
            if (selectedDependencia){
                this.siglasInstitucion = selectedDependencia.SiglasDependencia;
                this.nombreInstitucion = selectedDependencia.Dependencia
            }
        },
        enviarDatosDependencia() {
        const userData =
        {
        nombreInstitucion: this.nombreInstitucion,
        siglasInstitucion: this.siglasInstitucion,
        }
        const _this = this;
            let config = {
                headers: {
                    "x-token": `${this.usuario.token}`,
                },
            };
            axios.post(
                    `${this.$store.state.URL}/api/institucion/dependencia`, userData,
                    config
                )
                .then(res => {
                        _this.nuevoUsuario = false,
                        _this.limpiarDatos();
                        _this.$swal({
                            title: 'Registro Exitoso!',
                            text: "Nueva Dependencia Creada",
                            icon: 'success'
                        });
                })
                .catch(e => {
                    console.log(e.response)
                    _this.$swal({
                        title: 'Error!',
                        text: e.response.data.msg,
                        icon: 'error'
                    });
             
                });
        
        },

        enviarDatos(){
        const userData =
        {
        Nombres: this.Nombres,
        PrimerApellido: this.PrimerApellido,
        SegundoApellido: this.SegundoApellido,
        Correo: this.Correo,
        telefono: this.telefono,
        nombreInstitucion: this.nombreInstitucion,
        siglasInstitucion: this.siglasInstitucion,
        PuestoActual: this.puestoActual,
        Role: this.Role,
        Password: this.Password,
        }
        const _this = this;
            let config = {
                headers: {
                    "x-token": `${this.usuario.token}`,
                },
            };
            axios.post(
                    `${this.$store.state.URL}/api/institucion`, userData,
                    config
                )
                .then(res => {
                        _this.nuevoUsuario = false,
                        _this.limpiarDatos();
                        _this.$swal({
                            title: 'Registro Exitoso!',
                            text: "Nueva Institución Creada",
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
        verInstituciones(){
            const _this = this;
            let config = {
                headers: {
                    "x-token": `${this.usuario.token}`,
                },
            };
            axios.get(
                    `${this.$store.state.URL}/api/institucion`,
                    config
                )
                .then(res => {
                this.AllUsers = res.data.AllUsers
                console.log(this.AllUsers)
                })
                .catch(e => {
                    _this.$swal({
                        title: 'Error!',
                        text: e.response.data.msg,
                        icon: 'error'
                    });
             
                });
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
        
        limpiarDatos(){
        this.Nombres= '',
        this.PrimerApellido= '',
        this.SegundoApellido= '',
        this.Correo= '',
        this.telefono= '',
        this.nombreInstitucion= '',
        this.siglasInstitucion= '',
        this.puestoActual= '',
        this.Role= '',
        this.Password= '1q2w3e',
        this.nuevoUsuario= false,
        this.nuevaDependencia= false,
        this.dependencia = ''
        },
        
        userExist() {
            if (this.usuario.data.Role == 'ADMIN' ) {
            this.verInstituciones();
            this.verDependencias();
              this.esAdmin = true

            } else {
               
                this.$router.push('/')    

            
            }

        },

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
    
    