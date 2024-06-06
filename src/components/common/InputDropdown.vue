<script setup lang="ts">
// props
interface Props {
  label: string;
  items: string[];
}
const props = withDefaults(defineProps<Props>(), {
  items: () => [''],
});

// model
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
