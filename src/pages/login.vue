<script setup lang="ts">
definePageMeta({
  layout: 'authentication',
});
const { login } = useOidcAuth();

// [Modularity - Page title]
const title = ref('Login');
const description = ref('Login page Nuxt 3 archetype');
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
  <v-card class="mx-auto pa-10" width="40%" elevation="10" rounded="lg">
    <h2 class="text-slate-500 mb-5 text-center text-2xl font-bold">
      OncoTracer
    </h2>
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
