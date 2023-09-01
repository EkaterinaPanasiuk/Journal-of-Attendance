import { useDispatch, useSelector } from "react-redux";
import { FilterBtn } from "shared/ui/FilterBtn";
import classes from "./styles.module.scss";
import { toggleAdmin, toggleMethod, toggleNoActive, toggleTeach } from "./userFilterSlice";

export function UserFilter() {
  const dispatch = useDispatch();
  const { isCheckedTeach, isCheckedMethod, isCheckedAdmin, isCheckedNoActive } = useSelector((state) => state.userFilter);

  const handleCheckTeach = () => {
    dispatch(toggleTeach());
  };
  const handleCheckMethod = () => {
    dispatch(toggleMethod());
  };
  const handleCheckAdmin = () => {
    dispatch(toggleAdmin());
  };
  const handleCheckNoActive = () => {
    dispatch(toggleNoActive());
  };

  return (
    <div className={classes.usersFilterWraper}>
      <FilterBtn label="Преподаватели" onClick={handleCheckTeach} checked={isCheckedTeach} />
      <FilterBtn label="Методисты" onClick={handleCheckMethod} checked={isCheckedMethod} />
      <FilterBtn label="Администраторы" onClick={handleCheckAdmin} checked={isCheckedAdmin} />
      <FilterBtn label="Неактивные" onClick={handleCheckNoActive} checked={isCheckedNoActive} />
    </div>
  );
}
