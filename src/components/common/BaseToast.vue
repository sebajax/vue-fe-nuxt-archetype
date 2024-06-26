<script setup lang="ts">
// [Imports]
// - Store
import { useToastStore } from '~/stores/toast/useToast.store';

// [Store]
const { configToast, toggleStateToast } = useToastStore();
</script>

<template>
  <div class="text-center ma-2">
    <!-- toast component with inherited text and close button  -->
    <v-snackbar
      v-model="configToast.state"
      :timeout="configToast.timeout"
      location="end top"
      class="mr-4 p-[22px]"
      rounded="lg"
      multi-line
      variant="elevated"
      transition="scroll-x-reverse-transition"
      :color="configToast.type"
    >
      <div class="inline-flex items-center text-left">
        <v-icon v-if="configToast.icon" class="mt-n1 icon-size">
          {{ configToast.icon }}
        </v-icon>

        <span class="ml-2 text-[14px] font-semibold line-clamp-3">
          {{ configToast.text }}
        </span>
      </div>

      <template #actions>
        <v-btn
          variant="plain"
          append-icon="mdi-close"
          @click="toggleStateToast"
        />
      </template>
    </v-snackbar>
  </div>
</template>

<style scoped>
.icon-size {
  font-size: 50px;
}
</style>
