<template>
  <button :class="['myButton', type, link ? 'link' : '', text ? 'text' : '']">
    <div v-if="loading" class="loading" style="">
      <Icon icon="eos-icons:bubble-loading" />
    </div>
    <div class="icon" v-if="icon && !loading">
      <Icon :icon="icon" />
    </div>
    <span class="content"><slot></slot></span>
  </button>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { myButtonProps, sizeEnum } from "./type";
const props = withDefaults(defineProps<myButtonProps>(), {
  type: "info",
  icon: "",
  loading: false,
  size: "default",
  link: false,
  text: false,
});
</script>

<style lang="less" scoped>
.myButton {
  // width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  box-sizing: border-box;
  padding: 8px 12px;
  background-color: rgba(0, 0, 0, 0.1);
  color: #222;
  border: none;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s;
  font-size: 14px;
  gap: 6px;

  &.link {
    padding: 0;

    &.warning {
      color: var(--colorWarning);
      background-color: transparent;
      &:hover {
        color: var(--colorWarningTextHover);
      }
    }
    &.primary {
      color: var(--colorPrimary);
      background-color: transparent;
      &:hover {
        color: var(--colorPrimaryTextHover);
      }
    }
    &.success {
      color: var(--colorSuccessText);
      background-color: transparent;
      &:hover {
        color: var(--colorSuccessTextHover);
      }
    }
    &.error {
      color: var(--colorError);
      background-color: transparent;
      &:hover {
        color: var(--colorErrorTextHover);
      }
    }
    &.danger {
      color: var(--colorDangerText);
      background-color: transparent;
      &:hover {
        color: var(--colorDangerTextHover);
      }
    }
  }

  &.text {
    background-color: unset;
    &.warning {
      color: var(--colorWarning);
    }
    &.primary {
      color: var(--colorPrimary);
    }
    &.success {
      color: var(--colorSuccess);
    }
    &.error {
      color: var(--colorError);
    }
    &.danger {
      color: var(--colorDanger);
    }
  }
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
  background-color: var(--colorPrimaryHover);
}
.primary:active {
  background-color: var(--colorPrimaryActive);
}

// success样式
.success {
  background-color: var(--colorSuccess);
  color: #fff;
}
.success:hover {
  background-color: var(--colorSuccessHover);
}
.success:active {
  background-color: var(--colorSuccessActive);
}

// warning样式
.warning {
  background-color: var(--colorWarning);
  color: #fff;
}
.warning:hover {
  background-color: var(--colorWarningHover);
}
.warning:active {
  background-color: var(--colorWarningActive);
}

// error样式
.error {
  background-color: var(--colorError);
  color: #fff;
}
.error:hover {
  background-color: var(--colorErrorHover);
}
.error:active {
  background-color: var(--colorErrorActive);
}

// error样式
.danger {
  background-color: var(--colorDanger);
  color: #fff;
}
.danger:hover {
  background-color: var(--colorDangerHover);
}
.danger:active {
  background-color: var(--colorDangerActive);
}

// text样式

.text:hover {
  background-color: var(--colorBgGray);
  opacity: 0.9;
}
.text:active {
  background-color: var(--colorBgGray);
  opacity: 1;
  color: var(--colorPrimaryTextActive);
}

// 加载按钮样式
.loading {
  opacity: 0.6;
  pointer-events: none; // 值为none就没有hover和active效果了
}
.content {
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

// 附上按钮组样式
.myButtonGroup > .myButton {
  border-radius: unset !important;
  border-right: 1px solid #fff;
}
.myButtonGroup > .myButton:first-of-type {
  border-top-left-radius: 5px !important;
  border-bottom-left-radius: 5px !important;
}
.myButtonGroup > .myButton:last-of-type {
  border-top-right-radius: 5px !important;
  border-bottom-right-radius: 5px !important;
  border-right: none;
}
</style>
