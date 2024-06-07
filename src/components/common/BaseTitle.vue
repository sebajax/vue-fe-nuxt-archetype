<script setup lang="ts">
// [Props]
interface Props {
  text: string;
}
const props = defineProps<Props>();
</script>

<template>
  <h1 class="text-[40px] font-medium leading-[44px] mb-[30px]">
    {{ props.text }}
  </h1>
</template>

<style scoped></style>
