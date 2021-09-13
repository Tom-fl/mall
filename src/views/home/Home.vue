<!--
 * @Author: your name
 * @Date: 2021-07-31 14:25:52
 * @LastEditTime: 2021-09-05 17:06:38
 * @LastEditors: Tom
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\home\Home.vue
-->
<template>
  <div id="home">
    <nav-bar class="home_nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content">
      <HomeSwiper :banners_son="banners" />
      <recommend-view :recommends_son="recommends" />
      <feature-view />
      <tab-control @tabClick="tabClick" class="tab_control" ref="tabControl1" :titles="['流行', '新款', '精选']" />
      <goods-list :goods="showGoods" />
    </scroll>
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper';
import RecommendView from './childComps/RecommendView';
import FeatureView from './childComps/FeatureView';

import NavBar from '@/components/common/navbar/NavBar';
import TabControl from '@/components/content/tabControl/TabControl.vue';
import Scroll from '@/components/common/scroll/Scroll.vue';
import GoodsList from '@/components/content/goods/GoodsList';

import { getHomeMultidata, getHomeGoods } from '@/network/home.js';

export default {
  name: 'Home',
  data() {
    return {
      currentIndex: '',
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: 'pop',
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    GoodsList,

    NavBar,
    TabControl,
    Scroll,
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();
    // 2.请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      // this.$refs.tabControl2.currentIndex = index;
    },
    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style scoped lang="less">
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
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
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 39px;
    left: 0;
    right: 0;
  }
}
// .content {
//   height: calc(100% - 93px);
//   overflow: hidden;
//   margin-top: 44px;
// }
</style>
