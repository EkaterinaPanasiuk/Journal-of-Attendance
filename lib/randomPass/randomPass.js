import { randomIntager } from "../randomIntager/randomIntager";

export function randomPass() {
  const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?@#$%^&*()[]{}<>,._'-+=|/";
  const length = randomIntager(8, 15);
  let password = "";
  let hasCapital = false;
  let hasNumber = false;
  for (let i = 0; i < length; i += 1) {
    const index = randomIntager(0, CHARS.length - 1);
    const char = CHARS[index];
    password += char;
    if (char >= "A" && char <= "Z") {
      hasCapital = true;
    }
    if (char >= "0" && char <= "9") {
      hasNumber = true;
    }
  }
  if (!hasCapital || !hasNumber) {
    password = randomPass();
  }
  return password;
}
