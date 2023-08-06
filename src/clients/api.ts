import { AxiosResponse } from 'axios';
import { createAxios } from './axiosInstance';
const responseBody = <T>(response: AxiosResponse<T>) => response.data;

export const request = {
  get: <T>(url: string) => createAxios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: unknown) => createAxios.post<T>(url, body).then(responseBody),
};
