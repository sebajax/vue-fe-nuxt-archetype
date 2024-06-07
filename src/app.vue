<script setup lang="ts">
// [Imports]
import { useTheme } from 'vuetify';
// types
import type { Theme } from './interfaces/theme.type';
// stores
// import { useThemeStore } from '@/stores/theme/themeStore';

// [Data]
const actualPage = ref<string>('');

// [Reactivity - Set application theme]
const theme = useTheme();
const defaultTheme = ref<Theme>('light');
const themeLanguaje = ref<string>(
  { light: 'claro', dark: 'oscuro' }[defaultTheme.value],
);
// -set default theme based on the swtich value
watch(defaultTheme, (newTheme: Theme) => {
  themeLanguaje.value = { light: 'claro', dark: 'oscuro' }[newTheme];
  theme.global.name.value = newTheme;
});
</script>

<template>
  <NuxtLayout>
    <v-app class="d-flex">
      <v-layout column>
        <SideBar v-model="defaultTheme" :sp-theme="themeLanguaje" />
        <Header v-model="actualPage" />
        <v-main :style="{ height: '100vh' }">
          <NuxtPage
            class="pt-5 pr-8 overflow-y-scroll"
            @set-page-title="(value: string) => (actualPage = value)"
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
