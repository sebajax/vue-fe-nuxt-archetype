export default defineNuxtRouteMiddleware(async () => {
  const { loggedIn } = useOidcAuth()
  if(!loggedIn.value){
    return navigateTo("/guest", {replace: true});
  }
});
