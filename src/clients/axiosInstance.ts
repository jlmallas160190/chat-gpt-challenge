import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const API_URL = `${import.meta.env.VITE_OPENAI_API_SCHEME}://${
  import.meta.env.VITE_OPENAI_API_HOST
}:${import.meta.env.VITE_OPENAI_API_PORT}/v1/`;
const createAxios: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

interface RetryConfig extends AxiosRequestConfig {
  retry: number;
  retryDelay: number;
}

const globalConfig: RetryConfig = {
  retry: 3,
  retryDelay: 1000,
};
createAxios.interceptors.request.use(
  async (config) => {
    const token = import.meta.env.VITE_OPENAI_API_KEY;
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    const newConfig = config;

    return newConfig;
  },
  async (error) => {
    const { config } = error;
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
