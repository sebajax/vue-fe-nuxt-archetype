<script setup lang="ts">
// VUE

// [Props]
interface IProps {
  label: string;
  placeholder?: string;
}
const props = withDefaults(defineProps<IProps>(), {
  placeholder: '',
});

// [Modularity - Model]
// - [Reactivity State]
const model = defineModel<string>();
</script>

<template>
  <v-text-field
    variant="outlined"
    v-model="model"
    density="comfortable"
    :label="props.label"
    :placeholder="props.placeholder"
    type="text"
  />
</template>
