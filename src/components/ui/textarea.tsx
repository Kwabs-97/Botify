import * as React from "react";

import { cn } from "@/lib/utils";

interface TextAreaProps {
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}
const Textarea = React.forwardRef(
  (
    {
      className,
      placeholder,
      onFocus,
      onChange,
      onBlur,
      ...props
    }: TextAreaProps,
    ref: React.Ref<HTMLTextAreaElement>
  ) => {
    return (
      <textarea
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-normal file:text-foreground placeholder:text-sm placeholder:text-gray-400  disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        placeholder={placeholder}
        ref={ref}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
