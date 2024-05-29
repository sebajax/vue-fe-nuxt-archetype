<script lang="ts" setup>
const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <div>
    <v-card class="rounded-lg" elevation="0">
      <v-card-title class="title-left text-title">
        <span class="text-lg">{{ props.title }}</span>
      </v-card-title>
      <hr class="mx-4" />
      <v-card-text>
        <slot></slot>
      </v-card-text>
    </v-card>
  </div>
</template>
