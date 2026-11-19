<template>
  <v-container class="">
    <v-row>

      <TitlePages :color="page.color" :title="page.title" :icon="page.icon" />
      <v-col cols="12" class="mt-8">
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

      <v-col cols="12" lg="4">
        <v-card class="rounded-xl border pa-6" variant="flat" color="blue-grey-lighten-5" height="100%">
          <div class="text-h5 font-weight-bold mb-4 text-center text-blue-grey-darken-3">
            <!-- <v-icon start icon="mdi-shield-check" color="blue-grey"></v-icon> -->
            Principios
          </div>
          <v-divider class="mb-6"></v-divider>

          <v-row dense>
            <v-col cols="12" v-for="(e, index) in Principios" :key="index">
              <v-tooltip location="start" :text="e.texto" max-width="300">
                <template v-slot:activator="{ props }">
                  <v-chip v-bind="props" block class="justify-center mb-2 font-weight-medium w-100" color="white"
                    variant="flat" border="sm accent" size="large">
                    {{ e.principios }}
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

      <v-col cols="12" lg="4">
        <v-card class="rounded-xl border pa-6" variant="flat" color="blue-grey-lighten-5" height="100%">
          <div class="text-h5 font-weight-bold mb-4 text-center text-blue-grey-darken-3">
            <!-- <v-icon start icon="mdi-shield-check" color="blue-grey"></v-icon> -->
            Valores generales
          </div>
          <v-divider class="mb-6"></v-divider>

          <v-row dense>
            <v-col cols="12" v-for="(e, index) in Valoresg" :key="index">
              <v-tooltip location="start" :text="e.texto" max-width="300">
                <template v-slot:activator="{ props }">
                  <v-chip v-bind="props" block class="justify-center mb-2 font-weight-medium w-100" color="white"
                    variant="flat" border="sm accent" size="large">
                    {{ e.valoresg }}
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

      <v-col cols="12" lg="4">
        <v-card class="rounded-xl border pa-6" variant="flat" color="blue-grey-lighten-5" height="100%">
          <div class="text-h5 font-weight-bold mb-4 text-center text-blue-grey-darken-3">
            <!-- <v-icon start icon="mdi-shield-check" color="blue-grey"></v-icon> -->
            Valores específicos
          </div>
          <v-divider class="mb-6"></v-divider>

          <v-row dense>
            <v-col cols="12" v-for="(e, index) in Valoresesp" :key="index">
              <v-tooltip location="start" max-width="300">
                <template v-slot:activator="{ props }">
                  <v-chip v-bind="props" block class="justify-center mb-2 font-weight-medium w-100" color="white"
                    variant="flat" border="sm accent" size="large">
                    {{ e.valoresesp }}
                  </v-chip>
                </template>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="12" class="mt-8">
        <div class="text-h4 font-weight-bold text-grey-darken-3 mb-4 text-center">Otra Información</div>
        <v-divider class="mb-8"></v-divider>

        <v-row justify="center">
          <v-col cols="12" md="6" lg="3" v-for="(doc, i) in documentos" :key="i">
            <v-btn block height="60" class="text-none rounded-lg border neutral-btn" variant="flat"
              :href="doc.to ? doc.to : (doc.src ? require('@/static/secretaria-ejecutiva/' + doc.src) : '#')"
              target="_blank">
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
            texto: 'Somos un organismo descentralizado de apoyo técnico al Comité Coordinador del Sistema Anticorrupción de Coahuila, que provee insumos necesarios para el diseño, ejecución y evaluación de políticas públicas en materia de prevención, reducción y combate a la corrupción, faltas administrativas y control de recursos públicos, a fin de dar respuestas efectivas a las exigencias de la sociedad coahuilense.'
          },
          {
            titulo: 'Visión',
            texto: 'Seremos un organismo ejemplo a nivel nacional en el diseño, implementación y evaluación de políticas públicas para la prevención, combate, reducción y erradicación de la corrupción, faltas administrativas y control de recursos públicos, generando un alto grado de confianza ciudadana, con un trabajo imparcial, profesional y efectivo.'
          }
        ]
      },
      Principios: [
        { principios: 'Legalidad', texto: 'Orientar todas las acciones institucionales al estricto cumplimiento de la Constitución, leyes, reglamentos y demás disposiciones normativas aplicables.' },
        { principios: 'Honradez', texto: 'Mantener un desempeño recto y transparente, evitando el beneficio indebido personal o para terceros en el ejercicio de funciones.' },
        { principios: 'Honestidad', texto: 'Conducirse con verdad y coherencia en el desempeño de las funciones, expresando y actuando con autenticidad, sin ocultar, alterar o manipular información, y utilizando los recursos públicos únicamente para los fines a los que están destinados.' },
        { principios: 'Lealtad', texto: 'Conducirse con fidelidad a la misión y visión de la SESAEC, privilegiando el interés público por encima de intereses particulares.' },
        { principios: 'Imparcialidad', texto: 'Adoptar decisiones objetivas y neutrales, sin discriminación, favoritismo o sesgos personales.' },
        { principios: 'Objetividad', texto: 'Desempeñar las funciones públicas con imparcialidad y sustento en criterios técnicos, legales y verificables, garantizando que las decisiones y actuaciones respondan al interés general y no a preferencias o influencias personales, políticas o de grupo.' },
        { principios: 'Eficiencia y eficacia', texto: 'Garantizar el uso óptimo de recursos públicos para cumplir con los objetivos institucionales en tiempo y forma.' },
        { principios: 'Integridad', texto: 'Conducirse con coherencia ética en todas las dimensiones de la vida pública, asegurando la confianza ciudadana en la institución.' },
        { principios: 'Rendición de cuentas', texto: 'Asumir la responsabilidad de las decisiones y resultados, informando con claridad y transparencia a la ciudadanía y órganos de control.' },
        { principios: 'Responsabilidad', texto: 'Cumplir con las obligaciones y deberes institucionales con compromiso, disciplina y apego a la normativa.' },
        { principios: 'Respeto', texto: 'Reconocer la dignidad de todas las personas, fomentando un trato cordial y profesional en el ámbito institucional y ciudadano.' },
        { principios: 'Transparencia', texto: 'Asegurar la máxima publicidad de la información y decisiones, garantizando el acceso ciudadano a la gestión pública.' },

      ],
      Valoresg: [
        { valoresg: 'Interés público', texto: 'Priorizar siempre el bienestar colectivo de la sociedad coahuilense, colocando el servicio público por encima de los intereses individuales.' },
        { valoresg: 'Respeto', texto: 'Las personas servidoras públicas se conducen con austeridad y sin ostentación, y otorgan un trato digno y cordial a las personas en general y a sus compañeros y compañeras de trabajo, superiores y subordinados, considerando sus derechos, de tal manera que propician el diálogo cortés y la aplicación armónica de instrumentos que conduzcan al entendimiento, a través de la eficacia y el interés público.' },
        { valoresg: 'Respeto a los derechos humanos', texto: 'Promover y proteger los derechos fundamentales en el diseño y ejecución de políticas públicas anticorrupción.' },
        { valoresg: 'Igualdad y no discriminación', texto: 'Garantizar la igualdad de trato y de oportunidades en el ámbito laboral e institucional, sin distinción de género, condición social, origen étnico, ideología, religión o cualquier otra condición.' },
        { valoresg: 'Equidad de género', texto: 'Asegurar condiciones justas e inclusivas para mujeres y hombres, eliminando barreras que limiten su participación equitativa.' },
        { valoresg: 'Entorno cultural y ecológico', texto: 'Desarrollar la función pública con respeto al medio ambiente y al patrimonio cultural de la entidad.' },
        { valoresg: 'Cooperación', texto: 'Impulsar el trabajo colaborativo, tanto al interior de la institución como con los diferentes entes públicos y sociales, para alcanzar metas comunes.' },
        { valoresg: 'Liderazgo ético', texto: 'Ejercer la función pública con visión, responsabilidad y ejemplo, fomentando una cultura de integridad que inspire confianza ciudadana.' }
      ],

      Valoresesp: [
        { valoresesp: '1.	Compromiso Institucional'},
        { valoresesp: '2.	Ética'},
        { valoresesp: '3.	Autonomía' },
        { valoresesp: '5.	Justicia/Equidad'},
        { valoresesp: '6.	Trabajo en equipo'},
        { valoresesp: '7.	Servicio Público'},
        { valoresesp: '8.	Orientación a Resultado'}
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