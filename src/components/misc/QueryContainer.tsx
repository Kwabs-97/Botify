import React from "react";
import { cn } from "@/lib/utils";

interface QueryContainerProps {
  children: React.ReactNode | string;
  className?: string;
  type?: "user" | "bot" | string;
}
function QueryContainer({ children, className, type }: QueryContainerProps) {
  return (
    <div className="px-4">
      <div
        className={cn(
          `${
            type === "user"
              ? "bg-blue-600 text-base text-gray-50 rounded-tr-[32px] rounded-br-[32px] rounded-bl rounded-tl-2xl "
              : "bg-white  text-black  rounded-tl-[32px] rounded-tr-2xl rounded-br rounded-bl-[32px]"
          } p-4 shadow-lightFallback w-max max-w-[400px] break-words`,
          className
        )}
      >
        <p>{children}</p>
      </div>
    </div>
  );
}

export default QueryContainer;
