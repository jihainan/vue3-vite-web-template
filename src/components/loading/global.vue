<template>
  <teleport to="body">
    <div class="global-mask center" v-show="visible">
      <loading />
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";

import { getElement } from "@/utils/widgets/dom";

import Loading from "./index.vue";
import { useOverflow } from "./use-overflow";

const props = defineProps<{ visible: boolean }>();

const { setOverflowHidden, resetOverflow } = useOverflow(
  ref(getElement("body"))
);

watchEffect(() => {
  if (props.visible) {
    setOverflowHidden();
  } else {
    resetOverflow();
  }
});
</script>

<style lang="less" scoped>
.global-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  // 使用 UI组件库提供的变量
  background-color: var(--color-mask-bg);
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
