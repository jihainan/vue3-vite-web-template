import { type Pinia, createPinia } from "pinia";
import type { Router } from "vue-router";

import router from "@/router";

export default (app: { use: (arg0: Pinia | Router) => void }) => {
  app.use(createPinia());
  app.use(router);
};
