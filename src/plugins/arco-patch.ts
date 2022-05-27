import "@arco-design/web-vue/es/message/style";
import "@arco-design/web-vue/es/modal/style";
import "@arco-design/web-vue/es/notification/style";

import { Message, Modal, Notification } from "@arco-design/web-vue";
import type { App } from "vue";

export default (app: App<Element>) => {
  Message._context = app._context;
  Notification._context = app._context;
  Modal._context = app._context;
};
