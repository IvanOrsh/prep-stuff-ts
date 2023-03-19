import { Queue } from "./queue";

describe("queue", () => {
  describe("enqueue", () => {
    test("enqueue one item", () => {
      const sut = new Queue<number>();
      const item = 5;
      const expected = 5;

      sut.enqueue(item);

      expect(sut.length).toEqual(1);
      expect(sut.peek()).toEqual(expected);
    });

    test("enqueue multiple items", () => {
      const sut = new Queue<number>();

      sut.enqueue(5);
      sut.enqueue(7);
      sut.enqueue(9);
      sut.enqueue(11);

      expect(sut.length).toEqual(4);
      expect(sut.peek()).toEqual(5);
    });
  });

  describe("dequeue", () => {
    test("dequeue from empty queue should return undefined", () => {
      const sut = new Queue<number>();

      const actual = sut.dequeue();

      expect(actual).toBeUndefined();
    });

    test.each([
      {
        items: [11, 23, 10, 42, 277],
      },
    ])("enqueuing: $items, dequeuing: $expected", ({ items }) => {
      const sut = new Queue<number>();

      for (const item of items) {
        sut.enqueue(item);
      }

      for (const expectation of items) {
        const actual = sut.dequeue();
        expect(actual).toEqual(expectation);
      }

      expect(sut.length).toBe(0);
    });
  });
});
