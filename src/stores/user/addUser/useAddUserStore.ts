// domain import
import { UserDomain } from '~/domain/user.domain';

export const useAddUserStore = defineStore('addUserStore', {
  state: () => ({
    response: {},
  }),
  actions: {
    async addUser(user: UserDomain) {
      try {
        const response = await useNuxtApp().$userProvider.addUserProvider(user);
        console.log(response);

        this.response = response;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
