import { tree } from "../binary-tree/some-trees";
import { dfsOnBt as dfs } from "./dfs-bst";

test("DFS on BST", function () {
  expect(dfs(tree, 45)).toEqual(true);
  expect(dfs(tree, 7)).toEqual(true);
  expect(dfs(tree, 69)).toEqual(false);
});
