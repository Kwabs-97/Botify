import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function CustomButton({
  children,
  className,
  iconSrc,
  ...props
}) {
  return (
    <Button
      className={cn(
        "bg-blue-600 rounded flex flex-row justify-center items-center px-2 py-2.5 text-base",
        className
      )}
    >
      {iconSrc && <Image src={iconSrc} alt="icon" />}
      {children}
    </Button>
  );
}
