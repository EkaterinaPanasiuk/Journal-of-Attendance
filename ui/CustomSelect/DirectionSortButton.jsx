import { useSelector } from "react-redux";
import sortDown from "../../assets/sort-down.jpg";
import sortUp from "../../assets/sort-up.jpg";

export default function DirectionSortButton({ changeSort }) {
  const sortDirection = useSelector((state) => state.usersSorting.sortDirection);

  return (
    <button type="button" onClick={() => changeSort()}>
      <img src={sortDirection ? sortUp : sortDown} alt="sort-direction" />
    </button>
  );
}
