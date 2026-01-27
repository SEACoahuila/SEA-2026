<template>
<v-container>

    <v-row>
        <v-col>
            <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2" :icon="page.icon" prominent>

                <div align="center" class="mb-5 text-xl-h1 text-md-h3 text-h4">{{page.title}}</div>

            </v-alert>
            

            <v-card class="mt-10 pa-5" color="article">
                <v-row class="mt-5" v-for="(e,i) in page.presentacion" :key="i">
                    <v-col aling="center" justify="center">
                        <v-card-title class="justify-center">
                            <div class=" text-xl-h3 text-md-h4"> {{e.titulo}}</div>
                        </v-card-title>

                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col cols="12" md="9" sm="12">

                        <p align="center" class="text-justify">
                            {{ e.texto }}
                        </p>

                    </v-col>

                </v-row>

            </v-card>

            <v-card class="mt-10 pa-3">
                <v-card-title class="justify-center">
                    <div class=" text-xl-h2 text-md-h4"> Miembros que integran el comité coordinador</div>
                </v-card-title>
                <v-row>
                    <v-col cols="12" xl="4" lg="6" sm="12" v-for="(i,index) in integrantes" :key="index">
                        <v-card shaped class="mx-auto mt-8 pa-3" color="cc" min-height="330" light>
                            <v-col>
                                <v-row align="center" class="fill-height">
                                    <v-col align-self="start" class="pa-0" cols="6">
                                        <v-avatar class="profile" size="164">
                                            <v-img :src="require('@/static/img/cc/'+ i.foto)"></v-img>

                                        </v-avatar>

                                    </v-col>
                                    <v-col align-self="start" class="pa-1" cols="6">

                                        <v-img max-width="60%" :src="require('@/static/img/'+ i.img)"></v-img>

                                    </v-col>

                                    <v-col class="py-0">
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title class="text-h6">
                                                    {{i.nombre}}
                                                </v-list-item-title>
                                                <v-list-item-text>{{ i.cargo }}</v-list-item-text>
                                            </v-list-item-content>

                                        </v-list-item>
                                        <v-btn :href="i.web" color="blue lighten-2" text>
                                            <v-icon left>
                                                mdi-link
                                            </v-icon>

                                            Sitio web
                                        </v-btn>
                                    </v-col>

                                </v-row>

                            </v-col>
                            <div class="text-center">
                                <v-dialog v-model="i.dialog" max-width="900px">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn :color="page.color" fab small dark absolute top right v-on="on">
                                            <v-icon>mdi-plus</v-icon>
                                        </v-btn>
                                    </template>

                                    <v-card>
                                        <div v-for="(e,index) in i.curriculum" :key="index">
                                            <v-card-title class="bluegreyt">
                                                {{e.subtitulo}}
                                            </v-card-title>

                                            <v-card-text>
                                                <v-list> 
                                                    <v-list-item v-for=" (item,i) in e.lista" :key="i" dense>
                                                    <v-icon>mdi-fountain-pen-tip</v-icon>    {{ item }}
                                                    </v-list-item>
                                                </v-list>

                                            </v-card-text>
                                        </div>

                                        <v-divider></v-divider>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="primary" text @click="i.dialog = false">
                                                Cerrar
                                            </v-btn>
                                        </v-card-actions>

                                    </v-card>

                                </v-dialog>
                            </div>

                        </v-card>

                    </v-col>

                </v-row>

            </v-card>

            <v-card class="mt-10 pa-4" color="article">
                <v-row justify="center" align="center">
                    <v-col align="center" justify="center" cols="12">
                        
                        <v-card-title class="justify-center">
                            <div class=" text-xl-h2 text-md-h4"> Planes de trabajo</div>
                        </v-card-title>
                        <v-divider class="mb-5"></v-divider>
                        <v-card-actions class="justify-center">
                            <v-row justify="center">
                                <v-btn  class="ma-2"  v-for=" (e,i) in programas" :key="i" :href="require('@/static/comiteCoordinador/' + e.src)">{{ e.year }}</v-btn>
                            </v-row>
                            

                        </v-card-actions>
                    <v-divider class="mt-5"></v-divider>
                    </v-col>
            
                    <v-col aling="center" justify="center" cols="12">
        
                        <v-card-title class="justify-center">
                            <div class=" text-xl-h2 text-md-h4"> Informes</div>
                        </v-card-title>
                        <v-divider class="mb-5"></v-divider>
                        <v-card-actions class="justify-center">
                            <!-- :href="require('@/pages/transparencia/art20/' + e.src)" -->
                            <v-row justify="center">
                                <v-btn class="ma-2"  v-for="(e,i) in informes" :key="i"  :href="require('@/static/comiteCoordinador/' + e.src)" label color="" max-width="100%">{{ e.year }}</v-btn>
                            </v-row>
                        </v-card-actions>
                        <v-divider class="mt-5"></v-divider>
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
            informes: [{
                    year: '2021-2022',
                    src: 'informeCC-2022.pdf'
                },
                {
                    year: '2020-2021',
                    src: 'informeCC-2021.pdf'
                },
                {
                    year: '2019-2020',
                    src: 'informeCC-2020.pdf'
                },
                {
                    year: '2018-2019',
                    src: 'informeCC-2019.pdf'
                },
                {
                    year: '2017-2018',
                    src: 'informeCC-2018.pdf'
                },

            ],
            programas: [
                {
                    year: '2022-2023',
                    src: 'programa-anual-2022-2023.pdf'
                },
                {
                    year: '2021-2022',
                    src: 'programa-anual-2021.pdf'
                },
                {
                    year: '2020-2021',
                    src: 'programa-anual-2020.pdf'
                },
                {
                    year: '2018-2019',
                    src: 'programa-anual-2019.pdf'
                },
                {
                    year: '2017-2018',
                    src: 'programa-anual-2018.pdf'
                },

            ],
            dialog: false,
            page: {
                color: 'orange lighte-2',
                title: 'Comité Coordinador',
                icon: 'mdi-account-group',
                presentacion: [{
                        titulo: 'Funciones',
                        texto: 'El Comité Coordinador del Sistema Anticorrupción del Estado de Coahuila de Zaragoza es la instancia responsable de establecer mecanismos de coordinación entre los integrantes del Sistema Estatal, y de éste con el Sistema Nacional, y tendrá bajo su encargo el diseño, promoción y evaluación de políticas públicas locales de prevención y combate a la corrupción.'
                    },
                    {
                        titulo: 'Misión',
                        texto: 'Somos un Órgano Rector que diseña, promociona y evalúa las políticas públicas integrales para la prevención y el combate a la corrupción, a través del establecimiento de mecanismos eficaces de coordinación y colaboración entre los integrantes del Sistema Estatal Anticorrupción alineado al Sistema Nacional.'
                    },
                    {
                        titulo: 'Visión',
                        texto: 'Ser un Órgano Rector garante en la adopción de medidas para el fortalecimiento Institucional en la prevención, detección y sanción, que permitan erradicar la opacidad, los actos ilícitos y de corrupción e incrementen la confianza de los ciudadanos respecto a las instituciones.'
                    }

                ]
            },
            integrantes: [

                {
                    nombre: 'JAFIA PACHECO VALTIERRA',
                    cargo: 'Consejera Presidenta del Consejo de Participación Ciudadana.',
                    foto: 'cpc-jpv.jpg',
                    img: 'cc-cpc.png',
                    web: 'http://www.cpccoahuila.org.mx/',
                    curriculum: [{
                            subtitulo: 'Formación Académica',
                            lista: ['Licenciada en Derecho con Maestría en Ciencias Jurídicas con Acentuación en Derecho Laboral Internacional, diplomado en justicia administrativa y fiscal, actualmente culminando estudios de maestría en Derechos Humanos con perspectiva internacional y comparada, en la Academia Interamericana de Derechos Humanos de la U. A. de C.']
                        },
                        {
                            subtitulo: 'Se ha desarrollado profesionalmente como:',
                            lista: [
                                'Abogada para diversas empresas en los despachos Asesoría Legal para la Industria, S.A. de C.V., y posteriormente en Despacho Saltillo, S.C., conocido como Cavazos Flores Región Norte, litigando en varios Estados de la República Mexicana, para después servir en defensa del Instituto Mexicano del Seguro Social.',
                                'Trabajó en la Administración Pública del Estado de Coahuila en la Procuraduría de la Defensa del Trabajo y como Directora de Normatividad en la Secretaría del Trabajo de la misma Entidad.',
                                'Posteriormente, se desempeñó como Secretaria de Estudio y Cuenta en el Tribunal de Justicia Administrativa en Coahuila de Zaragoza.',
                                'Ha sido titular de diversas materias como Derecho Individual y Derecho Colectivo del Trabajo en la Universidad La Salle, docente adjunto en la especialidad de Derecho Laboral en la Universidad Autónoma del Noreste Campus Saltillo, así como en la materia de Derecho Colectivo en la Facultad de Jurisprudencia de la U. A. de C. También, impartió clases en la Ciudad de México en el en Instituto de Capacitación Monte Tabor Integridad para Ministerios. En ese tenor, diseñó y es titular de la asignatura Cultura Anticorrupción, en la Universidad Carolina, S.C. y que también se ha impartido en la Universidad Autónoma del Noreste en modalidad de servicio social.',
                                'Fue secretaria y presidenta de la Comisión de Indicadores, Metodologías y Mapas de Riesgo de la Red Nacional de CPC e integrante de la Coordinación Técnica de la Red Nacional de Comités de Participación Ciudadana de los Sistemas Anticorrupción.',
                                'Ha escrito artículos como: “La corrupción y la confianza institucional” publicado en Metrópolis Coahuila, Observatorio, “Declaración de interés: mecanismo de prevención e instrumento de rendición de cuentas y anticorrupción” en la revista Equilibrio Coahuila; entre otros.',
                                'Actualmente, se desempeña como Presidenta del Sistema Anticorrupción del Estado de Coahuila de Zaragoza y Vicecoordinadora nacional del Comité Técnico y de Estudio en temas de Integridad y Anticorrupción de la World Compliance Association.',
                                'Colabora en medios de comunicación, tales como televisión y radio; ahora, en RCG Media (televisión, radio, redes sociales) en el espacio “Conoce tus derechos”.'
                            ]
                        }
                    ]

                },
                {
                    nombre: 'MIGUEL FELIPE MERY AYUP',
                    dialog: false,
                    cargo: 'Presidente del Tribunal Superior de Justicia y del Consejo de la Judicatura del Poder Judicial del Estado de Coahuila de Zaragoza.',
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
                    nombre: 'MAESTRO JESÚS HOMERO FLORES MIER',
                    cargo: 'Titular de la Fiscalía Especializada en Delitos por Hechos de Corrupción.',
                    foto: 'cc-fech-jhfm.jpg',
                    img: 'cc-fehc.png',
                    web: 'https://www.fehc.gob.mx/',
                    curriculum: [{
                            subtitulo: 'Datos Profesionales',
                            lista: [
                                'Es Maestro y Licenciado en Derecho, por la Facultad de Jurisprudencia de la Universidad Autónoma de Coahuila.',
                                'Es el Titular de la Fiscalía Especializada en Delitos por Hechos de Corrupción del Estado de Coahuila de Zaragoza.',
                                'Es Presidente de la Comisión de Políticas Publicas y estudios en Materia de Prevención, Detección, Evaluación, e Investigación de Delitos de la Convención Nacional de Fiscales Anticorrupción.',
                                'Anteriormente fungió como Comisionado Presidente del Instituto Coahuilense de Acceso a la Información Pública del Estado de Coahuila de Zaragoza.'
                            ]
                        },
                        {
                            subtitulo: 'Ha cursado las maestrías en',
                            lista: [
                                'Derechos Humanos con acentuación en Gobierno Abierto y Rendición de Cuentas en la Facultad de Jurisprudencia;',
                                'Gobernanza y Derechos Humanos en la Universidad Autónoma del Noreste.'
                            ]
                        },
                        {
                            subtitulo: 'Ha tomado diversos cursos como',
                            lista: [
                                'Taller de Gerencia Política de Proyectos de Cambio, The George Washington University, en Washington, D.C.',
                                'Curso Internacional sobre "Gobierno Abierto" en la subsede de la Comisión Económica para América Latina y el Caribe - CEPAL;',
                                'Modulo sobre Derecho Penal "Nueva Legislación para la Procuración de Justicia y Seguridad Pública".',
                                'Seminario "Constitución, Democracia y Elecciones: La Reforma que Viene" en el Instituto de Investigaciones Jurídicas de la UNAM.',
                                'Cuarto Foro Regional de Difusión del Código Modelo del Proceso Penal Acusatorio para los Estados de la Federación, impartido por el Poder Judicial del Estado de Coahuila de Zaragoza y la Comisión Nacional de Tribunales Superiores de Justicia.'
                            ]
                        },
                        {
                            subtitulo: 'Se desempeñó como',
                            lista: [
                                'Coordinador y Fundador de la Comisión de Gestión Documental, Tecnologías de la Información y Gobierno Abierto de la Conferencia Mexicana para el Acceso a la Información.',
                                'Integrante de la Comisión de Indicadores, Evaluación e Investigación y Comisión de Archivos y Gestión Documental.',
                                'Coordinador de los Institutos de Transparencia del País representándolos en la transición al actual Sistema Nacional de Transparencia.',
                                'Representante en el Consejo Nacional de Archivos de los Institutos y Consejos Estatales de Transparencia.',
                                'Ha impartido diversas pláticas y conferencias en relación a temas en materia de anticorrupción, de acceso a la información, datos personales, redes sociales y archivos, en eventos Internacionales y Nacionales, organizadas por Instituciones especialistas en las materias.'
                            ]
                        },
                    ]

                },

                {
                    nombre: 'TERESA GUAJARDO BERLANGA',
                    cargo: 'Secretaria de Fiscalización y Rendición de Cuentas del Estado de Coahuila de Zaragoza.',
                    foto: 'cc-sefirc-tgb.jpg',
                    img: 'cc-sefirc.png',
                    web: 'http://www.sefircoahuila.gob.mx/',
                    curriculum: [{
                            subtitulo: 'Formación Académica',
                            lista: [
                                'Es Licenciada en Derecho por la Facultad de Jurisprudencia de la Universidad Autónoma de Coahuila.'
                            ]
                        },
                        {
                            subtitulo: 'Cuenta con diversos diplomados, tales como:',
                            lista: [
                                'Diplomado en Transparencia y Buen Gobierno por el Instituto Tecnológico de Estudios Superiores de Monterrey.',
                                'Diplomado en Políticas Públicas, Gerencia y Gobierno Local por el Colegio Nacional de Ciencias Políticas y Administración Pública A.C.',
                                'Diplomado en materia de Derechos Humanos por la Universidad Autónoma de Coahuila, Comisión Nacional de Derechos Humanos y Comisión de Derechos Humanos del Estado de Coahuila Cuenta con certificación en materia de Protección de Datos Personales en posesión de los particulares por el Instituto Nacional de Acceso a la Información.',
                                'Diplomado Virtual de Contabilidad Gubernamental por la Asociación Nacional de Organismos de Fiscalización Superior y Control Gubernamental A.C.'
                            ]
                        },
                        {
                            subtitulo: 'Otras Actividades Profesionales',
                            lista: [
                                'Fue Presidenta del Instituto Coahuilense de Acceso a la Información Pública; del cual formó parte activa durante 13 años.',
                                'Coordinó la Comisión de Educación de la COMAIP, impulso una nueva Ley de Acceso a la Información Pública y Protección de Datos Personales ante el Congreso del Estado de Coahuila de Zaragoza, convirtiéndose nuestro Estado y su Legislación referentes a nivel nacional en la materia.',
                                'Dentro del Sistema Nacional de Transparencia ocupo la Secretaria Técnica de la Comisión de los Derechos Humanos, Equidad de Género e Inclusión Social.',
                                'En el aspecto académico ha desempeñado actividades de docencia en educación universitaria de Instituciones Públicas y Privadas de la Región Carbonífera y de la Capital del Estado de Coahuila.',
                                'Es Conferencista en materia de Transparencia, Acceso a la Información, Rendición de Cuentas y Protección de Datos Personales y ha escrito diversos artículos publicados en un medio de comunicación.'
                            ]
                        },

                    ]

                },

                {
                    nombre: 'LUIS GONZÁLEZ BRISEÑO',
                    cargo: 'Comisionado Presidente del Instituto Coahuilense de Acceso a la Información Pública.',
                    foto: 'cc-icai-lgb.jpg',
                    img: 'cc-ica.png',
                    web: 'http://www.icai.org.mx/',
                    curriculum: [{
                            subtitulo: 'Formación Académica',
                            lista: [
                                ' Licenciado en Derecho por la Facultad de Jurisprudencia de la Universidad Autónoma de Coahuila.',
                                'Maestro en Derecho Fiscal por la Universidad del Valle de México.',
                                'Master en Normativa de Protección de Datos en el Sector Sanitario por la Universidad de Cádiz, España.',
                                'Especialista en Protección de Datos Personales y Privacidad por la Universidad de Murcia, España.'
                            ]
                        },
                        {
                            subtitulo: 'Experiencia Profesiona',
                            lista: [
                                'Comisionado Presidente del ICAI.',
                                ' Miembro de la Asociación Profesional Española de Privacidad, con sede en España.',
                                ' Miembro de la Comisión de Datos Personales de la Conferencia Mexicana para el Acceso a la Información Pública.'
                            ]
                        },
                        {
                            subtitulo: 'Publicacioness',
                            lista: [
                                'Dentro de publicaciones se encuentran el artículo de opinión titulado "Clasificación de las boletas electorales como dato personal".publicado en la Revista Lex, julio - agosto 2011. ',
                                '"Evolución constitucional del derecho a la información y del derecho de acceso a la información pública en México", publicado en la Revista Lex, abril - mayo 2012. '
                            ]
                        },
                        {
                            subtitulo: 'Participación en congresos, encuentros y seminarios',
                            lista: [
                                ' Participó en el curso "El Derecho a la Protección de Datos Personales", impartido por la Agencia Española de Protección de Datos y la Fundación CEDDET.',
                                ' Colaboró como ponente en el "7o Congreso Nacional de Organismos Públicos Autónomos", realizado en la ciudad de Puebla, Puebla.'
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
        // Termina DATA

    }

}
</script>

<style lang="scss" scoped>

    </style>
