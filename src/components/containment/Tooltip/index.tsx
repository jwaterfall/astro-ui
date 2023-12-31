"use client";

import React, { FC, PropsWithChildren } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

interface TooltipProps {
  text: string;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
}

/**
 * Tooltips are informative, specific, and action-oriented text labels that provide contextual support
 * @param text The text to display in the tooltip.
 * @param side The side of the trigger to display the tooltip on.
 * @param align The alignment of the tooltip relative to the trigger.
 * @param children The child element(s) that the tooltip will be applied to.
 */
export const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({ text, children, ...props }) => (
  <TooltipPrimitive.Root delayDuration={0}>
    <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        {...props}
        sideOffset={4}
        className="inverse-font-weight-multiplier flex max-w-xs items-center rounded-xs bg-inverse-surface px-2 py-1 text-body-small text-inverse-on-surface"
      >
        {text}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  </TooltipPrimitive.Root>
);

export const TooltipProvider = TooltipPrimitive.Provider;
