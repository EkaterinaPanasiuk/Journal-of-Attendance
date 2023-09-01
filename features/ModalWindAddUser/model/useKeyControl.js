import { useCallback, useEffect } from "react";

export function useKeyControl(EnterFunc, EscapeFunc) {
  const handleKeyDown = useCallback(
    (event) => {
      switch (event.key) {
        case "Escape":
          EscapeFunc();
          break;
        case "Enter":
          EnterFunc();
          break;
        default:
          break;
      }
    },
    [EnterFunc, EscapeFunc],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
}
