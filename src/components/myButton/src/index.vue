<template>
  <button :class="['myButton', type]">
    <div v-if="loading" class="loading">
      <Icon icon="eos-icons:bubble-loading" />
    </div>
    <div class="icon" v-if="icon">
      <Icon :icon="icon" />
    </div>
    <span><slot></slot></span>
  </button>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { myButtonProps, sizeEnum } from "./type";
const props = withDefaults(defineProps<myButtonProps>(), {
  type: "",
  icon: "",
  loading: false,
  size: "",
});
</script>

<style lang="less" scoped>
.myButton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  box-sizing: border-box;
  padding: 12px 16px;
  background-color: rgba(0, 0, 0, 0.1);
  color: #222;
  border: none;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s;
  font-size: 14px;
}

.myButton:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
.myButton:active {
  background-color: rgba(0, 0, 0, 0.3);
}

.primary {
  background-color: var(--colorPrimary);
  color: #fff;
}
.primary:hover {
  background-color: #0854ac;
}
.primary:active {
  background-color: #033d7f;
}

// success样式
.success {
  background-color: #19be6b;
  color: #fff;
}
.success:hover {
  background-color: #0ea459;
}
.success:active {
  background-color: #008140;
}

// warning样式
.warning {
  background-color: #ffc163;
  color: #fff;
}
.warning:hover {
  background-color: #db952d;
}
.warning:active {
  background-color: #b97b1d;
}

// error样式
.error {
  background-color: #ff5252;
  color: #fff;
}
.error:hover {
  background-color: #fd3030;
}
.error:active {
  background-color: #d50000;
}

// text样式
.text {
  background-color: unset;
  color: #409eff;
  padding: 2px 4px;
}
.text:hover {
  background-color: unset;
  opacity: 0.9;
}
.text:active {
  background-color: unset;
  opacity: 1;
  color: #1a7ada;
}

// dangerText样式
.dangerText {
  background-color: unset;
  color: #ff5252;
  padding: 2px 4px;
}
.dangerText:hover {
  background-color: unset;
  opacity: 0.9;
}
.dangerText:active {
  background-color: unset;
  opacity: 1;
  color: #d50000;
}

// 加载按钮样式
.loadingBtn {
  opacity: 0.6;
  pointer-events: none; // 值为none就没有hover和active效果了
}

// disabled样式（注意样式的顺序）
.disabledBtn {
  background-color: rgba(0, 0, 0, 0.12);
  color: #bbb;
}
.disabledBtn:hover {
  opacity: 1;
  cursor: not-allowed;
  background-color: rgba(0, 0, 0, 0.12);
}
.disabledBtn:active {
  color: #bbb;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.12);
}
</style>
