<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

// set actual page
const emits = defineEmits(['setPageTitle']);
onMounted(() => {
  emits('setPageTitle', 'Pacientes');
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
    <v-container fluid class="px-3 py-8">
      <v-row>
        <BaseCard class="w-full">
          <div
            class="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3"
          >
            <!-- Personal data card -->
            <TitledCardVue title="Antecedentes personales">
              <Text class="text-[20px] font-bold text-dark-text"
                >Regina del Pilar Plaza Baeza</Text
              >
              <v-container class="px-0">
                <TextData category="Rut" value="12.345.678-9" />
                <TextData category="Correo" value="correo@falp.org" />
                <TextData category="Categoría" value="II" />
                <TextData category="Edad" value="42 años" />
              </v-container>
            </TitledCardVue>
            <!-- Tags card -->
            <TitledCardVue title="Tags">
              <Text>Tag_1 Tag_2 Tag_3</Text>
            </TitledCardVue>
            <TitledCardVue title="Definición plan de tratamiento">
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
                nec, ultricies sed, dolor.
              </Text>
              <Text>
                Parrafo 2: Cras elementum ultrices diam. Maecenas ligula massa,
              </Text>
            </TitledCardVue>
          </div>
        </BaseCard>
      </v-row>
    </v-container>
  </v-app>
</template>
