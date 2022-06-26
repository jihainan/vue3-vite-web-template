import { defineStore } from "pinia";

/**
 * 作为全局加载状态的数据仓库
 */
export const useLoadStateStore = defineStore({
  id: "loadState",
  state: () => ({
    // 正在加载的请求数量
    refCount: 0,
    // 加载状态标识
    isLoading: false,
  }),
  getters: {
    loading: (state) => state.isLoading,
  },
  actions: {
    /**
     * 更新状态
     * @param isLoading {boolean} 新增/移除加载数量
     */
    setLoading(isLoading: boolean) {
      if (isLoading) {
        this.refCount++;
        this.isLoading = true;
      } else if (this.refCount > 0) {
        this.refCount--;
        this.isLoading = this.refCount > 0;
      }
    },
  },
});
