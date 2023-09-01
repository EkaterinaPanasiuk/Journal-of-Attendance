export function createStringFromArray(arr) {
  const newArr = arr.filter((item) => !!item === true).join(" ");
  return newArr;
}
