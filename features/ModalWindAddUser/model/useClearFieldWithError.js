import { useEffect, useState } from "react";

export function useFieldWithError(initialValue) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  useEffect(() => {
    if (value) setError("");
  }, [value, setError]);
  return {
    error,
    setError,
    setValue,
    value,
  };
}
