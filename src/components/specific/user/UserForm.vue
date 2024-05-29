<script setup lang="ts">
import { ref } from 'vue';
// validators
import { useVuelidate } from '@vuelidate/core';
import { alpha, email, maxLength, required } from '@vuelidate/validators';
// interfaces
import type { IUserDomain } from '~/domain/user.domain';
import type { FormField } from '~/interfaces/formField.interface';
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
const addUserProvider = useAddUserStore();

// form and rules
const formData = ref<IUserDomain>({
  name: '',
  email: '',
});
const rules = {
  name: { required, maxLength: maxLength(80), alpha },
  email: { required, email },
};
const $v = useVuelidate(rules, formData);

// vuetify rules
// TODO: make them composables and connect with vuelidate
const nameRules = [
  (value: string) => {
    if (value) return true;
    return 'El campo Nombre es requerido.';
  },
  (value: string) => {
    if (value?.length <= 50) return true;
    return 'El nombre debe tener a lo más 50 caracteres.';
  },
];
const emailRules = [
  (value: string) => {
    if (value) return true;
    return 'El campo Correo es requerido.';
  },
  (value: string) => {
    if (/.+@.+\..+/.test(value)) return true;
    return 'El correo debe ser uno válido.';
  },
];

// TODO: replace with Pinnia based toast
const mesagge = ref<string>('');

// post data
async function postData() {
  const validation = await $v.value.$validate();
  console.log('validation', validation);
  if (validation) {
    console.log('form', formData.value);
    const res = await addUserProvider.addUser(formData.value);
    console.log('res', res);
    formData.value = {
      name: '',
      email: '',
    };
    mesagge.value = 'Usuario añadido correctamente';
  } else {
    mesagge.value = 'Error al añadir usuario';
  }
}
</script>

<template>
  <v-form @submit.prevent="postData" class="pb-4">
    <v-container class="px-0 space-y-4">
      <TextInput
        :key="formFormat[0].name"
        :label="formFormat[0].label"
        :placeholder="formFormat[0].placeholder"
        :type="formFormat[0].type"
        v-model="formData.name"
        required
        :rules="nameRules"
      ></TextInput>
      <TextInput
        :key="formFormat[1].name"
        :label="formFormat[1].label"
        :placeholder="formFormat[1].placeholder"
        :type="formFormat[1].type"
        v-model="formData.email"
        required
        :rules="emailRules"
      />
      <Button label="Añadir usuario" @click="postData()" />
      <v-spacer />
      <!-- TODO: replace with Pinnia based toast -->
      <p v-if="mesagge" class="bg-red rounded-lg px-2 py-2">
        {{ mesagge }}
      </p>
    </v-container>
  </v-form>
</template>
