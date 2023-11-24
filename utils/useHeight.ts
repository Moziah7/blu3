import { useState, useEffect } from "react";

export const useHeight = (): number => {
  if (typeof window === "undefined") return 0;
  
  const [height, setHeight] = useState(window?.innerHeight ?? 0);

  useEffect(() => {
    const handleResize = () => setHeight(window?.innerHeight);
    window?.addEventListener("resize", handleResize);
    return () => window?.removeEventListener("resize", handleResize);
  }, []);

  return height;
};
