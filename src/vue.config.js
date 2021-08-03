/*
 * @Author: your name
 * @Date: 2021-07-31 14:03:22
 * @LastEditTime: 2021-07-31 22:38:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\vue.config.js
 */
module.exports = {
  configureWebpack: {
    reslove: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views",
      },
    }, 
    config.module
        .rule('less')
        .use('less-loader')
        .loader('less-loader')
        .options({
    lessOptions: {
    /**less-loader 配置 */
      strictMath: true,
      noIeCompat: true
    }
  },
};
