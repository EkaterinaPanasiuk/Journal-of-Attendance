import PropTypes from "prop-types";
import classes from "./styles.module.scss";

export function Checkbox({ label, id, ...props }) {
  return (
    <div className={classes.checkboxContainer}>
      <input id={id} type="checkbox" {...props} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
};

Checkbox.defaultProps = {
  id: "",
  label: "",
};
