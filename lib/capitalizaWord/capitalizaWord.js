export function capitalizeWord(word) {
  if (!word) return " ";
  const newWord = word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
  return newWord;
}
