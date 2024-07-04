// [Imports]
// - Modules
import { StatusCodes } from 'http-status-codes';
// - Interfaces
import type { TypeHttpMethod } from '~/interfaces/plugins/http.interface';

// CSR: This plugin is for CSR http calls
export default defineNuxtPlugin(() => {
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

  // Create a new http instance using fetch
  const http = $fetch.create({
    // onRequest hook
    async onRequest({ options }) {
      // Check if the user is logged in
      if (loggedIn.value === null || !loggedIn.value) {
        await navigateTo('/login');
        return; // Ensure function exits after redirecting to login
      }

      // Set the Authorization header
      options.headers = setAuthorizationHeader();
    },
    // onResponseError hook
    async onResponseError({ request, response, options }) {
      // Handle authorization response error
      if (response.status === StatusCodes.UNAUTHORIZED) {
        // Initialize retry count if not set, then decrement
        options.retry =
          options.retry === undefined ? 3 : (options.retry as number) - 1;

        // Check if retry limit reached
        if (options.retry <= 0) {
          console.error('Token refresh failed');
          await navigateTo('/login');
          return; // Ensure function exits after handling the error
        }

        console.log(options.retry);

        try {
          // Refresh the token using oidc
          await refresh();

          // Update the headers with the new token from refresh
          options.headers = setAuthorizationHeader();

          // Retry the request with new token from refresh
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
