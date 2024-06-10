<script setup lang="ts">
// [Props]
interface Props {
  label: string;
  placeholder?: string;
  type?: string;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  type: 'text',
});

// [Model]
const model = defineModel<string>();
</script>

<template>
  <v-text-field
    v-model="model"
    variant="outlined"
    density="comfortable"
    :label="props.label"
    :placeholder="props.placeholder"
    :type="props.type"
  />
</template>
