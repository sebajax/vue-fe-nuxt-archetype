<script setup lang="ts">
// [Imports]
// - Module
import { useForm } from 'vee-validate';
import { patientSchema } from '~/schemas/patientForm.schema';

// [Composable]
const { defineField, handleSubmit } = useForm({
  validationSchema: patientSchema,
});

// [Const]
const genreItems = ['Femenino', 'Masculino', 'Otro'];
const [name, nameProps] = defineField('data.name', useErrorHandler); // String
const [rut, rutProps] = defineField('rut', useErrorHandler); // String
const [genre, genreProps] = defineField('genre', useErrorHandler); // String
const [nationality, nationalityProps] = defineField(
  'nationality',
  useErrorHandler,
); // String
const [address, addressProps] = defineField('address', useErrorHandler); // String
const [socialSecurity, socialSecurityProps] = defineField(
  'socialSecurity',
  useErrorHandler,
); // String
const [phone, phoneProps] = defineField('phone', useErrorHandler); // String
const [altPhone, altPhoneProps] = defineField('altPhone', useErrorHandler); // String
const [email, emailProps] = defineField('email', useErrorHandler); // String

// [Modularity - Post Data]
// - [Methods]
const postData = handleSubmit((values) => {
  console.log('Submitted with', values);
  //API calls
  //TODO reset values
});
</script>

<template>
  <client-only>
    <v-form class="pb-4" @submit.prevent="postData">
      <!-- name -->
      <BaseInputText
        key="name"
        v-model="name"
        v-bind="nameProps"
        label="Nombre"
        placeholder="Nombre y Apellido"
      />
      <!-- rut -->
      <BaseInputText
        key="rut"
        v-model="rut"
        v-bind="rutProps"
        label="Rut"
        placeholder="12345678-5"
      />
      <!-- genre -->
      <BaseInputDropdown
        key="genre"
        v-model="genre"
        v-bind="genreProps"
        label="Sexo"
        :items="genreItems"
      />
      <!-- nationality -->
      <BaseInputDropdown
        key="nationality"
        v-model="nationality"
        v-bind="nationalityProps"
        label="Nacionalidad"
        :items="nationalityItems"
      />
      <!-- address -->
      <BaseInputText
        key="address"
        v-model="address"
        v-bind="addressProps"
        label="Dirección"
        placeholder="Calle 123"
      />
      <!-- socialSecurity -->
      <BaseInputText
        key="socialSecurity"
        v-model="socialSecurity"
        v-bind="socialSecurityProps"
        label="Previsión"
        placeholder="Fonasa"
      />
      <!-- phone -->
      <BaseInputText
        key="phone"
        v-model="phone"
        v-bind="phoneProps"
        label="Teléfono"
        placeholder="+569 1234 5678"
      />
      <!-- altPhone -->
      <BaseInputText
        key="altPhone"
        v-model="altPhone"
        v-bind="altPhoneProps"
        label="Teléfono alternativo"
        placeholder="+569 1234 5678"
      />
      <!-- email -->
      <BaseInputText
        key="email"
        v-model="email"
        v-bind="emailProps"
        label="Correo"
        placeholder="correo@falp.org"
        type="email"
        required
      />
      <BaseButton label="Añadir paciente" type="submit" />
      <v-spacer />
    </v-form>
  </client-only>
</template>
