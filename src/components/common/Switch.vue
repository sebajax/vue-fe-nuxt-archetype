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
      v-model="model"
      inset
      :label="props.label"
      v-bind="$attrs"
    />
  </div>
</template>

<style></style>
