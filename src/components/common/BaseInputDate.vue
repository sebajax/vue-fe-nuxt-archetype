<script setup lang="ts">
// [Props]
interface IProps {
  label: string;
}
const props = defineProps<IProps>();

// [Modularity - Model]
// - [Reactivity State]
const model = defineModel<string>();
</script>

<template>
  <v-date-input
    v-model="model"
    variant="outlined"
    density="comfortable"
    :label="props.label"
    append-icon="mdi-calendar"
    prepend-icon=""
    persistent-placeholder
  />
</template>

<style></style>
