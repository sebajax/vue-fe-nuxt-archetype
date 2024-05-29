// domain import
import { UserDomain } from '~/domain/user.domain';
// message import

export const useAddUserStore = defineStore('addUserStore', {
  state: () => ({
    response: false,
  }),
  getters: {
    getError(): boolean {
      return this.response;
    },
  },
  actions: {
    async addUser(user: UserDomain) {
      try {
        const response = await useNuxtApp().$userProvider.addUserProvider(user);
        this.response = response.error;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
