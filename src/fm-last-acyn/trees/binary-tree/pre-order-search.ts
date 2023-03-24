import { BinaryNode } from "./binary-node";

function walk(curr: BinaryNode<number> | null, path: number[]): void {
  // base case
  if (!curr) {
    return;
  }

  // recursive step
  // - pre
  path.push(curr.value);

  // - recurse
  walk(curr.left, path);
  walk(curr.right, path);

  // - post
}

export function preOrderSearch(head: BinaryNode<number>): number[] {
  const path: number[] = [];
  walk(head, path);

  return path;
}
