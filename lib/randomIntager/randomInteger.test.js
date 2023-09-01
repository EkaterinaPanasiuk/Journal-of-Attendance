import { randomIntager } from "./randomIntager";

window.crypto = {
  getRandomValues: jest.fn((buffer) => {
    for (let i = 0; i < buffer.length; i += 1) {
      // eslint-disable-next-line
      buffer[i] = Math.floor(Math.random() * 256);
    }
    return buffer;
  }),
};

describe("randomInteger", () => {
  test("should return an integer between min and max", () => {
    const min = 1;
    const max = 10;
    const result = randomIntager(min, max);
    expect(Number.isInteger(result)).toBe(true);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  test("should return min if min equals max", () => {
    const min = 5;
    const max = 5;
    const result = randomIntager(min, max);
    expect(result).toBe(min);
  });

  test("should throw an error if min is greater than max", () => {
    const min = 10;
    const max = 1;
    expect(() => randomIntager(min, max)).toThrow(Error);
  });

  test("should throw an error if min or max is not an integer", () => {
    const min = 1.5;
    const max = 10;
    expect(() => randomIntager(min, max)).toThrow(Error);
  });
});
