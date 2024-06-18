<script setup lang="ts">
// VUE

// [Emits]
const emits = defineEmits(['setPageTitle']);

// [Lifecycle Hooks]
onMounted(() => {
  emits('setPageTitle', 'Tareas');
});
</script>

<template>
  <v-app>
    <!-- main content -->
    <v-main>
      <v-container fluid class="px-8 py-8">
        <v-row>
          <Title text="Inicio" />
        </v-row>
        <v-row>
          <BaseModal title="Actualizar formulario">
            Modal de ejemplo
          </BaseModal>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
