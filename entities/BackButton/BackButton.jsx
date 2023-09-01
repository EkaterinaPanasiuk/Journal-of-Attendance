import { useState } from "react";
import { useNavigate } from "react-router-dom";
import returnArrowFocus from "shared/assets/return-arrow-focus.png";
import returnArrowBlur from "shared/assets/return-arrow-blur.png";
import classes from "./styles.module.scss";

export function BackButton() {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className={classes.returnButton}
      onMouseOver={() => setHovered(true)}
      onFocus={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      onBlur={() => setHovered(false)}
      onClick={() => navigate(-1)}
    >
      <img alt="return-arrow" src={hovered ? returnArrowFocus : returnArrowBlur} />
      Назад
    </button>
  );
}
