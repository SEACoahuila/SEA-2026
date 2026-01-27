<template>
  <v-container class="py-8">
    
    
    <v-row justify="center">
      <TitlePages :color="page.color" :icon="page.icon" :title="page.title" />
      <v-col cols="12" lg="12">
        
        <v-card variant="flat" class="rounded-xl border pa-6 mb-8 mt-10" color="article">
          <v-row>
            <v-col cols="12" md="6" class="text-center">
              <h2 :class=" 'text-h4 font-weight-bold mb-4'">Art. 18</h2>
              <div class="d-flex flex-column gap-2 align-center">
                <v-btn variant="outlined" color="teal"
                 href="https://www.plataformadetransparencia.org.mx/" 
                 block class="mb-2">
                  <p :class="mobile ? 'text-subtitle-2' : ''">Plataforma Nacional de Transparencia</p>
                </v-btn>
                <v-btn variant="outlined" :class="mobile ? 'text-subtitle-2' : ''" color="#00897B" href="https://goo.gl/forms/v9fUknvCjxNUqNzA2" block>
                  Quejas y sugerencias
                </v-btn>
              </div>
            </v-col>
            
            <v-col cols="12" md="6" class="text-center border-s-md">
              <h2 class="text-h4 font-weight-bold mb-2">Art. 20</h2>
              <p class="text-body-2 mb-4 text-grey-darken-1">Calendario de información pública de oficio</p>
              <div class="d-flex flex-wrap justify-center gap-2">
                <v-chip 
                  v-for="(e, i) in art20" :key="i" 
                  link :to="'/transparencia/' + e.to" 
                  color="#00897B" variant="outlined" label
                >
                  {{ e.año }}
                </v-chip>
              </div>
            </v-col>
          </v-row>
        </v-card>

        <v-card variant="flat" class="rounded-xl border pa-4 pa-md-8 mb-8">
          <v-row justify="center">
            <v-col cols="12" class="text-center mb-6">
              <h1 class="text-h4 text-md-h2 font-weight-bold text-grey-darken-3 mb-2">Art. 21</h1>
              <p class="text-subtitle-1 text-grey">Información Pública de Oficio</p>
              <v-divider class="mx-auto border-opacity-50 mt-2" color="primary" width="100" thickness="3"></v-divider>
            </v-col>
          </v-row>

          <v-row>
            <v-col 
              v-for="(fraccion, i) in fracciones" :key="i" 
              cols="12" sm="6" md="4" lg="3"
            >
              <v-hover v-slot="{ isHovering, props }">
                <v-card
                  v-bind="props"
                  :elevation="isHovering ? 8 : 1"
                  :color="isHovering ? '#416a8e' : 'article'"
                  class="mx-auto transition-swing rounded-lg cursor-pointer d-flex flex-column align-center justify-center text-center pa-6 fill-height"
                  :to="'/transparencia/' + fraccion.to"
                >
                  <v-avatar size="56" :color="isHovering ? 'white' : 'blue-grey-lighten-5'" class="mb-4">
                    <span v-if="!isHovering" class="text-caption font-weight-bold position-absolute top-0 right-0 pa-2">{{ i + 1 }}</span>
                    <v-icon size="28" :color="isHovering ? 'primary' : 'blue-grey-darken-2'">
                      {{ fraccion.icon }}
                    </v-icon>
                  </v-avatar>

                  <div class="text-body-2 font-weight-medium leading-tight" :class="isHovering ? 'text-white' : 'text-grey-darken-3'">
                    {{ fraccion.titulo }}
                  </div>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-card>

        <v-row>
          <v-col cols="12" md="6">
            <v-card variant="outlined" class="rounded-xl pa-4 mb-4">
              <v-list lines="two">
                <v-list-subheader class="text-h5 font-weight-bold">Artículos Adicionales</v-list-subheader>
                <v-list-item to="/transparencia/22-1" prepend-icon="mdi-cash" title="Art. 22" subtitle="Gastos de publicidad" />
                <v-divider class="my-2"></v-divider>
                <v-list-item to="/transparencia/70-1" prepend-icon="mdi-table-cog" title="Art. 70" subtitle="Tabla de aplicabilidad" />
              </v-list>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card variant="outlined" class="rounded-xl pa-4">
              <v-list lines="one">
                <v-list-subheader class="text-h5 font-weight-bold">Transparencia LGCG</v-list-subheader>
                <v-list-item v-for="n in 7" :key="n" :to="'/transparencia/LGCG-' + n" prepend-icon="mdi-folder-file-outline">
                  <v-list-item-title>Información {{ getLGCGTitle(n) }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Usando Script Setup (estándar en Nuxt 3/4)
const page = {
  color: '#00897B',
  title: 'Transparencia',
  icon: 'mdi-magnify'
}
import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()

const art20 = [
  { año: 'Calendario de información pública de oficio', to: '20-1' }
]

const fracciones = [
  { titulo: 'Estructura Orgánica', to: '21-1', icon: 'mdi-sitemap' },
  { titulo: 'Marco normativo', to: '21-2', icon: 'mdi-scale-balance' },
  { titulo: 'Directorio de los servidores públicos', to: '21-3', icon: 'mdi-card-account-details-outline' },
  { titulo: 'Nombramientos, comisiones y licencias', to: '21-4', icon: 'mdi-folder-account-outline' },
  { titulo: 'Remuneración mensual', to: '21-5', icon: 'mdi-account-credit-card' },
  { titulo: 'Declaración Patrimonial', to: '21-6', icon: 'mdi-account-search' },
  { titulo: 'Viáticos y gastos de representación', to: '21-7', icon: 'mdi-plane-car' },
  { titulo: 'Perfil de puestos y currículum', to: '21-8', icon: 'mdi-badge-account-outline' },
  { titulo: 'Convenios de colaboración', to: '21-9', icon: 'mdi-file-sign' },
  { titulo: 'Condiciones generales de trabajo', to: '21-10', icon: 'mdi-briefcase-outline' },
  { titulo: 'Planes, programas o proyectos', to: '21-11', icon: 'mdi-chart-donut-variant' },
  { titulo: 'Servicios y trámites', to: '21-12', icon: 'mdi-face-agent' },
  { titulo: 'Mecanismos de solicitudes, opiniones, quejas', to: '21-13', icon: 'mdi-account-tie-voice-outline' },
  { titulo: 'Mecanismos de participación ciudadana', to: '21-14', icon: 'mdi-account-group-outline' },
  { titulo: 'Estímulos, apoyos y requisitos', to: '21-15', icon: 'mdi-smoke-detector-outline' },
  { titulo: 'Beneficiarios de subsidios, estímulos y apoyos', to: '21-16', icon: 'mdi-smoke-detector-outline' },
  { titulo: 'Beneficiarios de programas sociales', to: '21-17', icon: 'mdi-home-group' },
  { titulo: 'Personas que utilizan recursos públicos', to: '21-18', icon: 'mdi-account-cash' },
  { titulo: 'Instituciones de beneficencia', to: '21-19', icon: 'mdi-bank-outline' },
  { titulo: 'Presupuesto asignado', to: '21-20', icon: 'mdi-cash-check' },
  { titulo: 'Calendario de reuniones públicas', to: '21-21', icon: 'mdi-laptop-account' },
  { titulo: 'Unidad de transparencia y comité de transparencia', to: '21-22', icon: 'mdi-card-search-outline' },
  { titulo: 'Catálogos documentales de archivos', to: '21-23', icon: 'mdi-archive' },
  { titulo: 'Solicitudes y respuestas', to: '21-24', icon: 'mdi-folder-information-outline' },
  { titulo: 'Informes financieros y cuenta pública', to: '21-25', icon: 'mdi-finance' },
  { titulo: 'Deuda pública', to: '21-26', icon: 'mdi-chart-sankey' },
  { titulo: 'Auditorías', to: '21-27', icon: 'mdi-folder-eye-outline' },
  { titulo: 'Proveedores y contratistas', to: '21-28', icon: 'mdi-account-tie-woman' },
  { titulo: 'Inspectores o visitadores', to: '21-29', icon: 'mdi-account-tie-outline' },
  { titulo: 'Procedimientos de adjudicación directa, invitación restringida y licitación', to: '21-30', icon: 'mdi-folder-key-outline' },
  { titulo: 'Agenda de eventos culturales o deportivos', to: '21-31', icon: 'mdi-view-agenda-outline' },
  { titulo: 'Actas de entrega-recepción', to: '21-32', icon: 'mdi-file-document-outline' },
  { titulo: 'Georreferenciación de obras públicas', to: '21-33', icon: 'mdi-map-marker-question' },
  { titulo: 'Expedientes reservados', to: '21-34', icon: 'mdi-archive-alert-outline' },
  { titulo: 'Guía de archivos', to: '21-35', icon: 'mdi-archive-outline' },
  { titulo: 'Concesiones, permisos y autorizaciones', to: '21-36', icon: 'mdi-account-clock-outline' },
  { titulo: 'Concesiones de transporte público', to: '21-37', icon: 'mdi-bus' },
  { titulo: 'Entrega de recursos públicos', to: '21-38', icon: 'mdi-handshake-outline' },
  { titulo: 'Sistemas pensionarios', to: '21-39', icon: 'mdi-folder-file-outline' },
  { titulo: 'Informe de actividades', to: '21-40', icon: 'mdi-office-building-cog-outline' },
  { titulo: 'Ingresos', to: '21-41', icon: 'mdi-account-cash-outline' },
  { titulo: 'Información desclasificada', to: '21-42', icon: 'mdi-text-box-outline' },
  { titulo: 'Preguntas frecuentes', to: '21-43', icon: 'mdi-chat-question-outline' },
  { titulo: 'Catálogo de información adicional', to: '21-44', icon: 'mdi-information-outline' },
  { titulo: 'Acciones realizadas por contingencias', to: '21-45', icon: 'mdi-weather-pouring' },
  { titulo: 'Aportaciones nacionales o internacionales, para emergencia o desastre', to: '21-46', icon: 'mdi-hand-coin-outline' },
  { titulo: 'Servidores públicos con sanciones definitivas', to: '21-47', icon: 'mdi-account-multiple-remove' },
  { titulo: 'Listado del parque vehicular', to: '21-48', icon: 'mdi-car-hatchback' },
  { titulo: 'Información catastral', to: '21-49', icon: 'mdi-domain' },
  { titulo: 'Proceso catastral de valuación', to: '21-50', icon: 'mdi-office-building' },
  { titulo: 'Mecanismos y resultados de evaluación', to: '21-51', icon: 'mdi-home-analytics' },
  { titulo: 'Resultados de evaluación', to: '21-52', icon: 'mdi-table-large' },
  { titulo: 'Otra información', to: '21-53', icon: 'mdi-information-variant' }
]

const getLGCGTitle = (n) => {
  const titles = [
    'Contable', 'Presupuestal', 'Programática', 
    'Adicional', 'Disciplina Financiera (LDF)', 
    'Título Quinto LGCG', 'Normatividad'
  ]
  return titles[n-1]
}
</script>

<style scoped>
.transition-swing {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.leading-tight {
  line-height: 1.2;
}
.gap-2 {
  gap: 8px;
}
</style>