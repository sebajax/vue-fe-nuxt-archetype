<script setup lang="ts">
import { ref, watch } from 'vue';
// interfaces
import type { FormField } from '~/interfaces/formField.interface';

// props
interface Props {
  format: FormField[];
  cols: string;
}
const props = withDefaults(defineProps<Props>(), {
  cols: '6',
});

// refs
const formData = ref<{ [key: string]: string }>({});
onMounted(() => {
  console.log('props', props);
  props.format.forEach((field) => {
    formData.value[field.name] = '';
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
      <v-col
        v-for="(field, i) in props.format"
        :key="field.name"
        :cols="props.cols"
      >
        <AtomTextInput
          :label="field.label"
          :type="field.type"
          :placeholder="field.placeholder"
          @changeInputValue="
            (value) => {
              formData[field.name] = value;
            }
          "
        />
      </v-col>
    </v-row>
  </v-container>
</template>
