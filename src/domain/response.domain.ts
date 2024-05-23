/*
 * response domain
 */

// response domain interface
export interface IResponseDomain {
  error?: boolean;
  message?: string;
  code?: number;
  data?: object;
}

// response domain class
export class ResponseDomain implements IResponseDomain {
  error: boolean;
  message: string;
  code: number;
  data?: object;

  constructor(
    { error = false, message = '', code = 0 }: IResponseDomain = {},
    data: object = {},
  ) {
    this.error = error;
    this.message = message;
    this.code = code;
    this.data = data;
  }
}
