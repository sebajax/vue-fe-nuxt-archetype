<script setup lang="ts">
// [Props]
interface IProps {
  title?: string | null;
  maxWidth?: string;
  buttonLabel?: string;
}
const props = withDefaults(defineProps<IProps>(), {
  title: null,
  maxWidth: '800',
  buttonLabel: 'Modal',
});
</script>

<template>
  <ClientOnly>
    <v-dialog :max-width="props.maxWidth">
      <template #activator="{ props: activatorProps }">
        <BaseButton v-bind="activatorProps" :label="props.buttonLabel" />
      </template>
      <template #default="{ isActive }">
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

<style></style>
