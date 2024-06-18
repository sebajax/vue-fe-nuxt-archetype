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
</script>

<template>
  <div class="rounded-lg overflow-hidden">
    <v-data-table :items="patients" @update:options="getPatients($event)" />
  </div>
</template>

<style></style>
