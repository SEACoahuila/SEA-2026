import { PresentationPages } from '../../../.nuxt/components';
<template>
    <v-container>
        <v-row>
            <TitlePages :color="page.color" :title="page.title" :icon="page.icon" />

            
            
            <PresentationPages :presentacion="page.presentacion" :color="page.color" />
            <v-col cols="12">


       
                <!-- ? Inicio de card CC -->
                <v-card class="mt-10 pa-6" elevation="0" color="article">
                    <div class="text-h4 text-center mb-8 font-weight-light">Miembros que integran el comité coordinador
                    </div>

                    <v-row>
                        <v-col cols="12" md="6" lg="4" xl="3" v-for="(i, index) in integrantes" :key="index">
                            <v-card elevation="3" class="mx-auto mt-4 overflow-visible" rounded="xl" min-height="320"
                                color="blue-grey-lighten-5">

                                <!-- >4 INICIO DE POPUP -->
                                <v-dialog max-width="800">
                                    <template v-slot:activator="{ props }">
                                        <v-btn v-bind="props" icon="mdi-plus" color="blue-darken-4" position="absolute"
                                            location="top right" class="mt-n4 mr-n2" elevation="4"></v-btn>
                                    </template>


                                    <v-card >
                                           <v-btn class="text-none rounded-pill" color="indigo-darken-2" variant="outlined"
                                prepend-icon="mdi-link-variant" border="sm" :href="i.web" link size="small">
                                Consultar Sitio Web
                            </v-btn>
                                        <div v-for="(e, index) in i.curriculum" :key="index">
                                            <v-card-title class="bluegreyt">
                                                {{ e.subtitulo }}
                                            </v-card-title>

                                            <v-card-text>
                                                <v-list>
                                                    <v-list-item v-for="(item, i) in e.lista" :key="i" dense>
                                                        <v-icon>mdi-checkbox-multiple-blank-circle-outline</v-icon> {{ item }}
                                                    </v-list-item>
                                                </v-list>

                                            </v-card-text>
                                        </div>

                                        <v-divider></v-divider>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <!-- <v-btn color="primary" text @click="i.dialog = false">
                                                Cerrar
                                            </v-btn> -->
                                        </v-card-actions>

                                    </v-card>
                                </v-dialog>


                                <div class="pa-4">
                                    <v-row align="center">
                                        <v-col cols="6">
                                            <v-avatar size="120" elevation="2">
                                                <v-img :src="`/img/cc/${i.foto}`" alt="foto" cover></v-img>
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


                
                <v-card class="mt-10 pa-4" color="article">
                    <v-col cols="12" align="center">
                        <v-card-title class="justify-center">
                            <div class="text-xl-h2 text-md-h4">Programas de trabajo</div>
                        </v-card-title>
                        <v-divider class="mb-5"></v-divider>
                        <v-row justify="center">
                            <div v-for="(e, idx) in programas" :key="'prog-' + idx">
                                <v-btn v-if="e.src" class="ma-2" :href="('/comiteCoordinador/' + e.src)">
                                    {{ e.year }}
                                </v-btn>
                                <v-btn v-if="e.to" class="ma-2" :href="e.to" target="_blank">{{ e.year }}</v-btn>
                            </div>
                        </v-row>
                        <v-divider class="mt-5"></v-divider>
                    </v-col>

                    <v-col cols="12" align="center">
                        <v-card-title class="justify-center">
                            <div class="text-xl-h2 text-md-h4">Informes</div>
                        </v-card-title>
                        <v-divider class="mb-5"></v-divider>
                        <v-row justify="center">
                            <div v-for="(e, idx) in informes" :key="'inf-' + idx">
                                <v-btn v-if="e.src" class="ma-2" :href="('/comiteCoordinador/' + e.src)">
                                    {{ e.year }}
                                </v-btn>
                                <v-btn v-if="e.to" class="ma-2" :href="e.to" target="_blank">{{ e.year }}</v-btn>
                            </div>
                        </v-row>
                        <v-divider class="mt-5"></v-divider>
                    </v-col>

                    <v-col cols="12" align="center">
                        <v-card-title class="justify-center">
                            <div class="text-xl-h2 text-md-h4">Actas de Comité Coordinador</div>
                        </v-card-title>
                        <v-divider class="mb-5"></v-divider>
                        <v-row justify="center">
                            <div v-for="(e, idx) in actas" :key="'act-' + idx">
                                <v-btn v-if="e.src" class="ma-2" :href="('/comiteCoordinador/' + e.src)">
                                    {{ e.sesion }}
                                </v-btn>
                                <v-btn v-if="e.to" class="ma-2" :href="e.to" target="_blank">{{ e.sesion }}</v-btn>
                            </div>
                        </v-row>
                    </v-col>
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
            informes: [
                { year: '2024-2025', to: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FfhAGuLD6a522k8FYDufB%2Finforme%20sistema%20DIGITAL.pdf?alt=media&token=c9bc8294-d764-4c58-ad2a-467cadf4c032' },
                { year: '2023-2024', to: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FkyYlvOBrjgH7F3p5TbcE%2FInforme_final_OK%202.pdf?alt=media&token=4f80053e-1392-432a-8eb8-c9c23a528963' },
                { year: '2022-2023', src: 'informeCC-2023.pdf' },
                { year: '2021-2022', src: 'informeCC-2022.pdf' },
                { year: '2020-2021', src: 'informeCC-2021.pdf' },
                { year: '2019-2020', src: 'informeCC-2020.pdf' },
                { year: '2018-2019', src: 'informeCC-2019.pdf' },
                { year: '2017-2018', src: 'informeCC-2018.pdf' },
            ],
            programas: [
                { year: '2025-2026', to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FONP1aDRsiTSul2p1sFZi%2FPROGRAMA%20ANUAL%20DE%20TRABAJO%20CC%202026%20(1).pdf?alt=media&token=23e0c056-ccba-4e5a-bbea-150461abd39e" },
                { year: '2024-2025', to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FONP1aDRsiTSul2p1sFZi%2FPrograma%20Anual%20de%20Trabajo%20del%20CC%202024%20-%202025%20....pdf?alt=media&token=4ab8a15e-8647-4201-841f-36d3f4aa0b45" },
                { year: '2023-2024', to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/InformesCC%2FPROGRAMA%20CC.pdf?alt=media&token=640d3267-ab3a-4b6b-8c1d-94ac9d9f9c8e" },
                { year: '2022-2023', src: 'programa-anual-2022-2023.pdf' },
                { year: '2021-2022', src: 'programa-anual-2021.pdf' },
                { year: '2020-2021', src: 'programa-anual-2020.pdf' },
                { year: '2018-2019', src: 'programa-anual-2019.pdf' },
                { year: '2017-2018', src: 'programa-anual-2018.pdf' },
            ],
            actas: [
                { sesion: 'Ver Actas', to: "https://www.seacoahuila.org.mx/transparencia/21-21" },
            ],
            page: {
                color: '#bf8c20',
                title: 'Comité Coordinador',
                icon: 'mdi-account-group',
                presentacion: [
                    { titulo: 'Funciones', texto: 'El Comité Coordinador del Sistema Anticorrupción del Estado de Coahuila de Zaragoza es instancia responsable de establecer mecanismos de coordinación entre los integrantes del Sistema Estatal, y de éste con el Sistema Nacional, y tendrá bajo su encargo el diseño, promoción y evaluación de políticas públicas locales de prevención y combate a la corrupción.' },
                    { titulo: 'Misión', texto: 'Somos un Órgano Rector que diseña, promociona y evalúa las políticas públicas integrales para la prevención y el combate a la corrupción, a través del establecimiento de mecanismos eficaces de coordinación y colaboración entre los integrantes del Sistema Estatal Anticorrupción alineado al Sistema Nacional.' },
                    { titulo: 'Visión', texto: 'Ser un Órgano Rector garante en la adopción de medidas para el fortalecimiento Institucional en la prevención, detección y sanción, que permitan erradicar la opacidad, los actos ilícitos y de corrupción e incrementen la confianza de los ciudadanos respecto a las instituciones.' }
                ]
            },
            integrantes: [

                {
                    nombre: 'JUAN CARLOS GUZMÁN ESCOBEDO',
                    cargo: 'Consejero Presidente del Consejo de Participación Ciudadana.',
                    foto: 'cpc-jcge.jpg',
                    img: 'cc-cpc.png',
                    web: 'http://www.cpccoahuila.org.mx/',
                    curriculum: [{
                        subtitulo: 'Formación Académica',
                        lista: [
                            'Obtuvo el título de contador público auditor por la Universidad Metropolitana de Coahuila.',
                            'Cursó la maestría en planeación con acentuación en formulación y evaluación de proyectos por la Facultad de Economía de la Universidad Autónoma de Coahuila.',
                            'Además, cursó la especialidad en Derecho a la Información, Fiscalización y Combate a la Corrupción en la Academia Interamericana de Derechos Humanos de la Universidad Autónoma de Coahuila.',

                        ]
                    },
                    {
                        subtitulo: 'Experiencia profesional:',
                        lista: [
                            'El Maestro Guzmán se ha desempeñado tanto en el sector público como en el privado.',
                            'Contralor, subgerente de control y subgerente de servicios en varias sucursales del Banco Nacional de México.',
                            'Director de la Unidad Catastral del municipio de Acuña en dos administraciones.',
                            'Gerente y conductor de programas en reconocida estación de radio en Acuña, Coah.',
                            'Propietario de Guzmán Despacho Contable en Acuña, Coahuila.',
                            'Subdirector de Finanzas de los Servicios de Salud de Coahuila.',
                            'Director de administración de la Academia Interamericana de Derechos Humanos de la UAdeC.',
                            'Director General de Administración del Tribunal Electoral de Coahuila.',
                            'A partir de octubre del 2021 se desempeña como consejero de Participación Ciudadana del Sistema Anticorrupción del estado de Coahuila.',


                        ]
                    }

                    ]

                },
                {
                    nombre: 'MIGUEL FELIPE MERY AYUP',
                    dialog: false,
                    cargo: 'Magistrado Presidente del Tribunal Superior de Justicia y del Consejo de la Judicatura del Poder Judicial del Estado de Coahuila de Zaragoza.',
                    foto: 'cc-pjecz-mfma.jpg',
                    img: 'cc-pjecz.png',
                    web: 'https://www.pjecz.gob.mx/',
                    curriculum: [{
                        subtitulo: 'Formación Académica',
                        lista: [
                            'Maestría en Política Aplicada, Instituciones y Procesos Políticos. Instituto Universitario de Investigación Ortega y Gasset. 2007.',
                            'Licenciado en Derecho. Facultad de Jurisprudencia de la Universidad Autónoma de Coahuila. 1996.',
                            'Diplomado en Gobernanza Local y Liderazgo Territorial. Fundación Ortega y Gasset. 2018',
                        ]
                    },
                    {
                        subtitulo: 'Experiencia Laboral',
                        lista: [
                            'Noviembre 2019 a la fecha: Magistrado Presidente del Poder Judicial del Estado de Coahuila. Poder Judicial del Estado de Coahuila de Zaragoza.',
                            '2018 a octubre 2019: Magistrado Presidente de la Sala Regional. Poder Judicial del Estado de Coahuila de Zaragoza.',
                            '2014-2017: Primer Regidor de Torreón. Republicano Ayuntamiento de Torreón, Coahuila de Zaragoza.',
                            '2010-2013: Secretario del Republicano Ayuntamiento. Gobierno Municipal de Torreón, Coahuila de Zaragoza.',
                            '2009: Subsecretario de Desarrollo y Cooperación Política. Gobierno del Estado de Coahuila de Zaragoza.',
                            '2003-2005: Diputado Local. Congreso del Estado de Coahuila de Zaragoza.',
                            '2000-2002: Director General de Desarollo Social. Gobierno Municipal de Torreón, Coahuila de Zaragoza.',
                            '1996-1999: Secretario Particular Adjunto del Gobernador. Gobierno del Estado de Coahuila de Zaragoza',
                        ]
                    },
                    {
                        subtitulo: 'Logros y proyectos realizados',
                        lista: [
                            'Autor del Libro "La Nueva Vía, hacia un modelo de ciudad". 2017.',
                            'Sistema de Normatividad Municipal. 2015.',
                            'Re-ingeniería administrativa del Gobierno Municipal. 2014.',
                            'Monitor de Cabildo. 2011-2012.'
                        ]
                    },

                    {
                        subtitulo: 'Actividades Académicas',
                        lista: [
                            'Catedrático en la Maestría en Políticas Públicas',
                            'Catedrático en Derecho Constitucional en la UAdeC',
                            'Catedrático en Teoría del Estado en la UAdeC',
                            'Catedrático en Políticas Públicas en la UAdeC',
                            'Catedrático en Administración Pública en la UAdeC',
                            'Catedrático en Administración en la UAdeC',
                        ]
                    }
                    ]
                },

                {
                    nombre: 'MANUEL RAMÍREZ BRIONES',
                    cargo: 'Auditor Superior del Estado de Coahuila de Zaragoza.',
                    foto: 'cc-asec-as.png',
                    img: 'cc-asec.png',
                    web: 'https://www.asecoahuila.gob.mx/',
                    curriculum: [{
                        subtitulo: 'Datos Profesionales',
                        lista: ['Contador Público (1981-1985), por la Universidad Autónoma de Coahuila, Torreón, Coahuila']
                    },
                    {
                        subtitulo: 'Trayectoria Profesional',
                        lista: [
                            'Auditor Especial de Planeación y Servicios Administrativos de la ASEC',
                            'Auditor de Planeación e Información de la ASEC',
                            'Auditor Especial de Cumplimiento Financiero de la ASEC',
                            'Auditor Especial de Desempeño de la ASEC',
                            'Encargado de la Dirección General de Evaluación y Seguimiento SEFIN',
                            'Director General de Impuestos SEFIN',
                            'Despacho de Asesoría a Entidades Gubernamentales como Socio Director',
                            'Director de Contabilidad del Municipio de Torreón',
                            'Jefe de Departamento de Contabilidad del Municipio de Torreón'
                        ]
                    },
                    {
                        subtitulo: 'Trayectoria Académica',
                        lista: ['Catedrático de las materias Auditoría y Contabilidad (1992-1996) UAdeC',
                            'Auditor en la Contraloría General (Enero 1990 a enero 1996) UAdeC'
                        ]
                    },
                    ]

                },

                {
                    nombre: 'KARLA SAMPERIO FLORES',
                    cargo: 'Titular de la Fiscalía Especializada en Delitos por Hechos de Corrupción.',
                    foto: 'cc-fech-ksf.png',
                    img: 'cc-fehc.png',
                    web: 'https://www.fehc.gob.mx/',
                    curriculum: [{
                        subtitulo: 'Datos Profesionales',
                        lista: [

                        ]
                    },

                    {
                        subtitulo: 'Se desempeñó como',
                        lista: [

                        ]
                    },
                    ]

                },

                {
                    nombre: 'ELMA MARISOL MARTÍNEZ GONZÁLEZ',
                    cargo: 'Secretaria de Fiscalización y Rendición de Cuentas del Estado de Coahuila de Zaragoza.',
                    foto: 'cc-sefirc-emm.jpg',
                    img: 'cc-sefirc.png',
                    web: 'http://www.sefircoahuila.gob.mx/',
                    curriculum: [{
                        subtitulo: 'Formación Académica',
                        lista: [
                            'Es licenciada en Derecho egresada de la Facultad de Jurisprudencia de la Universidad Autónoma de Coahuila, especializada en Derecho a la Información, Fiscalización y Combate a la Corrupción por la Universidad Interamericana de Derechos Humanos, con estudios de maestría en Impuestos por la Universidad Autónoma del Noreste.'
                        ]
                    },
                    {
                        subtitulo: 'Experiencia Profesional:',
                        lista: [
                            'Coordinadora Jurídica de la Tesorería y como Coordinadora de Responsabilidades y Asistencia Jurídica. Presidencia Municipal de Saltillo.',
                            'Subdirectora en la Coordinación de Asuntos Jurídicos.  Auditoría Superior del Estado.',
                            'Directora de Seguimiento de Procedimientos. Secretaría de Fiscalización y Rendición de Cuentas.',
                            'Coordinadora y Facilitador Jurídico del “Proyecto de Modernización Normativa de la Secretaría de Seguridad Pública del Estado de Coahuila”. Secretaría de la Contraloría y Modernización Administrativa.',
                            'Asesor Jurídico en el Voluntariado de Coahuila y Abogado Defensor. Procuraduría de la Familia del Sistema DIF Coahuila.'
                        ]
                    },
                    {
                        subtitulo: 'Diplomados y cursos',
                        lista: [
                            'Normas Profesionales de Auditoría del Sistema Nacional de Fiscalización',
                            'Ley General de Responsabilidades Administrativas',
                            'Derecho Municipal',
                            'Derecho Laboral Burocrático,',
                            'Seminario Nacional de Vinculación de los Sistemas Nacionales Anticorrupción, Fiscalización y Transparencia.'
                        ]
                    },

                    ]

                },


                {
                    nombre: 'JESÚS GERARDO SOTOMAYOR HERNÁNDEZ',
                    cargo: 'Magistrado Presidente del Tribunal de Justicia Administrativa de Coahuila de Zaragoza.',
                    foto: 'cc-tjacz.jpg',
                    img: 'cc-tjacz.png',
                    web: 'http://www.tjacoahuila.org/',
                    curriculum: [{
                        subtitulo: 'Formación Académica',
                        lista: [
                            'Licenciado en Derecho Facultad de Derecho de la UADEC unidad Torreón.',
                            'Diplomado en Gestión Pública por la Universidad Iberoamericana de la Laguna.',
                            'Especialización en el Sistema Integral de Justicia Penal para Adolescentes.',
                        ]
                    },
                    {
                        subtitulo: 'Experiencia Laboral',
                        lista: [
                            'Magistrado de la Sala Especializada en Materia de Responsabilidades Administrativas del Tribunal de Justicia Administrativa de Coahuila de Zaragoza.',
                            'Subsecretario de Asuntos Jurídicos en el Republicano Ayuntamiento de Torreón.',
                            'Director del Instituto de Investigaciones Jurídicas y Parlamentarias del Congreso del Estado de Coahuila.',
                            'Asesor en la Secretaría General de Gobierno del Estado de Coahuila.',
                            'Secretaria de Desarrollo Social en el Republicano Ayuntamiento de Torreón.',
                            'Secretario Abogado y Agente del Ministerio Público por Ministerio de Ley.Procuraduría General de Justicia del Estado de Coahuila Región Laguna',
                        ]
                    },
                    {
                        subtitulo: 'Actividades Académicas',
                        lista: [
                            'Taller de Destrezas de Litigación en Juicios Orales(2019).',
                            'Taller de Prácticas Parlamentarias.',
                            'Taller de Juicio Oral Familiar',
                            'Curso de Contraloría Dinámica.',
                            'Curso sobre Tópicos Fiscales de la Actualidad',
                            'Curso Reformas Fiscales(2017)',
                            'Curso de Reducción de Pagos Provisionales.',
                            'Curso Amparo Administrativo',
                            'Curso Amparo Fiscal',
                            'Programa de Sensibilización y Capacitación dirigida a Abogados.',
                            'Taller de Juicio Oral en Materia Mercantil(2016)',
                            'Catedrático de la Preparatoria Venustiano Carranza en Materia de Lógica.',
                            'Catedrático de la Universidad La Salle en Materia Derecho Administrativo.',
                        ]
                    },
                    {
                        subtitulo: 'Otras Actividades en las que ha participado',
                        lista: [
                            'Vocal en el Consejo Regional de la Abogacía.',
                            'Secretario en el Consejo Regional de la Abogacía.',
                            'Presidente del Colegio Regional de Abogados de la Laguna.',
                            'Secretario del Colegio Regional de Abogados de la Laguna.',
                            'Titular en el Bufete Jurídico Gratuito del Colegio Regional de la Laguna',
                        ]
                    },

                    ]

                },

                // Termina integrantes
            ]

        }
    }
}
</script>

<style lang="scss" scoped>
.v-card--shaped {
    border-radius: 24px 4px !important;
}

.bluegreyt {
    background-color: #eceff1;
    color: #455a64;
}
</style>