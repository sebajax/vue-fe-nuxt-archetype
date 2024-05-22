// domain import
import type { ResponseDomain } from '~/domain/response.domain';
import type { UserDomain } from '~/domain/user.domain';
// provider import
import { AddUserProvider } from './addUser.provider';

// interface to implement the provider
export interface IAddUserProvider {
  create(user: UserDomain): Promise<ResponseDomain>;
}

// provider factory init
export const addUserProvider = new AddUserProvider();
