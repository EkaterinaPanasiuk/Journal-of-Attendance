import validation from "./validation";
import required from "./required";
import minLength from "./minLength";
import maxLength from "./maxLength";
import patern from "./patern";

describe("validation", () => {
  test("should return null if value passes all validators", () => {
    const result = validation("Hello", [required(), minLength(3), maxLength(10)]);
    expect(result).toBeNull();
  });

  test("should return error message if value fails first validator", () => {
    const result = validation("", [required(), minLength(3), maxLength(10)]);
    expect(result).toBe("Обязательное поле");
  });

  test("should return error message if value fails second validator", () => {
    const result = validation("Hi", [required(), minLength(3), maxLength(10)]);
    expect(result).toBe("Неверное имя пользователя и/или пароль");
  });

  test("should return error message if value fails third validator", () => {
    const result = validation("Hello world", [required(), minLength(3), maxLength(10)]);
    expect(result).toBe("Неверное имя пользователя и/или пароль");
  });
  test("should return null if value passes regExp validators", () => {
    const result = validation("Hello", [patern(/^[A-Za-z]*$/)]);
    expect(result).toBeNull();
  });
  test("should return error message if value fails regExp validators", () => {
    const result = validation("1Hello!", [patern(/^[A-Za-z]*$/)]);
    expect(result).toBe("Данные некоректны");
  });
});
