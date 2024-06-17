<script lang="ts" setup>
// [Imports]
import { useTheme } from 'vuetify';

// VUE

// [Reactivity - Get Patients]
const patients = ref(usePatients);

// [Reactivity - Theme selector]
const theme = useTheme();
// TODO: make them a composable
const primaryColor = computed(() => {
  return theme.global.current.value.colors.primary;
});
const secondaryColor = computed(() => {
  return theme.global.current.value.colors['dark-text'];
});

// [Reactivity - Fetch Data]
const options: any = ref({
  page: 1,
  itemsPerPage: 10,
});
async function getPatients(event: any) {
  options.value = event;
  // TODO: change to real API
  console.log(options.value);
}
</script>

<template>
  <div class="rounded-lg overflow-hidden">
    <v-data-table :items="patients" @update:options="getPatients($event)" />
  </div>
</template>

<style>
.v-table {
  border-radius: 20px;
}

/* even table row bg-color */
.v-table tbody tr:nth-child(even) {
  color: black;
  background-color: #e6e6e6;
}
/* odd table row bg-color */
.v-table tbody tr:nth-child(odd) {
  color: black;
  background-color: white;
}

/* header class: color and font */
.v-table thead tr th {
  background-color: v-bind(primaryColor);
  color: v-bind(secondaryColor);
  font-size: large;
  font-weight: 900;
}
</style>
