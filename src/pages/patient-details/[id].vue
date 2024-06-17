<script setup lang="ts">
// VUE

// [Emits]
const emits = defineEmits(['setPageTitle']);

// [Lifecycle Hooks]
onMounted(() => {
  emits('setPageTitle', 'Detalles');
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
            <BaseTitledCard title="Antecedentes personales">
              <BaseText class="text-[20px] font-bold text-dark-text"
                >Regina del Pilar Plaza Baeza</BaseText
              >
              <v-container class="px-0">
                <BaseTextData category="Rut" value="12.345.678-9" />
                <BaseTextData category="Correo" value="correo@falp.org" />
                <BaseTextData category="Categoría" value="II" />
                <BaseTextData category="Edad" value="42 años" />
              </v-container>
            </BaseTitledCard>
            <!-- Tags card -->
            <BaseTitledCard title="Tags">
              <BaseText>Tag_1 Tag_2 Tag_3</BaseText>
            </BaseTitledCard>
            <BaseTitledCard title="Definición plan de tratamiento">
              <BaseText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
                nec, ultricies sed, dolor.
              </BaseText>
              <BaseText>
                Parrafo 2: Cras elementum ultrices diam. Maecenas ligula massa,
              </BaseText>
            </BaseTitledCard>
          </div>
        </BaseCard>
      </v-row>
    </v-container>
  </v-app>
</template>
