import { preOrderSearch } from "./pre-order-search";
import { tree } from "./some-trees";

test("Pre order", function () {
  expect(preOrderSearch(tree)).toEqual([20, 10, 5, 7, 15, 50, 30, 29, 45, 100]);
});
