import PropTypes from "prop-types";
import { connectClassnames } from "shared/lib/dom";
import classes from "./styles.module.scss";

/* eslint-disable react/jsx-props-no-spreading */

export function Button({ children, type, size, variant, content, btnClass, ...props }) {
  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      className={connectClassnames(
        classes.btn,
        size ? classes[size] : null,
        variant ? classes[variant] : null,
        btnClass ? classes[btnClass] : null,
      )}
      {...props}
    >
      {children}
      {content}
    </button>
  );
}

Button.propTypes = {
  btnClass: PropTypes.string,
  content: PropTypes.string,
  size: PropTypes.oneOf(["normal", "medium", "large", "classic"]),
  type: PropTypes.oneOf(["button", "submit"]),
  variant: PropTypes.oneOf(["primary", "warning", "orange"]),
};

Button.defaultProps = {
  btnClass: "",
  content: "",
  size: "normal",
  type: "button",
  variant: "primary",
};
