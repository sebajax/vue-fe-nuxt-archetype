export default defineNuxtPlugin(() => {
  return {
    provide: {
      sessionStorage: {
        set(key: string, value: unknown) {
          sessionStorage.setItem(key, JSON.stringify(value));
        },
        get(key: string) {
          const value = sessionStorage.getItem(key);
          return value ? JSON.parse(value) : null;
        },
        remove(key: string) {
          sessionStorage.removeItem(key);
        },
      },
    },
  };
});
