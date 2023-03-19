import { LinearSearch } from "./linear-search";

describe("linearSearch", () => {
  describe("for value types", () => {
    describe("find an index of an element in a given array, return -1 if element not found", () => {
      test.each([
        {
          arr: [1, 3, 4, 69, 71, 1010],
          element: 3,
          expected: 1,
        },
        {
          arr: [1010, 1, 3, 4, 69, 71],
          element: 5,
          expected: -1,
        },
        {
          arr: ["a", "c", "d", "f"],
          element: "c",
          expected: 1,
        },
      ])("$element is in $arr: $expected", ({ arr, element, expected }) => {
        const sut = new LinearSearch();

        const actual = sut.findIndex(arr, element);

        expect(actual).toBe(expected);
      });
    });
  });

  describe("for compound types", () => {
    test("find index of a user in an array of Users", () => {
      const user = { id: 1, name: "Joe" };
      const users = [
        { id: 0, name: "Jane" },
        { id: 1, name: "Joe" },
        { id: 2, name: "John" },
        { id: 3, name: "David" },
      ];
      const sut = new LinearSearch(
        (a: { id: number; name: string }, b: { id: number; name: string }) =>
          a.id === b.id
      );
      const expected = 1;

      const actual = sut.findIndex(users, user);

      expect(actual).toBe(expected);
    });
  });
});
