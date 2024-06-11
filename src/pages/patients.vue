<script setup lang="ts">
// VUE

// [Emits]
const emits = defineEmits(['setPageTitle']);

// [Lifecycle Hooks]
onMounted(() => {
  emits('setPageTitle', 'Pacientes');
});
</script>

<template>
  <v-app>
    <!-- main content -->
    <v-container fluid class="px-0">
      <!-- Searcher prototype -->
      <PatientSearcher />
      <!-- Table prototype -->
      <PatientTable />
      <!-- <PatientForm /> -->
    </v-container>
  </v-app>
</template>
