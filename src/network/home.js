/*
 * @Author: your name
 * @Date: 2021-07-31 23:15:11
 * @LastEditTime: 2021-08-01 22:50:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\network\home.js
 */
import { request } from "./request";

export function getHomeMultidata() {
  return request({
    url: "/home/multidata",
  });
}

//接口已更新
export function getHomeGoods(type, page) {
  return request({
    url: "/home/data",
    params: {
      type,
      page,
    },
  });
}
