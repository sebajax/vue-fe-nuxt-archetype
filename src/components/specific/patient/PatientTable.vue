<script lang="ts" setup>
// VUE
// [Reactivity - Get Patients]
const patients = ref(usePatients);

// [Modularity - Fetch Data After Update]
const options = ref({
  page: 1,
  itemsPerPage: 10,
});
async function getPatients(event: unknown) {
  options.value = event as unknown as typeof options.value;
  // TODO: change to real API
  console.log(options.value);
}
</script>

<template>
  <div class="rounded-lg overflow-hidden">
    <v-data-table :items="patients" @update:options="getPatients($event)" />
  </div>
</template>

<style></style>
