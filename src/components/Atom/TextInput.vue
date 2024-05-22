<script setup lang="ts">
// props
interface Props {
  label: string;
  variant?:
    | 'outlined'
    | 'underlined'
    | 'filled'
    | 'plain'
    | 'solo'
    | 'solo-inverted'
    | 'solo-filled'
    | undefined;
  width?: string;
  height?: string;
}
const props = withDefaults(defineProps<Props>(), {
  variant: 'outlined',
  width: '200px',
  height: '30px',
});

// refs
const input = ref<string>('');

// emits
const emits = defineEmits(['changeInputValue']);
function emitInput() {
  emits('changeInputValue', input.value);
}
</script>
<template>
  <div>
    <v-text-field
      :label="props.label"
      :variant="props.variant"
      @input="emitInput"
      v-model="input"
    />
  </div>
</template>
