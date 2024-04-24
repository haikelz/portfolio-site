import { cn } from "@/lib/utils/cn";
import { HTMLAttributes } from "react";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as: "h1" | "h2" | "h3" | "h4";
};

export function Heading({ children, as, className, ...props }: HeadingProps) {
  return (
    <>
      {as === "h1" ? (
        <h1 className={cn("text-3xl font-bold", className)} {...props}>
          {children}
        </h1>
      ) : as === "h2" ? (
        <h2 className={cn("text-2xl font-bold", className)} {...props}>
          {children}
        </h2>
      ) : as === "h3" ? (
        <h3 className={cn("text-xl font-bold", className)} {...props}>
          {children}
        </h3>
      ) : as === "h4" ? (
        <h4 className={cn("text-lg font-bold", className)} {...props}>
          {children}
        </h4>
      ) : null}
    </>
  );
}
