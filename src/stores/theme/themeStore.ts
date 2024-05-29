import type { Theme } from '~/interfaces/theme.type';

// TODO: check the storage to find the way to store the starte on localStorage
// problem: localStorage is not aviable before the page is mounted.
export const useThemeStore = defineStore('themeStore', {
  state: () =>
    <
      {
        theme: Theme;
      }
    >{
      theme: localStorage.getItem('theme') as Theme,
    },
  getters: {
    getTheme(): Theme {
      return this.theme;
    },
  },
  actions: {
    setTheme(theme: Theme) {
      localStorage.setItem('theme', theme);
      this.theme = theme;
    },
  },
});
