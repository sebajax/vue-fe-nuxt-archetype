<script setup lang="ts">
// [Imports]
// - Module
/* import { patientRules } from '~/schemas/PatientForm.schema'; */
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup';
// [Const]
/* const genreItems = ['Femenino', 'Masculino', 'Otro']; */
/*const formData = ref({
  name: useField('name'),
   rut: '',
  age: 0,
  genre: '',
  nationality: 'Chile',
  address: '',
  socialSecurity: '',
  phone: '',
  altPhone: '',
  email: '', 
});*/
  const validationSchema = yup.object().shape({
          name: yup.string().required(),
        });

  const name = useField('name', validationSchema)



  const { handleSubmit, handleReset } = useForm({
    validationSchema,
  });


  const submit = handleSubmit(async (values) => {
    alert(JSON.stringify(values, null, 2));
  });

// [Modularity - Post Data]
// - [Reactivity State]
/* const rules = computed(() => {
  return patientRules;
}); */

// - [Composable - Validation]
//Se usa para ver si esta validado el form, retorna booleano
/* const v$ = useVuelidate(rules, formData); */

// - [Methods]
/* async function postData() {
  const validation = await v$.value.$validate();
  if (validation) {
    //API calls

    //The form fields on the screen are reset
    v$.value.$reset();
  } else {
    // TODO: replace with component toast
  }
} */
</script>

<template>
  <form class="pb-4" @submit.prevent="submit">

      <!-- name -->
      <BaseInputText
        key="name"
        v-model="name.value.value"
        label="Nombre"
        placeholder="Nombre y Apellido"
        :error-messages="name.errorMessage.value"
      />
  
      <!-- Button -->
<!--       <BaseButton
        label="Añadir paciente"
        type="submit"
      /> -->
      <v-btn
      class="me-4"
      type="submit"
    >
      submit
    </v-btn>
      <v-spacer />
      <v-btn @click="handleReset">
        clear
      </v-btn>
  </form>
</template>
