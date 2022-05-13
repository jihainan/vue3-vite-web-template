import type { AxiosInstance } from "axios";
import axios from "axios";

import errorHandler from "./error-handler";
import { requestInterceptor, responseInterceptor } from "./interceptors";

const request: AxiosInstance = axios.create({
  // baseURL: import.meta.env.BASE_URL,
  baseURL: "/mock/130/",
  timeout: 1000 * 10,
});

// 添加拦截器和统一异常处理
request.interceptors.request.use(requestInterceptor, errorHandler);
request.interceptors.response.use(responseInterceptor, errorHandler);

export default request;
