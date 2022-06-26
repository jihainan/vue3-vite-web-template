import type { AxiosInstance } from "axios";
import axios from "axios";

import errorHandler from "./error-handler";
import {
  loadingErrorHandler,
  requestInterceptor,
  requestLoadingInterceptor,
  responseInterceptor,
  responseLoadingInterceptor,
} from "./interceptors";

const request: AxiosInstance = axios.create({
  baseURL: import.meta.env.WEB_TEMPLATE_API_PREFIX as string,
  timeout: 1000 * 10,
});

// 添加拦截器和统一异常处理 注意先后顺序
//    1). 加载状态请求拦截器
request.interceptors.request.use(
  requestLoadingInterceptor,
  loadingErrorHandler
);
//    2). 通用请求拦截器 添加header等
request.interceptors.request.use(requestInterceptor, errorHandler);
//    3). 通用响应拦截器 过滤返回值等
request.interceptors.response.use(responseInterceptor, errorHandler);
//    4). 加载状态响应拦截器
request.interceptors.response.use(
  responseLoadingInterceptor,
  loadingErrorHandler
);

export default request;
