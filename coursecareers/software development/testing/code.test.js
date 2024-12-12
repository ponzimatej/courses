const code = require("./code");

describe("Test add function", () => {
  test("1 + 2 = 3", () => {
    const result = code.add(1, 2);
    expect(result).toEqual(3); //.toEqual and so on
  });
});

describe("Test removeEven function", () => {
  beforeAll(() => {
    console.log("before");
  });

  test("filters out even numbers", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    const result = code.removeEven(numbers);
    expect(result).toEqual([1, 3, 5, 7]);
  });

  test("returns empty array when all numbers are even", () => {
    const numbers = [2, 4, 6, 8, 10, 0];
    const result = code.removeEven(numbers);
    expect(result).toEqual([]);
  });

  test("handles an empty array", () => {
    const numbers = [];
    const result = code.removeEven(numbers);
    expect(result).toEqual([]);
  });
});
