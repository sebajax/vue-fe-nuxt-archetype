<script lang="ts" setup>
// model
const idFilter = ref('');
const categoryFilter = ref('');
const urgencyFilter = ref('');

// items
const category = ref(['Cancer', 'Melanoma']);
const urgency = ref(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);

// filter
const patientFilter = computed(() => {
  setTimeout;
  return {
    id: idFilter.value,
    category: categoryFilter.value,
    urgency: urgencyFilter.value,
  };
});

// emit
const emits = defineEmits(['filterData']);

// Timer to handle the filter
let timeout: ReturnType<typeof setTimeout> | null = null;
watch(patientFilter, (newFilter) => {
  // Delete previous timer
  if (timeout !== null) {
    clearTimeout(timeout);
  }
  // New timer
  timeout = setTimeout(() => {
    console.log(newFilter);
    window.alert(JSON.stringify(newFilter));
    // TODO: after the emit, the filterData event should be listened in the parent
    // component and call the api based on the new filter
    emits('filterData', newFilter);
  }, 1000);
});
</script>

<template>
  <div class="inline-flex space-x-2 w-full">
    <InputText
      v-model="idFilter"
      label="Buscar paciente"
      placeholder="Búsqueda por rut o nombre"
    />
    <InputDropdown
      v-model="categoryFilter"
      label="Categoría"
      :items="category"
    />
    <InputDropdown v-model="urgencyFilter" label="Urgencia" :items="urgency" />
  </div>
</template>

<style></style>
