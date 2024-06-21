<script setup lang="ts">
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
      <!-- Add patient form -->
      <div class="flex w-full mb-6 justify-end">
        <BaseModal title="Actualizar formulario" button-label="Añadir paciente">
          <PatientForm />
        </BaseModal>
      </div>
      <!-- Table prototype -->
      <PatientTable />
      <!-- Patient details -->
      <NuxtLink :to="{ path: `/patient-details/${1}` }">
        <BaseButton label="Detalles" class="mb-4" />
      </NuxtLink>
    </v-container>
  </v-app>
</template>
