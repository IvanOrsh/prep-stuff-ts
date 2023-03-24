import { compareTwoBt } from "./compare-two-bt";
import { tree, tree2 } from "../some-trees";

test("Compare Binary Trees", function () {
  expect(compareTwoBt(tree, tree)).toEqual(true);
  expect(compareTwoBt(tree, tree2)).toEqual(false);
});
