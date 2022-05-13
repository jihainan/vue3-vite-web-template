<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>

    <h3>
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>. What's next?
    </h3>

    <h1>像这样使用自定义图标</h1>
    <pre>
      // 对于/src/components/icons文件夹中的自定义图标组件
      // 不需要引入 直接使用即可
      &lt;l-icon-tooling&gt;&lt;/l-icon-tooling&gt;
      // 效果如下：
    </pre>
    <l-icon-repository style="width: 40px; height: 40px"></l-icon-repository>
    <l-icon-word style="width: 50px; height: 50px"></l-icon-word>
    <l-icon-repository style="width: 70px; height: 70px"></l-icon-repository>

    <h1>像这样自动格式化时间</h1>
    <pre>
      // 将时间显示为 几天前 的样式
      import dayjs from "@/utils/widgets/time";
      dayjs().to(dayjs("2022-05-01"))

      // 效果如下
    </pre>
    <span>{{ dayjs().to(dayjs("2022-05-01")) }}</span>
  </div>
</template>

<script setup lang="ts">
import dayjs from "@/utils/widgets/time";

defineProps<{
  msg: string;
}>();
</script>

<style scoped lang="less">
.greetings {
  padding: 16px;

  h1 {
    top: -10px;
    font-size: 2.6rem;
    font-weight: 500;
  }

  h3 {
    font-size: 1.2rem;
  }

  pre {
    background-color: rgb(199 228 218);
  }
}
</style>
