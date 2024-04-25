import { useEffect, useState } from "react";

/**
 * A custom hook to detect user's scroll
 * @export
 * @returns {*}
 */
export function useScroll() {
  const [scroll, setScroll] = useState<number>(0);

  function handleScroll() {
    const position = window.scrollY;
    setScroll(position);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScroll]);

  return scroll;
}
