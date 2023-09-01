import { capitalizeWord } from "shared/lib/capitalizaWord/capitalizaWord";

export function workWithUserName(data) {
  const lastName = capitalizeWord(data.last_name);
  const firstName = capitalizeWord(data.first_name);
  const middleName = capitalizeWord(data.middle_name);
  const name = {
    row1: `${lastName}`,
    row2: `${firstName} ${middleName}`,
  };
  if (name.row1.length > 30) {
    name.row1 = `${lastName.slice(0, 28)}...`;
  }
  if (name.row2.length > 30) {
    name.row2 = `${name.row2.slice(0, 28)}...`;
  }
  return name;
}
