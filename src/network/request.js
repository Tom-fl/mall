/*
 * @Author: your name
 * @Date: 2021-07-31 23:02:57
 * @LastEditTime: 2021-08-02 23:26:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\network\request.js
 */
import axios from "axios";
export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    //  老的地址
    //baseURL: "http://123.207.32.32:8000",
    // 新的地址
    baseURL: "http://152.136.185.210:7878/api/m5",
    timeout: 5000,
  });
  // 2.axios的拦截器
  // 2.1 请求拦截的作用
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {
      console.log(err);
    }
  );
  //2.2 响应拦截
  instance.interceptors.response.use(
    (res) => {
      return res.data;
    },
    (err) => {
      console.log(err);
    }
  );
  // 3.发送真正的网络请求   (返回的是promise)
  return instance(config);
}
