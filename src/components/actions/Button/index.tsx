import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { IconType } from "react-icons";

export type ButtonVariant = "filled" | "tonal" | "outlined" | "elavated" | "text";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  iconLeft?: IconType;
  iconRight?: IconType;
  children?: string;
}

export const getVariantStyles = (variant: ButtonVariant, disabled?: boolean) => {
  switch (variant) {
    case "filled":
      return `bg-primary text-on-primary ${disabled ? "" : "inverse-font-weight-multiplier"}`;
    case "tonal":
      return "bg-secondary-container text-on-secondary-container";
    case "outlined":
      return "bg-transparent text-primary border border-outline";
    case "elavated":
      return "bg-surface-container-low text-primary shadow-elevation-1 hover:shadow-elevation-2 active:shadow-elevation-1";
    case "text":
      return "bg-transparent text-primary";
  }
};

export const getDisabledStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case "outlined":
      return "disabled:text-on-surface/40 disabled:border-on-surface/40";
    default:
      return "disabled:bg-on-surface/10 disabled:text-on-surface/40 disabled:shadow-none";
  }
};

export const baseStyles = `text-label-large relative inline-flex h-10 select-none items-center justify-center gap-2
  overflow-hidden rounded-full transition-colors duration-100 after:absolute after:inset-0 after:bg-current
  after:opacity-0 hover:after:opacity-5 active:after:opacity-10 disabled:after:opacity-0`;

/**
 * Buttons help people take action, such as sending an email, sharing a document, or liking a comment.
 * @param variant The visual style of the button. Defaults to "filled".
 * @param iconLeft An optional icon to display on the left side of the button.
 * @param iconRight An optional icon to display on the right side of the button.
 * @param children The text to display inside the button.
 * @param onClick A callback function to be called when the button is clicked.
 * @param disabled Whether or not the button is disabled. Defaults to false.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "filled", iconLeft: IconLeft, iconRight: IconRight, children, ...props }, ref) => (
    <button
      {...props}
      ref={ref}
      className={`${baseStyles} ${getVariantStyles(variant, props.disabled)} ${getDisabledStyles(variant)} ${IconLeft ? "pl-4" : "pl-6"} ${
        IconRight ? "pr-4" : "pr-6"
      }`}
    >
      {IconLeft && <IconLeft size={18} className="shrink-0" />}
      {children && <span className="truncate">{children}</span>}
      {IconRight && <IconRight size={18} className="shrink-0" />}
    </button>
  )
);
