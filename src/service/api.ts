/**
 * @file 接口文件
 */
import request from "@/utils/request";

/**
 * 模拟请求用例
 * 基于 reqres.in
 * @param delay {number} 接口延迟时间
 */
export const getUsers = (delay: number) =>
  request({
    url: "/users",
    params: { delay },
  });
