import axios from 'axios';
import { BASE_URL } from '../config/config';

const axiosInstance = axios.create({ baseURL: BASE_URL });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong'
    )
);

export default axiosInstance;