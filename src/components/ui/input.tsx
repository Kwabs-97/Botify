"use client";
import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import CustomLabel from "../misc/CustomLabel";
import { Label } from "./label";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: "text" | "email" | "password" | "number";
  name: string;
  label?: React.ReactNode;
  labelWithAutogenerate?: React.ReactNode;
  iconSrc?: string;
  register?: (name: string) => object;
  customLabel?: React.ReactNode;
  onFocus?: () => void;
  onBlur?: () => void;
  errors?: {
    [key: string]:
      | {
          message: string;
        }
      | undefined;
  };
}

const Input = ({
  label,
  errors,
  register,
  onFocus,
  className,
  onChange,
  labelWithAutogenerate,
  onBlur,
  customLabel,
  iconSrc,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-1">
      {label && <Label>{label}</Label>}
      {labelWithAutogenerate && <CustomLabel>{customLabel}</CustomLabel>}

      <div
        className={cn(
          `flex flex-row rounded-lg border px-4 bg-gray-50 min-h-[40px] border-lightGray items-center justify-between duration-100 ${
            isFocused ? "border-2 border-blue-500" : ""
          }`,
          className
        )}
      >
        <input
          className="border-none h-full w-full text-gray-900 bg-transparent outline-none placeholder:text-gray-400"
          {...register?.(props.name)}
          onFocus={() => {
            setIsFocused(true);
            onFocus?.();
          }}
          onBlur={() => {
            setIsFocused(false);
            onBlur?.();
          }}
          {...props}
        />

        {iconSrc && (
          <div className="px-2">
            <Image src={iconSrc} alt="icon" />
          </div>
        )}
      </div>
      {errors?.[props.name]?.message && (
        <p className="text-red-500 text-sm font-normal">
          {errors[props.name]?.message}
        </p>
      )}
    </div>
  );
};

export default Input;
