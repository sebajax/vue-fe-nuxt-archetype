<script lang="ts" setup>
// [Props]
const props = defineProps<{
  category: string;
  value: string;
}>();
</script>

<template>
  <BaseText class="h-[16px]">
    <b class="text-[14px] leading-[14px]">{{ props.category }}: </b>
    <span class="text-[14px] leading-[14px]"> {{ props.value }}</span>
  </BaseText>
</template>

<style></style>
