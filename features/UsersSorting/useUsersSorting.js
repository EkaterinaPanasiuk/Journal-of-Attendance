export function useUsersSorting() {
  const compareByUpdate = (a, b) => {
    return new Date(a.last_update) - new Date(b.last_update);
  };

  const compareByAlphabet = (a, b) => {
    return (a.last_name.toLowerCase() + a.first_name.toLowerCase() + a.middle_name.toLowerCase()).localeCompare(
      b.last_name.toLowerCase() + b.first_name.toLowerCase() + b.middle_name.toLowerCase(),
    );
  };

  const compareByDirections = (a, b) => {
    return a.study_fields[0].study_field.localeCompare(b.study_fields[0].study_field);
  };

  const useSorting = (filteredArr, sortkey) => {
    let sorteredArr = [];
    if (sortkey === "chrono") {
      sorteredArr = filteredArr.sort(compareByUpdate);
    }
    if (sortkey === "alphabet") {
      sorteredArr = filteredArr.sort(compareByAlphabet);
    }
    if (sortkey === "directions") {
      sorteredArr = filteredArr.sort(compareByDirections);
    }
    return sorteredArr;
  };

  return useSorting;
}
