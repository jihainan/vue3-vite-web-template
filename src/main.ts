import { createApp } from "vue";

import pluginsBootstrap from "@/plugins";
import App from "@/views/root-app.vue";

const app = createApp(App);
// bootstrap all plugins
pluginsBootstrap(app);
app.mount("#root-app");
