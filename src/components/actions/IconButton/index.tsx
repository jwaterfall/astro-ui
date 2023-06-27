import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { IconType } from "react-icons";

import { ButtonVariant, baseStyles, getVariantStyles, getDisabledStyles } from "../Button";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon: IconType;
}

/**
 * A button component that displays an icon.
 * @param variant The visual style of the button. Defaults to "filled".
 * @param icon The icon to display inside the button.
 * @param onClick A callback function to be called when the button is clicked.
 * @param disabled Whether or not the button is disabled. Defaults to false.
 * @returns A button element with the specified visual style and icon.
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({ variant = "filled", icon: Icon, children, ...props }, ref) => (
  <button {...props} ref={ref} className={`${baseStyles} ${getVariantStyles(variant)} ${getDisabledStyles(variant)} aspect-square`}>
    <Icon size={18} className="shrink-0" />
  </button>
));
