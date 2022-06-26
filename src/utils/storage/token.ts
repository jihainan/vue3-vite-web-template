import { getItem, setItem } from "./local-storage";

const TOKEN_KEY = "lark__Access-Token";

/**
 * 设置TOKEN
 */
export const setToken = (token: string): void => {
  const data = { value: token };
  setItem(TOKEN_KEY, JSON.stringify(data));
};
/**
 * 获取TOKEN
 */
export const getToken = (): string => {
  const data = getItem(TOKEN_KEY) ?? "{}";
  return JSON.parse(data).value;
};
/**
 * 生成携带TOKEN的header信息
 */
export const getHeaderToken = (): { Authorization?: string } => {
  const token = getToken();
  if (token) {
    return { Authorization: token };
  }
  return {};
};
