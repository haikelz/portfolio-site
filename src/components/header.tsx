import { Link, useLocation } from "react-router-dom";
import DarkMode from "./dark-mode";
import { Paragraph } from "./ui/typography";
import { cn } from "@/lib/utils/cn";

export default function Header() {
  const location = useLocation();

  return (
    <header
      className={cn(
        "w-full flex border-b justify-center items-center fixed bg-white/80",
        "dark:bg-[#0a0a0a]/80 backdrop-blur-md top-0 p-4 z-50"
      )}
    >
      <nav className="flex justify-between max-w-xl items-center w-full">
        <Link to="/">
          <Paragraph className="font-bold">ekel.dev</Paragraph>
        </Link>
        <div className="flex justify-center items-center space-x-5">
          <Link
            to="/works"
            className={cn(
              "hover:underline hover:underline-offset-2",
              location.pathname === "/works"
                ? "underline underline-offset-2"
                : ""
            )}
          >
            <Paragraph className="font-semibold">/works</Paragraph>
          </Link>
          <Link
            to="/photos"
            className={cn(
              "hover:underline hover:underline-offset-2",
              location.pathname === "/photos"
                ? "underline underline-offset-2"
                : ""
            )}
          >
            <Paragraph className="font-semibold">/photos</Paragraph>
          </Link>
          <DarkMode />
        </div>
      </nav>
    </header>
  );
}
