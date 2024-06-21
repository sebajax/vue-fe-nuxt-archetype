<script setup lang="ts">
// [Imports]
import white_logo_falp from '~/public/logos/white_logo_falp.svg';
import onco_tracer_logo from '~/public/logos/onco_tracer_logo.svg';

// [Options]
definePageMeta({
  layout: 'authentication',
});

// [Composable]
const { login } = useOidcAuth();

// [Modularity - Page title]
// - [Reactivity State]
const title = ref('Login');
const description = ref('Login page Nuxt 3 archetype');
// - [Composable]
useHead({
  title,
  meta: [
    {
      name: 'description',
      content: description,
    },
  ],
});
</script>
<template>
  <v-card class="mx-auto my-auto pa-10 bg-blue-falp" width="40%"  rounded="lg">
<!--     <h2 class="text-slate-500 mb-5 text-center text-2xl font-bold">
      OncoTracer
    </h2> -->

<!--     <v-row>
      <v-col cols="6">
        <img :src="white_logo_falp" alt="logo_falp">
      </v-col>
      <v-col cols="6">
        <img :src="onco_tracer_logo" alt="logo_oncoTracer">
      </v-col>
    </v-row> -->

    <div class="inline-flex w-full justify-between bg-red-500">
      <img :src="white_logo_falp" alt="logo_falp">
      <img :src="onco_tracer_logo" alt="logo_oncoTracer">
    </div>




    <v-btn
      class="mt-5"
      text="access Openid"
      type="submit"
      rounded="lg"
      append-icon="mdi-login"
      color="#B684E7"
      block
      @click="login()"
    />
  </v-card>
</template>
<style></style>
