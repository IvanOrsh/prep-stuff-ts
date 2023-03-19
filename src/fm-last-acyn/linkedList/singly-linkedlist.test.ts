import { SinglyLinkedList } from "./singly-linkedlist";

function createSinglyLinkedList<T>(): SinglyLinkedList<T> {
  return new SinglyLinkedList<T>();
}

function createSinglyLinkedListOfSize(size: number): SinglyLinkedList<number> {
  const ll = new SinglyLinkedList<number>();

  for (let i = 0; i < size; i++) {
    ll.append(i);
  }

  return ll;
}

describe("SinglyLinkedList", () => {
  describe("append", () => {
    test("to an empty linked list", () => {
      const item = 2;
      const sut = createSinglyLinkedList();

      sut.append(item);

      expect(sut.length).toBe(1);
      expect(sut.head!.data).toBe(2);
      expect(sut.tail!.data).toBe(2);
      expect(sut.head!.next).toBeNull();
      expect(sut.tail!.next).toBeNull();
    });

    test("append to a non-empty linked list", () => {
      const itemOne = 2;
      const itemTwo = 7;
      const sut = createSinglyLinkedList();

      sut.append(itemOne);
      sut.append(itemTwo);

      expect(sut.length).toBe(2);
      expect(sut.head?.data).toBe(2);
      expect(sut.head?.next).not.toBeNull();
      expect(sut.tail?.data).toBe(7);
    });
  });

  describe("prepend", () => {
    test("to an empty linked list", () => {
      const item = 2;
      const sut = createSinglyLinkedList();

      sut.prepend(item);

      expect(sut.length).toBe(1);
      expect(sut.head!.data).toBe(2);
      expect(sut.tail!.data).toBe(2);
      expect(sut.head!.next).toBeNull();
      expect(sut.tail!.next).toBeNull();
    });

    test("append to a non-empty linked list", () => {
      const itemOne = 2;
      const itemTwo = 7;
      const sut = createSinglyLinkedList();

      sut.prepend(itemOne);
      sut.prepend(itemTwo);

      expect(sut.length).toBe(2);

      expect(sut.head?.data).toBe(7);
      expect(sut.head?.next).not.toBeNull();
      expect(sut.tail?.data).toBe(2);
    });
  });

  describe("get", () => {
    test.each([
      {
        listSize: 3,
        index: -2,
        expected: undefined,
      },
      {
        listSize: 4,
        index: 5,
        expected: undefined,
      },
      {
        listSize: 25,
        index: 15,
        expected: 15,
      },
    ])(
      "index to get: $index, size: $listSize, expected: $expected",
      ({ listSize, index, expected }) => {
        const ll = createSinglyLinkedListOfSize(listSize);

        expect(ll.get(index)).toBe(expected);
      }
    );
  });

  describe("insertAt", () => {
    test("index 0 (prepend)", () => {
      const item = 42;
      const index = 0;
      const sut = createSinglyLinkedListOfSize(10);
      const expected = 42;

      sut.insertAt(item, index);

      expect(sut.head!.data).toBe(expected);
      expect(sut.length).toBe(11);
    });

    test("index = LinkedList's size (append)", () => {
      const item = 42;
      const index = 10;
      const sut = createSinglyLinkedListOfSize(10);
      const expected = 42;

      sut.insertAt(item, index);

      expect(sut.tail!.data).toBe(expected);
      expect(sut.length).toBe(11);
    });

    test("somewhere in between", () => {
      const item = 42;
      const index = 5;
      const sut = createSinglyLinkedListOfSize(10);
      const expected = 42;

      sut.insertAt(item, index);

      expect(sut.get(index)).toBe(expected);
      expect(sut.length).toBe(11);
    });
  });

  // TODO: test remove, removeAt
});
