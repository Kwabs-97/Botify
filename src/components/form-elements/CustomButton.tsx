import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CustomButtonProps {
  className?: string;
  children: React.ReactNode;
  iconSrc?: string;
  onClick?: React.ReactEventHandler;
}
export default function CustomButton({
  children,
  className,
  onClick,
  iconSrc,
  ...props
}: CustomButtonProps) {
  return (
    <Button
      className={cn(
        "bg-blue-600 rounded flex flex-row justify-center gap-1 items-center px-2 py-2.5 text-sm",
        className
      )}
      onClick={onClick}
    >
      {iconSrc && (
        <div className="">
          <Image src={iconSrc} alt="icon" />
        </div>
      )}
      {children}
    </Button>
  );
}
