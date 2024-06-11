<script setup lang="ts">
// VUE

// [Options]
defineOptions({
  inheritAttrs: true,
});

// [Props]
interface IProps {
  label: string;
}
const props = defineProps<IProps>();
</script>

<template>
  <v-btn
    v-bind="$attrs"
    color="primary"
    elevation="8"
    rounded="lg"
    class="text-capitalize text-body-2"
  >
    <span>
      {{ props.label }}
    </span>
  </v-btn>
</template>

<style></style>
