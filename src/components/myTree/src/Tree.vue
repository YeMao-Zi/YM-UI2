<template>
  <div class="my-tree">
    <TreeItem
      v-for="(item, index) in _treeData"
      :key="index"
      :treeItemData="item"
      :tree-click-event="treeClickEvent"
    ></TreeItem>
  </div>
</template>

<script lang="ts" setup>
import { ref, provide, computed } from "vue";
import TreeItem from "./TreeItem.vue";
import { treeProvide, treeItemType } from "./type";
import { addKey } from "@/utils";

const props = withDefaults(
  defineProps<{
    treeData: {
      id: any;
      expand: boolean;
      text: string;
      clicked?: boolean;
      children?: any[];
      [k: string]: any;
    }[];
    treeClickEvent?: (treeItem: any, treeData: any) => void;
  }>(),
  {}
);

const _treeData = ref(props.treeData || []);

const changeExpand = (node: treeItemType) => {
  _treeData.value = addKey(_treeData.value, (item) => {
    if (item.id === node.id) {
      return {
        expand: !node.expand,
      };
    }
    return {};
  });
};

const itemClick = (node: treeItemType) => {
  node.clicked = true;
  _treeData.value = addKey(_treeData.value, (item) => {
    if (item.id === node.id) {
      return {
        clicked: true,
      };
    }
    return { clicked: false };
  });
  props.treeClickEvent && props.treeClickEvent(node, _treeData.value);
};

provide(treeProvide, {
  treeData: computed(() => _treeData.value),
  changeExpand,
  itemClick,
});
</script>

<style lang="less"></style>
.