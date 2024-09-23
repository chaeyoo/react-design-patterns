import { useEffect, useState } from "react";

// Custom Hook
export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // 초기 사이즈 설정

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
