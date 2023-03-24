import { BinaryNode } from "./binary-node";

function walk(curr: BinaryNode<number> | null, path: number[]): void {
  // base case
  if (!curr) {
    return;
  }

  // recursive step
  // - pre

  // - recurse
  walk(curr.left, path);
  path.push(curr.value);
  walk(curr.right, path);

  // - post
}

export function inOrderSearch(head: BinaryNode<number>): number[] {
  const path: number[] = [];
  walk(head, path);

  return path;
}
