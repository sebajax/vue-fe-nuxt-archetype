<script lang="ts" setup>
// [Props]
const props = defineProps<{
  label: string;
}>();

// [Model]
const model = defineModel<string>();

// [Options]
defineOptions({
  inheritAttrs: true,
});
</script>

<template>
  <div>
    <v-switch v-model="model" inset :label="props.label" v-bind="$attrs" />
  </div>
</template>

<style></style>
