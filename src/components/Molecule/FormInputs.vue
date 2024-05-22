<script setup lang="ts">
import { ref, watch } from 'vue';

// props
interface Props {
  fields: string[];
  inputs: string[];
  cols?: string;
}
const props = withDefaults(defineProps<Props>(), {
  cols: '1',
});

// refs
const formData = ref<{ [key: string]: string }>({});
onMounted(() => {
  props.inputs.forEach((input) => {
    formData.value[input] = '';
  });
  console.log(formData.value);
});

// emits
const emits = defineEmits(['updateFormData']);

watch(
  formData,
  (newFormData) => {
    emits('updateFormData', newFormData);
  },
  { deep: true },
);
</script>

<template>
  <v-container class="">
    <v-row>
      <v-col v-for="(field, i) in props.fields" :key="field" :cols="props.cols">
        <AtomTextInput
          :label="field"
          @changeInputValue="
            (value) => {
              formData[props.inputs[i]] = value;
            }
          "
        />
      </v-col>
    </v-row>
  </v-container>
</template>
