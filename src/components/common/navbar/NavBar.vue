<!--
 * @Author: your name
 * @Date: 2021-07-31 22:08:45
 * @LastEditTime: 2021-07-31 22:56:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\components\common\navbar\NavBar.vue
-->
<template>
  <div class="nav_bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped lang="less">
.nav_bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  .left,
  .right {
    width: 60px;
  }
  .center {
    flex: 1;
  }
}
</style>
