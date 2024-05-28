// domain import
import type { UserDomain } from '~/domain/user.domain';
// provider import
import { addUserProvider } from '~/providers/user/addUser/addUser.interface';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      userProvider: {
        addUserProvider: async (user: UserDomain) => {
          return addUserProvider.create(user);
        },
      },
    },
  };
});
