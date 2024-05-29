<script setup lang="ts">
import { UserDomain } from '~/domain/user.domain';
import { ref } from 'vue';
// interfaces
import type { FormField } from '~/interfaces/formField.interface';
import type { IUserDomain } from '~/domain/user.domain';
// stores
import { useAddUserStore } from '~/stores/user/addUser/useAddUserStore';

// user form format filled by the user
const formFormat = <FormField[]>[
  {
    name: 'name',
    label: 'Nombre',
    placeholder: 'Nombre',
    type: 'text',
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'correo@falp.org',
    type: 'email',
  },
];

// store
// const userProvider = useAddUserStore();

// receive the data from the form
const formData = ref<IUserDomain>({
  name: '',
  email: '',
});
// TODO: replace with Pinnia based toast
const mesagge = ref<string>('');

// post data
async function postData() {
  if (formData.value.name && formData.value.email) {
    try {
      console.log('form', formData.value);
      // const res = await addUserProvider.addUser(formData.value);
      // console.log('res', res);
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
  <v-container class="px-0">
    <form class="pb-4">
      <TextInput
        v-for="field in formFormat"
        :key="field.name"
        :label="field.label"
        :placeholder="field.placeholder"
        :type="field.type"
        v-model="formData[field.name as keyof IUserDomain]"
      />
      <Button label="Añadir" @click="postData()" />
    </form>
    <v-spacer />
    <!-- TODO: replace with Pinnia based toast -->
    <p v-if="mesagge" class="bg-red rounded-lg px-2 py-2">
      {{ mesagge }}
    </p>
  </v-container>
</template>
