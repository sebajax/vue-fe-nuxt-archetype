<script lang="ts" setup>
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

// [Modularity - Model]
// - [Reactivity State]
const model = defineModel<string>();
</script>

<template>
  <div>
    <v-switch v-model="model" inset :label="props.label" v-bind="$attrs" />
  </div>
</template>

<style></style>
