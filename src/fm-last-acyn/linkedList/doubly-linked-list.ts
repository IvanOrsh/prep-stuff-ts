// TODO: implement the rest of the interface!
import { LinkedList } from "./linkedlist-interface";

type Node<T> = {
  value: T;
  prev?: Node<T>;
  next?: Node<T>;
};

export class DoublyLinkedList<T> implements LinkedList<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  private debug() {
    let curr = this.head;
    let out = "";
    for (let i = 0; curr && i < this.length; ++i) {
      out += `${i} -> ${curr.value}, `;
      curr = curr.next;
    }
    console.log(out);
  }

  getHead() {
    if (!this.head) {
      return undefined;
    }
    return this.head.value;
  }

  getTail() {
    if (!this.tail) {
      return undefined;
    }
    return this.tail.value;
  }

  prepend(item: T): void {
    const node = { value: item } as Node<T>;
    this.length++;
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  append(item: T): void {
    const node = { value: item } as Node<T>;
    this.length++;

    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }

    node.prev = this.tail;
    this.tail.next = node;

    this.tail = node;
  }

  get(index: number): T | undefined {
    const node = this.getAt(index);

    return node?.value;
  }

  insertAt(item: T, index: number): void {
    if (index < 0 || index > this.length) {
      throw new Error("Index out of bounds");
    } else if (index === this.length) {
      this.append(item);
      return;
    } else if (index === 0) {
      this.prepend(item);
      return;
    }

    this.length++;

    const curr = this.getAt(index) as Node<T>;

    const node = { value: item } as Node<T>;

    node.next = curr;
    node.prev = curr.prev;
    curr.prev!.next = node;
    curr.prev = node;
    // if (node.prev) {
    //   node.prev.next = curr;
    // }
  }

  remove(item: T): T | undefined {
    let curr = this.head;
    for (let i = 0; curr && i < this.length; i++) {
      if (curr.value === item) {
        break;
      }
      curr = curr.next as Node<T>;
    }

    if (!curr) {
      return undefined;
    }

    return this.removeNode(curr);
  }

  removeAt(index: number): T | undefined {
    const node = this.getAt(index);
    if (!node) {
      return undefined;
    }

    return this.removeNode(node);
  }

  private removeNode(node: Node<T>): T | undefined {
    // point over, point through:
    // bookkeeping
    this.length--;

    if (this.length === 0) {
      const out = this.head?.value;
      this.head = this.tail = undefined;
      return out;
    }

    // hop over
    if (node.prev) {
      node.prev.next = node.next;
    }

    // point through
    if (node.next) {
      node.next.prev = node.prev;
    }

    if (node === this.head) {
      this.head = node.next;
    }

    if (node === this.tail) {
      this.tail = node.prev;
    }

    node.prev = node.next = undefined;
    return node.value;
  }

  private getAt(index: number): Node<T> | undefined {
    if (index < 0 || index > this.length) {
      throw new Error("Index out of bounds");
    }

    let curr = this.head;
    for (let i = 0; curr && i < index; ++i) {
      curr = curr.next;
    }

    return curr;
  }
}
