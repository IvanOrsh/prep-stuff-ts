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
  walk(curr.right, path);

  // - post
  path.push(curr.value);
}

export function postOrderSearch(head: BinaryNode<number>): number[] {
  const path: number[] = [];
  walk(head, path);

  return path;
}
