
<template>
  <v-container fluid class="pa-3 pa-md-10 bg-grey-lighten-5">
    <v-row justify="center">
      
      <TitlePages 
        :color="page.color" 
        :title="page.title" 
        :icon="page.icon" 
        :botones="botones" 
      />
    
      <v-col cols="12" class="mt-8">
        <div class="text-center mb-10">
          <h2 class="text-h4 text-md-h3 font-weight-black text-blue-grey-darken-4 text-uppercase ls-title mb-4">
            Módulos del Sistema
          </h2>
          <p class="text-body-1 text-grey-darken-2 max-width-800 mx-auto mb-6">
            Explore los diferentes módulos que componen el sistema integral de información
          </p>
          <v-divider class="mx-auto mt-4 mb-2" length="80" thickness="4" style="background: linear-gradient(90deg, transparent, #00838F, transparent);"></v-divider>
        </div>

        <v-row class="justify-center">
          <v-col cols="12" xl="3" lg="4" md="6" sm="12" v-for="(i, index) in sistemas" :key="index">
            <v-hover v-slot="{ isHovering, props }">
            <v-card 
  v-bind="props"
  class="mx-auto rounded-xl overflow-hidden mt-6 system-card"
  :elevation="isHovering ? 12 : 2"
  height="100%"
  style="
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(0,0,0,0.04);
    backdrop-filter: blur(10px);
    background: rgba(255,255,255,0.95);
    position: relative;
  "
>
  <div 
    class="card-internal-watermark"
    :style="`color: var(--v-${i.color});`"
  >
    {{ i.numero }}
  </div>

  <div 
    class="position-relative d-flex align-center justify-center rounded-t-xl card-header"
    :style="`background: linear-gradient(135deg, var(--v-${i.color}), color-mix(in srgb, var(--v-${i.color}) 80%, white 20%));`"
    style="height: 100px; overflow: hidden; z-index: 1;"
  >
    <div class="particles">
      <div v-for="n in 8" :key="n" class="particle" :style="particleStyle(n)"></div>
    </div>
    <div class="geometric-pattern"></div>
    
    <div class="giant-number font-weight-black text-white text-shadow">
      {{ i.numero }}
    </div>
    
    <div class="card-glow"></div>
  </div>

  <div class="d-flex justify-center" style="margin-top: -60px; position: relative; z-index: 10;">
    <div class="icon-container">
      <div class="pulse-ring"></div>
      <v-sheet 
        elevation="8" 
        rounded="circle" 
        height="120" 
        width="120" 
        class="d-flex align-center justify-center icon-sheet"
        :style="`border: 4px solid white; background: linear-gradient(135deg, white, #f8f9fa);`"
      >
        <v-avatar size="90" :class="`bg-${i.color}-lighten-5`" variant="flat" class="elevation-4">
          <v-icon size="48" :color="i.color">{{ i.icon }}</v-icon>
        </v-avatar>
      </v-sheet>
    </div>
  </div>

  <v-card-text class="text-center pb-4 d-flex flex-column flex-grow-1 px-6 position-relative" style="z-index: 2;">
    <div class="mb-3">
      <v-chip 
        size="small" 
        :color="i.color" 
        variant="flat" 
        class="font-weight-bold elevation-2 chip-module"
        label
      >
        <span class="chip-text">Módulo {{ i.numero }}</span>
      </v-chip>
    </div>

    <h3 class="text-h5 font-weight-bold text-blue-grey-darken-4 mb-3 text-uppercase module-title">
      {{ i.nombre }}
    </h3>
    
    <p class="text-body-2 text-grey-darken-2 px-2 description-text" style="line-height: 1.7; font-weight: 500;">
      {{ i.sub }}
    </p>

    <div class="mt-auto pb-1">
      <v-btn 
        variant="outlined" 
        rounded="pill" 
        :color="i.color"
        :to="i.src"
        class="font-weight-bold letter-spacing-1 action-btn"
        :class="{ 'elevation-6': isHovering }"
        size="small"
      >
        <span class="btn-text">Ir</span>
        <v-icon end icon="mdi-arrow-right" size="small" class="ml-2"></v-icon>
      </v-btn>
    </div>
  </v-card-text>
  
  <div 
    class="card-footer-line"
    :style="`background: linear-gradient(90deg, transparent, var(--v-${i.color}), transparent); opacity: ${isHovering ? 1 : 0.7};`"
  ></div>
</v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SEIPage',
  data() {
    return {
      page: {
        color: '#00838F',
        title: 'Sistema Estatal de Información',
        icon: 'mdi-graphql'
      },
      botones: [
        {
          titulo: 'Proyecto Ejecutivo',
          doc: 'sei/Proyecto-Ejecutivo.pdf'
        }
      ],
      sistemas: [
        {
          numero: 'S1',
          nombre: 'Declaraciones',
          sub: 'Evolución patrimonial, de intereses y constancia fiscal.',
          icon: 'mdi-book-open-page-variant', // Icono actualizado
          color: 'green-darken-3',
          src: '/sei/declaraciones'
        },
        {
          numero: 'S2',
          nombre: 'Contrataciones',
          sub: 'Servidores públicos que intervienen en contrataciones.',
          icon: 'mdi-account-tie-voice', // Icono actualizado
          color: 'pink-darken-3',
          src: '/sei/servidores'
        },
        {
          numero: 'S3',
          nombre: 'Sancionados',
          sub: 'Registro de servidores públicos y particulares sancionados.',
          icon: 'mdi-gavel',
          color: 'blue-darken-3',
          src: '/sei/sanciones'
        },
        {
          numero: 'S5',
          nombre: 'Denuncias',
          sub: 'Denuncias de faltas administrativas y corrupción.',
          icon: 'mdi-bullhorn-outline',
          color: 'amber-darken-4',
          src: '/sei/denuncias'
        },
      ],
   
    }
  },
  methods: {
    particleStyle(index) {
      const size = Math.random() * 60 + 20;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const opacity = Math.random() * 0.1 + 0.05;
      const delay = Math.random() * 2;
      
      return {
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        top: `${top}%`,
        opacity: opacity,
        animationDelay: `${delay}s`
      };
    }
  }
}
</script>

