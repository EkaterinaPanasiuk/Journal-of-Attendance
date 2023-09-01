export function workWithUserName(data) {
  const lastName = data.last_name ? data.last_name : " ";
  const firstName = data.first_name ? data.first_name : " ";
  const middleName = data.middle_name ? data.middle_name : " ";
  const name = {
    row1: `${lastName}`,
    row2: `${firstName} ${middleName}`,
  };
  if (name.row1.length > 22) {
    name.row1 = `${lastName.slice(0, 19)}...`;
  }
  if (name.row2.length > 22) {
    name.row2 = `${name.row2.slice(0, 19)}...`;
  }
  return name;
}
