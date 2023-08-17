<template>
  <div>
    <myTree :tree-data="treeData"/>
  </div>
</template>

<script setup lang="ts">
import myTree from "@/components/myTree";

const treeData = [
  {
    text: '一级', // 显示的文字
    id:'1',
    expand: true, // 默认是否展开
    children: [
      // 子节点
      {
        text: '一级-1',
        expand: false,
        id:'1-1',
      },
      {
        text: '一级-2',
        expand: true,
        id:'1-2',
        children: [
          {
            text: '一级-2-1',
            expand: false,
            id:'1-2-1',
          },
          {
            text: '一级-2-2',
            expand: false,
            id:'1-2-2',
          },
        ],
      },
    ],
  },
];
</script>

<style></style>
