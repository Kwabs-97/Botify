import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AIAssitant } from "@/assets/icons";
function QueryContainer({ children, className, type }) {
  return (
    <>
      <div
        className={cn(
          `${
            type === "user"
              ? "bg-blue-600 text-base text-gray-50 rounded-tr-[32px] rounded-br-[32px] rounded-bl rounded-tl-2xl "
              : "bg-white  text-black  rounded-tl-[32px] rounded-tr-2xl rounded-br rounded-bl-[32px]"
          } p-4 shadow-lightFallback`,
          className
        )}
      >
        <p>{children}</p>
      </div>
    </>
  );
}

export default QueryContainer;
