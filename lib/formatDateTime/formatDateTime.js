export function formatDateTime(str) {
  if (!str) return null;
  const st = str.split(" ");
  st[1] = st[1].split("-").reverse().join("-");
  return new Date(Date.parse(st.reverse().join("T")));
}

export function localeDate(date) {
  return date.toLocaleString("ru-RU", {
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    month: "long",
  });
}
