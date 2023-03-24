import { postOrderSearch } from "./post-order-search";
import { tree } from "./some-trees";

test("post order", function () {
  expect(postOrderSearch(tree)).toEqual([
    7, 5, 15, 10, 29, 45, 30, 100, 50, 20,
  ]);
});
