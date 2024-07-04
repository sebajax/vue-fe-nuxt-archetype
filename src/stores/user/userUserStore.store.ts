export const useUserStore = defineStore('userStore', () => {
  // initial role
  const role = ref('nurse');
  // set role
  function setRole(newRole: string) {
    role.value = newRole;
  }
  return { role, setRole };
});
