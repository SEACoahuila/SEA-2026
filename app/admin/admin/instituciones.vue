


<template>
<div>

    <v-container class="flex-grow-1 min-height-vh">

        <v-row justify="center">
            <v-col cols="12" class="mb-10">
                <v-layout class="" >

                    <v-row justify="center">
                        <!-- <v-col cols="12" xl="3" lg="3" md="4" v-if="userContratos || userGeneral">
                            <v-btn block @click="nuevaInstitucion = false">
                                <v-icon>mdi mdi-file-delimited-outline</v-icon>

                                Carga masiva S-Contratos
                            </v-btn>
                        </v-col> -->
                        <v-col cols="12" xl="2" lg="3" md="4"  v-if="userContratos || userGeneral">
                            <v-btn  block @click="nuevaInstitucion = true;verSancionados = false; verContratos = false; nuevoSancionado =false">
                                <v-icon>mdi mdi-plus-circle-outline</v-icon>
                                Nuevo S-Contratos
                            </v-btn>
                        </v-col>

                        <v-col   cols="12" xl="2" lg="3" md="4" v-if="userSancionados || userGeneral">
                            <v-btn  block @click="nuevaInstitucion = false; verSancionados = false; verContratos = false; nuevoSancionado = true">
                                <v-icon>mdi mdi-plus-circle-outline</v-icon>
                                Nuevo Sancionado
                            </v-btn>
                        </v-col>
                        <v-col  cols="12" xl="2" lg="3" md="4" v-if="userContratos || userGeneral">
                            <v-btn  block @click="nuevaInstitucion = false ; nuevoSancionado =false; verSancionados = false; verContratos = true">
                                <v-icon>mdi mdi-eye-settings</v-icon>

                                Ver Serv-Contratos
                            </v-btn>
                        </v-col>
                        <v-col cols="12" xl="2" lg="3" md="4" v-if="userSancionados || userGeneral">
                            <v-btn  block @click="nuevaInstitucion = false ; nuevoSancionado =false; verContratos = false; verSancionados = true">
                                <v-icon>mdi mdi-eye-settings</v-icon>

                                Ver Serv-Sancionados
                            </v-btn>
                        </v-col>
                        


                        <v-col cols="12" xl="2" lg="3" md="4" v-if="userSancionados">
                            <v-btn  block @click="nuevaInstitucion = false">
                                <v-icon>mdi mdi-eye-settings</v-icon>

                                Ver Sancionados
                            </v-btn>
                        </v-col> 
                        <v-col cols="12" xl="2" lg="2" md="4">
                            <v-btn dark block @click="cerrarSesion">
                                <v-icon>mdi mdi-logout</v-icon>

                                Cerrar Sesión
                            </v-btn>
                        </v-col>

                    </v-row>

                </v-layout>

            </v-col>

            <v-col cols="12" md="8" v-if="nuevaInstitucion">
                <v-card elevation="4" align="center" >

                    <v-card-subtitle></v-card-subtitle>
                    <h3><strong>ALTA SERVIDOR EN CONTRATACIONES </strong></h3>
                    <v-card-text>

                        <v-form ref="form" v-model="valid">
                            <v-row class="mt-4">
                                <v-col cols="12">
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
                                    <v-select label="Año de Ejercicio Fiscal" dense v-model="EjercicioFiscal" :items="YearsEjesicioFiscal" required :rules="notNullRule"></v-select>
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

            <v-col cols="12" md="8" v-if="nuevoSancionado">
                <v-card elevation="4" align="center" >

                    <v-card-subtitle></v-card-subtitle>
                    <h3><strong>ALTA SANCION DE UN SERVIDOR</strong></h3>
                    <v-card-text>

                        <v-form ref="form2" v-model="valid">
                            <v-row class="mt-4">
                                <v-col cols="12">
                                    <h3><strong>DATOS DE FUNCIONARIO </strong></h3>
                                </v-col>

                                <v-col cols="12" md="6" lg="4">
                                    <v-text-field label="Nombre" dense v-model="Nombres" :counter="50" required :rules="notNullRule"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" lg="4">
                                    <v-text-field label="Primer Apellido" dense v-model="PrimerApellido" :counter="25" required :rules="notNullRule"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" lg="4">
                                    <v-text-field label="Segundo Apellido" dense v-model="SegundoApellido" :counter="25" required :rules="notNullRule"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" lg="4">
                                    <v-select label="Género" dense v-model="Genero" :items="[
                                            { text: 'Masculino', value: 'M' },
                                            { text: 'Femenino', value: 'F' },
                                            { text: 'Otro', value: 'O' }
                                        ]" required :rules="notNullRule"></v-select>
                                </v-col>
                                <v-col cols="12" md="6" lg="4">
                                    <v-text-field label="Puesto" dense v-model="Puesto" :counter="50" required :rules="notNullRule"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" lg="4">
                                    <v-text-field label="Siglas del de Puesto" dense v-model="IdPuesto" :counter="50" required :rules="notNullRule"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field label="CURP" dense v-model="CURP" :counter="18" required :rules="CURPRules"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field label="RFC" dense v-model="RFC" :counter="13" required :rules="RFCRules"></v-text-field>
                                </v-col>
                                <v-col cols="12" >
                                    <h3><strong>DATOS DE LA SANCION </strong></h3>
                                </v-col>
                                <v-col cols="12" md="6" lg="3">
                                    <v-text-field label="Numero, folio o referencia de expediente" dense v-model="Expediente" :counter="25" required :rules="notNullRule"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" lg="3">
                                    <v-text-field label="Autoridad Sancionadora" dense v-model="AutoridadSancionadora" :counter="50" required :rules="notNullRule"></v-text-field>
                                </v-col>
                                <v-col cols="12" lg="6">
                                    <v-select label="Tipo de Falta" dense v-model="IdTipoFalta" :items="[
                                            { text: 'Negligencia Administrativa', value: 'NAD' },
                                            { text: 'Violación a Procedimientos de Contratación', value: 'VPC' },
                                            { text: 'Violación a Leyes y Normatividad Presupuestal', value: 'VLNP' },
                                            { text: 'Abuso de Autoridad', value: 'AUT' },
                                            { text: 'Cohecho o Extorsión', value: 'CEX' },
                                            { text: 'Incumplimiento en Declaración de Situación Patrimonial', value: 'IDSP' },
                                            { text: 'Delito Cometido por Servidores Públicos', value: 'DCSP' },
                                            { text: 'Ejercicio Indebido de sus Funciones en Materia Migratoria', value: 'EIFM' },
                                            { text: 'Violación a los Derechos Humanos', value: 'VDH' },
                                            { text: 'Administrativa Grave', value: 'AG' },
                                            { text: 'Administrativa No Grave', value: 'ANG' },
                                            { text: 'Acto de Corrupción', value: 'AC' },
                                            { text: 'Otro', value: 'OTRO' },
                                            { text: 'Cometer o Tolerar Conductas de Hostigamiento Sexual', value: 'HSEX' },
                                            { text: 'Peculado', value: 'PEC' },
                                            { text: 'Cometer o Tolerar Conductas de Acoso Sexual', value: 'ASEX' },
                                            { text: 'Utilización Indebida de Información', value: 'UII' },
                                            { text: 'Desvío de Recursos Públicos', value: 'DRP' },
                                            { text: 'Abuso de Funciones', value: 'AFN' },
                                            { text: 'Actuación Bajo Conflicto de Interés', value: 'ABCI' },
                                            { text: 'Contratación Indebida', value: 'CIND' },
                                            { text: 'Enriquecimiento Oculto u Ocultamiento de Conflicto de Interés', value: 'EOCI' },
                                            { text: 'Tráfico de Influencias', value: 'TINF' },
                                            { text: 'Encubrimiento', value: 'ENCB' },
                                            { text: 'Desacato', value: 'DSCT' },
                                            { text: 'Obstrucción de la Justicia', value: 'OJUST' }]" required :rules="notNullRule"></v-select>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Descripción de la Falta" dense v-model="DescripFalta" :counter="200" required :rules="notNullRule"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Causa/Motivo de los hechos" dense :counter="200" v-model="CausaMotivoHechos" :rules="notNullRule" required></v-text-field>
                                </v-col>
                                <v-col cols="12" xl="3" md="5">
                                    <v-select label="Tipo del sanción" dense v-model="IdTipoSancion" :items="[
                                            { text: 'INHABILITADO', value: 'I' },
                                            { text: 'MULTADO', value: 'M' },
                                            { text: 'SUSPENSIÓN DEL EMPLEO, CARGO O COMISIÓN', value: 'S' },
                                            { text: 'DESTITUCIÓN DEL EMPLEO, CARGO O COMISIÓN', value: 'D' },
                                            { text: 'INDEMNIZACIÓN RESARCITORIA', value: 'IRSC' },
                                            { text: 'SANCIÓN ECONÓMICA', value: 'SE' },
                                            { text: 'OTRO', value: 'O' }                                            
                                        ]" required multiple chips :rules="notNullRule"></v-select>
                                </v-col>
                                <v-col cols="12" xl="9" md="7">
                                    <v-text-field label="Decripción de la sanción" dense :counter="200" v-model="DescripcionSancion" :rules="notNullRule" required></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field label="Documento de la resolución (URL)" v-model="URLResolucion" :rules="notNullRule" dense required></v-text-field>
                                </v-col>

                                <!-- DATE PICKERS -->
                                <v-col cols="12" md="6">
                                    <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="290px">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field v-model="FechaResolucion" label="Fecha de la resolución" dense :rules="notNullRule" readonly v-bind="attrs" v-on="on"></v-text-field>
                                        </template>

                                        <v-date-picker v-model="FechaResolucion" ref="picker" locale="es-ES" :rules="notNullRule" :max="new Date().toISOString().substr(0, 10)" min="2022-01-01" @change="save"></v-date-picker>
                                    </v-menu>
                                </v-col>
                                <v-col cols="12">
                                    <h3><strong>DOCUMENTO DE SANCION </strong></h3>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field label="Título del documento" dense v-model="Titulo" :counter="25" required :rules="notNullRule"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-select label="Tipo del documento" dense v-model="IdTipoDoc" :items="[
                                            { text: 'Constancia de abstención', value: 'CA' },
                                            { text: 'Constancia de inhabilitación', value: 'CI' },
                                            { text: 'Constancia de sanción', value: 'CS' },
                                            { text: 'Resolución', value: 'RE' }
                                        ]" required :rules="notNullRule"></v-select>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Descripción del documento" dense v-model="Descripcion" :counter="100" required :rules="notNullRule"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field label="Dirección pública del documento" v-model="URLDoc" dense :counter="25" required :rules="notNullRule"></v-text-field>
                                </v-col>

                                <v-col cols="12" md="6">
                                    <v-menu ref="menu3" v-model="menu3" :close-on-content-click="false" transition="scale-transition" offset-y min-width="290px">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field v-model="Fecha" label="Fecha de creación del documento" readonly dense :rules="notNullRule" v-bind="attrs" v-on="on"></v-text-field>
                                        </template>

                                        <v-date-picker v-model="Fecha" ref="picker" locale="es-ES" :max="new Date().toISOString().substr(0, 10)" min="2022-01-01" @change="save"></v-date-picker>
                                    </v-menu>
                                </v-col>
                                <v-col cols="12"  v-if="hasM">
                                    <h3><strong>EN CASO DE MULTA </strong></h3>
                                </v-col>

                                <v-col cols="12" md="6"  v-if="hasM">
                                    <v-text-field label="Monto de la multa" v-model="MontoMulta" dense type="number"></v-text-field>
                                </v-col>

                                <v-col cols="12" md="6" v-if="hasM">
                                    <v-select label="Moneda de la multa" v-model="IdMonedaMulta" dense :items="monedasMulta"></v-select>
                                </v-col>
                               
                                <v-col cols="12" v-if="hasI">
                                    <h3><strong>EN CASO DE INHABILITACION </strong></h3>
                                </v-col>

                                <v-col cols="12" md="6" lg="4" v-if="hasI">
                                    <v-text-field label="Plazo de la inhabilitación EJEMPLO: 1 mes / 10 dias / 1 año" dense v-model="PlazoInhabilitacion"></v-text-field>
                                </v-col>

                                <v-col cols="12" md="6" lg="4" v-if="hasI">
                                    <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" transition="scale-transition" offset-y min-width="290px">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field v-model="FechaInicialInhabilitacion" label="Inicio plazo de inhabilitación" readonly v-bind="attrs" dense v-on="on"></v-text-field>
                                        </template>

                                        <v-date-picker v-model="FechaInicialInhabilitacion" ref="picker1" locale="es-ES" min="2022-01-01" @change="save"></v-date-picker>
                                    </v-menu>
                                </v-col>
                                <v-col cols="12" md="6" lg="4" v-if="hasI">
                                    <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false" transition="scale-transition" offset-y min-width="290px">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field v-model="FechaFinalInhabilitacion" label="Final plazo de inhabilitación" readonly v-bind="attrs" dense v-on="on"></v-text-field>
                                        </template>

                                        <v-date-picker v-model="FechaFinalInhabilitacion" ref="picker2" locale="es-ES" min="2022-01-01" @change="save"></v-date-picker>
                                    </v-menu>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Observaciones" dense :counter="200" v-model="Observaciones"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-card-actions>
                                        <v-btn block color="teal accent-4" @click="enviarDatosSancion" :disabled="!valid">Enviar</v-btn>

                                    </v-card-actions>

                                </v-col>
                            </v-row>

                        </v-form>
                    </v-card-text>

                </v-card>

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

