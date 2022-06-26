/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @file 服务调用相关的基础类型
 */

import type { AxiosPromise } from "axios";

export class PageParams {
  pageNo = 1;
  pageSize = 10;
}

/**
 * 返回值基础类型
 */
export interface BaseResponse<ResultContent = any> {
  result: ResultContent;
  status: number;
  message: string;
  rel: boolean;
  timestamp: string;
}

/* ============================具体返回值类型============================ */

/**
 * 分页查询返回值类型
 * `PageItem` 为具体查询对象
 */
export type PageResponse<PageItem> = BaseResponse<{
  data: PageItem[];
  pageNo: number;
  totalPage: number;
  pageSize: number;
  totalCount: number;
}>;

/**
 * 列表类返回值类型
 * `ListItem` 为具体的列表项
 */
export type ListResponse<ListItem> = BaseResponse<{
  data: ListItem[];
  count: number;
}>;

/**
 * 对象类返回值类型
 * `ObjectItem` 为具体对象 或者为 单一变量，如 string
 */
export type ObjectResponse<ObjectItem> = BaseResponse<ObjectItem>;

/* ============================原始类型============================ */
/**
 * 基础返回值原始类型
 */
export type BaseResponsePromise<ResultContent = any> = AxiosPromise<
  BaseResponse<ResultContent>
>;
/**
 * 分页返回值原始类型
 */
export type PageResponsePromise<PageItem> = AxiosPromise<
  PageResponse<PageItem>
>;
/**
 * 列表类返回值原始类型
 */
export type ListResponsePromise<ListItem> = AxiosPromise<
  ListResponse<ListItem>
>;
/**
 * 对象类返回值原始类型
 */
export type ObjectResponsePromise<ObjectItem> = AxiosPromise<
  ObjectResponse<ObjectItem>
>;
