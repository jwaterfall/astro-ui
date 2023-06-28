import React, { FC, PropsWithChildren } from "react";

/**
 * A badge component that displays a small piece of information, such as a status or a count.
 * @param children The text to display inside the badge.
 */
export const Badge: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex h-4 w-fit items-center gap-1 rounded-full bg-error px-1 text-label-small text-on-error">{children}</div>
);
