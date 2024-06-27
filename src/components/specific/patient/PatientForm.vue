<script setup lang="ts">
// [Imports]
// - Module
import { useVuelidate } from '@vuelidate/core';
import { patientRules } from '~/schemas/PatientForm.schema';
// TODO: CHANGE THIS IMPLEMENTATION TO AVOID IMPORTING THE JSON FILE
import { items } from '~/resources/nationalityItems.json';

// [Const]
const genreItems = ['Femenino', 'Masculino', 'Otro'];
const nationalityItems = items;

// [Modularity - Post Data]
// - [Reactivity State]
const { formData, resetForm } = usePatientDataStore();

const rules = computed(() => {
  return patientRules;
});

// - [Composable - Validation]
const v$ = useVuelidate(rules, formData);

// - [Methods]
async function postData() {
  const validation = await v$.value.$validate();
  if (validation) {
    //API calls

    //The form store is cleared
    resetForm();
    //The form fields on the screen are reset
    v$.value.$reset();
  } else {
    // TODO: replace with component toast
  }
}
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
          :error-messages="useErrorHandler(v$.name).message"
          @blur="v$.name.$touch"
        />
        <!-- rut -->
        <BaseInputText
          key="rut"
          v-model="formData.rut"
          label="Rut"
          placeholder="12345678-5"
          :error-messages="useErrorHandler(v$.rut).message"
          @blur="v$.rut.$touch"
        />
        <!-- birthdate -->
        <!--          <BaseInputDate
          key="birthdate"
          v-model="formData.birthdate"
          label="Fecha de nacimiento"
          :error-messages="errorHandler(v$.birthdate).message"
          @blur="v$.birthdate.$touch"
        />  -->
        <!-- genre -->
        <BaseInputDropdown
          key="genre"
          v-model="formData.genre"
          label="Sexo"
          :items="genreItems"
          :error-messages="useErrorHandler(v$.genre).message"
          @blur="v$.genre.$touch"
        />
        <!-- nationality -->
        <BaseInputDropdown
          key="nationality"
          v-model="formData.nationality"
          label="Nacionalidad"
          :items="nationalityItems"
          :error-messages="useErrorHandler(v$.nationality).message"
          @blur="v$.nationality.$touch"
        />
        <!-- address -->
        <BaseInputText
          key="address"
          v-model="formData.address"
          label="Dirección"
          placeholder="Calle 123"
          :error-messages="useErrorHandler(v$.address).message"
          @blur="v$.address.$touch"
        />
        <!-- socialSecurity -->
        <BaseInputText
          key="socialSecurity"
          v-model="formData.socialSecurity"
          label="Previsión"
          placeholder="Fonasa"
          :error-messages="useErrorHandler(v$.socialSecurity).message"
          @blur="v$.socialSecurity.$touch"
        />
        <!-- phone -->
        <BaseInputText
          key="phone"
          v-model="formData.phone"
          label="Teléfono"
          placeholder="+569 1234 5678"
          :error-messages="useErrorHandler(v$.phone).message"
          @blur="v$.phone.$touch"
        />
        <!-- altPhone -->
        <BaseInputText
          key="altPhone"
          v-model="formData.altPhone"
          label="Teléfono alternativo"
          placeholder="+569 1234 5678"
          :error-messages="useErrorHandler(v$.altPhone).message"
          @blur="v$.altPhone.$touch"
        />
        <!-- email -->
        <BaseInputText
          key="email"
          v-model="formData.email"
          label="Correo"
          placeholder="correo@falp.org"
          type="email"
          required
          :error-messages="useErrorHandler(v$.email).message"
          @blur="v$.email.$touch"
        />
        <!-- Button -->
        <BaseButton
          label="Añadir paciente"
          :readinly="formData"
          @click="postData()"
        />
        <v-spacer />
      </div>
    </v-form>
  </ClientOnly>
</template>
