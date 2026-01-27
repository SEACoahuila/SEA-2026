<template>
  <v-container fluid class="py-12 bg-grey-lighten-5">
    <v-row justify="center" class="mb-10">
      <TitlePages :color="page.color" :title="page.title" :icon="page.icon" />
    </v-row>

    <v-row justify="center">
      <v-col 
        v-for="(e, i) in tarj" 
        :key="i" 
        cols="12" sm="6" lg="3"
        class="pa-4"
      >
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            v-bind="props"
            :to="e.to"
            class="service-card rounded-xl pa-6 d-flex flex-column align-center text-center"
            :elevation="isHovering ? 6 : 2"
          >
            <div 
              class=" mb-6 transition-all"
            
            >
              <v-icon :color="e.color" size="200">{{ e.icon }}</v-icon>
            </div>

            <h3 class="text-h6 font-weight-bold text-blue-grey-darken-4 leading-tight mb-4">
              {{ e.titulo }}
            </h3>

            <v-spacer></v-spacer>

            <div 
              class="action-label text-caption font-weight-black text-uppercase transition-all"
              :style="{ color: e.color, opacity: isHovering ? 1 : 0.5 }"
            >
              Explorar <v-icon size="small">mdi-chevron-right</v-icon>
            </div>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const page = ref({
  color: '#77825e',
  title: 'Control Interno y Ética',
  icon: 'mdi-format-list-checks',
});

const tarj = ref([
  {
    titulo: 'Unidad de Control Interno (UECI)',
    icon: 'mdi-clipboard-text-search',
    to: '/SE/ciye/ueci',
    color: '#3F51B5'
  },
  {
    titulo: 'Comité de Ética',
    icon: 'mdi-scale-balance',
    to: '/SE/ciye/ce',
    color: '#77825e'
  },
  {
    titulo: 'Hostigamiento y Acoso (SHSAS)',
    icon: 'mdi-account-cancel-outline',
    to: '/SE/ciye/shsas',
    color: '#D81B60'
  },
  {
    titulo: 'Control y Desempeño (COCODI)',
    icon: 'mdi-finance',
    to: '/SE/ciye/cocodi',
    color: '#00838F'
  },
]);
</script>

<style scoped>
.service-card {
  border: 1px solid rgba(0,0,0,0.05) !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  background: white !important;
  min-height: 280px;
}

.icon-wrapper {
  width: 85px;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px; /* Estilo 'squircle' */
}

.service-card:hover {
  border-color: transparent !important;
  transform: translateY(-5px);
}

.service-card:hover .icon-wrapper {
  transform: scale(1.1) rotate(5deg);
}

.leading-tight {
  line-height: 1.3 !important;
}

.action-label {
  letter-spacing: 1px;
}

.transition-all {
  transition: all 0.3s ease;
}
</style>