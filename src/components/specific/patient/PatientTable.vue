<script lang="ts" setup>
import { useTheme } from 'vuetify';

const patients = ref(usePatients);
const theme = useTheme();
const primaryColor = ref(theme.global.current.value.colors.primary);
</script>

<template>
  <div class="rounded-lg overflow-hidden">
    {{ primaryColor }}
    <v-data-table :items="patients">
      <template v-slot:header.id="{ column }">
        <thead>
          <tr>
            <th class="bg-red-500">
              {{ column.title?.toUpperCase() }}
            </th>
          </tr>
        </thead>
      </template>
    </v-data-table>
  </div>
</template>

<style>
.v-table {
  border-radius: 20px;
}

/* even table row bg-color */
.v-table tbody tr:nth-child(even) {
  background-color: #e6e6e6;
}
/* odd table row bg-color */
.v-table tbody tr:nth-child(odd) {
  background-color: white;
}

/* header class: color and font */
.v-table thead tr th {
  background-color: v-bind(primaryColor);
  color: #4d306a;
  font-size: large;
  font-weight: 900;
}

.theme--dark .v-table thead tr th {
  background-color: #333333; /* Color de fondo para el tema oscuro */
  color: #333333; /* Color de texto para el tema oscuro */
}
</style>
