<!--
 * @Author: your name
 * @Date: 2021-08-01 16:42:11
 * @LastEditTime: 2021-08-01 16:53:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\home\childComps\HomeRecommendView.vue
-->
<template>
  <div class="recommends">
    <div v-for="item in recommends_son" class="recommends_item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommends_son: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped lang="less">
.recommends {
  display: flex;
  width: 100%;
  text-align: center;
  font-style: 12px;

  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
  .recommends_item {
    flex: 1;
    img {
      width: 70px;
      height: 70px;
      margin-bottom: 10px;
    }
  }
}
</style>
