// 条件检索对应节点及其子节点
export const getItemInTree = (fn: (node: any) => boolean, tree: any[]): any => {
    let res = null;
    for (let node of tree) {
      fn(node) ? (res = node) : '';
      if (res) break;
      if (node.children && node.children.length) {
        res = getItemInTree(fn, node.children);
      }
    }
    return res;
  };
  
  export const addKey = (arr: any[], fn: (node: any) => any): any[] =>
    arr.map((item) => {
      return {
        ...item,
        ...fn(item),
        children: item.children ? addKey(item.children, fn) : [], // 这里要判断原数据有没有子级如果没有判断会报错
      };
    });
  