// Domain import

import type { IResponseDomain } from '~/interfaces/domain/response.domain';
import type { TResponseAddUser } from './addUser.response';

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
    async execute() {
      try {
        const runtimeConfig = useRuntimeConfig();
        const getResponse = await useHttp().get(
          `${runtimeConfig.public.api}/user`,
        );
        const data =
          getResponse.data as unknown as IResponseDomain<TResponseAddUser>;
        this.response = data.error;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
