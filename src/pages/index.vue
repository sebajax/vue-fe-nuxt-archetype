<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
const form = ref({
  name: '',
  email: '',
  password: '',
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

const formFields = [
  'Nombre',
  'Correo',
  'Contraseña',
  'Confirmar contraseña',
  'Fecha de nacimiento',
];
const formInputs = [
  'name',
  'email',
  'password',
  'confirmPassword',
  'birthDate',
];
</script>

<!-- <template>
  <v-main class="flex px-10 py-10">
    <v-container fluid>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Latest News</v-card-title>
          <v-card-text>
            Stay updated with our latest news and announcements.
          </v-card-text>
        </v-card>
      </v-col>
      <AtomTitle text="Inicio" />
      
      <v-spacer />
      <OrganismModal title="Actualizar formulario 2">
        <OrganismForm
          :fields="formFields"
          :inputs="formInputs"
          :cols="responsiveCols"
        />
      </OrganismModal>
    </v-container>
  </v-main>
</template> -->

<template>
  <v-app>
    <!-- main content -->
    <v-main>
      <v-container fluid class="px-8 py-8">
        <v-row>
          <AtomTitle text="Inicio" />
        </v-row>
        <v-row>
          <OrganismModal title="Actualizar formulario">
            <OrganismUserForm :cols="responsiveCols" />
          </OrganismModal>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
