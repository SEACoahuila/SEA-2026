<template>
  <div>
    <v-row justify="center" class="mb-0">
      <v-col cols="12" class="text-center">
        <h2 class="display-text mb-2">Notas </h2>
      </v-col>
    </v-row>
  <v-divider
  :thickness="2"
  class="border-opacity-50"
  color="cyan-darken-3"
 
> <v-avatar class="border border-primary border-opacity-100" icon="mdi-chevron-down" size="36"></v-avatar></v-divider>
        <NoticiasCard :number-ofcards=3 />
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.display-text {
  font-size: 2.5rem;
  font-weight: 900;
  color: #263238;
  letter-spacing: -1px;
 
}

</style>