import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export enum EApiEndpoints {
  SEARCH = '/search',
  TICKETS = '/tickets',
}

interface AxiosParams {
  method: RequestMethod;
  endpoint: EApiEndpoints | string;
  params?: Record<string, string | number | boolean>;
  data?: Record<string, string | number | boolean> | string | FormData;
  headers?: Record<string, string>;
  timeout?: number;
}

export interface ApiResponseError {
  error: Error;
  status: number;
}

export type ApiResponse<T> = T | ApiResponseError;

const BASE_URL = 'https://front-test.beta.aviasales.ru';

const REQUEST_TIMEOUT = 30000;

export async function axiosRequest<T = unknown>({
  method,
  endpoint,
  params,
  data,
  headers,
  timeout = REQUEST_TIMEOUT,
}: AxiosParams): Promise<ApiResponse<T>> {
  const axiosParams: AxiosRequestConfig = {
    baseURL: BASE_URL,
    url: endpoint,
    params,
    data,
    method,
    timeout,
    responseType: 'json',
    headers,
  };

  return axios(axiosParams)
    .then((response: AxiosResponse<T>) => {
      const responseData = response && response.data;

      // handle errors
      // if (responseData.body && (responseData.body as any).error) {
      //   return {
      //     error: (responseData.body as any).error,
      //     status: responseData.status,
      //   };
      // }

      return responseData;
    })
    .catch((error) => {
      return { error, status: 500 };
    });
}
