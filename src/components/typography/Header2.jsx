import { cn } from "@/lib/utils";
import React from "react";

function Header2({ children, className }) {
  return (
    <p className={cn("font-bold text-5xl leading-10 text-center", className)}>
      {children}
    </p>
  );
}

export default Header2;
