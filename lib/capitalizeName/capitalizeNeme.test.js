import { capitalizeName } from ".";

describe("capitalize Name", () => {
  test("capitalize empty string", () => {
    const result = capitalizeName("");
    expect(result).toEqual(undefined);
  });
  test("capitalize lower case string", () => {
    const result = capitalizeName("ирина.петрова");
    expect(result).toEqual("Ирина.Петрова");
  });
  test("capitalize upper case string with spaces", () => {
    const result = capitalizeName("  ИРИНА.ПЕТРОВА  ");
    expect(result).toEqual("  Ирина.Петрова  ");
  });
  test("capitalize lower case string with dash", () => {
    const result = capitalizeName("ирина-кристина.петрова-иванова");
    expect(result).toEqual("Ирина-Кристина.Петрова-Иванова");
  });
  test("capitalize bundle string", () => {
    const result = capitalizeName("  иРиНА-крИСТина.ПЕтрова-ивАНова  ");
    expect(result).toEqual("  Ирина-Кристина.Петрова-Иванова  ");
  });
});
