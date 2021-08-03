/*
 * @Author: your name
 * @Date: 2021-07-29 22:28:35
 * @LastEditTime: 2021-07-31 23:29:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import less from "less";

Vue.config.productionTip = false;
Vue.use(less);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
