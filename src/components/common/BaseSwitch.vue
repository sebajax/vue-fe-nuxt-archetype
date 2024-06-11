<script lang="ts" setup>
// VUE

// [Props]
interface IProps {
  label: string;
}
const props = defineProps<IProps>();

// [Modularity - Model]
// - [Reactivity State]
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
