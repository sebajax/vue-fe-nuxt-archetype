<script setup lang="ts">
interface Props {
  text: string;
  color?: string;
  width?: string;
  height?: string;
}
const props = withDefaults(defineProps<Props>(), {
  color: 'secondary',
  width: '200px',
  height: '50px',
});
</script>

<template>
  <v-btn>{{ props.text }}</v-btn>
</template>
