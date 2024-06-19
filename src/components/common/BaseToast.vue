<script setup lang="ts">
// [Imports]
// - Store
import { useToastStore } from '~/stores/toast/useToastStore';

// [Store]
const { configToast, toggleStateToast } = useToastStore();
</script>

<template>
  <div class="text-center ma-2">
    <!-- toast component with inherited text and close button  -->
    <v-snackbar
      v-model="configToast.state"
      timeout="configToast.timeout"
      location="end top"
      :timer="configToast.colorTimer"
      multi-line
      variant="elevated"
      transition="scroll-x-reverse-transition"
      :color="configToast.type"
    >
      <v-icon v-if="configToast.icon" class="mt-n1">
        {{ `${'mdi-' + configToast.icon}` }}
      </v-icon>

      <span class="ml-2 mt-2">{{ configToast.text }}</span>

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

<style></style>
