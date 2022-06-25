import "dayjs/locale/zh-cn";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

// 增加.from .to .fromNow .toNow方法扩展
dayjs.extend(relativeTime);
dayjs.locale("zh-cn");

export default dayjs;
