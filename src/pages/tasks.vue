<script setup lang="ts">
import { useAbility } from '@casl/vue';

// [Emits]
const emits = defineEmits(['setPageTitle']);

// [Composable]
const ability = useAbility();

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
          <div v-if="ability.can('VIEW', 'TASKMODAL')">
            <BaseModal title="Actualizar formulario">
              Modal de ejemplo
            </BaseModal>
          </div>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
