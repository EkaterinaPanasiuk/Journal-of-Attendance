import compareRusEngNum from "shared/lib/compareRusEngNum";

export function workWithUserSubjects(data) {
  const subjectsArr = data.study_fields.map((item) => (item.short_study_field ? item.short_study_field : item.study_field));
  const sortArr = subjectsArr.sort(compareRusEngNum);
  return sortArr;
}
