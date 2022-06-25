import legacy from "@vitejs/plugin-legacy";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { kebabCase } from "lodash";
import { ArcoResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import { fileURLToPath, URL } from "url";
import { defineConfig, loadEnv } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

import build from "./vite.config.build";
import proxy from "./vite.config.proxy";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const envConfig = loadEnv(mode, "config/env", "");
  return {
    base: envConfig.WEB_TEMPLATE_BASE_URL,
    envDir: "config/env/",
    envPrefix: "WEB_TEMPLATE_",
    plugins: [
      vue(),
      vueJsx(),
      Components({
        directoryAsNamespace: true,
        resolvers: [
          {
            type: "component",
            resolve: (name) => {
              if (name.match(/^L[A-Z]/))
                return `/src/components/icons/${kebabCase(name)}.vue`;
            },
          },
          ArcoResolver({
            importStyle: "less",
            resolveIcons: true,
          }),
        ],
      }),
      legacy({
        targets: { chrome: "49" },
      }),
      createHtmlPlugin({
        inject: {
          data: {
            title: envConfig.WEB_TEMPLATE_APP_TITLE,
            baseUrl:
              mode === "development" ? "/" : envConfig.WEB_TEMPLATE_BASE_URL,
          },
        },
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("../src", import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${fileURLToPath(
              new URL(
                "../src/assets/style/global-setting.less",
                import.meta.url
              )
            )}";`,
            // example
            // "radius-small": "4px",
          },
          javascriptEnabled: true,
        },
      },
    },
    server: {
      proxy: proxy(envConfig),
    },
    build,
  };
});
