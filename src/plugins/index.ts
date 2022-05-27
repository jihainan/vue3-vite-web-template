// import "./arco-patch.ts";

import { createPinia } from "pinia";
import type { App } from "vue";

import router from "@/router";

import ArcoPatchContent from "./arco-patch";

export default (app: App<Element>) => {
  app.use(createPinia());
  app.use(router);
  ArcoPatchContent(app);
};
