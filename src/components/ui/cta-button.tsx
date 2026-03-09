import * as React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaButtonProps extends ButtonProps {
  wrapperClassName?: string;
}

const CtaButton = React.forwardRef<HTMLButtonElement, CtaButtonProps>(
  ({ children, className, wrapperClassName, ...props }, ref) => {
    return (
      <div
        className={cn(
          "p-1 pb-2 rounded-lg animated-border-gradient w-full sm:w-auto flex justify-center",
          wrapperClassName
        )}
      >
        <Button
          className={cn(
            "bg-[#D3FE3E] text-gray-900 hover:brightness-110 font-bold text-sm h-12 px-16 rounded-md flex-shrink-0 transition-all transform hover:scale-105 active:scale-100 active:translate-y-1 shadow-[0_3px_0_#a8d12d] active:shadow-none focus:outline-none w-full sm:w-auto",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </Button>
      </div>
    );
  }
);
CtaButton.displayName = "CtaButton";

export { CtaButton };