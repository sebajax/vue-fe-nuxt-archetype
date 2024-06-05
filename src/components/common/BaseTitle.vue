<script setup lang="ts">
interface Props {
  text: string;
}
const props = defineProps<Props>();
</script>

<template>
  <h1>{{ props.text }}</h1>
</template>

<style scoped>
h1 {
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 30px;
}
</style>
