<script lang="ts" setup>
// props
const props = defineProps<{
  label: string;
}>();
// model
const model = defineModel();
// options
defineOptions({
  inheritAttrs: true,
});
</script>

<template>
  <div>
    <v-switch
      inset
      :label="props.label"
      v-model="model"
      v-bind="$attrs"
    ></v-switch>
  </div>
</template>

<style></style>
