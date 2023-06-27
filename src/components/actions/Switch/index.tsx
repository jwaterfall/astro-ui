import React, { FC } from "react";
import { MdCheck } from "react-icons/md";
import * as SwitchPrimitive from "@radix-ui/react-switch";

interface SwitchProps {
  value?: boolean;
  onChange?: (enabled: boolean) => void;
  disabled?: boolean;
}

/**
 * A switch component that can be toggled on or off.
 * @param value The current value of the switch.
 * @param onChange A function that will be called when the switch is toggled.
 * @param disabled Whether the switch is disabled or not.
 */
export const Switch: FC<SwitchProps> = ({ value, onChange, disabled = false }) => (
  <SwitchPrimitive.Root
    checked={value}
    disabled={disabled}
    onCheckedChange={onChange}
    className="data group relative inline-flex h-8 w-[3.25rem] items-center rounded-full border-2 border-neutral-50 bg-neutral-90 disabled:opacity-10
      data-checked:border-primary-40 data-checked:bg-primary-40 data-checked:disabled:border-neutral-10 data-checked:disabled:bg-neutral-10
      dark:border-neutral-60 dark:bg-neutral-20 dark:data-checked:border-primary-80 dark:data-checked:bg-primary-80 
      dark:data-checked:disabled:border-neutral-90 dark:data-checked:disabled:bg-neutral-90"
  >
    <SwitchPrimitive.Thumb
      className="group absolute left-1.5 flex aspect-square h-4 items-center justify-center rounded-full bg-neutral-50 text-primary-40 ring-zinc-100/10
        transition-['box-shadow,transform'] group-hover:ring-[0.75rem] group-disabled:bg-neutral-10 group-disabled:text-neutral-10 group-disabled:group-hover:ring-0
        data-checked:h-6 data-checked:translate-x-4 data-checked:bg-primary-100 data-checked:group-disabled:bg-neutral-99 data-unchecked:group-active:left-0
        data-unchecked:group-active:h-7 data-unchecked:group-disabled:group-active:left-1.5 data-unchecked:group-disabled:group-active:h-4 dark:bg-neutral-60
        dark:text-primary-80 group-disabled:dark:bg-neutral-90 dark:group-disabled:text-neutral-90 dark:data-checked:bg-primary-20
        dark:data-checked:group-disabled:bg-neutral-10"
    >
      <div className="hidden group-data-checked:block">
        <MdCheck size={16} />
      </div>
    </SwitchPrimitive.Thumb>
  </SwitchPrimitive.Root>
);
