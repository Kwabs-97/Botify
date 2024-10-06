"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
function CustomInput({ className, iconSrc, ...props }) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div
      className={cn(
        `flex flex-row rounded border h-9 border-lightGray items-center justify-between duration-300 ${
          isFocused ? "border border-blue-500" : ""
        }`,
        className
      )}
    >
      <Input
        className="border-none text-basicLight h-full w-full py-3 bg-transparent outline-none"
        placeholder={props.placeholder}
        type={props.type}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {iconSrc && (
        <div className="px-2">
          <Image src={iconSrc} alt="icon" />
        </div>
      )}
    </div>
  );
}

export default CustomInput;
