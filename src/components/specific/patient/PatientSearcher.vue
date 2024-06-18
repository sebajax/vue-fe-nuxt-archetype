<script lang="ts" setup>
// TODO: make this an interface if it comes from a master table in the DB
// [Const]
// -selector
const category: string[] = ['Cancer', 'Melanoma'];
const urgency: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

// [Emits]
const emits = defineEmits(['filterData']);

// [Modularity - Filter]
// - [Reactivity State]
const idFilter = ref<string>('');
const categoryFilter = ref<string>('');
const urgencyFilter = ref<string>('');
// - [Computed]
const patientFilter = computed(() => {
  return {
    id: idFilter.value,
    category: categoryFilter.value,
    urgency: urgencyFilter.value,
  };
});
// TODO: make this a composable
let timeout: ReturnType<typeof setTimeout> | null = null;
watch(patientFilter, (newFilter) => {
  if (timeout !== null) {
    clearTimeout(timeout);
  }
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
  <div class="inline-flex w-full space-x-2">
    <BaseInputText
      v-model="idFilter"
      label="Buscar paciente"
      placeholder="Búsqueda por rut o nombre"
    />
    <BaseInputDropdown
      v-model="categoryFilter"
      label="Categoría"
      :items="category"
    />
    <BaseInputDropdown
      v-model="urgencyFilter"
      label="Urgencia"
      :items="urgency"
    />
  </div>
</template>

<style></style>
