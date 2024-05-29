<script setup>
import { ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

const state = ref({
  firstName: '',
  lastName: '',
  contact: {
    email: '',
  },
});

const rules = {
  firstName: { required }, // Matches state.firstName
  lastName: { required }, // Matches state.lastName
  contact: {
    email: { required, email }, // Matches state.contact.email
  },
};

const v$ = useVuelidate(rules, state);
</script>

<template>
  <v-container class="px-0">
    <form class="pb-4">
      <TextInput
        v-for="field in state"
        :key="field.name"
        :label="field.label"
        :placeholder="field.placeholder"
        :type="field.type"
        
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
