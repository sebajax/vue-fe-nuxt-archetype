<script setup lang="ts">
interface Props {
  title?: string | null;
  maxWidth?: string;
}
const props = withDefaults(defineProps<Props>(), {
  title: null,
  maxWidth: '800',
});
</script>

<template>
  <v-dialog :max-width="props.maxWidth">
    <template #activator="{ props: activatorProps }">
      <Button v-bind="activatorProps" label="Formulario" />
    </template>
    <template #default="{ isActive }">
      <!-- if the component has title -->
      <v-card v-if="props.title" :title="props.title">
        <slot/>
        <v-card-actions>
          <v-spacer />
          <v-btn text="Cerrar" @click="isActive.value = false" />
        </v-card-actions>
      </v-card>
      <!-- card without title -->
      <v-card v-else>
        <slot/>
        <v-card-actions>
          <v-spacer />
          <v-btn text="Cerrar" @click="isActive.value = false" />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
