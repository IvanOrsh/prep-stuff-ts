// elem3
// elem2
// elem1

type Node<T> = { value: T; prev?: Node<T> };

export class Stack<T> {
  private _length: number;
  private head?: Node<T>;

  constructor() {
    this.head = undefined;
    this._length = 0;
  }

  get length() {
    return this._length;
  }

  push(item: T): void {
    this._length++;
    const node = { value: item } as Node<T>;
    if (!this.head) {
      this.head = node;
      return;
    }

    node.prev = this.head;
    this.head = node;
  }

  pop(): T | undefined {
    this._length = Math.max(0, this.length - 1);

    if (!this.head) {
      return undefined;
    }

    const popped = this.head;
    this.head = popped.prev;

    // free
    popped.prev = undefined;

    return popped.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
