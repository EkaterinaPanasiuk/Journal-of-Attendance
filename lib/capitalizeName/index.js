function capitalizeFirstSymbol(word) {
  const arrFromWord = word.split("");
  let i = 0;
  do {
    if (arrFromWord[i]) arrFromWord[i] = arrFromWord[i].toUpperCase();
    i += 1;
  } while (arrFromWord[i - 1] === " ");
  return arrFromWord.join("");
}

export function capitalizeName(name) {
  if (!name) return undefined;
  let nameArr = name
    .toLowerCase()
    .split(".")
    .map((word) => capitalizeFirstSymbol(word));
  let fullName = nameArr.join(".");
  nameArr = fullName.split("-").map((word) => capitalizeFirstSymbol(word));
  fullName = nameArr.join("-");
  return fullName;
}
