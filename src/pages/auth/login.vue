<script setup lang="ts">
definePageMeta({
  layout: 'authentication',
});
const { login } = useOidcAuth();
</script>

<template>
  <div class="flex flex-col gap-4 items-center">
    <button class="btn-base btn-login" @click="login()" />
  </div>
</template>
