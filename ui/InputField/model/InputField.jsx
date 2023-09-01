import { useState } from "react";
import { connectClassnames } from "shared/lib/dom";
import classes from "../ui/styles.module.scss";

export function useInputField(type) {
  const [viewPass, setViewPass] = useState(false);

  const handleToggleViewPass = () => {
    setViewPass(!viewPass);
  };

  const getInputType = () => {
    if (type === "password") {
      return viewPass ? "text" : "password";
    }
    return type;
  };

  const getShowPassBtnClass = () => connectClassnames(classes.showPassBtn, viewPass ? classes.eye : classes.eyeOff);

  return {
    getInputType,
    getShowPassBtnClass,
    handleToggleViewPass,
  };
}
