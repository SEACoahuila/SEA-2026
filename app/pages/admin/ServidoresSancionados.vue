


<template>
    <div>

        <v-container class="flex-grow-1 min-height-vh">




            <v-row justify="center">
                <v-col cols="12">

                    <div class="text-h2" align="center">S3</div>
                    <h3 align="center" class="mb-5">Servidores públicos y particulaes sancionados</h3>
                    <v-divider></v-divider>
                </v-col>

                <v-col cols="12" class="mb-10">

                    <v-layout class="">

                        <v-row justify="center">



                            <v-col cols="10" xl="4" md="6" v-if="userSancionados || userGeneral">

                                <v-btn block
                                    @click="nuevoPartSancionado = false; nuevoSancionado = true; colorS = 'blue-grey lighten-4'; colorP = ''"
                                    :color="colorS">
                                    <v-icon color="warning" class="pa-1">mdi mdi-plus-circle-outline</v-icon>
                                    Nuevo Servidor
                                </v-btn>
                            </v-col>
                            <v-col cols="10" xl="4" md="6" v-if="userSancionados || userGeneral">
                                <v-btn block
                                    @click=" nuevoSancionado = false; nuevoPartSancionado = true; colorP = 'blue-grey lighten-4'; colorS = ''"
                                    :color="colorP">
                                    <v-icon color="info" class="pa-1">mdi mdi-plus-circle-outline</v-icon>
                                    Nuevo Particular
                                </v-btn>
                            </v-col>






                        </v-row>

                    </v-layout>

                </v-col>



                <v-col cols="12" xl="10" v-if="nuevoSancionado">
                    
                    <v-card elevation="4" align="center">
                        <v-col align="right">
                            <v-icon  color="amber lighten-3" large class="pa-1 mr-8">mdi mdi-plus-circle-multiple</v-icon>
                        </v-col>
         
                         
                        
                        <h3><strong>ALTA SANCIÓN DE UN SERVIDOR</strong></h3>
                        <v-card-text>
                            <v-divider inset></v-divider>
                            <v-form ref="form2" v-model="valid">
                                <v-row class="mt-4">
                                   
                                    <v-col
                                        v-if="$store.state.usuario.data.Role === 'USER-SANCIONES-CONCENTRADORA' || $store.state.usuario.data.Role === 'USER-INSTITUCION-CONCENTRADORA'">
                                        <v-icon large color="orange">mdi-office-building-marker-outline</v-icon><h4>{{  siglasInstitucion }}</h4>
                                        <v-col cols="12">
                                            
                                            <h3><strong>DEPENDENCIA A LA QUE PERTENECE EL FUNCIONARIO</strong></h3>
                                          
                                        </v-col>
                                        <v-col cols="10">
                                            <v-autocomplete v-model="dependencia" :items="DependenciasCoahuila"
                                                item-text="Dependencia" item-value="SiglasDependencia"
                                                label="Selecciona una dependencia" @change="updateVariables"></v-autocomplete>
                                        </v-col>
                                        <v-divider ></v-divider>

                                    </v-col>
                                    <v-col cols="12">
                                        <v-icon x-large color="blue darken-3">mdi-account-tie</v-icon>
                                        <h3><strong>DATOS DE FUNCIONARIO </strong></h3>
                                    </v-col>



                                    <v-col cols="12" md="6" lg="4">
                                        <v-text-field label="Nombre" dense v-model="Nombres" :counter="50" required
                                            :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" lg="4">
                                        <v-text-field label="Primer Apellido" dense v-model="PrimerApellido" :counter="25"
                                            required :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" lg="4">
                                        <v-text-field label="Segundo Apellido" dense v-model="SegundoApellido" :counter="25"
                                            required :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" lg="4">
                                        <v-select label="Género" dense v-model="Genero" :items="[
                                            { text: 'Masculino', value: 'M' },
                                            { text: 'Femenino', value: 'F' },
                                            { text: 'Otro', value: 'O' }
                                        ]
                                            " required :rules="notNullRule"></v-select>
                                    </v-col>
                                    <v-col cols="12" md="6" lg="4">
                                        <v-text-field label="Puesto" dense v-model="Puesto" :counter="50" required
                                            :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" lg="4">
                                        <v-text-field label="Siglas del de Puesto" dense v-model="IdPuesto" :counter="50"
                                            required :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field label="CURP" dense v-model="CURP" :counter="18" required
                                            :rules="CURPRules"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field label="RFC" dense v-model="RFC" :counter="13" required
                                            :rules="RFCRules"></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-icon x-large color="teal darken-3">mdi mdi-text</v-icon>
                                        <h3><strong>DATOS DE LA SANCIÓN </strong></h3>
                                    </v-col>
                                    <v-col cols="12" md="6" lg="3">
                                        <v-text-field label="Numero, folio o referencia de expediente" dense
                                            v-model="Expediente" :counter="25" required :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" lg="3">
                                        <v-text-field label="Autoridad Sancionadora" dense v-model="AutoridadSancionadora"
                                            :counter="50" required :rules="notNullRule"></v-text-field>
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
                                            { text: 'Obstrucción de la Justicia', value: 'OJUST' }]
                                            " required :rules="notNullRule"></v-select>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field label="Descripción de la Falta" dense v-model="DescripFalta"
                                            :counter="200" required :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field label="Causa / Motivo de los hechos" dense :counter="200"
                                            v-model="CausaMotivoHechos" :rules="notNullRule" required></v-text-field>
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
                                        ]
                                            " required multiple chips :rules="notNullRule"></v-select>
                                    </v-col>
                                    <v-col cols="12" xl="9" md="7">
                                        <v-text-field label="Decripción de la sanción" dense :counter="200"
                                            v-model="DescripcionSancion" :rules="notNullRule" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-file-input type="file" counter show-size label='Documento de la resolución'
                                            @change="subirDocumentoResolucion" truncate-length="25" dense
                                            required></v-file-input>
                                    </v-col>

                                    <!-- DATE PICKERS -->
                                    <v-col cols="12" md="6">
                                        <v-menu ref="menu" v-model="menu" :close-on-content-click="false"
                                            transition="scale-transition" offset-y min-width="290px">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field v-model="FechaResolucion" label="Fecha de la resolución" dense
                                                    :rules="notNullRule" readonly v-bind="attrs" v-on="on"></v-text-field>
                                            </template>

                                            <v-date-picker v-model="FechaResolucion" ref="picker" locale="es-ES"
                                                :rules="notNullRule" :max="new Date().toISOString().substr(0, 10)"
                                                min="2012-01-01" @change="save"></v-date-picker>
                                        </v-menu>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-icon  color="red lighten-2" x-large class="pa-1">mdi-file-account-outline</v-icon>
                                        <h3><strong>DOCUMENTO DE SANCIÓN </strong></h3>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field label="Título del documento" dense v-model="Titulo" :counter="25"
                                            required :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-select label="Tipo del documento" dense v-model="IdTipoDoc" :items="[
                                            { text: 'Constancia de abstención', value: 'CA' },
                                            { text: 'Constancia de inhabilitación', value: 'CI' },
                                            { text: 'Constancia de sanción', value: 'CS' },
                                            { text: 'Resolución', value: 'RE' }
                                        ]
                                            " required :rules="notNullRule"></v-select>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field label="Descripción del documento" dense v-model="Descripcion"
                                            :counter="100" required :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">

                                        <v-file-input type="file" counter show-size label='Documento de Sanción'
                                            @change="subirDocumentoSancion" truncate-length="25" dense
                                            required></v-file-input>
                                    </v-col>

                                    <v-col cols="12" md="6">
                                        <v-menu ref="menu3" v-model="menu3" :close-on-content-click="false"
                                            transition="scale-transition" offset-y min-width="290px">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field v-model="Fecha" label="Fecha de creación del documento"
                                                    readonly dense :rules="notNullRule" v-bind="attrs"
                                                    v-on="on"></v-text-field>
                                            </template>

                                            <v-date-picker v-model="Fecha" ref="picker" locale="es-ES"
                                                :max="new Date().toISOString().substr(0, 10)" min="2015-01-01"
                                                @change="save"></v-date-picker>
                                        </v-menu>
                                    </v-col>
                                    <v-col cols="12" v-if="hasM">
                                        <h3><strong>EN CASO DE MULTA </strong></h3>
                                    </v-col>

                                    <v-col cols="12" md="6" v-if="hasM">
                                        <v-text-field label="Monto de la multa" v-model="MontoMulta" dense
                                            type="number"></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="6" v-if="hasM">
                                        <v-select label="Moneda de la multa" v-model="IdMonedaMulta" dense
                                            :items="monedasMulta"></v-select>
                                    </v-col>

                                    <v-col cols="12" v-if="hasI">
                                        <h3><strong>EN CASO DE INHABILITACION </strong></h3>
                                    </v-col>

                                    <v-col cols="12" md="6" lg="4" v-if="hasI">
                                        <v-text-field label="Plazo de la inhabilitación EJEMPLO: 1 mes / 10 dias / 1 año"
                                            dense v-model="PlazoInhabilitacion"></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="6" lg="4" v-if="hasI">
                                        <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false"
                                            transition="scale-transition" offset-y min-width="290px">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field v-model="FechaInicialInhabilitacion"
                                                    label="Inicio plazo de inhabilitación" readonly v-bind="attrs" dense
                                                    v-on="on"></v-text-field>
                                            </template>

                                            <v-date-picker v-model="FechaInicialInhabilitacion" ref="picker1" locale="es-ES"
                                                min="2022-01-01" @change="save"></v-date-picker>
                                        </v-menu>
                                    </v-col>
                                    <v-col cols="12" md="6" lg="4" v-if="hasI">
                                        <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false"
                                            transition="scale-transition" offset-y min-width="290px">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field v-model="FechaFinalInhabilitacion"
                                                    label="Final plazo de inhabilitación" readonly v-bind="attrs" dense
                                                    v-on="on"></v-text-field>
                                            </template>

                                            <v-date-picker v-model="FechaFinalInhabilitacion" ref="picker2" locale="es-ES"
                                                min="2022-01-01" @change="save"></v-date-picker>
                                        </v-menu>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field label="Observaciones" dense :counter="200"
                                            v-model="Observaciones"></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-card-actions>
                                            <v-btn block color="teal accent-4" @click="enviarDatosSancion"
                                                :disabled="!valid">Enviar</v-btn>

                                        </v-card-actions>

                                    </v-col>
                                </v-row>

                            </v-form>
                        </v-card-text>

                    </v-card>

                </v-col>




                <v-col cols="12" xl="10" v-if="nuevoPartSancionado">
                    <v-card elevation="4" align="center">
                        <v-col align="right">
                            <v-icon  color="teal lighten-3" large class="pa-1 mr-8">mdi mdi-plus-circle-multiple</v-icon>
                        </v-col>
                 
                        <h3><strong>ALTA SANCIÓN A PARTICULAR</strong></h3>
                        <v-card-text>
                            <v-divider></v-divider>
                            <v-form ref="form2" v-model="valid">
                                <v-row class="mt-4">
                                    
                                    <v-col cols="12">
                                        <v-icon  color="blue darken-3" x-large class="pa-1">mdi-store-edit</v-icon>
                                        <h3><strong>DATOS DE PARTICULAR </strong></h3>
                                    </v-col>

                                    <v-col cols="12" md="6">
                                        <v-text-field label="Nombre Razon Social" dense v-model="NombreRazonSocial"
                                            :counter="100" required :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field label="Objeto Social" dense v-model="ObjetoSocial" :counter="100"
                                            required :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" lg="4">
                                        <v-text-field label="RFC" dense v-model="RFC" :counter="13" required
                                            :rules="RFCRules"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" lg="4">
                                        <v-select label="Tipo de Persona" dense v-model="IdTipoPersona" :items="[
                                            { text: 'Moral', value: 'M' },
                                            { text: 'Física', value: 'F' }
                                        ]
                                            " required :rules="notNullRule"></v-select>
                                    </v-col>

                                    <v-col cols="12" md="6" lg="4">
                                        <v-text-field label="Teléfono" dense v-model="Telefono" :counter="10" required
                                            :rules="notNullRule" type="number"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" lg="4">
                                        <v-select label="País" dense v-model="IdPais" :items="[
                                            { text: 'México', value: 'MX' }
                                        ]
                                            " required :rules="notNullRule"></v-select>
                                    </v-col>
                                    <v-col cols="12" md="6" lg="4">
                                        <v-autocomplete label="Estado" dense v-model="IdEntidad" :items="Entidades"
                                            item-text="Nom_Ent" item-value="Cve_Ent" required :rules="notNullRule"
                                            @change="traerMunicipios">

                                        </v-autocomplete>
                                    </v-col>
                                    <v-col cols="12" md="6" lg="4">
                                        <v-autocomplete label="Municipio" dense v-model="IdMunicipio" :items="Municipios"
                                            item-text="Nom_Mun" item-value="Cve_Mun" required :rules="notNullRule"
                                            @change="traerLocalidades"></v-autocomplete>
                                    </v-col>
                                    <v-col cols="12" md="6" lg="8">
                                        <v-autocomplete label="Localidad" dense v-model="IdLocalidad" :items="Localidades"
                                            item-text="Nom_Loc" item-value="Cve_Loc" required
                                            :rules="notNullRule"></v-autocomplete>
                                    </v-col>
                                    <v-col cols="12" md="6" lg="4">
                                        <v-text-field label="Código Postal" dense v-model="CP" :counter="10" required
                                            :rules="notNullRule" type="number"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="3" lg="3">
                                        <v-text-field label="Tipo de vialidad" dense v-model="TipoVialidad" :counter="50"
                                            required :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="5">
                                        <v-text-field label="Vialidad" dense v-model="Vialidad" :counter="50"
                                            :rules="notNullRule" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="2">
                                        <v-text-field label="Numero Exterior" dense v-model="NumeroExterior" :counter="18"
                                            required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="2">
                                        <v-text-field label="Numero Interior" dense v-model="NumeroInterior" :counter="18"
                                            required></v-text-field>
                                    </v-col>
                                    <v-col cols="12">

                                        <h3><strong>DIRECTOR GENERAL </strong></h3>
                                    </v-col>
                                    <v-col cols="12" md="6" lg="3">
                                        <v-text-field label="Nombres" dense v-model="DirectorGeneral_Nombres" :counter="50"
                                            required :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" lg="3">
                                        <v-text-field label="Primer Apellido" dense v-model="DirectorGeneral_PrimerApellido"
                                            :counter="25" required :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" lg="3">
                                        <v-text-field label="Segundo Apellido" dense
                                            v-model="DirectorGeneral_SegundoApellido" :counter="25" required
                                            :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" lg="3">
                                        <v-text-field label="CURP" dense v-model="DirectorGeneral_CURP" :counter="18"
                                            required :rules="CURPRules"></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <h3><strong>APODERADO LEGAL</strong></h3>
                                    </v-col>
                                    <v-col cols="12" md="6" lg="3">
                                        <v-text-field label="Nombres" dense v-model="ApoderadoLegal_Nombres" :counter="50"
                                            required :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" lg="3">
                                        <v-text-field label="Primer Apellido" dense v-model="ApoderadoLegal_PrimerApellido"
                                            :counter="25" required :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" lg="3">
                                        <v-text-field label="Segundo Apellido" dense
                                            v-model="ApoderadoLegal_SegundoApellido" :counter="25" required
                                            :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" lg="3">
                                        <v-text-field label="CURP" dense v-model="ApoderadoLegal_CURP" :counter="18"
                                            required :rules="CURPRules"></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-icon  color="blue lighten-3" x-large class="pa-1">mdi-tooltip-account</v-icon>
                                        <h3><strong>RESPONSABLE DE LA SANCIÓN</strong></h3>
                                    </v-col>
                                    <v-col cols="12" md="6" lg="4">
                                        <v-text-field label="Nombres" dense v-model="Responsable_Nombres" :counter="50"
                                            required :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" lg="4">
                                        <v-text-field label="Primer Apellido" dense v-model="Responsable_PrimerApellido"
                                            :counter="25" required :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" lg="4">
                                        <v-text-field label="Segundo Apellido" dense v-model="Responsable_SegundoApellido"
                                            :counter="25" required :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field label="Autoridad Sancionadora" dense v-model="AutoridadSancionadora"
                                            :counter="50" required :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field label="Sentido de la resolución" dense v-model="SentidoResolucion"
                                            :counter="100" required :rules="notNullRule"></v-text-field>
                                    </v-col>




                                    <v-col cols="12">
                                        <v-icon x-large color="teal darken-3">mdi mdi-text</v-icon>
                                        <h3><strong>DATOS DE LA SANCIÓN </strong></h3>
                                    </v-col>
                                    <v-col cols="12" md="3">
                                        <v-text-field label="Numero, folio o referencia de expediente" dense
                                            v-model="Expediente" :counter="25" required :rules="notNullRule"></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="9">

                                        <v-text-field
                                            label="Tipo de Falta: EJ: soborno, participación ilícita, tráfico de influencias, uso información falsa,colusión, obstrucción de facultades, contratación indebida, uso indebido de recusos públicos."
                                            dense v-model="IdTipoFalta" :counter="100" required
                                            :rules="notNullRule"></v-text-field>

                                        <!-- <v-select label="Tipo de Falta" dense v-model=" IdTipoFalta " :items="
                                            [
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
                                                { text: 'Obstrucción de la Justicia', value: 'OJUST' }]
                                        " required
                                            :rules=" notNullRule "></v-select> -->
                                    </v-col>

                                    <v-col cols="12">
                                        <v-text-field label="Objeto del contrato" dense v-model="ObjetoContrato"
                                            :counter="200" required :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field label="Causa/Motivo de los hechos" dense :counter="200"
                                            v-model="CausaMotivoHechos" :rules="notNullRule" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field label="Acto que originó la investigación" dense :counter="200"
                                            v-model="Acto" :rules="notNullRule" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" xl="3" md="5">
                                        <v-select label="Tipo del sanción" dense v-model="IdTipoSancion" :items="[
                                            { text: 'INHABILITADO', value: 'I' },
                                            { text: 'MULTADO', value: 'M' },
                                            { text: 'SUSPENSIÓN DE ACTIVIDADES', value: 'S' },
                                            { text: 'DISOLUCIÓN DE LA SOCIEDAD', value: 'D' },
                                            { text: 'AMONESTACIÓN', value: 'A' },
                                            { text: 'INDEMNIZACIÓN POR LOS DAÑOS Y PERJUICIOS OCASIONADOS A LA HACIENDA PÚBLICA FEDERAL, LOCAL O MUNICIPAL, O AL PATRIMONIO DE LOS ENTES PÚBLICOS.', value: 'IND' },
                                            { text: 'SANCIÓN ECONÓMICA', value: 'SE' },
                                            { text: 'OTRO', value: 'O' }
                                        ]
                                            " required multiple chips :rules="notNullRule"></v-select>
                                    </v-col>
                                    <v-col cols="12" xl="9" md="7">
                                        <v-text-field label="Decripción de la sanción" dense :counter="200"
                                            v-model="DescripcionSancion" :rules="notNullRule" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">

                                        <v-file-input type="file" counter show-size label='Documento de la resolución'
                                            @change="subirDocumentoResolucion" truncate-length="25" dense
                                            required></v-file-input>
                                    </v-col>

                                    <!-- DATE PICKERS -->
                                    <v-col cols="12" md="6">
                                        <v-menu ref="menu" v-model="menu" :close-on-content-click="false"
                                            transition="scale-transition" offset-y min-width="290px">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field v-model="FechaResolucion" label="Fecha de la resolución" dense
                                                    :rules="notNullRule" readonly v-bind="attrs" v-on="on"></v-text-field>
                                            </template>

                                            <v-date-picker v-model="FechaResolucion" ref="picker" locale="es-ES"
                                                :rules="notNullRule" :max="new Date().toISOString().substr(0, 10)"
                                                min="2012-01-01" @change="save"></v-date-picker>
                                        </v-menu>
                                    </v-col>
                                    
                                    <v-col cols="12">
                                        <v-icon  color="red lighten-2" x-large class="pa-1">mdi-file-account-outline</v-icon>
                                        <h3><strong>DOCUMENTO DE SANCIÓN </strong></h3>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field label="Título del documento" dense v-model="Titulo" :counter="25"
                                            required :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-select label="Tipo del documento" dense v-model="IdTipoDoc" :items="[
                                            { text: 'Constancia de abstención', value: 'CA' },
                                            { text: 'Constancia de inhabilitación', value: 'CI' },
                                            { text: 'Constancia de sanción', value: 'CS' },
                                            { text: 'Resolución', value: 'RE' }
                                        ]
                                            " required :rules="notNullRule"></v-select>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field label="Descripción del documento" dense v-model="Descripcion"
                                            :counter="100" required :rules="notNullRule"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">

                                        <v-file-input type="file" counter show-size label='Documento de Sanción'
                                            @change="subirDocumentoSancion" truncate-length="25" dense
                                            required></v-file-input>
                                    </v-col>

                                    <v-col cols="12" md="6">
                                        <v-menu ref="menu3" v-model="menu3" :close-on-content-click="false"
                                            transition="scale-transition" offset-y min-width="290px">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field v-model="Fecha" label="Fecha de creación del documento"
                                                    readonly dense :rules="notNullRule" v-bind="attrs"
                                                    v-on="on"></v-text-field>
                                            </template>

                                            <v-date-picker v-model="Fecha" ref="picker" locale="es-ES"
                                                :max="new Date().toISOString().substr(0, 10)" min="2012-01-01"
                                                @change="save"></v-date-picker>
                                        </v-menu>
                                    </v-col>
                                    <v-col cols="12" v-if="hasM">
                                        <h3><strong>EN CASO DE MULTA </strong></h3>
                                    </v-col>

                                    <v-col cols="12" md="6" v-if="hasM">
                                        <v-text-field label="Monto de la multa" v-model="MontoMulta" dense
                                            type="number"></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="6" v-if="hasM">
                                        <v-select label="Moneda de la multa" v-model="IdMonedaMulta" dense
                                            :items="monedasMulta"></v-select>
                                    </v-col>

                                    <v-col cols="12" v-if="hasI">
                                        <h3><strong>EN CASO DE INHABILITACION </strong></h3>
                                    </v-col>

                                    <v-col cols="12" md="6" lg="4" v-if="hasI">
                                        <v-text-field label="Plazo de la inhabilitación EJEMPLO: 1 mes / 10 dias / 1 año"
                                            dense v-model="PlazoInhabilitacion"></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="6" lg="4" v-if="hasI">
                                        <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false"
                                            transition="scale-transition" offset-y min-width="290px">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field v-model="FechaInicialInhabilitacion"
                                                    label="Inicio plazo de inhabilitación" readonly v-bind="attrs" dense
                                                    v-on="on"></v-text-field>
                                            </template>

                                            <v-date-picker v-model="FechaInicialInhabilitacion" ref="picker1" locale="es-ES"
                                                min="2022-01-01" @change="save"></v-date-picker>
                                        </v-menu>
                                    </v-col>
                                    <v-col cols="12" md="6" lg="4" v-if="hasI">
                                        <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false"
                                            transition="scale-transition" offset-y min-width="290px">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field v-model="FechaFinalInhabilitacion"
                                                    label="Final plazo de inhabilitación" readonly v-bind="attrs" dense
                                                    v-on="on"></v-text-field>
                                            </template>

                                            <v-date-picker v-model="FechaFinalInhabilitacion" ref="picker2" locale="es-ES"
                                                min="2022-01-01" @change="save"></v-date-picker>
                                        </v-menu>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field label="Observaciones" dense :counter="200"
                                            v-model="Observaciones"></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-card-actions>
                                            <v-btn block color="teal accent-4" @click="enviarDatosPartSancion"
                                                :disabled="!valid">Enviar</v-btn>

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
import { uuid } from "vue-uuid";
import {
    mapState,
    mapActions
} from 'vuex'
export default {

    name: 'Sancionados',
    data() {
        return {
            page: {
                color: 'blacl',
                title: 'SEA USER',
                icon: 'mdi-cogs'
            },
            menuFechaResolucion: false,
            uuid: uuid.v1(),
            nuevaInstitucion: false,
            nuevoSancionado: false,
            nuevoPartSancionado: false,
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
            Acto: "",
            allSancionados: [],
            AllUsers: [],
            ApoderadoLegal_CURP: "",
            ApoderadoLegal_Nombres: "",
            ApoderadoLegal_PrimerApellido: "",
            ApoderadoLegal_SegundoApellido: "",
            AreasServidor: null,
            AutoridadSancionadora: "",
            CausaMotivoHechos: "",
            colorP: '',
            colorS: '',
            CP: "",
            CURP: '',
            Descripcion: "",
            DescripcionSancion: "",
            DescripFalta: "",
            DependenciasCoahuila: [],
            dependencia: '',
            DirectorGeneral_CURP: "",
            DirectorGeneral_Nombres: "",
            DirectorGeneral_PrimerApellido: "",
            DirectorGeneral_SegundoApellido: "",
            docRef: '',
            DomExt_Calle: "",
            DomExt_CiudadLocalidad: "",
            DomExt_EstadoProvincia: "",
            DomExt_NumeroExterior: "",
            DomExt_NumeroInterior: "",
            DomExt_Pais: "",
            EjercicioFiscal: '',
            Entidades: [],
            Expediente: "",
            Fecha: "",
            FechaFinalInhabilitacion: "",
            FechaInicialInhabilitacion: "",
            FechaResolucion: "",
            Genero: '',
            IdEntidad: "",
            IdInstitucion: "",
            IdLocalidad: "",
            IdMonedaMulta: "",
            IdMunicipio: "",
            IdPais: "",
            IdPuesto: '',
            IDRamo: '',
            IdTipoDoc: "",
            IdTipoFalta: "",
            IdTipoPersona: "",
            IdTipoSancion: [],
            Localidades: [],
            menu: false,
            menu1: false,
            menu2: false,
            menu3: false,
            monedasMulta: ['MXN', 'USD'],
            MontoMulta: "",
            Municipios: [],
            NombreRazonSocial: "",
            Nombres: '',
            NumeroExterior: "",
            NumeroInterior: "",
            ObjetoContrato: "",
            ObjetoSocial: "",
            Observaciones: "",
            picker: null,
            picker1: null,
            picker2: null,
            PlazoInhabilitacion: "",
            PrimerApellido: '',
            ProcedimientosServidor: null,
            Puesto: '',
            resolucionId: '',
            ResponsabilidadesServidor: null,
            Responsable_Nombres: "",
            Responsable_PrimerApellido: "",
            Responsable_SegundoApellido: "",
            RFC: '',
            sancionId: '',
            search: '',
            search2: '',
            SegundoApellido: '',
            selectedDoc: '',
            SentidoResolucion: "",
            siglasInstitucion: '',
            SICURP: '',
            SIGenero: '',
            SIIdPuesto: '',
            SINombres: '',
            SIPrimerApellido: '',
            SIPuesto: '',
            SIRFC: '',
            SISegundoApellido: '',
            Telefono: "",
            TipoVialidad: "",
            Titulo: "",
            uploadValue: '',
            URLDoc: "",
            URLResolucion: "",
            userContratos: false,
            userGeneral: false,
            userSancionados: false,
            Vialidad: "",
            YearsEjercicioFiscal: ['2022', '2023'],
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


        updateVariables() {
            const selectedDependencia = this.DependenciasCoahuila.find(dep => dep.SiglasDependencia === this.dependencia);
            if (selectedDependencia) {
                this.siglasInstitucion = selectedDependencia.SiglasDependencia;
                this.IdInstitucion = selectedDependencia.IdDependencia;

            }
        },


        verDependencias() {
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
                this.Fecha = '',
                this.NombreRazonSocial = '',
                this.ObjetoSocial = '',
                this.IdTipoPersona = '',
                this.IdPais = '',
                this.IdEntidad = '',
                this.IdMunicipio = '',
                this.IdLocalidad = '',
                this.CP = '',
                this.Vialidad = '',
                this.TipoVialidad = '',
                this.NumeroInterior = '',
                this.NumeroExterior = '',
                this.DomExt_Calle = '',
                this.DomExt_EstadoProvincia = '',
                this.DomExt_NumeroInterior = '',
                this.DomExt_NumeroExterior = '',
                this.DomExt_CiudadLocalidad = '',
                this.DomExt_Pais = '',
                this.DirectorGeneral_Nombres = '',
                this.DirectorGeneral_PrimerApellido = '',
                this.DirectorGeneral_SegundoApellido = '',
                this.DirectorGeneral_CURP = '',
                this.ApoderadoLegal_Nombres = '',
                this.ApoderadoLegal_PrimerApellido = '',
                this.ApoderadoLegal_SegundoApellido = '',
                this.Responsable_Nombres = '',
                this.Responsable_PrimerApellido = '',
                this.Responsable_SegundoApellido = '',
                this.SentidoResolucion = '',
                this.ApoderadoLegal_CURP = '',
                this.ObjetoContrato = '',
                this.Acto = '',
                this.Telefono = '',
                this.IdInstitucion = '',
                this.siglasInstitucion = ''

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
                Fecha: this.Fecha,
                Dependencia: this.IdInstitucion,
                siglasDependencia: this.siglasInstitucion
            }

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
                    _this.docsID();
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
        enviarDatosPartSancion() {
            const SancionParticularData = {

                NombreRazonSocial: this.NombreRazonSocial,
                ObjetoSocial: this.ObjetoSocial,
                RFC: this.RFC,
                IdTipoPersona: this.IdTipoPersona,
                Telefono: this.Telefono,
                IdPais: this.IdPais,
                IdEntidad: this.IdEntidad,
                IdMunicipio: this.IdMunicipio,
                IdLocalidad: this.IdLocalidad,
                CP: this.CP,
                Vialidad: this.Vialidad,
                TipoVialidad: this.TipoVialidad,
                NumeroInterior: this.NumeroInterior,
                NumeroExterior: this.NumeroExterior,
                DomExt_Calle: this.DomExt_Calle,
                DomExt_EstadoProvincia: this.DomExt_EstadoProvincia,
                DomExt_NumeroInterior: this.DomExt_NumeroInterior,
                DomExt_NumeroExterior: this.DomExt_NumeroExterior,
                DomExt_CiudadLocalidad: this.DomExt_CiudadLocalidad,
                DomExt_Pais: this.DomExt_Pais,
                DirectorGeneral_Nombres: this.DirectorGeneral_Nombres,
                DirectorGeneral_PrimerApellido: this.DirectorGeneral_PrimerApellido,
                DirectorGeneral_SegundoApellido: this.DirectorGeneral_SegundoApellido,
                DirectorGeneral_CURP: this.DirectorGeneral_CURP,
                ApoderadoLegal_Nombres: this.ApoderadoLegal_Nombres,
                ApoderadoLegal_PrimerApellido: this.ApoderadoLegal_PrimerApellido,
                ApoderadoLegal_SegundoApellido: this.ApoderadoLegal_SegundoApellido,
                ApoderadoLegal_CURP: this.ApoderadoLegal_CURP,
                Expediente: this.Expediente,
                ObjetoContrato: this.ObjetoContrato,
                AutoridadSancionadora: this.AutoridadSancionadora,
                IdTipoFalta: this.IdTipoFalta,
                Acto: this.Acto,
                CausaMotivoHechos: this.CausaMotivoHechos,
                Responsable_Nombres: this.Responsable_Nombres,
                Responsable_PrimerApellido: this.Responsable_PrimerApellido,
                Responsable_SegundoApellido: this.Responsable_SegundoApellido,
                SentidoResolucion: this.SentidoResolucion,
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
                Fecha: this.Fecha,
                DescripFalta: this.DescripFalta,


            }
            console.log(SancionParticularData)
            const _this = this;
            let config = {
                headers: {
                    "x-token": `${this.usuario.token}`,
                },
            };
            axios.post(

                `${this.$store.state.URL}/api/sanciones/Psancionado`, SancionParticularData,
                config
            )
                .then(res => {
                    console.log(res)

                    _this.nuevoPartSancionado = false,
                        _this.limpiarDatos();
                    _this.docsID();
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
                // this.traerServidores()
                // this.traerSancionados()
                this.traerEntidades()
                if (this.usuario.data.Role == 'ADMIN' || 'USER-INSTITUCION' || this.usuario.data.Role === 'USER-INSTITUCION-CONCENTRADORA') {
                this.verDependencias()
                this.userGeneral = true

                }
                if (this.usuario.data.Role == 'USER-SANCION' || this.usuario.data.Role === 'USER-SANCIONADOS-CONCENTRADORA') {
                    this.verDependencias()

                    this.userSancionados = true


                }
                if (this.usuario.data.Role == 'USER-CONTRATOS') {
                    console.log('Rol permitido')

                    this.userContratos = true

                }

            }




            // 'ADMIN', 'USER-INSTITUCION', 'USER-SANCION', 'USER-SANCIONES-CONCENTRADORA', 'USER-INSTITUCION-CONCENTRADORA'

        },
        // async traerServidores() {
        //     const _this = this;
        //     let config = {
        //         headers: {
        //             "x-token": `${this.usuario.token}`,
        //         },
        //     };
        //     await axios.get(
        //         `${this.$store.state.URL}/api/servidores/institucion`,
        //         config
        //     )
        //         .then(res => {
        //             this.AllUsers = res.data.ServidoresContrataciones
        //             console.log(this.AllUsers)
        //         })
        //         .catch(e => {
        //             _this.$swal({
        //                 title: 'Error!',
        //                 text: e.response.data.msg,
        //                 icon: 'error'
        //             });

        //         });
        // },
        // async traerSancionados() {
        //     const _this = this;
        //     let config = {
        //         headers: {
        //             "x-token": `${this.usuario.token}`,
        //         },
        //     };
        //     await axios.get(
        //         `${this.$store.state.URL}/api/sanciones/misSancionados`,
        //         config
        //     )
        //         .then(res => {
        //             this.allSancionados = res.data.Sancionados
        //             console.log(this.allSancionados)
        //         })
        //         .catch(e => {
        //             _this.$swal({
        //                 title: 'Error!',
        //                 text: e.response.data.msg,
        //                 icon: 'error'
        //             });

        //         });
        // },
        async traerEntidades() {
            const _this = this;
            let config = {
                headers: {
                    "x-token": `${this.usuario.token}`,
                },
            };
            await axios.get(
                `${this.$store.state.URL}/api/sanciones/entidades`,
                config
            )
                .then(res => {
                    this.Entidades = res.data.Entidad
                    console.log(this.Entidades)
                })
                .catch(e => {
                    _this.$swal({
                        title: 'Error!',
                        text: e.response.data.msg,
                        icon: 'error'
                    });

                });
        },
        async traerMunicipios() {
            const Data = { Cve_Ent: this.IdEntidad };
            const _this = this;
            let config = {
                headers: {
                    "x-token": `${this.usuario.token}`,
                },
            };
            await axios.post(
                `${this.$store.state.URL}/api/sanciones/municipios`, Data,
                config
            )
                .then(res => {
                    this.Municipios = res.data.Municipio

                })
                .catch(e => {
                    _this.$swal({
                        title: 'Error!',
                        text: e.response.data.msg,
                        icon: 'error'
                    });

                });
        },
        async traerLocalidades() {
            const Data = { Cve_Mun: this.IdMunicipio, Cve_Ent: this.IdEntidad };
            const _this = this;
            let config = {
                headers: {
                    "x-token": `${this.usuario.token}`,
                },
            };
            await axios.post(
                `${this.$store.state.URL}/api/sanciones/localidades`, Data,
                config
            )
                .then(res => {
                    this.Localidades = res.data.Localidad
                    console.log(res.data.Localidad)

                })
                .catch(e => {
                    _this.$swal({
                        title: 'Error!',
                        text: e.response.data.msg,
                        icon: 'error'
                    });

                });
        },
        subirDocumentoSancion(event) {
            this.selectedDoc = event;
            const storage = this.$fire.storage
            var storageRef = storage.ref();
            const fileExtension = event.name.split('.').pop();
            const docRef = storageRef.child(`SANCIONADOS/${this.sancionId}.${fileExtension}`)

            console.log(docRef)

            const uploadTask = docRef.put(this.selectedDoc).then((snapshot) => {
                console.log('Archivo subido correctamente');
                snapshot.ref.getDownloadURL().then((downloadURL) => {
                    this.URLDoc = downloadURL
                    console.log('File available at', downloadURL);
                });
            });;


        },
        subirDocumentoResolucion(event) {
            this.selectedDoc = event
            const storage = this.$fire.storage
            var storageRef = storage.ref();
            const fileExtension = event.name.split('.').pop();
            const docRef = storageRef.child(`SANCIONADOS/${this.resolucionId}.${fileExtension}`)

            const uploadTask = docRef.put(this.selectedDoc).then((snapshot) => {
                console.log('Archivo subido correctamente');
                snapshot.ref.getDownloadURL().then((downloadURL) => {
                    this.URLResolucion = downloadURL
                    console.log('File available at', downloadURL);
                });
            });;


        },
        docsID() {
            this.resolucionId = uuid.v4()
            this.sancionId = uuid.v4()
        },


    },
    beforeMount() {

    },
    mounted() {
        this.userExist()
        this.docsID()


    }
}
</script>

<style lang="scss" scoped>
.min-height-vh {
    min-height: 70vh;
}
</style>
