<script setup lang="ts">
// props
interface Props {
  label: string;
}
const props = defineProps<Props>();

// options
defineOptions({
  inheritAttrs: true,
});
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
