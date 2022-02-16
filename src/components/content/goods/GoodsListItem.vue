<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2021-08-08 23:06:54
 * @LastEditTime: 2021-08-09 00:31:26
 * @Email: str-liang@outlook.com
 * @FilePath: \supermall\src\components\content\goods\GoodsListItem.vue
 * @Environment: Win 10 Python 3.8
 * @Description: 
-->
<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.goods-item {
  position: relative;
  width: 48%;
  padding-bottom: 40px;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
  height: 100%;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
