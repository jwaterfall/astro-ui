import React, { FC, PropsWithChildren } from "react";
import { IconType } from "react-icons";

interface NavigationBarItemProps {
  icon: IconType;
  activeIcon?: IconType;
  active?: boolean;
  badgeText?: string;
}

/**
 * A navigation bar item is a button that can be used to navigate between destinations within an app.
 * @param icon The icon to display in the item.
 * @param activeIcon The icon to display when the item is active.
 * @param active Whether the item is currently active.
 * @param badgeText An optional badge to display on the item.
 */
export const NavigationBarItem: FC<PropsWithChildren<NavigationBarItemProps>> = ({
  icon: Icon,
  activeIcon: ActiveIcon,
  active = false,
  badgeText,
  children,
}) => (
  <div
    className={`text-label-medium group flex cursor-pointer select-none flex-col items-center justify-center
      ${active ? "text-on-surface" : "text-on-surface-variant"}`}
  >
    <div
      className={`relative mx-auto flex h-8 w-16 items-center justify-center rounded-full after:absolute after:inset-0
        after:rounded-full after:opacity-0 group-hover:after:opacity-5 group-active:after:opacity-10 
        ${active ? "bg-secondary text-on-secondary after:bg-on-surface" : "after:bg-on-surface-variant"}`}
    >
      {badgeText && <span className="badge absolute -top-0.5 right-0.5 z-20">{badgeText}</span>}
      {active && ActiveIcon ? <ActiveIcon size={24} /> : <Icon size={24} />}
    </div>
    {children && <div className="block truncate py-1">{children}</div>}
  </div>
);

/**
 * Navigation bars offer a persistent and convenient way to switch between primary destinations in an app.
 */
export const NavigationBar: FC<PropsWithChildren> = ({ children }) => (
  <nav className="bg-surface-2 grid h-20 w-full auto-cols-fr grid-flow-col gap-2">{children}</nav>
);
