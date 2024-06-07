<script setup lang="ts">
// [Imports]
import { ref } from 'vue';
// -validators
import { useVuelidate } from '@vuelidate/core';
import { alpha, email, maxLength, required } from '@vuelidate/validators';
// -interfaces
import type { IUserDomain } from '~/domain/user.domain';
import type { FormField } from '~/interfaces/formField.interface';
// -stores
import { useAddUserStore } from '~/stores/user/addUser/useAddUserStore';

// [Stores]
const addUserProvider = useAddUserStore();

// [Data]
const formFormat: FormField[] = [
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

// [Reactivity - Post Data]
// TODO: replace with Pinnia based toast
const mesagge = ref<string>('');
const formData = ref<IUserDomain>({
  name: '',
  email: '',
});
async function postData() {
  const validation = await $v.value.$validate();
  if (validation) {
    await addUserProvider.addUser(formData.value);
    const res: boolean = addUserProvider.getError;
    if (!res) {
      mesagge.value = 'Usuario añadido correctamente';
      return;
    } else {
      mesagge.value = 'Error al añadir usuario';
    }
    formData.value = {
      name: '',
      email: '',
    };
  } else {
    mesagge.value = 'Asegúrate de llenar los campos correctamente';
  }
}

// [Reactivity - Validation]
const rules = {
  name: { required, maxLength: maxLength(80), alpha },
  email: { required, email },
};
const $v = useVuelidate(rules, formData);
// -vuetify rules
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
</script>

<template>
  <v-form class="pb-4" @submit.prevent="postData">
    <v-container class="px-0 space-y-4">
      <InputText
        :key="formFormat[0].name"
        v-model="formData.name"
        :type="formFormat[0].type"
        :label="formFormat[0].label"
        :placeholder="formFormat[0].placeholder"
        required
        :rules="nameRules"
      />
      <InputText
        :key="formFormat[1].name"
        v-model="formData.email"
        :label="formFormat[1].label"
        :placeholder="formFormat[1].placeholder"
        :type="formFormat[1].type"
        required
        :rules="emailRules"
      />
      <Button label="Añadir usuario" :readonly="formData" @click="postData()" />
      <v-spacer />
      <!-- TODO: replace with Pinnia based toast -->
      <p v-if="mesagge" class="bg-red rounded-lg px-2 py-2">
        {{ mesagge }}
      </p>
    </v-container>
  </v-form>
</template>
