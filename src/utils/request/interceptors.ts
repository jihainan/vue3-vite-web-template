// 在请求或响应被 then 或 catch 处理前拦截它们
import type { AxiosRequestConfig, AxiosResponse } from "axios";

import type { BaseResponse } from "@/service/interface";
import { getItem } from "@/utils/storage/local-storage";

/**
 * 请求拦截器
 * @param  {AxiosRequestConfig} config
 */
const requestInterceptor = (config: AxiosRequestConfig) => {
  // 设置请求头信息
  const tokenKey = "Auth";
  const tokenValue = getItem(tokenKey);
  if (tokenValue) {
    config.headers = Object.assign(config.headers ?? {}, {
      [tokenKey]: tokenValue,
    });
  }
  return config;
};

/**
 * 响应拦截器
 * @param  {AxiosResponse} response
 */
const responseInterceptor = (
  response: AxiosResponse<BaseResponse>
): AxiosResponse<BaseResponse> => {
  return response;
};

export { requestInterceptor, responseInterceptor };
