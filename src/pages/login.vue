<script setup lang="ts">
// [Imports]
import white_logo_falp from '~/public/logos/white_logo_falp.svg';
import onco_tracer_logo from '~/public/logos/onco_tracer_logo.svg';
import img_login from '~/public/img/login/img_login.png';


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
  <v-card class="mx-auto my-auto pa-2 bg-blue-falp" width="40%" variant="flat">
    <div class="inline-flex w-full justify-between">
      <img :src="white_logo_falp" alt="logo_falp" class="white-logo-falp-size">
      <img :src="onco_tracer_logo" alt="logo_oncoTracer" class="onco-tracer-logo-size">
    </div>

    <div class="mt-5">
      <img :src="img_login" alt="img_oncoTracer" width="100%">
    </div>

    <div class="grid text-center mt-8">
      <p>Bienvenido</p>
      <b class="mt-5 text-[20px]">Sistema de Trazabilidad Oncológico FALP</b>
      

    </div>


    <v-btn
      class="mt-10"
      type="submit"
      rounded="xl"
      color="#0F87FF"
      width="524"
      height="48"
      block
      @click="login()"
    >
      <span class="text-[16px]">Iniciar sesión</span>
    </v-btn>

  </v-card>
</template>
<style scoped>
.card-size{
  width: 746px;
  height: 743px;
}
.white-logo-falp-size{
  /*width: 220px;
  height: 60px;]*/
  width: 30%;
}
.onco-tracer-logo-size{
  /*width: 205px;
  height: 102px;]*/
  width: 30%;

}

</style>
