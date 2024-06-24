<script setup lang="ts">
// VUE

// [Emits]
const emits = defineEmits(['setPageTitle']);

// [Lifecycle Hooks]
onMounted(() => {
  emits('setPageTitle', 'Usuarios');
});
</script>

<template>
  <v-app>
    <!-- main content -->
    <v-container fluid class="px-0"/>
  </v-app>
</template>
