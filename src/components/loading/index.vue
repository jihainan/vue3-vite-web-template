<template>
  <div class="lark-loading">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style scoped lang="less">
.lark-loading {
  position: relative;
  display: inline-block;
  width: 80px;
  height: 80px;

  div {
    position: absolute;
    width: 6px;
    height: 6px;
    animation: lark-loading 1.2s linear infinite;
    // 使用与 项目UI组件库 一致的主色调
    background: rgb(var(--primary-6));
    border-radius: 50%;
  }

  div:nth-child(1) {
    top: 37px;
    left: 66px;
    animation-delay: 0s;
  }

  div:nth-child(2) {
    top: 22px;
    left: 62px;
    animation-delay: -0.1s;
  }

  div:nth-child(3) {
    top: 11px;
    left: 52px;
    animation-delay: -0.2s;
  }

  div:nth-child(4) {
    top: 7px;
    left: 37px;
    animation-delay: -0.3s;
  }

  div:nth-child(5) {
    top: 11px;
    left: 22px;
    animation-delay: -0.4s;
  }

  div:nth-child(6) {
    top: 22px;
    left: 11px;
    animation-delay: -0.5s;
  }

  div:nth-child(7) {
    top: 37px;
    left: 7px;
    animation-delay: -0.6s;
  }

  div:nth-child(8) {
    top: 52px;
    left: 11px;
    animation-delay: -0.7s;
  }

  div:nth-child(9) {
    top: 62px;
    left: 22px;
    animation-delay: -0.8s;
  }

  div:nth-child(10) {
    top: 66px;
    left: 37px;
    animation-delay: -0.9s;
  }

  div:nth-child(11) {
    top: 62px;
    left: 52px;
    animation-delay: -1s;
  }

  div:nth-child(12) {
    top: 52px;
    left: 62px;
    animation-delay: -1.1s;
  }
}

@keyframes lark-loading {
  0%,
  20%,
  80%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.5);
  }
}
</style>
