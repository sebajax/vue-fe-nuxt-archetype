<script setup lang="ts">
// [Imports]
// - Public
import imgLogin from '~/public/img/login/img_login.png';
import oncoTracerLogo from '~/public/logos/onco_tracer_logo.svg';
import whiteLogoFalp from '~/public/logos/white_logo_falp.svg';

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
  <div class="mx-auto my-auto p-2 bg-blue-falp md:w-2/3 lg:w-1/2">
    <!-- Icons -->
    <div class="inline-flex w-full justify-between px-4">
      <img :src="whiteLogoFalp" alt="logo_falp" class="w-1/3" />
      <img :src="oncoTracerLogo" alt="logo_oncoTracer" class="w-1/3" />
    </div>
    <!-- Center Image -->
    <div class="mt-5">
      <img class="w-full" :src="imgLogin" alt="img_oncoTracer" />
    </div>
    <!-- Titles -->
    <div class="grid text-center mt-8">
      <p class="font-medium leading-[27px] md:text-[18px] lg:text-[20px]">
        Bienvenido
      </p>
      <h4 class="mt-5 font-medium leading-[44px] md:text-[24px] lg:text-[32px]">
        Sistema de Trazabilidad Oncológico FALP
      </h4>
    </div>
    <!-- Button -->
    <div class="flex justify-center">
      <div class="w-full md:w-[524px]">
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
  </div>
</template>

<style scoped></style>
