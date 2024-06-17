<script setup lang="ts">
const { loggedIn, user, logout, currentProvider } = useOidcAuth();
</script>
<template>
  <v-container class="mt-5 pa-2">
    <v-row>
      <v-col md="5" cols="12">
        <div class="flex flex-col pa-4 gap-4 items-left">
          <p>
            Métodos y referencias disponibles del composable
            <b style="color: orange">useOidcAuth();</b>
          </p>

          <p><b>LoggedIn : </b>{{ loggedIn }}</p>
          <p><b>Current provider : </b> {{ currentProvider }}</p>
          <v-btn
            color="#B684E7"
            append-icon="mdi-logout"
            :disabled="!loggedIn"
            @click="logout(currentProvider)"
          >
            <span class="pl-2">Logout</span>
          </v-btn>
        </div>
      </v-col>

      <v-col md="7" cols="12">
        <v-card rounded="lg">
          <p class="pa-4">Opciones disponibles en la referencia <b>USER</b></p>

          <v-table class="pa-3" height="400px" fixed-header>
            <thead>
              <tr>
                <th class="text-left">Option</th>
                <th class="text-left">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, key, index) in user" :key="index">
                <td>
                  <b>{{ key }}</b>
                </td>
                <td>
                  <p class="pa-3 break-all">
                    {{ value }}
                  </p>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
