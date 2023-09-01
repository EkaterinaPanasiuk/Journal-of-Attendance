import { useEffect } from "react";

export function useClearFieldError(setError, fields) {
  useEffect(() => {
    if (fields.some((field) => field)) {
      setError("");
    }
  }, [fields, setError]);
}
