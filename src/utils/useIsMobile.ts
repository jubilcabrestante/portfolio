import { useState, useEffect } from "react";

const useIsMobile = (breakpoint = 1000): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
