import { useEffect, useState } from "react";

export default function useDebounce(initialValue = "", delay = 1000) {
  const [debounceValue, setDeBounceValue] = useState(initialValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDeBounceValue(initialValue);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay, initialValue]);
  return debounceValue;
}
