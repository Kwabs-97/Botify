"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Label } from "../ui/label";
import CustomLabel from "../misc/CustomLabel";
import { Textarea } from "../ui/textarea";

interface CustomInputProps {
  className?: string;
  iconSrc?: string;
  label?: React.ReactNode;
  labelWithAutogenerate?: React.ReactNode;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeForTextArea?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  register?: (name: string) => object;
  name: string;
  customLabel?: React.ReactNode;
  type?: string;

  textarea?: boolean;
}
function CustomInput({
  className,
  iconSrc,
  label,
  register,
  name,
  onChangeForTextArea,
  onChange,
  labelWithAutogenerate,
  customLabel,
  textarea,

  ...props
}: CustomInputProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputProps = register ? register(name) : {};
  return (
    <div className="flex flex-col gap-2">
      {label && <Label>{label}</Label>}

      {labelWithAutogenerate && <CustomLabel>{customLabel}</CustomLabel>}
      {textarea ? (
        <div
          className={cn(
            `flex flex-row rounded bg-gray-50 border min-h-[90px] border-lightGray items-center justify-between duration-100 ${
              isFocused ? "border-2 border-blue-500" : ""
            }`,
            className
          )}
        >
          <Textarea
            {...inputProps}
            onChange={onChangeForTextArea}
            placeholder={props.placeholder}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`border-none text-basicLight h-full w-full py-3 bg-transparent outline-none placeholder:text-placeholder`}
          />
        </div>
      ) : (
        <div
          className={cn(
            `flex flex-row rounded border bg-gray-50 min-h-[30px] border-lightGray items-center justify-between duration-100 ${
              isFocused ? "border-2 border-blue-500" : ""
            }`,
            className
          )}
        >
          <Input
            {...inputProps}
            className={`border-none text-basicLight h-full w-full py-3 bg-transparent outline-none placeholder:text-placeholder`}
            placeholder={props.placeholder}
            type={props.type}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {iconSrc && (
            <div className="px-2">
              <Image src={iconSrc} alt="icon" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CustomInput;
