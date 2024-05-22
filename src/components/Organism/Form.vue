<script setup lang="ts">
import { UserDomain } from '~/domain/user.domain';
import { ref } from 'vue';

const { $user } = useNuxtApp();
const userResponse = ref('');

interface Props {
  fields: string[];
  inputs: string[];
  cols?: string;
}
const props = withDefaults(defineProps<Props>(), {
  cols: '1',
});

const addUserProvider = async () => {
  const user = new UserDomain('Pepe', 'example@example.com');
  userResponse.value = await $user.addUserProvider(user);
};

// Call the function when the component is mounted
onMounted(() => {
  addUserProvider();
});

// receive the data from the form
const formData = ref<{ [key: string]: string }>({});

// post data
async function postData() {
  console.log('form', formData.value);
}
</script>

<template>
  <v-container class="">
    <form>
      <MoleculeFormInputs
        :fields="props.fields"
        :inputs="props.inputs"
        :cols="props.cols"
        @update-form-data="
          (value: {}) => {
            formData = value;
          }
        "
      />
      <AtomButton text="Actualizar" @click="postData" />
    </form>
  </v-container>

  <div>
    <p>{{ userResponse }}</p>
  </div>
</template>
