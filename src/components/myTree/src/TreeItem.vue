<template>
  <li class="tree-item">
    <div
      :class="{
        clicked: treeItemData.clicked,
      }"
      class="tree-content"
      @click="_clickEvent"
    >
      <div
        v-if="treeItemData.children && treeItemData.children.length > 0"
        :class="{
          expand: treeItemData.expand,
        }"
        class="material-icons expand-arrow"
        @click.stop="expandTree"
      >
        arrow_right
      </div>
      <div
        :class="{ noChildrenIcon: !treeItemData.children || treeItemData.children.length == 0 }"
        class="tree-label"
      >
        {{ treeItemData.text }}
      </div>
    </div>
    <ul
      :class="{
        expand: treeItemData.expand,
      }"
      class="sub-tree"
      v-if="treeItemData.children && treeItemData.children.length > 0"
    >
      <!--TreeItem组件中调用TreeItem组件-->
      <TreeItem
        v-for="item in treeItemData.children"
        :tree-item-data="item"
        :key="uuid()"
      ></TreeItem>
    </ul>
  </li>
</template>
<script lang="ts" setup>
import { inject } from "vue";
import { treeProvide, treeItemType } from "./type";
const props = withDefaults(
  defineProps<{
    treeItemData: treeItemType;
  }>(),
  {}
);

const injectTree = inject(treeProvide);
const expandTree = () => {
  injectTree?.changeExpand(props.treeItemData);
};
// 创建一个唯一id
const uuid = () => {
  let str = Math.random().toString(32);
  str = str.substring(2);
  return str;
};
// 节点点击事件
const _clickEvent = () => {
  // 如果有传递事件函数，则调用事件函数并传递当前节点数据及组件
  injectTree?.itemClick(props.treeItemData);
};
</script>

<style lang="less" scoped>
.tree-item {
  cursor: pointer;
  overflow: hidden;
  .tree-content {
    display: flex;
    align-items: center;
    transition: all 0.3s;
  }
  .expand-arrow {
    transition: all 0.2s;
  }
  .expand.expand-arrow {
    transform: rotate(90deg);
  }
  .noChildrenIcon {
    margin-left: 24px;
  }
  .clicked.tree-content {
    background-color: #f5f7fa;
  }
  .tree-label {
    height: 28px;
    line-height: 28px;
    font-size: 14px;
    word-break: keep-all;
  }
  .sub-tree {
    max-height: 0;
    padding: 0 0 0 20px;
    transition: all 0.2s;
  }
  .expand.sub-tree {
    max-height: 1500px;
  }
}
</style>
