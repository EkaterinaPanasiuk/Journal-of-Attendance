const DEFAULT_MIN_CHAR_COUNT = 1;

export default function minLength(minCharCount = DEFAULT_MIN_CHAR_COUNT) {
  if (minCharCount < 1) {
    throw new Error(`Валидатор minLength ожидает положительное минимальное значение длины строки, получил ${minCharCount}`);
  }
  return (value) => (value.length && value.length < minCharCount ? "Неверное имя пользователя и/или пароль" : null);
}
