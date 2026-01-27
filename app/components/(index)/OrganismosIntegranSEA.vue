<template>
  <div class="organismos-container py-16">
    <v-container>
      <v-row justify="center" class="mb-16">
        <v-col cols="12" class="text-center">
          <h2 class="display-text mb-2">Estructura del Sistema Anticorrupción </h2>
          <div class="animated-underline mx-auto  "></div>
        </v-col>
      </v-row>

      <v-row justify="center" align="stretch">
        <v-col 
          v-for="(item, index) in organismos" 
          :key="index" 
          cols="12" md="4" 
          class="px-6 mb-12 mb-md-0"
        >
          <div class="organismo-card" :style="`--accent-color: ${item.colorHex}; --delay: ${index * 0.2}s` ">
            
            <div class="diamond-wrapper">
              <div class="diamond-shape">
                <v-icon size="45" class="diamond-icon">{{ item.icon }}</v-icon>
              </div>
              <div class="diamond-outline"></div>
            </div>

            <div class="info-content mt-10 text-center">
              <h3 class="text-h5 font-weight-black text-blue-grey-darken-4 mb-3">
                {{ item.title }}
              </h3>
              <p class="text-body-2 text-blue-grey-darken-1 mb-6 px-4 text-justify">
                {{ item.desc }}
              </p>

              <div class="d-flex flex-column align-center gap-2">
                <v-btn
                  v-if="item.link"
                  :to="item.link"
                  variant="outlined"
                  class="action-btn"
                  rounded="lg"
                >
                 Miembros 
                </v-btn>
                
                <v-btn
                  v-if="item.externalLink"
                  :href="item.externalLink"
                  variant="text"
                  color="blue-grey"
                  class="text-caption font-weight-bold"
                >
                  <v-icon start size="16">mdi-link-variant</v-icon>
                  Sitio Oficial
                </v-btn>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const organismos = ref([
  {
    title: 'Comité Coordinador',
    desc: 'Como órgano rector y estratégico, el Comité Coordinador es el eje fundamental que articula a las instituciones del Estado con el Sistema Anticorrupción.',
    icon: 'mdi-account-tie',
    colorHex: '#FF9800',
    link: '/cc'
  },
  {
    title: 'Participación Ciudadana',
    desc: 'El Consejo de Participación Ciudadana es el canal de interacción ciudadana la sociedad civil y el gobierno. Garantiza la participación de los ciudadanos, la academia y el sector privado.',
    icon: 'mdi-account-group-outline',
    colorHex: '#9C27B0',
    link: '/cpc',
    externalLink: 'https://www.cpccoahuila.org.mx'
  },
  {
    title: 'Municipios',
    desc: 'Pilar fundamental en la implementación territorial de políticas de transparencia y fortalecimiento de la legalidad en el servicio público local.',
    icon: 'mdi-city-switch',
    colorHex: '#E91E63',

  }
]);
</script>

<style scoped>
/* 1. Animación de Entrada */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.organismo-card {
  opacity: 0;
  animation: fadeInUp 0.4s ease forwards;
  animation-delay: var(--delay);
  position: relative;
}

/* 2. Estilo del Título */
.display-text {
  font-size: 2.5rem;
  font-weight: 900;
  color: #263238;
  letter-spacing: -1px;
}

.animated-underline {
  width: 80px;
  height: 5px;
  background: var(--accent-color, #1D2730);
  border-radius: 10px;
  transition: width 0.3s ease;
}

/* 3. El Diamante (Triángulos invertidos) */
.diamond-wrapper {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto;
}

.diamond-shape {
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg); /* Crea el rombo */
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border: 2px solid #eee;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 2;
  position: relative;
}

.diamond-icon {
  transform: rotate(-45deg); /* Regresa el icono a posición normal */
  color: var(--accent-color);
  transition: all 0.5s ease;
}

.diamond-outline {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  border: 2px solid var(--accent-color);
  transform: rotate(45deg) scale(1.1);
  transition: all 2.5s ease;
  z-index: 1;
  opacity: 0.3;
}

/* 4. Efectos Hover */
.organismo-card:hover .diamond-shape {
  transform: rotate(135deg); /* Gira el rombo */
  background: var(--accent-color);
  border-color: var(--accent-color);
}

.organismo-card:hover .diamond-icon {
  transform: rotate(-135deg); /* Mantiene el icono derecho mientras el fondo gira */
  color: white !important;
}

.organismo-card:hover .diamond-outline {
  transform: rotate(225deg) scale(1.3);
  opacity: 0;
}

/* 5. Estilo de Botón */
.action-btn {
  border: 2px solid #eee !important;
  color: #263238 !important;
  font-weight: bold !important;
  transition: all 0.3s ease;
}

.organismo-card:hover .action-btn {
  background: var(--accent-color) !important;
  color: white !important;
  border-color: var(--accent-color) !important;
  box-shadow: 0 10px 20px -10px var(--accent-color);
}

.gap-2 { gap: 8px; }
</style>