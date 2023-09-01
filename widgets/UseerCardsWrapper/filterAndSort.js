export function filterByStudyField(users, studyField) {
  if (studyField === "Без направлений") {
    return users.filter((user) => !user.study_fields.length);
  }
  return users.filter((user) => user.study_fields.some((field) => field.study_field === studyField));
}

export function sortUsersByNameUp(users) {
  return users.sort((a, b) => {
    const aName = a.last_name + a.first_name + a.middle_name;
    const bName = b.last_name + b.first_name + b.middle_name;
    return aName.localeCompare(bName);
  });
}

export function sortUsersByNameDown(users) {
  return users.sort((a, b) => {
    const aName = a.last_name + a.first_name + a.middle_name;
    const bName = b.last_name + b.first_name + b.middle_name;
    return bName.localeCompare(aName);
  });
}

export function sortUsersByChronoUp(users) {
  return users.sort((a, b) => a.last_update.localeCompare(b.last_update));
}

export function sortUsersByChronoDown(users) {
  return users.sort((a, b) => b.last_update.localeCompare(a.last_update));
}