</div>
</template>

<script>
import axios from "axios";

import {
    mapState,
    mapActions
} from 'vuex'
export default {
    name: 'SuperUser',
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
            Nombres: '',
            PrimerApellido: '',
            SegundoApellido: '',
            Genero: '',
            Puesto: '',
            IdPuesto: '',
            CURP: '',
            RFC: '',
            EjercicioFiscal: '',
            IDRamo: '',
            SINombres: '',
            SIPrimerApellido: '',
            SISegundoApellido: '',
            SIGenero: '',
            SIIdPuesto: '',
            SIPuesto: '',
            SICURP: '',
            SIRFC: '',
            AreasServidor: null,
            ResponsabilidadesServidor: null,
            ProcedimientosServidor: null,
            Expediente: "Expediente",
            AutoridadSancionadora: "",
            IdTipoFalta: "",
            DescripFalta: "",
            CausaMotivoHechos: "",
            URLResolucion: "",
            FechaResolucion: "",
            MontoMulta: "",
            IdMonedaMulta: "",
            PlazoInhabilitacion: "",
            FechaInicialInhabilitacion: "",
            FechaFinalInhabilitacion: "",
            Observaciones: "",
            IdTipoSancion: [],
            DescripcionSancion: "",
            IdTipoDoc: "",
            Titulo: "",
            Descripcion: "",
            URLDoc: "",
            Fecha: "",
            YearsEjesicioFiscal: ['2022', '2023'],
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
            search: '',
            search2: '',
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

        ...mapActions(['guardarUsuario', 'cerrarSesion']),

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
                this.Fecha = ''
        },
        enviarDatosSancion() {
            const SancionData = {
                Nombres: this.Nombres,
                PrimerApellido: this.PrimerApellido,
                SegundoApellido: this.SegundoApellido,
                Genero: this.Genero,
                Puesto: this.Puesto,
                IdPuesto: this.IdPuesto,
                CURP: this.CURP,
                RFC: this.RFC,
                Expediente: this.Expediente,
                AutoridadSancionadora: this.AutoridadSancionadora,
                IdTipoFalta: this.IdTipoFalta,
                DescripFalta: this.DescripFalta,
                CausaMotivoHechos: this.CausaMotivoHechos,
                URLResolucion: this.URLResolucion,
                FechaResolucion: this.FechaResolucion,
                MontoMulta: this.MontoMulta,
                IdMonedaMulta: this.IdMonedaMulta,
                PlazoInhabilitacion: this.PlazoInhabilitacion,
                FechaInicialInhabilitacion: this.FechaInicialInhabilitacion,
                FechaFinalInhabilitacion: this.FechaFinalInhabilitacion,
                Observaciones: this.Observaciones,
                IdTipoSancion: this.IdTipoSancion,
                DescripcionSancion: this.DescripcionSancion,
                IdTipoDoc: this.IdTipoDoc,
                Titulo: this.Titulo,
                Descripcion: this.Descripcion,
                URL: this.URLDoc,
                Fecha: this.Fecha
            }
            console.log(SancionData)
            const _this = this;
            let config = {
                headers: {
                    "x-token": `${this.usuario.token}`,
                },
            };
            axios.post(
                
                    `${this.$store.state.URL}/api/sanciones/sancionado`, SancionData,
                    config
                )
                .then(res => {
                    _this.nuevaInstitucion = false,
                    _this.nuevoSancionado = false,
                        _this.limpiarDatos();
                    _this.$swal({
                        title: 'Registro Exitoso!',
                        text: "Sancionado registrado con éxito",
                        icon: 'success'
                    });
                })
                .catch(e => {
                    console.log(e)
                    _this.$swal({
                        title: 'Error!',
                        text: e.response.data.msg,
                        icon: 'error'
                    });

                });
        },
        userExist() { 
     
            if (this.$store.state.usuario.data.Role == false) {
              
                this.$router.push('/admin')
  
                

            } else {
                this.traerServidores()
                this.traerSancionados()
            if (this.usuario.data.Role == 'ADMIN'  || 'USER-INSTITUCION' ) {
            console.log('Rol permitido')
            this.userGeneral = true
              
                

            }
            if (this.usuario.data.Role == 'USER-SANCION') {
                console.log('Rol permitido')
              
                this.userSancionados = true
            

            }
            if (this.usuario.data.Role == 'USER-CONTRATOS') {
                console.log('Rol permitido')
  
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
        async traerSancionados() {
            const _this = this;
            let config = {
                headers: {
                    "x-token": `${this.usuario.token}`,
                },
            };
            await axios.get(
                    `${this.$store.state.URL}/api/sanciones/misSancionados`,
                    config
                )
                .then(res => {
                this.allSancionados = res.data.Sancionados
                console.log(this.allSancionados)
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
    beforeMount(){
        
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
