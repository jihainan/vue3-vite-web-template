// 在请求或响应被 then 或 catch 处理前拦截它们
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

import type { BaseResponse } from "@/service/interface";
import { useLoadStateStore } from "@/stores/load-state";
import { getItem } from "@/utils/storage/local-storage";

/**
 * 请求拦截器
 * @param  {AxiosRequestConfig} config
 */
export const requestInterceptor = (config: AxiosRequestConfig) => {
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
export const responseInterceptor = (
  response: AxiosResponse<BaseResponse>
): AxiosResponse<BaseResponse> => {
  return response;
};

// 控制加载状态的拦截器
export const requestLoadingInterceptor = (config: AxiosRequestConfig) => {
  // 新增加载中状态
  useLoadStateStore().setLoading(true);
  return config;
};

export const responseLoadingInterceptor = (
  response: AxiosResponse<BaseResponse>
): AxiosResponse<BaseResponse> => {
  // 移除加载中状态
  useLoadStateStore().setLoading(false);
  return response;
};

export const loadingErrorHandler = (error: AxiosError) => {
  // 移除加载中状态
  useLoadStateStore().setLoading(false);
  return Promise.reject(error);
};
