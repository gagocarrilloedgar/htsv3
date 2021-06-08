const { expect } = require("@jest/globals");

const { getFirstItem, getSecondItem } = require("../src/main");

describe("firstItem Tests", () => {
  test("first item should no be null", () => {
    const expected = getFirstItem();
    expect(expected).not.toBeNull();
  });

  test("Should return 9", () => {
    const expected = getFirstItem();
    const res = 9;
    expect(expected).toBe(res);
  });

  test("Should return a number", () => {
    const expected = getFirstItem();
    const res = "number";
    expect(typeof expected).toBe(res);
  });
});

describe("secondItem Tests", () => {
  test("first item should no be null", () => {
    const expected = getSecondItem();
    expect(expected).not.toBeNull();
  });

  test("Should return 129873", () => {
    const expected = getSecondItem();
    const res = "129873";
    expect(expected).toBe(res);
  });

  test("Should return a string", () => {
    const expected = getSecondItem();
    const res = "string";
    expect(typeof expected).toBe(res);
  });
});
