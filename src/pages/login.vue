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
  <div class=" w-[746px] mx-auto my-auto p-2 bg-blue-falp">
    <div class="inline-flex w-full justify-between px-4">
      <img :src="white_logo_falp" alt="logo_falp" class="white-logo-falp-size">
      <img :src="onco_tracer_logo" alt="logo_oncoTracer" class="onco-tracer-logo-size">
    </div>
    <div class="mt-5">
      <img :src="img_login" alt="img_oncoTracer" width="100%">
    </div>
    <div class="grid text-center mt-8">
      <p class="text-[20px] font-medium leading-[27px]">Bienvenido</p>
      <p class="mt-5 text-[32px] font-medium leading-[44px]">Sistema de Trazabilidad Oncológico FALP</p>
    </div>

    <div class="flex justify-center">
      <BaseButton 
      class="mt-10"
      label="Inicio sesión"       
      type="submit"
      height="48"
      variant="flat"
      rounded="xl"
      color="#0F87FF"
      block
      font-size="text-[16px]"
      @click="login()"
      />

    </div>

  </div>
</template>
<style scoped>

/*
color: var(--Operativos-Neutral-00, #FFF);
text-align: center;
-webkit-text-stroke-width: 1;
-webkit-text-stroke-color: #000;
font-family: Inter;
font-size: 32px;
font-style: normal;
font-weight: 500;
line-height: 136.023%;

*/

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
