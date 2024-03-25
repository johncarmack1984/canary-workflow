import type { UrlObject } from "url";
import * as React from "react";
import Link, { LinkProps } from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const aVariants = cva("hover:underline", {
  variants: {
    variant: {
      default: "text-blue-500 ",
      nav: "",
    },
    size: {
      default: "text-base",
      sm: "text-sm",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface AProps extends LinkProps, VariantProps<typeof aVariants> {
  children?: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

const A = React.forwardRef<HTMLAnchorElement, AProps>(
  ({ className, href, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : Link;
    return (
      <Comp
        className={cn(aVariants({ variant, size, className }))}
        ref={ref}
        href={href}
        {...props}
      />
    );
  },
);
A.displayName = "A";

export { A, aVariants };
