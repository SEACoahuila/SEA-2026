<template>
  <v-navigation-drawer
  v-model="props.drawerToggle"
  :rail="rail"  
  :permanent="!mobile"
  @click="rail = rail"
  theme="dark"
  :color="colorNav"
  elevation="2"
  height="100%"
  :width="mobile ? displayWidth : 400"
  style="position: fixed;"
  
    >
    
    <v-list 
    density='compact' 
    nav>
      
      <v-list-item 
      v-show="!mobile"
      class="mb-3 menu-header"
      :prepend-icon='!rail ? "mdi-view-quilt" : "mdi-menu-close" '
      title="Minimizar Menú"
      subtitle="Navegación"
      @click.stop="rail = !rail"
      rounded="xl"
      >
      <template v-slot:append>
            <v-icon size="small" v-if="!rail">mdi-chevron-left</v-icon>
        </template>
      </v-list-item>

      <v-divider class="mb-2"></v-divider>

      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        :title="item.title"
        :value="item.title"
        rounded="lg"
        color="primary"
        @click="toggleDrawer"
      >
        <template v-slot:prepend>
          <v-icon 
            v-if="item.icon" 
            :color="item.color" 
            :icon="item.icon"
            class="mr-2"
          ></v-icon>

          <v-icon v-else-if="item.avatar" size="24" class="mr-2">
            <v-img :src="`/img/botonera/${item.avatar}`" alt="icono"  />
          </v-icon>
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDisplay } from 'vuetify'

const { mobile, width: displayWidth } = useDisplay()
const rail = ref<boolean>(false)
const colorNav = '#1d2730'
const emit = defineEmits(['toggle-drawer'])
const props = defineProps({
  drawerToggle: Boolean
})

const toggleDrawer = () => {
  if (!rail.value) {
 emit('toggle-drawer')
  }
 
}
const items = ref([
  {
                    icon: 'mdi-home',
                    title: 'Inicio',
                    to: '/',
                    color: 'cyan lighten-1'
                },
                {
                    icon: 'mdi-magnify',
                    title: 'Transparencia',
                    to: '/transparencia',
                    color: 'teal lighten-1'
                },
                {
                    avatar: 'peaclog.png',
                    title: 'Política Estatal Anticorrupción de Coahuila (PEAC)',
                    to: '/peac',
                    color: 'warning'
                },
                {
                    avatar: 'pipeaclog.png',
                    title: 'Programa de Implementación de la PEAC',
                    to: '/pipeac',
                    color: 'warning'
                },
                {
                    avatar: 'sistemalog.png',
                    title: 'Sistema Estatal de Información',
                    to: '/sei'
                },

                {
                    avatar: 'azimutlog.png',
                    title: 'Hemeroteca',
                    to: '/hemeroteca',
                },
                {
                    icon: 'mdi-comma-circle-outline',
                    title: 'Publicaciones',
                    to: '/publicaciones'
                },
                {
                    icon: 'mdi-account-group',
                    title: 'Comité Coordinador',
                    to: '/cc',
                    color: 'orange lighte-2'
                },
                {
                    avatar: 'cpclog.png',
                    title: 'Consejo de Participación Ciudadana',
                    to: '/CPC',
                    color: 'purple lighten-2'
                },
                {
                    icon: 'mdi-cogs',
                    title: 'Secretaría Ejecutiva',
                    to: '/SE',
                    color: 'pink'
                },
                {
                    icon: 'mdi-cog',
                    title: 'Comisión Ejecutiva',
                    to: '/ce',
                    color: 'blue-grey'
                },
                {
                    icon: 'mdi-card-account-phone-outline',
                    title: 'Contacto',
                    to: '/contacto',
                    color: 'cyan darken-3'
                },
                // {
                //   icon: 'mdi-badge-account',
                //   title: 'Log-in Instituciónes',
                //   to: '/admin',
                //   color: ''
                // },

])
</script>

<style scoped>
/* Estilo sutil para el botón de arriba para que resalte un poco más */
.menu-header {
  background-color: rgba(255, 255, 255, 0.05);
  transition: background-color 0.3s;
}

.menu-header:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>