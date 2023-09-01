import PropTypes from "prop-types";
import { connectClassnames } from "shared/lib/dom";
import classes from "./styles.module.scss";

export function FilterBtn({ label, checked, ...props }) {
  return (
    <button type="button" className={connectClassnames(classes.filterBtn, checked ? classes.checked : null)} {...props}>
      <span>{label}</span>
    </button>
  );
}

FilterBtn.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
};

FilterBtn.defaultProps = {
  checked: false,
  label: "",
};
