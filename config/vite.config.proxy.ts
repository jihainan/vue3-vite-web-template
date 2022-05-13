export default {
  // 字符串简写写法
  "/foo": "http://localhost:4567",
  // 选项写法
  "/test/monitor/api/monitor": {
    target: "http://localhost:8799",
    changeOrigin: true,
    rewrite: (path: string) =>
      path.replace(/^\/test\/monitor\/api\/monitor/, ""),
  },
  // 正则表达式写法
  "^/fallback/.*": {
    target: "http://localhost:4567",
    changeOrigin: true,
    rewrite: (path: string) => path.replace(/^\/fallback/, ""),
  },
};
