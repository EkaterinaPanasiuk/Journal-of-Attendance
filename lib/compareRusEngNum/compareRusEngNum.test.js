import compareRusEngNum from "./index";

describe("compareRusEngNum", () => {
  test("should sort Russian characters before Latin characters", () => {
    expect(compareRusEngNum("абв", "abc")).toBe(-1);
    expect(compareRusEngNum("abc", "абв")).toBe(1);
  });

  test("should sort Latin characters before numbers", () => {
    expect(compareRusEngNum("abc", "123")).toBe(-1);
    expect(compareRusEngNum("123", "abc")).toBe(1);
  });

  test("should sort Russian characters according to the Russian locale", () => {
    expect(compareRusEngNum("абв", "яюэ")).toBe(-1);
    expect(compareRusEngNum("яюэ", "абв")).toBe(1);
  });

  test("should sort Latin characters according to the English locale", () => {
    expect(compareRusEngNum("abc", "xyz")).toBe(-1);
    expect(compareRusEngNum("xyz", "abc")).toBe(1);
  });

  test("should sort numbers according to their numerical value", () => {
    expect(compareRusEngNum("123", "456")).toBe(-333);
    expect(compareRusEngNum("456", "123")).toBe(333);
  });

  test("should return zero if the strings are equal", () => {
    expect(compareRusEngNum("abc", "abc")).toBe(0);
    expect(compareRusEngNum("абв", "абв")).toBe(0);
    expect(compareRusEngNum("123", "123")).toBe(0);
  });
});
