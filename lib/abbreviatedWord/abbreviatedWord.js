export default function abbreviatedWord(word, length) {
  if (!word) return "";
  return word.length <= length ? word : `${word.slice(0, length - 3)}...`;
}
