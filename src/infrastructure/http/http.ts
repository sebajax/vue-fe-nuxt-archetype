// module import
import { AxiosError, isAxiosError, type AxiosInstance } from 'axios';
// domain import
import { ResponseDomain, type IResponseDomain } from '~/domain/response.domain';

/*
 * Http main class for fetching data from external services
 */
export class Http {
  public client: AxiosInstance;

  public constructor(client: AxiosInstance) {
    this.client = client;
  }

  private _isHttpError(error: unknown): error is AxiosError {
    return isAxiosError(error);
  }

  public handleHttpError(error: unknown): ResponseDomain {
    // generate internal error only if necessary
    const errorResponse = new ResponseDomain({
      error: true,
      message: 'INTERNAL_SERVER_ERROR',
      code: 500,
    });

    if (this._isHttpError(error)) {
      // Axios specific error handling
      console.error('Http error:', error.message);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        // no internal server error only api controlled error
        return new ResponseDomain(error.response.data as IResponseDomain);
      }
      return errorResponse;
    } else {
      // General error handling
      console.error('Unexpected error:', error);
      return errorResponse;
    }
  }
}
