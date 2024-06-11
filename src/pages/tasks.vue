<script setup lang="ts">
// VUE

// [Emits]
const emits = defineEmits(['setPageTitle']);

// [Reactivity - Check window width]
// TODO: make this a composable
const width = ref<number>(0);
function updateWidth() {
  if (typeof window !== 'undefined') {
    width.value = window.innerWidth;
  }
}
const responsiveCols = computed(() => (width.value < 600 ? '12' : '6'));

// [Lifecycle Hooks]
onMounted(() => {
  emits('setPageTitle', 'Tareas');
  updateWidth();
  window.addEventListener('resize', updateWidth);
});
onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
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
          <Modal title="Actualizar formulario">
            <UserForm :cols="responsiveCols" />
          </Modal>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
