import { useRef, useState, useEffect } from "react";
import classes from "./styles.module.scss";

export function ToolTip({ children, text, btnText = null, btnClick = null }) {
  const [showToolTip, setShowToolTip] = useState(false);
  const refShowTimeout = useRef();
  const refHideTimeout = useRef();

  useEffect(() => {
    return () => {
      clearTimeout(refShowTimeout.current);
      clearTimeout(refHideTimeout.current);
    };
  }, []);

  const onMouseEnterHandler = () => {
    clearTimeout(refHideTimeout.current);
    refShowTimeout.current = setTimeout(() => {
      setShowToolTip(true);
    }, 250);
  };

  const onMouseLeaveHandler = () => {
    clearTimeout(refShowTimeout.current);
    refHideTimeout.current = setTimeout(() => {
      setShowToolTip(false);
    }, 400);
  };

  return (
    <div className={classes.container} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
      {children}
      {showToolTip && (
        <div className={classes.tooltip}>
          <div>{text}</div>
          <button
            type="button"
            onClick={() => {
              if (btnClick) {
                btnClick();
              }
            }}
          >
            {btnText}
          </button>
        </div>
      )}
    </div>
  );
}
