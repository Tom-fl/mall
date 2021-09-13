<!--
 * @Author: your name
 * @Date: 2021-08-01 18:32:15
 * @LastEditTime: 2021-09-05 16:05:05
 * @LastEditors: Tom
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\components\content\tabControl\TabControl.vue
-->
<template>
  <div class="tab_control">
    <div v-for="(item, index) in titles" class="tab_control_item" :class="{ active: index === currentIndex }" @click="itemClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index);
    },
  },
};
</script>

<style lang="less" scope>
.tab_control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  .tab_control_item {
    flex: 1;
    span {
      padding: 5px;
    }
  }
  .active {
    color: var(--color-high-text);
    span {
      border-bottom: 3px solid var(--color-high-text);
    }
  }
}
</style>
