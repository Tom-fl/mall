<!--
 * @Author: your name
 * @Date: 2021-08-01 16:13:59
 * @LastEditTime: 2021-08-01 16:41:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\home\childComps\HomeSwiper.vue
-->
<template>
  <div>
    <Swiper>
      <SwiperItem v-for="item in banners_son">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";

export default {
  name: "HomeSwiper",
  props: {
    banners_son: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style></style>
