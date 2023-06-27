import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { IconType } from "react-icons";

export type ButtonVariant = "filled" | "tonal" | "outlined" | "elavated" | "text";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  iconLeft?: IconType;
  iconRight?: IconType;
  children?: string;
}

export const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case "filled":
      return "bg-primary-40 text-primary-100 dark:bg-primary-80 dark:text-primary-20";
    case "tonal":
      return "bg-secondary-90 text-secondary-10 dark:bg-secondary-30 dark:text-secondary-90";
    case "outlined":
      return "bg-transparent text-primary-40 border border-neutral-50 dark:text-primary-80 dark:border-neutral-60";
    case "elavated":
      return "bg-neutral-95 text-primary-40 dark:bg-neutral-10 dark:text-primary-80 shadow-elevation-1 hover:shadow-elevation-2 active:shadow-elevation-1";
    case "text":
      return "bg-transparent text-primary-40 dark:text-primary-80";
  }
};

export const getDisabledStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case "outlined":
      return "disabled:text-neutral-10/40 disabled:border-neutral-10/40 dark:disabled:text-neutral-90/40 dark:disabled:border-neutral-90/40";
    default:
      return "disabled:bg-neutral-10/10 disabled:text-neutral-10/40 disabled:shadow-none dark:disabled:bg-neutral-90/10 dark:disabled:text-neutral-90/40";
  }
};

export const baseStyles = `text-label-large relative inline-flex h-10 select-none items-center justify-center gap-2 overflow-hidden rounded-full transition-colors
duration-100 after:absolute after:inset-0 after:bg-current after:opacity-0 hover:after:opacity-5 active:after:opacity-10 disabled:after:opacity-0`;

/**
 * A customizable button component that can display text and icons.
 * @param variant The visual style of the button. Defaults to "filled".
 * @param iconLeft An optional icon to display on the left side of the button.
 * @param iconRight An optional icon to display on the right side of the button.
 * @param children The text to display inside the button.
 * @param onClick A callback function to be called when the button is clicked.
 * @param disabled Whether or not the button is disabled. Defaults to false.
 * @returns A button element with the specified visual style, text, and icons.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "filled", iconLeft: IconLeft, iconRight: IconRight, children, ...props }, ref) => (
    <button
      {...props}
      ref={ref}
      className={`${baseStyles} ${getVariantStyles(variant)} ${getDisabledStyles(variant)} ${IconLeft ? "pl-4" : "pl-6"} ${
        IconRight ? "pr-4" : "pr-6"
      }`}
    >
      {IconLeft && <IconLeft size={18} className="shrink-0" />}
      {children && <span className="truncate">{children}</span>}
      {IconRight && <IconRight size={18} className="shrink-0" />}
    </button>
  )
);
