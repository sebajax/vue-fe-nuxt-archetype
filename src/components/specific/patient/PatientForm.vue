<script setup lang="ts">
// [Imports]
// -stores
import patientValidation from '~/composables/velidatePatient.composable';
import { useAddUserStore } from '~/stores/user/addUser/useAddUserStore';

// - [Const]
const genreItems = ['Femenino', 'Masculino', 'Otro'];
const nationalityItems = [
  'Chile',
  'Perú',
  'Argentina',
  'Bolivia',
  'Colombia',
  'Ecuador',
  'Paraguay',
  'Uruguay',
  'Venezuela',
  'Brasil',
  'Panamá',
  'Costa Rica',
  'Nicaragua',
  'Honduras',
  'El Salvador',
  'Guatemala',
  'México',
  'Estados Unidos',
  'Canadá',
  'España',
  'Portugal',
  'Francia',
  'Alemania',
  'Italia',
  'Reino Unido',
  'Irlanda',
  'Suecia',
  'Noruega',
  'Finlandia',
  'Dinamarca',
  'Islandia',
  'Rusia',
  'China',
  'Japón',
  'Corea del Sur',
  'India',
  'Australia',
  'Nueva Zelanda',
  'Sudáfrica',
  'Egipto',
];

// VUE

// [Modularity - Post Data]
// - [Reactivity State]
const formData = ref({
  name: '',
  rut: '',
  birthdate: undefined,
  age: 0,
  genre: '',
  nationality: 'Chile',
  address: '',
  socialSecurity: '',
  phone: '',
  altPhone: '',
  email: '',
});
// TODO: replace with Pinnia based toast
const mesagge = ref<string>('');

// - [Composable - Validation]
const { $v, nameRules, emailRules } = patientValidation(formData);

// - [Methods]
async function postData() {
  console.log('formData', formData.value);
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
    formData.value = {
      name: '',
      rut: '',
      birthdate: undefined,
      age: 0,
      genre: '',
      nationality: 'Chile',
      address: '',
      socialSecurity: '',
      phone: '',
      altPhone: '',
      email: '',
    };
  } else {
    mesagge.value = 'Asegúrate de llenar los campos correctamente';
  }
}

// [Stores]
const addUserProvider = useAddUserStore();
</script>

<template>
  <ClientOnly>
    <v-form class="pb-4" @submit.prevent="postData">
      <div class="px-0 grid lg:grid-cols-2 gap-4">
        <!-- name -->
        <BaseInputText
          key="name"
          v-model="formData.name"
          label="Nombre"
          placeholder="Nombre y Apellido"
          required
          :rules="nameRules"
        />
        <!-- rut -->
        <BaseInputText
          key="rut"
          v-model="formData.rut"
          label="Rut"
          placeholder="12345678-5"
        />
        <!-- birthdate -->
        <BaseInputDate
          key="birthdate"
          v-model="formData.birthdate"
          label="Fecha de nacimiento"
        />
        <!-- genre -->
        <BaseInputDropdown
          key="genre"
          v-model="formData.genre"
          label="Sexo"
          :items="genreItems"
        />
        <!-- nationality -->
        <BaseInputDropdown
          key="nationality"
          v-model="formData.nationality"
          label="Nacionalidad"
          :items="nationalityItems"
        />
        <!-- address -->
        <BaseInputText
          key="address"
          v-model="formData.address"
          label="Dirección"
          placeholder="Calle 123"
        />
        <!-- socialSecurity -->
        <BaseInputText
          key="socialSecurity"
          v-model="formData.socialSecurity"
          label="Previsión"
          placeholder="Fonasa"
        />
        <!-- phone -->
        <BaseInputText
          key="phone"
          v-model="formData.phone"
          label="Teléfono"
          placeholder="+569 1234 5678"
        />
        <!-- altPhone -->
        <BaseInputText
          key="altPhone"
          v-model="formData.altPhone"
          label="Teléfono alternativo"
          placeholder="+569 1234 5678"
        />
        <!-- email -->
        <BaseInputText
          key="email"
          v-model="formData.email"
          label="Correo"
          placeholder="correo@falp.org"
          type="email"
          required
          :rules="emailRules"
        />
        <!-- Button -->
        <BaseButton
          label="Añadir paciente"
          :readinly="formData"
          @click="postData()"
        />
        <v-spacer />
        <!-- TODO: replace with Pinnia based toast -->
        <p v-if="mesagge" class="bg-red rounded-lg px-2 py-2">
          {{ mesagge }}
        </p>
      </div>
    </v-form>
  </ClientOnly>
</template>
