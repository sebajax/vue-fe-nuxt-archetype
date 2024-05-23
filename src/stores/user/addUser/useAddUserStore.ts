// domain import
import { ResponseDomain } from '~/domain/response.domain';
import { UserDomain } from '~/domain/user.domain';
// message import
import { addUserResponse } from './addUser.response';

export const useAddUserStore = defineStore('addUserStore', {
  state: () => ({
    response: new ResponseDomain(),
  }),
  getters: {
    getMessage(): string {
      return addUserResponse(this.response.message);
    },
    getError(): boolean {
      return this.response.error;
    },
  },
  actions: {
    async addUser(user: UserDomain) {
      try {
        const response = await useNuxtApp().$userProvider.addUserProvider(user);
        this.response = response;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
