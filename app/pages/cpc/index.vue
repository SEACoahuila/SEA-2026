<template>
    <v-container>
        <v-row justify="center">
            <title-pages :color="page.color" :title="page.title" :icon="page.icon" />
            <v-col cols="12">
                <PresentationPages :presentacion="page.presentacion" :color="page.color" />
                <v-divider class="mb-6"></v-divider>


                <v-card class="mt-10 pa-6" elevation="0" color="article">
                    <div class="text-h4 text-center mb-8 font-weight-light">Miembros que integran el CPC</div>

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

                <v-card class="mt-10 pa-6 pa-md-10" border elevation="1">
                    <div class="text-h4 text-center mb-10 font-weight-bold">Valores</div>
                    <v-row v-for="(e, index) in Valores" :key="index" align="center" class="mb-4">
                        <v-col cols="12" md="3" class="text-center text-md-right">
                            <span class="text-h6 font-weight-black" :style="{ color: page.color }">{{ e.valor }}</span>
                        </v-col>
                        <v-divider vertical class="d-none d-md-flex mx-4"></v-divider>
                        <v-col cols="12" md="8">
                            <p class="text-body-1">{{ e.texto }}</p>
                        </v-col>
                    </v-row>
                </v-card>

                <v-card class="mt-10 pa-8 bg-grey-lighten-4" rounded="xl">
                    <v-row>
                        <v-col cols="12" md="6" class="text-center">
                            <div class="text-h5 mb-4">Planes</div>
                            <div class="d-flex flex-wrap justify-center gap-2">
                                <v-btn v-for="(e, i) in planes" :key="i" :href="`/planes/${e.src}`" target="_blank"
                                    variant="elevated" color="white" class="ma-1" rounded="pill">
                                    {{ e.year }}
                                </v-btn>
                            </div>
                        </v-col>

                        <v-col cols="12" md="6" class="text-center">
                            <div class="text-h5 mb-4">Informes</div>
                            <div class="d-flex flex-wrap justify-center gap-2">
                                <v-btn v-for="(e, i) in informes" :key="i" :href="`/informes/${e.src}`" target="_blank"
                                    variant="tonal" :color="page.color" class="ma-1" rounded="pill">
                                    {{ e.year }}
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-card>

            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
// En Nuxt 3/4 usamos <script setup> por estándar
const page = {
    color: 'purple',
    title: 'Consejo de Participación Ciudadana',
    icon: 'mdi-account-supervisor-circle-outline',
    presentacion: [
        {
            titulo: 'Misión',
            texto: 'Coordinar la participación de la ciudadanía, la academia y el sector privado e impulsar políticas públicas y acciones encaminadas a combatir la corrupción en concordancia con el sistema anticorrupción del estado de Coahuila.'
        },
        {
            titulo: 'Visión',
            texto: 'Ser la instancia que refleje la perspectiva ciudadana con respecto al combate a la corrupción garantizando su incidencia en la agenda pública y contribuyendo en la consolidación del sistema anticorrupción del estado de Coahuila.'
        }
    ]
};

const integrantes = [
    {
        nombre: 'Juan Carlos Guzmán Escobedo',
        cargo: 'Consejero Presidente del Consejo de Participación Ciudadana.',
        foto: 'cpc-jcge.jpg',
        img: 'cc-cpc.png',
        mail: 'carlos.guzman@cpccoahuila.org.mx'
    },
    {
        nombre: 'Karla Ivonne Natividad González',
        cargo: 'Consejera del Consejo de Participación Ciudadana.',
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
    }
];

const Valores = [
    {
        valor: 'Honestidad:',
        texto: ' Implica actuar con rectitud y decoro en el desempeño de las facultades que la Ley otorga a quienes integran el CPC, correspondiendo con creces a la confianza otorgada.',
    },
    {
        valor: 'Congruencia:',
        texto: ' Conlleva la necesaria alineación de los actos individuales con las aspiraciones del CPC y del Sistema Anticorrupción.',
    },
    {
        valor: 'Dedicación:',
        texto: ' Refiere a la firme decisión de poner al servicio del CPC y del Sistema Anticorrupción, las competencias, conocimientos y habilidades de que dispone cada integrante y dedicando su tiempo efectivo a la implementación de acciones destinadas a prevenir actos de corrupción.',
    },
    {
        valor: 'Compromiso:',
        texto: ' Señala la férrea voluntad para no escatimar esfuerzos en el cumplimiento de las facultades y atribuciones que por Ley tienen quienes integran el CPC acorde a su conformación como grupo multidisciplinario.',
    },
    {
        valor: 'Empatía:',
        texto: ' Indica el esfuerzo indispensable que tienen que realizar quienes integran el CPC para comprender las distintas perspectivas ciudadanas con relación al fenómeno de la corrupción, sus causas, efectos y costos.',
    },
    {
        valor: 'Responsabilidad:',
        texto: ' Supone la madurez para reconocer las consecuencias de cada decisión tomada y cada acción realizada, así como también de las omisiones por parte de cada integrante del CPC.',
    },
    {
        valor: 'Solidaridad:',
        texto: ' Implica la disposición para colaborar de manera decidida con la labor del resto de los integrantes del CPC, de las entidades que conforman el Sistema Anticorrupción y de la sociedad en su conjunto.',
    },
    {
        valor: 'Integridad:',
        texto: ' Apunta a la necesidad de empatar la acción, individual y colectiva, con el discurso, con el fin de elevar la efectividad y la incidencia del CPC y del Sistema Anticorrupción al que pertenecen.',
    },
    {
        valor: 'Inclusión:',
        texto: ' Escuchamos todas las voces y respetamos las fortalezas y formas de pensamiento de los distintos grupos sociales y empresariales, así como la diversidad social, cultural y de género.',
    },
    {
        valor: 'Independencia:',
        texto: ' Implica la decidida voluntad para no dejarse influir por intereses ajenos a los propósitos del CPC y del Sistema Anticorrupción.',
    },
];

const informes = [
    {
        year: '2021-2022',
        src: 'cpc-coahuila-informe-resultados-2021-2022.pdf'
    },
    {
        year: '2020-2021',
        src: 'cpc-coahuila-informe-resultados-2020-2021.pdf'
    },
    {
        year: '2019-2020',
        src: 'cpc-coahuila-informe-resultados-2019-2020.pdf'
    },
    {
        year: '2018-2019',
        src: 'cpc-coahuila-informe-resultados-2018-2019.pdf'
    },

];

const planes = [
    {
        year: 'Plan de Comunicación',
        src: 'plan-de-comunicacion-cpc.pdf'
    },
    {
        year: '2023',
        src: 'programa-anual-cpc-23.pdf'
    },
    {
        year: '2022',
        src: 'programa-anual-cpc-22.pdf'
    },
    {
        year: '2020',
        src: 'plan-de-trabajo-cpc-2020.pdf'
    },
    {
        year: '2019',
        src: 'plan-de-trabajo-cpc-2019.pdf'
    },
    {
        year: '2018',
        src: 'plan-de-trabajo-cpc-2018.pdf'
    },

];
</script>

<style scoped>
.gap-2 {
    gap: 8px;
}

.text-justify {
    text-justify: inter-word;
}
</style>