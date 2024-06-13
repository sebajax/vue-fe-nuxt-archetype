export default defineNuxtRouteMiddleware((to) => {
  const { loggedIn } = useOidcAuth();

  if (!loggedIn.value && to.meta.layout !== 'authentication') {
    return navigateTo('/login', { external: true, replace: true });
  }
});
