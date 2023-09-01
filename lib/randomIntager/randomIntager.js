export function randomIntager(min, max) {
  // check if min is greater than max and throw an error if true
  if (min > max) {
    throw new Error("min must be less than or equal to max");
  }
  // check if min or max is not an integer and throw an error if true
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new Error("min and max must be integers");
  }
  const randomBuffer = new Uint32Array(1);
  window.crypto.getRandomValues(randomBuffer);
  const randomNumber = randomBuffer[0] / (0xffffffff + 1);
  return Math.floor(randomNumber * (max - min + 1)) + min;
}
