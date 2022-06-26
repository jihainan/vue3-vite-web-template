export default (envConfig: Record<string, string>) => ({
  // 字符串简写写法
  "/foo": envConfig.WEB_TEMPLATE_API_PROXY_TARGET,
  // 代理至https
  "/api": {
    target: envConfig.WEB_TEMPLATE_API_PROXY_TARGET,
    changeOrigin: true,
    secure: false,
    headers: {
      Referer: envConfig.WEB_TEMPLATE_API_PROXY_TARGET,
    },
  },
  // 选项写法
  "/test/monitor/api/monitor": {
    target: envConfig.WEB_TEMPLATE_API_PROXY_TARGET,
    changeOrigin: true,
    rewrite: (path: string) =>
      path.replace(/^\/test\/monitor\/api\/monitor/, ""),
  },
  // 正则表达式写法
  "^/fallback/.*": {
    target: envConfig.WEB_TEMPLATE_API_PROXY_TARGET,
    changeOrigin: true,
    rewrite: (path: string) => path.replace(/^\/fallback/, ""),
  },
});
