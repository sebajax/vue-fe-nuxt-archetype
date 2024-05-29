<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

// set actual page
const emits = defineEmits(['setPageTitle']);
onMounted(() => {
  emits('setPageTitle', 'Mensajes');
});

// get window width and update on resize
const width = ref<number>(0);
function updateWidth() {
  if (typeof window !== 'undefined') {
    width.value = window.innerWidth;
  }
}
// TODO: redefine devices sizes (600)
const responsiveCols = computed(() => (width.value < 600 ? '12' : '6'));

onMounted(() => {
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
