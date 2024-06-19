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
  themeLanguage.value = getThemeTranslation(newTheme);
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

// [Modularity - Get theme colors]
const colors = useColors();
const primaryColor = colors.primary;
const darkTextColor = colors.darkText;
</script>

<template>
  <v-app class="d-flex">
    <v-layout column>
      <BaseSideBar v-model="defaultTheme" :sp-theme="themeLanguage" />
      <BaseHeader v-model="actualPage" />
      <ClientOnly>
        <BaseToast/>
      </ClientOnly>
      <v-main class="h-[100vh]">
        <NuxtPage
          class="pt-5 pr-8 overflow-y-scroll"
          @set-page-title="(value: string) => (actualPage = value)"
        />
      </v-main>
    </v-layout>
  </v-app>
</template>

<style>
/* Table header class: color and font */
.v-table thead tr th {
  background-color: v-bind(primaryColor);
  color: v-bind(darkTextColor);
  font-size: large;
  font-weight: 900;
}
</style>
