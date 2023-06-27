import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { IconType } from 'react-icons';

type ButtonVariant = 'filled' | 'tonal' | 'outlined' | 'elavated' | 'text';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  iconLeft?: IconType;
  iconRight?: IconType;
  children?: string;
}

const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case 'filled':
      return 'bg-primary text-on-pimary';
    case 'tonal':
      return 'bg-secondary-container text-on-secondary-container';
    case 'outlined':
      return 'bg-transparent text-primary border border-border';
    case 'elavated':
      return 'bg-surface text-on-surface shadow-lg';
    case 'text':
      return `bg-transparent text-red-500 hover:bg-red-100 disabled:hover:bg-transparent
        dark:text-red-400 dark:hover:bg-red-400/20 dark:disabled:hover:bg-transparent`;
  }
};

const getSizeStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case 'outlined':
      return 'h-[2.375rem]';
    default:
      return 'h-10';
  }
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'filled', iconLeft: IconLeft, iconRight: IconRight, children, ...props }, ref) => (
    <button
      {...props}
      ref={ref}
      className={`
        inline-flex items-center justify-center gap-2 select-none transition-colors duration-100 rounded-full disabled:opacity-25 label-large
        ${IconLeft ? 'pl-4' : 'pl-6'} ${IconRight ? 'pr-4' : 'pr-6'}
        ${getVariantStyles(variant)} ${getSizeStyles(variant)}
      `}
    >
      {IconLeft && <IconLeft size={18} className="shrink-0" />}
      {children && <span className="truncate">{children}</span>}
      {IconRight && <IconRight size={18} className="shrink-0" />}
    </button>
  )
);
