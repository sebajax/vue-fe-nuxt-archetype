<script setup lang="ts">
// [Props]
interface Props {
  label: string;
  items: string[];
}
const props = withDefaults(defineProps<Props>(), {
  items: () => [''],
});

// [Model]
const model = defineModel<string>();
</script>

<template>
  <v-select
    v-model="model"
    variant="outlined"
    density="comfortable"
    :label="props.label"
    :items="props.items"
  />
</template>
