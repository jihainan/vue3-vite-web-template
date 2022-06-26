<!-- project root component -->
<template>
  <router-view />
  <component-global-loading :visible="useLoadStateStore().loading" />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";

import ComponentGlobalLoading from "@/components/loading/global.vue";
import { useLoadStateStore } from "@/stores/load-state";
</script>

<style lang="less">
#app {
  max-width: 1280px;
  padding: 2rem;
  margin: 0 auto;
  font-weight: normal;
}
</style>
