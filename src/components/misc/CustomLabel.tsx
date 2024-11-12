import React from "react";
import { Label } from "../ui/label";
import Image from "next/image";
import { sparksIcon } from "@/assets/icons";

interface LabelProps {
  htmlFor?: string;
  autogenerate?: boolean;
  children: React.ReactNode;
}

function CustomLabel({ htmlFor, children }: LabelProps) {
  return (
    <div className="flex flex-row items-center justify-between hover:cursor-pointer ">
      <Label htmlFor={htmlFor}>{children}</Label>
      <div className="flex flex-row gap-2.5">
        <Image src={sparksIcon} alt="icon" />
        <p className="text-blue-500 text-sm font-normal">Let Boti generate</p>
      </div>
    </div>
  );
}

export default CustomLabel;
