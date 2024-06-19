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
      <!-- Add patient form -->
      <BaseModal title="Actualizar formulario" button-label="Añadir paciente">
        <PatientForm />
      </BaseModal>
      <!-- Searcher prototype -->
      <PatientSearcher />
      <NuxtLink :to="{ path: `/patient-details/${1}` }">
        <BaseButton label="Detalles" class="mb-4" />
      </NuxtLink>
      <!-- Table prototype -->
      <PatientTable />
      <!-- <PatientForm /> -->
    </v-container>
  </v-app>
</template>
