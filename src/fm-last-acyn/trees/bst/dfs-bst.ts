import { BinaryNode } from "../binary-tree/binary-node";

function search(curr: BinaryNode<number> | null, needle: number): boolean {
  if (!curr) {
    return false;
  }

  if (curr.value === needle) {
    return true;
  }

  // go right
  if (curr.value < needle) {
    return search(curr.right, needle);
  }

  return search(curr.left, needle);
}

export function dfsOnBt(head: BinaryNode<number>, needle: number): boolean {
  return search(head, needle);
}
