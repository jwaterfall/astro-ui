import React, { FC, PropsWithChildren } from "react";

/**
 * Badges convey dynamic information, such as counts or status. A badge can include labels or numbers.
 * @param children The text to display inside the badge.
 */
export const Badge: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex h-4 w-fit items-center gap-1 rounded-full bg-error px-1 text-label-small text-on-error">{children}</div>
);
