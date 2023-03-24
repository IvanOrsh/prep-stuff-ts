import { BST } from "./bst";

describe("BST", () => {
  test("insert and search", () => {
    const bst = new BST();
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(1);
    bst.insert(9);
    bst.insert(6);

    expect(bst.search(5)).toBe(true);
    expect(bst.search(3)).toBe(true);
    expect(bst.search(7)).toBe(true);
    expect(bst.search(1)).toBe(true);
    expect(bst.search(9)).toBe(true);
    expect(bst.search(6)).toBe(true);
    expect(bst.search(2)).toBe(false);
    expect(bst.search(8)).toBe(false);
  });
});
