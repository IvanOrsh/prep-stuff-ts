import { binarySearch } from "./binary-search";

describe("binary", () => {
  describe("for value types", () => {
    describe("given an array of numbers and a number", () => {
      test.each([
        {
          arr: [0, 1, 2, 3, 4, 5, 6, 7],
          element: 3,
          expected: 3,
        },
        {
          arr: [-12, 0, 24, 25, 53, 75, 116, 723],
          element: 25,
          expected: 3,
        },
      ])("$element is in $arr: $expected", ({ arr, element, expected }) => {
        const actual = binarySearch(arr, element, (a, b) => a - b);

        expect(actual).toBe(expected);
      });
    });
  });

  describe("for compound types", () => {
    test("find index of a user in an array of Users, sorted by id", () => {
      const user = { id: 1, name: "Joe" };
      const users = [
        { id: 0, name: "Jane" },
        { id: 1, name: "Joe" },
        { id: 2, name: "John" },
        { id: 3, name: "David" },
      ];

      const expected = 1;

      const actual = binarySearch<{ id: number; name: string }>(
        users,
        user,
        (a, b) => a.id - b.id
      );

      expect(actual).toBe(expected);
    });
  });
});
