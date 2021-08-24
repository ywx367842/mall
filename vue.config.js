module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        static: "@/assets",
        assets: "@/assets",
        components: "@/components",
        network: "@/network",
        views: "@/views"
      }
    }
  }
};
