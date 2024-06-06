<script lang="ts" setup>
defineProps<{
  spTheme: string;
}>();

const nuxtApp = useNuxtApp();
const theme = defineModel();

const sidebarItems = [
  { label: 'Inicio', icon: 'mdi-home', path: '/' },
  { label: 'Pacientes', icon: 'mdi-account', path: '/patients' },
  { label: 'Usuarios', icon: 'mdi-account-group', path: '/users' },
  { label: 'Tareas', icon: 'mdi-calendar', path: '/tasks' },
  { label: 'Mensajes', icon: 'mdi-message', path: '/messages' },
];

watch(theme, (newTheme) => {
  nuxtApp.$localStorage.set('theme', newTheme);
});

onMounted(() => {
  if (nuxtApp.$localStorage.get('theme')) {
    theme.value = nuxtApp.$localStorage.get('theme');
  }
});
</script>

<template>
  <v-navigation-drawer app permanent class="sidebar pl-6 pr-4 py-4">
    <v-container
      fluid
      class="bg-primary fill-height py-4 px-0 d-flex flex-column align-start rounded-lg"
    >
      <v-list width="100%">
        <v-list-item
          title="OncoTracer"
          subtitle="Archetype"
          width="100%"
        />
        <v-list-item
          v-for="item in sidebarItems"
          :key="item.label"
          width="100%"
        >
          <NuxtLink :to="item.path">
            <Button
              :label="item.label"
              elevation="0"
              width="100%"
              class="justify-start"
              :prepend-icon="item.icon"
            />
          </NuxtLink>
        </v-list-item>
      </v-list>
      <v-spacer/>
      <div class="flex items-center justify-left w-full px-4">
        <Switch
          v-model="theme"
          :label="`Tema ${spTheme}`"
          false-value="light"
          true-value="dark"
        />
      </div>
    </v-container>
  </v-navigation-drawer>
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  background-color: transparent !important;
  border-right: none;
  box-shadow: none;
}
</style>
