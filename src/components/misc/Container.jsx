import { cn } from "@/lib/utils";
import React from "react";

function Container({ children, className }) {
  return (
    <div className={cn("flex flex-col p16 items-center", className)}>
      {children}
    </div>
  );
}

export default Container;
