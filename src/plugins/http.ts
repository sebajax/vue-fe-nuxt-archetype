// [Imports]
// - Modules
import { StatusCodes } from 'http-status-codes';

export default defineNuxtPlugin(() => {
  // Type HttpMethod
  type TypeHttpMethod =
    | 'DELETE'
    | 'GET'
    | 'POST'
    | 'PUT'
    | 'delete'
    | 'get'
    | 'post'
    | 'put';

  // Get user session from oidc
  const { loggedIn, user, refresh } = useOidcAuth();

  // Generate Bearer token helper string
  const setAuthorizationHeader = () => {
    // Add the Authorization header to the request
    const headers = new Headers();
    if (user.value?.accessToken) {
      headers.set('Authorization', `Bearer ${user.value?.accessToken}`);
    }

    return headers;
  };

  const http = $fetch.create({
    async onRequest({ options }) {
      // Check if the user is logged in
      if (loggedIn.value === null || !loggedIn.value) {
        await navigateTo('/login');
        return; // Ensure function exits after redirecting to login
      }

      // Set the Authorization header
      options.headers = setAuthorizationHeader();
    },
    async onResponseError({ request, response, options }) {
      // Handle authorization response error
      if (response.status === StatusCodes.UNAUTHORIZED) {
        try {
          // Refresh the token using oidc
          await refresh();

          // Update the headers with the new token from refresh
          options.headers = setAuthorizationHeader();

          return await $fetch(request, {
            ...options,
            method: options.method as TypeHttpMethod,
          });
        } catch (error) {
          console.error('Token refresh failed:', error);
          // Redirect to login or handle error appropriately
          await navigateTo('/login');
          return; // Ensure function exits after handling the error
        }
      }
    },
  });

  // Expose to useNuxtApp().$http
  return {
    provide: {
      http,
    },
  };
});
