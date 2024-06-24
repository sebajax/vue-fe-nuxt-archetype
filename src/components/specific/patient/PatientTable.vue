<script lang="ts" setup>
// [Modularity - Get Patients]
const patients = ref(usePatients);

// TODO: make pagination options an interface
// [Modularity - Fetch Data After Update]
// - [Reactivity State]
const options = ref({
  page: 1,
  itemsPerPage: 10,
});
// TODO: get event data from options value from domains
async function getPatients(event: unknown) {
  options.value = event as unknown as typeof options.value;
  // TODO: change to real API
  console.log(options.value);
}

// [Modularity - Table structure]
// - [Reactivity State]
const headers = ref([
  { title: 'RUT', value: 'rut', sortable: true },
  { title: 'Nombre', value: 'nombre', sortable: true },
  { title: 'Categoría', value: 'categoría', sortable: true },
  { title: 'Urgencia', value: 'urgencia', sortable: true },
  { title: 'Detalles', value: 'id', sortable: false },
]);
</script>

<template>
  <div class="rounded-lg overflow-hidden">
    <v-data-table :items="patients" :headers="headers" items-per-page="10">
      <template #item.id="{ item }">
        <!-- Redirection to details -->
        <NuxtLink :to="`/patient-details/${item.id}`">
          <v-icon color="primary">mdi-file-tree</v-icon>
        </NuxtLink>
      </template>
    </v-data-table>
  </div>
</template>

<style></style>
