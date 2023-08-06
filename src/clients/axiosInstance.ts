import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const API_URL = `${import.meta.env.VITE_OPENAI_API_SCHEME}://${
  import.meta.env.VITE_OPENAI_API_HOST
}:${import.meta.env.VITE_OPENAI_API_PORT}/`;
const createAxios: AxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

interface RetryConfig extends AxiosRequestConfig {
  retry: number;
  retryDelay: number;
}

const globalConfig: RetryConfig = {
  retry: 3,
  retryDelay: 1000,
};

createAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config } = error;
    const token = import.meta.env.VITE_OPENAI_API_KEY;
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    if (!config || !config.retry) {
      return Promise.reject(error);
    }
    config.retry -= 1;
    const delayRetryRequest = new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, config.retryDelay || 1000);
    });
    await delayRetryRequest;
    return await createAxios(config);
  },
);
export { createAxios, globalConfig };
