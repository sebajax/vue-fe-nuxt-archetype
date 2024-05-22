<script setup lang="ts">
import { UserDomain } from '~/domain/user.domain';
import { ref } from 'vue';
// interfaces
import type { FormField } from '~/interfaces/formField.interface';
import type { ResponseDomain } from '~/domain/response.domain';

const { $user } = useNuxtApp();
const userResponse = ref<ResponseDomain>();

interface Props {
  cols?: string;
}

interface UserForm {
  name: string;
  email: string;
}

const formFormat = <FormField[]>[
  {
    type: 'text',
    name: 'name',
    label: 'Nombre',
    placeholder: 'Nombre',
  },
  {
    type: 'email',
    name: 'email',
    label: 'Email',
    placeholder: 'correo@falp.org',
  },
];

const props = withDefaults(defineProps<Props>(), {
  cols: '1',
});

async function addUserProvider(form: UserForm) {
  const user = new UserDomain(form.name, form.email);
  userResponse.value = await $user.addUserProvider(user);
  return userResponse.value;
}

// receive the data from the form
const formData = ref<UserForm>({
  name: '',
  email: '',
});
const mesagge = ref<string>('');

// post data
async function postData(form: UserForm) {
  if (form.name && form.email) {
    try {
      console.log('form', formData.value);
      const res = await addUserProvider(form);
      console.log('res', res);
      mesagge.value = res?.message;
      formData.value = {
        name: '',
        email: '',
      };
    } catch (error) {
      console.error(error);
    } finally {
      return mesagge.value;
    }
  } else {
    mesagge.value = 'Los campos nombre y correo son requeridos';
    console.log('Please fill all the fields');
  }
}
</script>

<template>
  <v-container class="">
    <form class="pb-4">
      <MoleculeFormInputs
        :format="formFormat"
        :cols="props.cols"
        @update-form-data="
          (value: UserForm) => {
            formData = value;
          }
        "
      />
      <AtomButton text="Añadir" @click="postData(formData)" />
    </form>
    <v-spacer />
    <p v-if="mesagge" class="bg-red rounded-lg px-2 py-2">
      {{ mesagge }}
    </p>
  </v-container>
</template>
