<script setup lang="ts">
// [Imports]
import { useTheme } from 'vuetify';
// - Interface
import type { TypeTheme } from '../interfaces/theme.interface';
import { EnumTheme, EnumThemeTranslation } from '../interfaces/theme.interface';

// [Modularity - Actual page]
const actualPage = ref<string>('');

// [Modularity - Set application theme]
const theme = useTheme();
const defaultTheme = ref<TypeTheme>(EnumTheme.LIGHT);
const themeLanguage = ref<string>(EnumThemeTranslation.LIGHT);
// - [Watch]
watch(defaultTheme, (newTheme: TypeTheme) => {
  themeLanguage.value =
    newTheme === EnumTheme.LIGHT
      ? EnumThemeTranslation.LIGHT
      : EnumThemeTranslation.DARK;
  theme.global.name.value = newTheme;
});
// [Modularity - Page title]
const title = ref('Nuxt Archetype');
const description = ref('Nuxt 3 frontend archetype');
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
  <v-app class="d-flex">
    <v-layout column>
      <BaseSideBar v-model="defaultTheme" :sp-theme="themeLanguage" />
      <BaseHeader v-model="actualPage" />
      <v-main :style="{ height: '100vh' }">
        <NuxtPage
          class="pt-5 pr-8 overflow-y-scroll"
          @set-page-title="(value: string) => (actualPage = value)"
        />
      </v-main>
    </v-layout>
  </v-app>
</template>

<style scoped>
.full-height {
  height: 100vh; /* You can adjust this value to your desired height */
}
</style>
