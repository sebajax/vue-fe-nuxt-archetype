<script setup lang="ts">
import { UserDomain } from '~/domain/user.domain';
import { ref } from 'vue';
// interfaces
import type { FormField } from '~/interfaces/formField.interface';
import type { IUserDomain } from '~/domain/user.domain';
import type { ResponseDomain } from '~/domain/response.domain';

// props
interface Props {
  cols?: string;
}
const props = defineProps<Props>();

// message form format filled by the user
const formFormat = <FormField[]>[
  {
    name: 'text',
    label: 'Mensaje',
    placeholder: 'Escriba su mensaje',
    type: 'text',
  },
  {
    name: 'sender',
    label: 'Correo',
    placeholder: 'correo@falp.org',
    type: 'email',
  },
  {
    name: 'datails',
    label: 'Detalles',
    type: 'text',
  },
];

// receive the data from the form
const formData = ref<IUserDomain>({
  name: '',
  email: '',
});
// TODO: replace with Pinnia based toast
const mesagge = ref<string>('');

// TODO: check composable implementation
const { $user } = useNuxtApp();
const userResponse = ref<ResponseDomain>();
async function addUserProvider(form: IUserDomain) {
  const user = new UserDomain(form.name, form.email);
  userResponse.value = await $user.addUserProvider(user);
  return userResponse.value;
}

// post data
async function postData(form: IUserDomain) {
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
      <FormInputs
        :format="formFormat"
        :cols="props.cols"
        @update-form-data="
          (value) => {
            formData = value;
          }
        "
      />
      <Button label="Añadir" @click="postData(formData)" />
    </form>
    <v-spacer />
    <!-- TODO: replace with Pinnia based toast -->
    <p v-if="mesagge" class="bg-red rounded-lg px-2 py-2">
      {{ mesagge }}
    </p>
  </v-container>
</template>
