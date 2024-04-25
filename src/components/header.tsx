import { cn } from "@/lib/utils/cn";
import { routesList } from "@/lib/utils/data";
import { Link, useLocation } from "react-router-dom";
import DarkMode from "./dark-mode";
import Menu from "./menu";
import { Paragraph } from "./ui/typography";

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
          <div className="justify-center hidden sm:flex items-center space-x-5">
            {routesList.map((item) => (
              <Link
                key={item.id}
                to={item.name}
                className={cn(
                  "hover:underline hover:underline-offset-2",
                  location.pathname === item.name
                    ? "underline underline-offset-2"
                    : ""
                )}
              >
                <Paragraph className="font-semibold">{item.name}</Paragraph>
              </Link>
            ))}
          </div>
          <Menu />
          <DarkMode />
        </div>
      </nav>
    </header>
  );
}
