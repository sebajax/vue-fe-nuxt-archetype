<script lang="ts" setup>
// [Props]
interface IProps {
  category: string;
  value: string;
}
const props = defineProps<IProps>();
</script>

<template>
  <BaseText class="h-[16px]">
    <b class="text-[14px] leading-[14px]">{{ props.category }}: </b>
    <span class="text-[14px] leading-[14px]"> {{ props.value }}</span>
  </BaseText>
</template>

<style></style>
