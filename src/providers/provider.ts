// module import
import axios, { type AxiosInstance } from 'axios';
// infrastructure import
import {
  environmentConfig,
  type IEnvironmentConfig,
} from '~/infrastructure/config/environment.config';

/*
 * provider main class import all the providers must extend this class
 */
export abstract class Provider {
  public environmentConfig: IEnvironmentConfig;
  public http: AxiosInstance;

  public constructor() {
    this.environmentConfig = environmentConfig;
    this.http = axios.create();
  }
}
