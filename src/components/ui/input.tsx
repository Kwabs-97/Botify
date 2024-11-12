"use client";
import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import CustomLabel from "../misc/CustomLabel";
import { Label } from "./label";

interface InputProps {
  className?: string;
  type?: string;
  name: string;
  id?: string;
  label?: React.ReactNode;
  placeholder?: string;
  labelWithAutogenerate?: React.ReactNode;
  iconSrc?: string;
  register?: (name: string) => object;
  onFocus?: () => void;
  customLabel?: React.ReactNode;
  onBlur?: () => void;
}

const Input = ({
  className,
  label,
  type,
  name,
  register,
  onFocus,
  labelWithAutogenerate,
  onBlur,
  customLabel,
  iconSrc,
  placeholder,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-2">
      {label && <Label>{label}</Label>}
      {labelWithAutogenerate && <CustomLabel>{customLabel}</CustomLabel>}

      <div
        className={cn(
          `flex flex-row rounded-lg border px-4  bg-gray-50 min-h-[50px] border-lightGray items-center justify-between duration-100 ${
            isFocused ? "border-2 border-blue-500" : ""
          }`,
          className
        )}
      >
        <input
          type={type}
          {...register?.(name)}
          id={props.id}
          name={name !== undefined ? name : ""}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={cn(
            "border-none h-full w-full text-gray-900 bg-transparent focus:outline-none",
            className
          )}
          {...props}
        />

        {iconSrc && (
          <div className="px-2">
            <Image src={iconSrc} alt="icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
