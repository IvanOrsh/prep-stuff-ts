import { bfs } from "./bt-bfs";
import { tree } from "./some-trees";

test("bt bfs", function () {
  expect(bfs(tree, 45)).toEqual(true);
  expect(bfs(tree, 7)).toEqual(true);
  expect(bfs(tree, 69)).toEqual(false);
});
