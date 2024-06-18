<script setup lang="ts">
// VUE

// [Props]
interface IProps {
  title?: string | null;
  maxWidth?: string;
}
const props = withDefaults(defineProps<IProps>(), {
  title: null,
  maxWidth: '800',
});
</script>

<template>
  <ClientOnly>
    <v-dialog :max-width="props.maxWidth">
      <template ssr #activator="{ props: activatorProps }">
        <BaseButton v-bind="activatorProps" label="Formulario" />
      </template>
      <template ssr #default="{ isActive }">
        <!-- If the component has title -->
        <v-card v-if="props.title" :title="props.title">
          <div class="px-6">
            <slot />
          </div>
          <v-card-actions>
            <v-spacer />
            <v-btn text="Cerrar" @click="isActive.value = false" />
          </v-card-actions>
        </v-card>
        <!-- Card without title -->
        <v-card v-else>
          <div class="px-6">
            <slot />
          </div>
          <v-card-actions>
            <v-spacer />
            <v-btn text="Cerrar" @click="isActive.value = false" />
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </ClientOnly>
</template>
