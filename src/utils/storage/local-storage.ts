// 操作 localStorage 的通用方法

/**
 * 向localStorage中存储或者更新内容
 * @param key 属性名称
 * @param value 值
 */
const setItem = (key: string, value: string | object | number | boolean) => {
  if (typeof value === "object") {
    value = JSON.stringify(value);
  }
  const targetItem = value + "";
  window.localStorage.setItem(key, targetItem);
};

/**
 * 从localStorage中删除内容
 * @param key 属性名称
 */
const removeItem = (key: string) => {
  window.localStorage.removeItem(key);
};

/**
 * 从localStorage中查询内容
 * @param key 属性名称
 */
const getItem = (key: string): string | null => {
  return window.localStorage.getItem(key);
};

export { getItem, removeItem, setItem };
