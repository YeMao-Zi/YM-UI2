import "vue-router";

// 扩展 meta.title
declare module "vue-router" {
  interface RouteMeta {
    title: string;
    icon?: string;
    iconFull?: string;
  }
}
