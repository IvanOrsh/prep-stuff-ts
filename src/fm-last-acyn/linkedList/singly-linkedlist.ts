import { Node } from "./node";
import { LinkedList } from "./linkedlist-interface";

export class SinglyLinkedList<T> implements LinkedList<T>, Iterable<T> {
  public head: Node<T> | null = null;
  public tail: Node<T> | null = null;
  private size = 0;

  get length(): number {
    return this.size;
  }

  append(item: T): void {
    const newNode = new Node<T>(item);

    // no tail === no head!
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  prepend(item: T): void {
    const newNode = new Node<T>(item);
    // our new head:
    newNode.next = this.head;
    this.head = newNode;

    // empty linked list
    if (!this.tail) {
      this.tail = newNode;
    }
    this.size++;
  }

  private getNode(index: number): Node<T> | undefined {
    if (index < 0 || index >= this.size) {
      return undefined;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current!.next;
    }
    return current!;
  }

  get(index: number): T | undefined {
    const node = this.getNode(index);

    if (!node) return undefined;
    return node!.data;
  }

  insertAt(item: T, index: number): void {
    if (index < 0 || index > this.size) {
      throw new Error("Index out of bounds");
    }

    const newNode = new Node(item);

    // prepend
    if (index === 0) this.prepend(item);
    // append
    else if (index === this.size) this.append(item);
    else {
      const prev = this.getNode(index - 1);
      newNode.next = prev!.next;
      prev!.next = newNode;
      this.size++;
    }
  }

  remove(item: T): T | undefined {
    // nothing to remove from empty ll
    if (!this.tail) return undefined;

    // mb it's our head? (we certainly have a head!)
    if (this.head!.data === item) {
      const removedNode = this.head;
      this.head = this.head!.next;
      if (!this.head) {
        this.tail = null;
      }
      this.size--;
      return removedNode!.data;
    }

    let previous = this.head;
    let current = previous!.next;
    while (current !== null) {
      if (current.data === item) {
        previous!.next = current.next;
        if (!previous!.next) {
          this.tail = previous;
        }
        this.size--;
        return current.data;
      }
      previous = current;
      current = current.next;
    }
    return undefined;
  }

  removeAt(index: number): T | undefined {
    throw new Error("Method not implemented.");
  }

  *[Symbol.iterator](): Iterator<T> {
    let current = this.head;
    while (current !== null) {
      yield current.data;
      current = current.next;
    }
  }
}
