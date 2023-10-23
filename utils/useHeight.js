import { useState, useEffect } from "react";

export const useHeight = () => {
  const [height, setHeight] = useState(window?.innerHeight ?? 0);

  useEffect(() => {
    const handleResize = () => setHeight(window?.innerHeight);
    window?.addEventListener("resize", handleResize);
    return () => window?.removeEventListener("resize", handleResize);
  }, []);

  return height;
};
