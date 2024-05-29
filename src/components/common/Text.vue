<script lang="ts" setup>
interface Props {
  text: string;
}
const props = defineProps<Props>();
</script>

<template>
  <p>{{ props.text }}</p>
</template>

<style scoped>
p {
  font-size: 16px;
}
</style>
