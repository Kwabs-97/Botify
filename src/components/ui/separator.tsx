"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";
interface SeparatorProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
}

const Separator = React.forwardRef(
  (
    {
      className,
      orientation = "horizontal",
      decorative = true,
      ...props
    }: SeparatorProps,
    ref: React.LegacyRef<HTMLDivElement>
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border bg-gray-100",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-full",
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
