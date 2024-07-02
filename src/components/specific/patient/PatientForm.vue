<script setup lang="ts">
// [Imports]
// - Module
import { patientSchema } from '~/schemas/PatientForm.schema';
import { useForm } from 'vee-validate';


//TODO composobale
  const vuetifyConfig = (state: any) => ({
    props: {
      'error-messages': state.errors,
    },
  });

  const { defineField, handleSubmit } = useForm({
    validationSchema: patientSchema,
  });


// [Const]
  const genreItems = ['Femenino', 'Masculino', 'Otro'];


// TODO: formData


  const  [name, nameProps] = defineField('name', vuetifyConfig)
  const  [rut, rutProps] = defineField('rut', vuetifyConfig)
  const  [genre, genreProps] = defineField('genre', vuetifyConfig)
  const  [nationality, nationalityProps] = defineField('nationality', vuetifyConfig)
  const  [address, addressProps] = defineField('address', vuetifyConfig)
  const  [socialSecurity, socialSecurityProps] = defineField('formData.socialSecurity', vuetifyConfig)
  const  [phone, phoneProps] = defineField('formData.phone', vuetifyConfig)
  const  [altPhone, altPhoneProps] = defineField('formData.altPhone', vuetifyConfig)
  const  [email, emailProps] = defineField('email', vuetifyConfig)

/* const formData = ref({
  name: 
  rut: '',
  age: 0,
  genre: '',
  nationality: 'Chile',
  address: '',
  socialSecurity: '',
  phone: '',
  altPhone: '',
  email: '',  
});  */

// [Modularity - Post Data]
// - [Reactivity State]


// - [Methods]
const onSubmit = handleSubmit((values) => {
  console.log('Submitted with', values);
  //API calls
  //reset values
  // TODO: replace with component toast
});

</script>

<template>
  <v-form class="pb-4" @submit.prevent="onSubmit">
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
    <BaseButton
      label="Añadir paciente"
      type="submit"
    /> 
    <v-spacer />

</v-form>
</template>
