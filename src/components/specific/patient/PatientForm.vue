<script setup lang="ts">
import { ref } from 'vue';
// validators
import { useVuelidate } from '@vuelidate/core';
import {
  alpha,
  email,
  maxLength,
  numeric,
  required,
} from '@vuelidate/validators';
// interfaces
import type { IUserDomain } from '~/domain/user.domain';
import type { FormField } from '~/interfaces/formField.interface';
// stores
import { useAddUserStore } from '~/stores/user/addUser/useAddUserStore';
import InputDropdown from '~/components/common/InputDropdown.vue';

// store
const addUserProvider = useAddUserStore();

// form and rules
const formData = ref({
  name: '',
  rut: '',
  birthdate: '',
  age: 0,
  genre: '',
  nationality: '',
  address: '',
  socialSecurity: '',
  phone: '',
  altPhone: '',
  email: '',
});
const rules = {
  name: { required, maxLength: maxLength(80), alpha },
  rut: { required, maxLength: maxLength(12) },
  birthdate: { required },
  age: { required, numeric },
  genre: { required, alpha },
  nationality: { required, alpha },
  address: { required },
  socialSecurity: { required, alpha },
  phone: { required, numeric },
  altPhone: { numeric },
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
  if (validation) {
    // await addUserProvider.addUser(formData.value);
    const res: boolean = addUserProvider.getError;
    if (!res) {
      mesagge.value = 'Usuario añadido correctamente';
      return;
    } else {
      mesagge.value = 'Error al añadir usuario';
    }
    const formData = ref({
      name: '',
      rut: '',
      birthdate: '',
      age: 0,
      genre: '',
      nationality: '',
      address: '',
      socialSecurity: '',
      phone: '',
      altPhone: '',
      email: '',
    });
  } else {
    mesagge.value = 'Asegúrate de llenar los campos correctamente';
  }
}
</script>

<template>
  <v-form @submit.prevent="postData" class="pb-4">
    <div class="px-0 grid lg:grid-cols-2 gap-4">
      <!-- name -->
      <InputText
        key="name"
        label="Nombre"
        placeholder="Nombre y Apellido"
        v-model="formData.name"
        required
        :rules="nameRules"
      ></InputText>
      <!-- rut -->
      <InputText
        key="rut"
        label="Rut"
        placeholder="12345678-5"
        v-model="formData.rut"
        required
        :rules="emailRules"
      />
      <InputDropdown
        label="Rol"
        :items="['Administrador', 'Médico', 'Enfermera']"
      />

      <InputDropdown label="Sexo" :items="['Femenino', 'Masculino', 'Otro']" />

      <Button label="Añadir usuario" @click="postData()" :readinly="formData" />
      <v-spacer />
      <!-- TODO: replace with Pinnia based toast -->
      <p v-if="mesagge" class="bg-red rounded-lg px-2 py-2">
        {{ mesagge }}
      </p>
    </div>
  </v-form>
</template>
