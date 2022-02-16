<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2021-08-08 23:05:13
 * @LastEditTime: 2021-08-09 00:11:58
 * @Email: str-liang@outlook.com
 * @FilePath: \supermall\src\components\content\goods\GoodsList.vue
 * @Environment: Win 10 Python 3.8
 * @Description: 
-->
<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goods-item="item" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  mounted() {},
};
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 50px;
}
</style>
