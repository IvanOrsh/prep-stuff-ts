class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export class BST {
  root: TreeNode | null;
  constructor() {
    this.root = null;
  }

  insert(val: number): void {
    const node = new TreeNode(val);
    if (!this.root) {
      this.root = node;
    } else {
      let curr = this.root;
      // eslint-disable-next-line no-constant-condition
      while (true) {
        if (val < curr.val) {
          if (!curr.left) {
            curr.left = node;
            break;
          }
          curr = curr.left;
        } else {
          if (!curr.right) {
            curr.right = node;
            break;
          }
          curr = curr.right;
        }
      }
    }
  }

  search(val: number): boolean {
    let curr = this.root;
    while (curr) {
      if (val === curr.val) {
        return true;
      } else if (val < curr.val) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return false;
  }
}
