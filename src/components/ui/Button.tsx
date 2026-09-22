import React from "react";
import { cn } from "@/lib/utils";

const variants = {
  default:
    "bg-primary font-bold text-primary-foreground hover:bg-primary-hover transition-all duration-300 hover:-translate-y-0.5",
  outline:
    "border border-border bg-foreground/5 font-bold text-foreground backdrop-blur transition-all duration-300 hover:border-primary/40 hover:text-primary",
} as const;

const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-6 text-base",
} as const;

type VariantProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

type ButtonAsLink = VariantProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButton = VariantProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

const Button = ({
  children,
  className,
  variant = "default",
  size = "md",
  href,
  ...props
}: ButtonProps) => {
  const classes = cn(
    "inline-flex cursor-pointer items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      type={buttonProps.type ?? "button"}
      className={classes}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
