import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const pVariants = cva("leading-7 [&:not(:first-child)]:mt-6", {
  variants: {
    variant: {
      link: "text-blue-500 hover:underline",
      default: "",
    },
    size: {
      default: "text-base",
      sm: "text-sm",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface PProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof pVariants> {
  asChild?: boolean;
}

const P = React.forwardRef<HTMLParagraphElement, PProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "p";
    return (
      <Comp
        className={cn(pVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
P.displayName = "P";

export { P, pVariants };
