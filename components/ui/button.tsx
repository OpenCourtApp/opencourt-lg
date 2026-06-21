import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-medium whitespace-nowrap transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Solid high-contrast CTA — the only "loud" element on the page.
        primary:
          "bg-btn text-btn-foreground shadow-sm hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 active:translate-y-0 active:shadow-sm",
        secondary:
          "border border-border bg-transparent text-foreground hover:bg-accent hover:-translate-y-0.5 hover:shadow-md active:translate-y-0",
        ghost: "text-foreground hover:bg-accent",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    /** When set, renders an <a> (for CTAs/links) instead of a <button>. */
    href?: string;
  };

export function Button({
  className,
  variant,
  size,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }
  return <button className={classes} {...props} />;
}

export { buttonVariants };
