// TODO: do it

import { DoublyLinkedList } from "./doubly-linked-list";

describe("DoublyLinkedList", () => {
  describe("prepend", () => {
    test("prepend to an empty ll", () => {
      const sut = new DoublyLinkedList<number>();
      const item = 42;

      sut.prepend(item);

      expect(sut.length).toBe(1);
      expect(sut.getHead()).toBe(42);
    });

    test("prepending multiple times", () => {
      const sut = new DoublyLinkedList<number>();
      const itemOne = 1;
      const itemTwo = 42;
      const itemThree = 63;

      sut.prepend(itemOne);
      sut.prepend(itemTwo);
      sut.prepend(itemThree);

      expect(sut.length).toBe(3);
      expect(sut.getHead()).toBe(itemThree);
    });
  });

  describe("append", () => {
    test("append to an empty ll", () => {
      const sut = new DoublyLinkedList<number>();
      const item = 42;

      sut.append(item);

      expect(sut.length).toBe(1);
      expect(sut.getHead()).toBe(item);
    });

    test("appending multiple times", () => {
      const sut = new DoublyLinkedList<number>();
      const itemOne = 1;
      const itemTwo = 42;
      const itemThree = 63;

      sut.append(itemOne);
      sut.append(itemTwo);
      sut.append(itemThree);

      expect(sut.length).toBe(3);
      expect(sut.getHead()).toBe(itemOne);
    });
  });

  describe("insertAt", () => {
    let list: DoublyLinkedList<number>;

    beforeEach(() => {
      list = new DoublyLinkedList<number>();
      list.append(1);
      list.append(2);
      list.append(3);
    });

    test("throws an error if index is out of bounds", () => {
      expect(() => list.insertAt(4, 5)).toThrowError("Index out of bounds");
    });

    test("inserts an item at the beginning of the list", () => {
      list.insertAt(0, 0);
      expect(list.getHead()).toBe(0);
      expect(list.length).toBe(4);
    });

    test("inserts an item at the end of the list", () => {
      list.insertAt(4, 3);
      expect(list.getTail()).toBe(4);
      expect(list.length).toBe(4);
    });

    test("inserts an item at the middle of the list", () => {
      list.insertAt(5, 1);
      expect(list.get(0)).toBe(1);
      expect(list.get(1)).toBe(5);
      expect(list.get(2)).toBe(2);
      expect(list.get(3)).toBe(3);
      expect(list.length).toBe(4);
    });
  });

  describe("remove", () => {
    let list: DoublyLinkedList<number>;

    //TODO: test removing from empty ll / removing non-existing item

    beforeEach(() => {
      list = new DoublyLinkedList<number>();
      list.append(1);
      list.append(2);
      list.append(3);
    });

    test("remove head", () => {
      list.remove(1);
      expect(list.getHead()).toBe(2);
      expect(list.length).toBe(2);
    });

    test("remove tail", () => {
      list.remove(3);
      expect(list.getTail()).toBe(2);
      expect(list.length).toBe(2);
    });

    test("remove item somewhere in the middle", () => {
      list.remove(2);
      expect(list.length).toBe(2);
    });
  });

  describe("removeAt", () => {
    let list: DoublyLinkedList<number>;

    //TODO: test removing from empty ll / removing non-existing item

    beforeEach(() => {
      list = new DoublyLinkedList<number>();
      list.append(1);
      list.append(2);
      list.append(3);
    });

    test("remove at 0", () => {
      list.removeAt(0);
      expect(list.getHead()).toBe(2);
      expect(list.length).toBe(2);
    });

    test("remove tail", () => {
      list.removeAt(2);
      expect(list.getTail()).toBe(2);
      expect(list.length).toBe(2);
    });

    test("remove item somewhere in the middle", () => {
      const actual = list.removeAt(1);

      expect(actual).toBe(2);

      expect(list.length).toBe(2);
      expect(list.getHead()).toBe(1);
      expect(list.getTail()).toBe(3);
    });
  });
});
