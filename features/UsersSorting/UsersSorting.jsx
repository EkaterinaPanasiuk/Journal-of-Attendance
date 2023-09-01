import CustomSelect from "shared/ui/CustomSelect/CustomSelect";
import DirectionSortButton from "shared/ui/CustomSelect/DirectionSortButton";
import { useDispatch } from "react-redux";
import styles from "./styles.module.scss";
import { toggleDirection } from "./usersSortingSlice";

export function UsersSorting() {
  const dispatch = useDispatch();

  const changeDirection = () => {
    dispatch(toggleDirection());
  };

  return (
    <div className={styles.sortWrapper}>
      <DirectionSortButton changeSort={changeDirection} />
      <CustomSelect />
    </div>
  );
}
