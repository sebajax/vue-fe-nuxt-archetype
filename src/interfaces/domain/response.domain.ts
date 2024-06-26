// Response domain interface
interface IResponseDomain<T> {
  error: boolean;
  message: string;
  data?: T;
}

// Define a type alias for the constructor parameters, excluding 'data'
type TypeResponseDomain<T> = Omit<IResponseDomain<T>, 'data'>;

// Response domain class
class ResponseDomain<T> implements IResponseDomain<T> {
  error: boolean;
  message: string;
  data: T;

  constructor({ error, message }: TypeResponseDomain<T>, data: T) {
    this.error = error;
    this.message = message;
    this.data = data;
  }
}

export { ResponseDomain };
export type { IResponseDomain };
