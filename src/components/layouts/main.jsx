import React from "react";
import { cn } from "@/lib/utils";

function Main({ className, children }) {
  return (
    <div className={cn(`w-full min-h-screen bg-white`, className)}>
      {children}
    </div>
  );
}

export default Main;
