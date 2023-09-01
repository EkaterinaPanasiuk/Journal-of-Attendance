import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSortingType } from "features/UsersSorting/usersSortingSlice";
import styles from "./styles.module.scss";
import Dropdown from "./Drowdown";
import vectorDown from "../../assets/vector-down.jpg";
import vectorUp from "../../assets/vector-up.jpg";

export default function CustomSelect() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.usersSorting.sort);

  const allOptions = [
    { sort: "chrono", value: "По хронологии" },
    { sort: "alphabet", value: "По алфавиту" },
    { sort: "directions", value: "По направлениям" },
  ];

  const handleSelect = (value) => {
    dispatch(changeSortingType(value.sort));
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const checkSorting = (current) => {
    return current === "chrono" ? "По хронологии" : current === "alphabet" ? "По алфавиту" : "По направлениям";
  };

  return (
    /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
    <div className={styles.customSelect}>
      <div className={styles.selectedValue} role="group" onClick={handleClick}>
        <span>{checkSorting(selected) || "По хронологии"}</span>
        <img className={styles.vector} src={open ? vectorUp : vectorDown} alt="vector" />
      </div>
      {open && <Dropdown options={allOptions} onSelect={handleSelect} />}
    </div>
  );
}
