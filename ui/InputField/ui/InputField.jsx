import { forwardRef } from "react";
import PropTypes from "prop-types";
import { useInputField } from "../model/InputField";
import classes from "./styles.module.scss";

export const InputField = forwardRef(function InputText(
  {
    type = "text",
    label = null,
    error = null,
    labelClass,
    // onChannge,
    ...props
  },
  ref,
) {
  const { handleToggleViewPass, getInputType, getShowPassBtnClass } = useInputField(type);
  return (
    <div className={error ? classes.error : classes.inputContainer}>
      <label className={labelClass ? classes[labelClass] : classes.label}>
        {label}
        <input
          //  onChannge={onChannge}
          type={getInputType()}
          autoComplete="off"
          className={classes.input}
          {...props}
          ref={ref}
        />
        {type === "password" && <button type="button" className={getShowPassBtnClass()} onClick={handleToggleViewPass} />}
      </label>

      {error && (
        <div className={classes.errorMessage} data-testid="errorMessage">
          {error}
        </div>
      )}
    </div>
  );
});

InputField.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string,
  labelClass: PropTypes.string,
  // onChannge: PropTypes.func,
  type: PropTypes.oneOf(["text", "password"]),
};

InputField.defaultProps = {
  error: null,
  label: null,
  labelClass: null,
  // onChannge: null,
  type: "text",
};
