<script setup lang="ts">
// props
interface Props {
  label: string;
  placeholder?: string;
  type?: string;
}
const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  type: 'text',
});

// model
const model = defineModel<string>();
</script>

<template>
  <v-text-field
    variant="outlined"
    density="comfortable"
    :label="props.label"
    :placeholder="props.placeholder"
    :type="props.type"
    v-model="model"
  />
</template>
