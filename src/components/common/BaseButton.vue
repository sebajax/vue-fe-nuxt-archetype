<script setup lang="ts">
// VUE

// [Options]
defineOptions({
  inheritAttrs: true,
});

// [Props]
interface IProps {
  label: string;
  fontSize?: string;
}
const props = defineProps<IProps>();
</script>

<template>
  <v-btn
    v-bind="$attrs"
    color="primary"
    elevation="0"
    rounded="lg"
    class="text-capitalize text-body-2"
  >
    <span :class="props.fontSize">
      {{ props.label }}
    </span>
  </v-btn>
</template>

<style>

</style>
