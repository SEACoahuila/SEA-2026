<template>
  <v-container class="">
    <v-row>
      
      <TitlePages :color="page.color" :title="page.title" :icon="page.icon" />
      <v-col cols="12" lg="9">
        <v-card variant="flat" class="pa-2" height="100%">
          <div v-for="(e, i) in page.presentacion" :key="i" class="mb-10">
            <div class="text-h4 font-weight-bold text-grey-darken-3 mb-2">{{ e.titulo }}</div>
            <v-divider width="50" class="mb-4" thickness="3" color="primary"></v-divider>
            <p class="text-body-1 text-justify text-grey-darken-2 leading-relaxed">
              {{ e.texto }}
            </p>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" lg="3">
        <v-card class="rounded-xl border pa-6" variant="flat" color="blue-grey-lighten-5" height="100%">
          <div class="text-h5 font-weight-bold mb-4 text-center text-blue-grey-darken-3">
            <!-- <v-icon start icon="mdi-shield-check" color="blue-grey"></v-icon> -->
            Nuestros Valores
          </div>
          <v-divider class="mb-6"></v-divider>
          
          <v-row dense>
            <v-col cols="12" v-for="(e, index) in Valores" :key="index">
              <v-tooltip location="start" :text="e.texto" max-width="300">
                <template v-slot:activator="{ props }">
                  <v-chip
                    v-bind="props"
                    block
                    class="justify-center mb-2 font-weight-medium w-100"
                    color="white"
                    variant="flat"
                    border="sm accent"
                    size="large"
                  >
                    {{ e.valor }}
                  </v-chip>
                </template>
              </v-tooltip>
            </v-col>
          </v-row>
          <div class="text-caption text-center text-grey-darken-1 mt-4 italic">
            * Pasa el mouse sobre un valor para ver su descripción
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" class="mt-8">
        <div class="text-h4 font-weight-bold text-grey-darken-3 mb-4 text-center">Otra Información</div>
        <v-divider class="mb-8"></v-divider>

        <v-row justify="center">
          <v-col cols="12" md="6" lg="3" v-for="(doc, i) in documentos" :key="i">
            <v-btn
              block
              height="60"
              class="text-none rounded-lg border neutral-btn"
              variant="flat"
              :href="doc.to ? doc.to : (doc.src ? require('@/static/secretaria-ejecutiva/' + doc.src) : '#')"
              target="_blank"
            >
              <div class="d-flex flex-column text-center">
                <span class="text-body-2 font-weight-bold text-grey-darken-3">{{ doc.titulo }}</span>
                <span class="text-caption text-grey-darken-1">{{ doc.to ? 'Secretaría Ejecutiva' : 'Documento' }}</span>
              </div>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'sei',
  data() {
    return {
      page: {
        color: '#D81B60',
        title: 'Secretaría Ejecutiva',
        icon: 'mdi-cogs',
        presentacion: [
          {
            titulo: 'Funciones',
            texto: 'La Secretaría Ejecutiva tiene por objeto fungir como órgano de apoyo técnico del Comité Coordinador del Sistema Estatal, a efecto de proveerle la asistencia técnica, así como los insumos necesarios para el desempeño de sus atribuciones.'
          },
          {
            titulo: 'Misión',
            texto: 'Somos un organismo descentralizado de apoyo técnico al Comité Coordinador del Sistema Anticorrupción de Coahuila, que provee insumos necesarios para el diseño, ejecución y evaluación de políticas públicas en materia de prevención, reducción y combate a la corrupción, faltas administrativas y control de recursos públicos.'
          },
          {
            titulo: 'Visión',
            texto: 'Seremos un organismo ejemplo a nivel nacional en el diseño, implementación y evaluación de políticas públicas para la prevención, combate, reducción y erradicación de la corrupción, generando un alto grado de confianza ciudadana, con un trabajo imparcial, profesional y efectivo.'
          }
        ]
      },
      Valores: [
        { valor: 'Transparencia', texto: 'Implica actuar con rectitud y decoro en el desempeño de las facultades que la Ley otorga al personal del SEA.' },
        { valor: 'Honestidad', texto: 'Conlleva la necesaria alineación de los actos individuales con las aspiraciones del Sistema Anticorrupción.' },
        { valor: 'Imparcialidad', texto: 'Firme decisión de poner al servicio del Sistema Anticorrupción las competencias y conocimientos de cada integrante.' },
        { valor: 'Autonomía', texto: 'Voluntad para cumplir las facultades y atribuciones que por Ley tiene la Secretaría Ejecutiva.' },
        { valor: 'Integridad', texto: 'Esfuerzo para comprender las perspectivas ciudadanas con relación al fenómeno de la corrupción.' },
        { valor: 'Responsabilidad', texto: 'Madurez para reconocer las consecuencias de cada decisión tomada y cada acción realizada.' },
        { valor: 'Compromiso Social', texto: 'Disposición para colaborar de manera decidida con las entidades del Sistema Anticorrupción y la sociedad.' },
        { valor: 'Objetividad', texto: 'Apunta a la necesidad de empatar la acción con el discurso para elevar la efectividad del SEA.' }
      ],
      documentos: [
        { titulo: 'Monitoreo Legislativo', to: 'https://www.seacoahuila.org.mx/SE/monitoreo-legislativo/' },
        { titulo: 'Representantes de municipios', to: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FkyYlvOBrjgH7F3p5TbcE%2FREPRESENTANTES%20DE%20MUNICIPIOSS%20(1).pdf?alt=media&token=db588fd9-9dbb-4232-aa6a-745819a20764' },
        { titulo: 'Control Interno y Ética', to: 'https://www.seacoahuila.org.mx/SE/ciye/' },
        { titulo: 'Sistema de Gestión Antisoborno', to: 'https://www.seacoahuila.org.mx/SE/sga/' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.min-height-vh {
  min-height: 70vh;
}

.leading-relaxed {
  line-height: 1.7;
}

.neutral-btn {
  background-color: #fafafa !important;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background-color: #f0f0f0 !important;
    border-color: #bdbdbd !important;
    transform: translateY(-2px);
  }
}

/* Estilo para los botones de valores */
.v-btn {
  letter-spacing: 0.5px;
}
</style>