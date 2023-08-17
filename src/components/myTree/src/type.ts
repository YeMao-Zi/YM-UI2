import type { InjectionKey, ComputedRef } from "vue";

export interface treeItemType {
  expand: boolean;
  text: string;
  id: any;
  clicked?: boolean;
  children?: treeItemType[];
  [k: string]: any;
}
export const treeProvide = Symbol() as InjectionKey<{
  treeData: ComputedRef<treeItemType[]>;
  changeExpand: (item: treeItemType) => void;
  itemClick: (item: treeItemType) => void;
}>;
