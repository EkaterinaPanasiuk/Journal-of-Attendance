export function workWithUserRoles(data) {
  const roleArr = [];
  if (data.is_teacher || data.isTeacher) {
    roleArr.push("преподаватель");
  }
  if (data.is_metodist || data.isMetodist) {
    roleArr.push("методист");
  }
  if (data.is_superuser || data.isSuperuser) {
    roleArr.push("администратор");
  }
  const lastArr = roleArr.join(", ");
  return lastArr;
}

/* export function workWithUserRoles(data) {
  const roleArr = [];
  data.is_teacher ? roleArr.push("преподаватель") : null;
  data.is_metodist ? roleArr.push("методист") : null;
  data.is_superuser ? roleArr.push("администратор") : null;
  return roleArr.join(", ");
} */

/* export function workWithUserRoles(data) {
  const roleArr = [];
  (data.is_teacher || data.isTeacher) && roleArr.push("преподаватель");
  (data.is_metodist || data.isMetodist) && roleArr.push("методист");
  (data.is_superuser || data.isSuperuser) && roleArr.push("администратор");
  return roleArr.join(", ");
} */
