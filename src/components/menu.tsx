import { cn } from "@/lib/utils/cn";
import { routesList } from "@/lib/utils/data";
import { MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Paragraph } from "./ui/typography";

export default function Menu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="block sm:hidden" asChild>
        <Button
          type="button"
          aria-label="menu"
          variant="outline"
          size="icon"
          className="flex justify-center items-center"
        >
          <MenuIcon size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {routesList.map((item) => (
          <Link
            to={item.name}
            className={cn(
              "hover:underline hover:underline-offset-2",
              location.pathname === item.name
                ? "underline underline-offset-2"
                : ""
            )}
            key={item.id}
          >
            <DropdownMenuItem>
              <Paragraph className="font-semibold text-sm">
                {item.name}
              </Paragraph>
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
