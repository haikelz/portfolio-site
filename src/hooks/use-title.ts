import { useEffect, useState } from "react";

/**
 * A custom hook to set document title dynamically
 * @export
 * @param {string} text
 */
export function useTitle(text: string) {
  const [title] = useState<string>(text);

  useEffect(() => {
    document.title = title;
  }, [title]);
}
