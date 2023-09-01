export default function compareRusEngNum(a, b) {
  const firstCharA = a[0];
  const firstCharB = b[0];

  const isRussianA = /^[а-яА-Я]+$/.test(firstCharA);
  const isRussianB = /^[а-яА-Я]+$/.test(firstCharB);
  const isLatinA = /^[a-zA-Z]+$/.test(firstCharA);
  const isLatinB = /^[a-zA-Z]+$/.test(firstCharB);
  const isNumberA = !Number.isNaN(firstCharA);
  const isNumberB = !Number.isNaN(firstCharB);

  switch (true) {
    case isRussianA && isRussianB:
      // both characters are Russian
      return a.localeCompare(b, "ru");
    case isRussianA:
      // only the first character is Russian
      return -1;
    case isRussianB:
      // only the second character is Russian
      return 1;
    case isLatinA && isLatinB:
      // both characters are Latin
      return a.localeCompare(b, "en");
    case isLatinA:
      // only the first character is Latin
      return -1;
    case isLatinB:
      // only the second character is Latin
      return 1;
    case isNumberA && isNumberB:
      // both characters are numbers
      return Number(a) - Number(b);
    case isNumberA:
      // only the first character is a number
      return -1;
    case isNumberB:
      // only the second character is a number
      return 1;
    default:
      return 0;
  }
}
