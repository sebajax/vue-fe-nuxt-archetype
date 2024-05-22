// module import
import type { AxiosResponse } from 'axios';
// domain import
import { ResponseDomain } from '~/domain/response.domain';
import type { UserDomain } from '~/domain/user.domain';
// interface import
import type { IAddUserProvider } from './addUser.interface';
// provider main class import
import { Provider } from '~/providers/provider';

export class AddUserProvider extends Provider implements IAddUserProvider {
  public async create(user: UserDomain): Promise<ResponseDomain> {
    try {
      // call the api
      const response: AxiosResponse<ResponseDomain> = await this.http.post(
        `${this.environmentConfig.CLEAN_ARCHITECTURE_API}/user`,
        JSON.stringify(user),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      // return api response
      return new ResponseDomain(response.data);
    } catch (error: any) {
      console.error(`${AddUserProvider.name} error ${error}`);
      return new ResponseDomain(error.data);
    }
  }
}
