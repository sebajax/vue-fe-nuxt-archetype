<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

// set actual page
const emits = defineEmits(['setPageTitle']);
emits('setPageTitle', 'Pacientes');

// get window width and update on resize
const width = ref<number>(0);
function updateWidth() {
  if (typeof window !== 'undefined') {
    width.value = window.innerWidth;
  }
}
// TODO: redefine devices sizes (600)
const responsiveCols = computed(() => (width.value < 600 ? '12' : '6'));

onMounted(() => {
  updateWidth();
  window.addEventListener('resize', updateWidth);
});
onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
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
