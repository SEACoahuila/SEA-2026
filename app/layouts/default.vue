<template>
<v-layout>
    
    <AppBar @toggle-drawer="toggleDrawer = !toggleDrawer"/>
    <NavDrawerSide :drawerToggle=toggleDrawer @toggle-drawer="toggleDrawer = !toggleDrawer" />
    <v-main  style="min-height: 100vh">
      <LineUp />
      <v-container fluid>
        
         <slot /> 
        </v-container>
      </v-main>
      <Footer />
  </v-layout>

</template>

<script setup lang="ts">

import { useDisplay } from 'vuetify'
const {mobile } = useDisplay()
const toggleDrawer = ref(mobile ? false : true)

</script>

<style scoped>

</style>