<script setup lang="ts">
const { loggedIn, user, refresh, login, logout, currentProvider, clear } =
  useOidcAuth();
</script>
<template>
  <div class="w-full grid grid-cols-2">
    <div class="col-start-1 flex flex-col gap-4 items-center">
      <p class="text-xl">Login with</p>
      <v-btn class="btn-base btn-login" @click="login()">
        <span class="i-majesticons-login-line" />
        <span class="pl-2">Default provider</span>
      </v-btn>
      <p>Logged in: {{ loggedIn }}</p>
      <p>Current provider: {{ currentProvider }}</p>
      <v-btn
        class="btn-base btn-login"
        :disabled="!loggedIn || !user.canRefresh"
        @click="refresh()"
      >
        <span class="i-majesticons-refresh" />
        <span class="pl-2">Refresh</span>
      </v-btn>
      <v-btn
        class="btn-base btn-login"
        :disabled="!loggedIn"
        @click="logout(currentProvider)"
      >
        <span class="i-majesticons-logout-line" />
        <span class="pl-2">Logout</span>
      </v-btn>
      <v-btn class="btn-base btn-login" :disabled="!loggedIn" @click="clear()">
        <span class="i-majesticons-delete-bin-line" />
        <span class="pl-2">Clear session</span>
      </v-btn>
    </div>
    <div class="col-start-2">
      <p class="pb-4 text-xl">User object</p>
      <div v-for="(value, key, index) in user" :key="index">
        <span class="font-bold text-base">
          {{ `${key}` }}
        </span>
        <p class="text-sm pb-3 break-all">
          {{ value }}
        </p>
      </div>
    </div>
  </div>
</template>
