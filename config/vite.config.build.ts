export default {
  outDir: "dist",
  assetsDir: "assets",
  rollupOptions: {
    output: {
      manualChunks: {
        // echarts: ["echarts"],
      },
    },
  },
  chunkSizeWarningLimit: 1000,
};
