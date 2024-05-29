<script setup lang="ts">
import { ref } from 'vue';
const actualPage = ref<string>('Paciente');
</script>

<template>
  <NuxtLayout>
    <v-app class="d-flex">
      <v-layout column>
        <SideBar />
        <Header v-model="actualPage" />
        <v-main :style="{ height: '100vh' }">
          <NuxtPage
            class="pt-5 pr-8"
            @setPageTitle="(value: string) => (actualPage = value)"
          />
        </v-main>
      </v-layout>
    </v-app>
  </NuxtLayout>
</template>

<style scoped>
.full-height {
  height: 100vh; /* You can adjust this value to your desired height */
}
</style>
