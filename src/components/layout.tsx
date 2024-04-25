import { cn } from "@/lib/utils/cn";
import { MotionProps, m } from "framer-motion";
import { HTMLAttributes } from "react";

type TransitionLayoutProps = MotionProps & HTMLAttributes<HTMLDivElement>;

export default function Layout({
  className,
  children,
  ...props
}: TransitionLayoutProps) {
  return (
    <m.main
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      className={cn(
        "flex justify-center min-h-screen px-4 mt-[105px] mb-6 items-start w-full",
        className
      )}
      {...props}
    >
      <section className="w-full flex justify-center items-start max-w-xl flex-col">
        {children}
      </section>
    </m.main>
  );
}
