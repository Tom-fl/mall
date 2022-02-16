<!--
 * @Author: your name
 * @Date: 2021-07-31 14:25:52
 * @LastEditTime: 2021-08-09 00:44:13
 * @LastEditors: Tom
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\home\Home.vue
-->
<template>
  <div id="home">
    <nav-bar class="home_nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <HomeSwiper :banners_son="banners" />
    <HomeRecommendView :recommends_son="recommends" />
    <HomeFeatureView />
    <TabControl
      class="tab_control"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
    />
    <goods-list :goods="showGodds"></goods-list>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import HomeFeatureView from "./childComps/HomeFeatureView";

import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";

import { getHomeMultidata, getHomeGoods } from "@/network/home.js";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
    };
  },
  components: {
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,

    NavBar,
    TabControl,
    GoodsList,
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();
    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  computed: {
    showGodds() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    // 事件监听相关的方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    // 网络请求相关的
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        console.log(this.goods[type].list);
      });
    },
  },
};
</script>

<style scoped lang="less">
#home {
  padding-top: 44px;
  .home_nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab_control {
    position: sticky;
    top: 43px;
    z-index: 9;
  }
}
</style>
