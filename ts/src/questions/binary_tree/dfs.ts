/*
 *
 * Given a binary tree. Do a depth first search to locate
 * if a given node exists. The tree will be using numbers,
 * and it will be decently balanced
 *
 */
interface BNode {
  val: number;
  left?: BNode;
  right?: BNode;
}

export function dfs(node: BNode, target: number): boolean {
  return false;
}
