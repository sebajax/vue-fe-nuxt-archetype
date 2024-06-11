<script setup lang="ts">
// VUE

// [Props]
interface IProps {
  text: string;
}
const props = defineProps<IProps>();
</script>

<template>
  <h1 class="text-[40px] font-medium leading-[44px] mb-[30px]">
    {{ props.text }}
  </h1>
</template>
