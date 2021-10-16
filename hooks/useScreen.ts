import { useState, useEffect } from "react";

type Type = {
  isMobile: boolean;
  bodyWidth: number;
};

const useScreen = (): Type => {
  const [isMobile, setIsMobile] = useState(true);
  const [bodyWidth, setBodyWidth] = useState(0);

  const mobileBreakpoint = 768;
  let resizeTimer: NodeJS.Timeout;

  const handleWindowSizeChange = () => {
    if (resizeTimer) {
      clearTimeout(resizeTimer);
    }

    resizeTimer = setTimeout(() => {
      setBodyWidth(document.body.clientWidth);
      setIsMobile(window.innerWidth <= mobileBreakpoint);
    }, 200);
  };

  useEffect(() => {
    setBodyWidth(document.body.clientWidth);
    setIsMobile(window.innerWidth <= mobileBreakpoint);

    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
      clearTimeout(resizeTimer);
    };
  }, []);

  return { isMobile, bodyWidth };
};

export default useScreen;
