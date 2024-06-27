<script setup lang="ts">
// [Imports]
import { Patient } from '~/interfaces/domain/patient.domain';
// -stores


// [Store]
const store = usePatientStore();

const { patientData } = storeToRefs(store);

const { fetchCreate } = store;

// [Modularity - Post Data]
// - [Reactivity State]
const formData = ref({
  name: '',
  email: '',
});
// - [Composable]

// - [Methods]
async function postData() {
  const patient = new Patient(formData.value.name, formData.value.email);
  await fetchCreate(patient);
}
</script>

<template>
  <v-form class="pb-4" @submit.prevent="postData">
    <div class="px-0 grid lg:grid-cols-2 gap-4">
      <!-- name -->
      <BaseInputText
        key="name"
        v-model="formData.name"
        label="Nombre"
        placeholder="Nombre y Apellido"
        required
      />
      <!-- email -->
      <BaseInputText
        key="email"
        v-model="formData.email"
        label="Email"
        placeholder="email@email.com"
        required
      />
      <BaseButton
        label="Añadir usuario"
        :readinly="formData"
        @click="postData()"
      />
      <v-spacer />
      <!-- TODO: replace with Pinnia based toast -->
      <p class="bg-red rounded-lg px-2 py-2">
        {{ patientData }}
      </p>
    </div>
  </v-form>
</template>
