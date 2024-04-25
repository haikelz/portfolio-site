import { ArrowUpIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useScroll } from "@/hooks";

export default function BackToTop() {
  const scroll = useScroll();

  return (
    <>
      {scroll > 50 ? (
        <Button
          variant="outline"
          type="button"
          aria-label="back to top button"
          size="icon"
          className="fixed bottom-4 right-4"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUpIcon size={20} />
        </Button>
      ) : null}
    </>
  );
}
