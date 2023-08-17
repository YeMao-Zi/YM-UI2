import type { RouteRecordRaw } from "vue-router";

const componentsRouter: RouteRecordRaw[] = [
  {
    path: "/myTree",
    name: "myTree",
    component: () => import("@/pages/myTree/index.vue"),
    meta: {
      title: "树组件",
    },
  },
];

export default componentsRouter;