<style scoped>
/* Variables y reset */
:deep(.system-card) {
  --card-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  --hover-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

/* Efectos de la tarjeta */
.system-card {
  box-shadow: var(--card-shadow) !important;
  transform: translateY(0);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.system-card:hover {
  box-shadow: var(--hover-shadow) !important;
  transform: translateY(-12px) scale(1.01) !important;
}

/* Header de la card con efectos */
.card-header {
  position: relative;
  overflow: hidden;
}

.card-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: transform 0.8s ease;
}

.system-card:hover .card-header::before {
  transform: translateX(200%);
}

/* Número gigante con efectos */
.giant-number {
  font-size: 10rem;
  font-weight: 900;
  opacity: 0.1;
  position: absolute;
  bottom: -30px;
  right: -20px;
  line-height: 1;
  user-select: none;
  transform: rotate(-5deg);
  transition: all 0.5s ease;
  font-family: 'Roboto', sans-serif;
}

.system-card:hover .giant-number {
  opacity: 0.15;
  transform: rotate(-3deg) scale(1.05);
}

.text-shadow {
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
}

/* Efecto de partículas */
.particles {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.particle {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: float 8s infinite ease-in-out;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

/* Patrón geométrico */
.geometric-pattern {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px),
    radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 2px, transparent 2px);
  background-size: 40px 40px;
  opacity: 0.3;
}

/* Glow effect */
.card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  pointer-events: none;
}

/* Contenedor del icono */
.icon-container {
  position: relative;
}

.icon-sheet {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2) !important;
}

.system-card:hover .icon-sheet {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.3) !important;
}

/* Anillo pulsante */
.pulse-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.4);
  animation: pulse 3s infinite;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(0.95);
    opacity: 0.7;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.05);
    opacity: 0.3;
  }
  100% {
    transform: translate(-50%, -50%) scale(0.95);
    opacity: 0.7;
  }
}

/* Chip del módulo */
.chip-module {
  transition: all 0.3s ease;
  padding: 6px 16px !important;
}

.system-card:hover .chip-module {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
}

.chip-text {
  letter-spacing: 0.5px;
  font-size: 0.875rem;
}

/* Título del módulo */
.module-title {
  position: relative;
  padding-bottom: 12px;
  transition: all 0.3s ease;
}

.module-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 3px;
  background: currentColor;
  opacity: 0.3;
  transition: all 0.3s ease;
}

.system-card:hover .module-title::after {
  width: 60px;
  opacity: 0.7;
}

/* Texto descriptivo */
.description-text {
  transition: all 0.3s ease;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.system-card:hover .description-text {
  color: #37474F !important;
}

/* Botón de acción */
.action-btn {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
  position: relative;
  overflow: hidden;
  min-width: 180px;
}

.action-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.action-btn:hover::before {
  width: 300px;
  height: 300px;
}

.btn-text {
  position: relative;
  z-index: 1;
  letter-spacing: 0.5px;
}

/* Línea decorativa inferior */
.card-footer-line {
  height: 4px;
  width: 100%;
  transition: all 0.5s ease;
}

/* Tipografía mejorada */
.ls-title {
  letter-spacing: -0.5px;
  background: linear-gradient(135deg, #2C3E50, #4A6572);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Utilidades */
.max-width-800 {
  max-width: 800px;
}

/* Ajustes responsive */
@media (max-width: 960px) {
  .giant-number {
    font-size: 8rem;
    right: -10px;
  }
  
  .icon-sheet {
    height: 100px !important;
    width: 100px !important;
  }
  
  .v-avatar {
    width: 70px !important;
    height: 70px !important;
  }
}

@media (max-width: 600px) {
  .giant-number {
    font-size: 6rem;
  }
  
  .action-btn {
    min-width: 160px;
    padding-left: 24px !important;
    padding-right: 24px !important;
  }
}
/* Nueva marca de agua interna para la Card */
.card-internal-watermark {
  position: absolute;
  bottom: 40px;
  right: -10px;
  font-size: 12rem;
  font-weight: 900;
  opacity: 0.04; /* Muy sutil */
  line-height: 1;
  user-select: none;
  pointer-events: none;
  z-index: 0;
  transition: all 0.6s ease;
  transform: rotate(-5deg);
}

.system-card:hover .card-internal-watermark {
  opacity: 0.08;
  transform: scale(1.1) rotate(0deg);
  right: 10px;
}

/* Ajuste necesario para que el contenido flote sobre la marca de agua */
.position-relative {
  position: relative;
}
</style>