// Comparing two binary trees to see if they are equal in both shape and structure

import { BinaryNode } from "../binary-node";

/*
    5           5              5
   /  \        / \            /
  3    0x45   3   0x45       3
                            /
                          0x45
*/

// bfs - doesn't preserve the shape
// dfs - DOES preserve the shape!

export function compareTwoBt(
  a: BinaryNode<number> | null,
  b: BinaryNode<number> | null
): boolean {
  // base cases:

  // structural check
  if (a === null && b === null) {
    return true;
  }

  // structural check
  if (a === null || b === null) {
    return false;
  }

  // value checks
  if (a.value !== b.value) {
    return false;
  }

  return compareTwoBt(a.left, b.left) && compareTwoBt(a.right, b.right);
}
