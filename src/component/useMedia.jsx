import { useEffect, useState } from "react";

// alternate hook that accepts a single query
export default function useMedia(queries, values, defaultValue) {
  // state and setter for matched value
  const [value, setValue] = useState(defaultValue);

  //array containing a media query list for each query
  const mediaQueryLists = queries.map(q => window.matchMedia(q));
  //state update function
  const getValue = () => {
    const index = mediaQueryLists.findIndex(mql => mql.matches);
    
    return typeof values[index] !== "undefined" ? values[index] : defaultValue;
  };

  useEffect(
    () => {
      setValue(getValue);

      const handler = () => setValue(getValue);

      mediaQueryLists.forEach(mql => mql.addListener(handler));
      
      return () => mediaQueryLists.forEach(mql => mql.removeListener(handler));
    }, []);

  return value;
}
