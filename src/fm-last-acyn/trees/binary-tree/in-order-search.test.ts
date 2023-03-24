import { inOrderSearch } from "./in-order-search";
import { tree } from "./some-trees";

test("In order", function () {
  expect(inOrderSearch(tree)).toEqual([5, 7, 10, 15, 20, 29, 30, 45, 50, 100]);
});
