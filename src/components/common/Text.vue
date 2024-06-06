<script lang="ts" setup>
// interface Props {
//   text: string;
// }
// const props = defineProps<Props>();
defineOptions({
  inheritAttrs: true,
});
</script>

<template>
  <p class="text-[14px] tracking-[0.1px]"><slot/></p>
</template>

<style scoped>
p {
  font-size: 16px;
}
</style>
