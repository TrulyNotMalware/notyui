import axios from 'axios';

export const requestApi = axios.create({
  baseURL: 'https://notion-api.splitbee.io/v1/page',
  timeout: 20000,
});

requestApi.interceptors.request.use((error) => Promise.reject(error));
