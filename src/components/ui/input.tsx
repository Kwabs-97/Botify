import * as React from "react";

import { cn } from "@/lib/utils";

interface InputProps {
  className?: string;
  type?: string;
  id?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputProps?: object;
  onFocus?: () => void;
  onBlur?: () => void;
}

const Input = React.forwardRef(
  (
    {
      className,
      type,
      onFocus,
      onBlur,
      onChange,
      inputProps,
      placeholder,
      ...props
    }: InputProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <input
        onFocus={onFocus}
        type={type}
        id={props.id}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-normal file:text-foreground placeholder:text-sm placeholder:text-gray-400  disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
        {...inputProps}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
