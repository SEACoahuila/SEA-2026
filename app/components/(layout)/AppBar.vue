<template>
  <v-app-bar
    :color="colorNav"
    elevation="2"
    style="position: fixed;"

  >
    <v-app-bar-nav-icon 
   
      @click="toggleDrawer" 
    />
    
    <v-toolbar-title class="d-flex align-center"      >
      <v-icon size="32" class="mr-2" >
        <v-img src="/img/sea-icon.png" alt="Icono Sea" />
      </v-icon>
      <span class="text-h6">{{ title }}</span>
    </v-toolbar-title>

    <v-spacer />

    <v-switch
      v-model="isDark"
      label="Modo Oscuro"
      hide-details
      class="mt-0 mr-3"
      @change="toggleTheme"
    >
 <template v-slot:label>
        <v-icon>{{ isDark ? 'mdi-lightbulb-off' : 'mdi-white-balance-sunny'}}</v-icon>
    </template>
</v-switch>

  </v-app-bar>
</template>

<script setup lang="ts">
import { useTheme, useDisplay } from 'vuetify'
const emit = defineEmits(['toggle-drawer'])

const theme = useTheme()
const { smAndDown, mobile } = useDisplay() // Reemplaza a $vuetify.breakpoint

// Props y Estado
const title = ref(!mobile ? 'SEA' : "SEA Coahuila")
const colorNav = ref('#1d2730')
const isDark = ref(false)


// Emits para comunicar con el layout (para abrir el drawer)

const toggleDrawer = () => {
  emit('toggle-drawer')
}

// Lógica de Cambio de Tema (Vuetify 3)
const toggleTheme = () => {
  theme.global.name.value = isDark.value ? 'dark' : 'light'
}

</script>