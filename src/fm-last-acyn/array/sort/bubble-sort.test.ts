import { bubbleSort } from "./bubble-sort";

// TODO: sloppy...
describe("bubbleSort", () => {
  test.each([
    {
      numbers: [-11, 12, -13, 14, 1, 0, 7, -23],
      expected: [-11, 12, -13, 14, 1, 0, 7, -23].sort((a, b) => a - b),
    },
  ])("$numbers, $expected", ({ numbers, expected }) => {
    bubbleSort(numbers);

    expect(numbers).toEqual(expected);
  });
});
