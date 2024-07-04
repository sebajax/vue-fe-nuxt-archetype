import { abilitiesPlugin } from '@casl/vue';

export default defineNuxtPlugin((nuxtApp) => {
  const userStore = useUserStore();
  const ability = defineAbilitiesFor(userStore.role);

  nuxtApp.vueApp.use(abilitiesPlugin, ability);

  // DEV-ONLY: Update abilities when user role changes
  userStore.$subscribe((mutation, state) => {
    ability.update(defineAbilitiesFor(state.role).rules);
  });
});
