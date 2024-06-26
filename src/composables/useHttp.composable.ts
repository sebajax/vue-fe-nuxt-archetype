// [Imports]
// - Modules
import type { UseFetchOptions } from '#app';

// SSR: This composable is a wrapper around the http plugin for SSR http calls
export function useHttp<T>(url: string, options: UseFetchOptions<T> = {}) {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$http,
  });
}
