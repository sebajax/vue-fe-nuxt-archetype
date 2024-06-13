import type { UseFetchOptions } from '#app';
import { defu } from 'defu';
import { StatusCodes } from 'http-status-codes';

async function refreshToken() {
  const refreshToken = useCookie('refreshToken');

  const { data, status } = await useFetch<{ access: string }>(
    'http://127.0.0.1:8000/api/token/refresh/',
    {
      method: 'POST',
      body: { refresh: refreshToken.value },
    },
  );

  if (status.value === 'success') {
    return data.value?.access;
  } else {
    throw new Error('Token refresh failed');
  }
}

// Default options
async function execute<T>(url: string, options: UseFetchOptions<T> = {}) {
  // Use localStorage plugin
  const { $localStorage } = useNuxtApp();
  // Get the access token from local storage
  const accessToken = $localStorage.get('access_token');

  // Create the default options and check refresh token
  const defaultOptions: UseFetchOptions<T> = {
    headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
    onResponse: async ({ response, options }) => {
      // Handle the response errors
      if (response.status === StatusCodes.UNAUTHORIZED) {
        // Refresh token logic
        try {
          const newToken = await refreshToken();
          $localStorage.set('access_token', newToken);
          options.headers = { Authorization: `Bearer ${newToken}` };
        } catch (error) {
          console.error('Token refresh failed:', error);
        }
      }
    },
  };

  // Merge both options that comes from execution & default options with headers and token
  const finalOptions = defu(options, defaultOptions);

  // Finally call the external api
  return useFetch(url, finalOptions);
}

// Http Composable to use in all the framework
const useHttp = () => {
  // Method GET
  const get = async (url: string, options = {}) => {
    return execute(url, options);
  };

  return {
    get,
  };
};

export { useHttp };
