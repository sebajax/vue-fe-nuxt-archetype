// domain import
import { UserDomain } from '~/domain/user.domain';
// message import
import { addUserResponse } from './addUser.response';

export const useAddUserStore = defineStore('addUserStore', {
  state: () => ({
    response: '',
  }),
  actions: {
    async addUser(user: UserDomain) {
      try {
        const response = await useNuxtApp().$userProvider.addUserProvider(user);
        console.log(response);

        this.response = addUserResponse(response.message);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
