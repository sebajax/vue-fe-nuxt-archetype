<script lang="ts" setup>
// VUE

// [Modularity - Model]
// - [Reactivity state]
const model = defineModel<string>();
</script>

<template>
  <v-app-bar
    app
    color="light-gray"
    class="d-flex justify-center align-center px-6 mt-4 rounded-lg app-bar-margin"
  >
    <BaseTitle :text="model || ''" class="title-center" />
    <v-spacer />
    <BaseButton
      label="perfil"
      elevation="0"
      class="button-center"
      prepend-icon="mdi-account-circle"
      color="secondary"
    />
  </v-app-bar>
</template>

<style scoped>
.title-center {
  margin: 0 auto;
}

.button-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-bar-margin {
  margin-right: 40px;
}
</style>
