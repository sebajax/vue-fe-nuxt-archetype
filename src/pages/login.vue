<script setup lang="ts">
definePageMeta({
  layout: 'authentication',
});
const { login } = useOidcAuth();
</script>
<template>
  <div class="flex flex-col gap-4 items-center mt-5">
    <v-btn color="primary" @click="login()">Login</v-btn>
  </div>
</template>
