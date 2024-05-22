<script setup lang="ts">
import { ref } from 'vue';
const isLoading = ref<boolean>(false);
</script>

<template>
  <NuxtLayout>
    <v-app>
      <OrganismHeader />
      <NuxtPage />
      <OrganismFooter />
    </v-app>
  </NuxtLayout>
</template>
