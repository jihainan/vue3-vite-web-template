// 统一处理 axios 的异常
import type { AxiosError } from "axios";

const errorHandler = (error: AxiosError) => {
  if (error.response) {
    // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // 请求已经成功发起，但没有收到响应
    // `error.request` 是 XMLHttpRequest 的实例，
    console.log(error.request);
  } else {
    // 发送请求时出了问题，未发送成功
    console.log("Error", error.message);
  }
  // 调用error.toJSON()方法获取详细的错误信息
  return Promise.reject(error);
};

export default errorHandler;
