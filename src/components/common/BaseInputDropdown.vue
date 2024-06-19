<script setup lang="ts">
// [Props]
interface IProps {
  label: string;
  items: string[];
}
const props = withDefaults(defineProps<IProps>(), {
  items: () => [''],
});

// [Modularity - Model]
// - [Reactivity State]
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

<script></script>
