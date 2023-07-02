import React, { FC } from "react";

interface ListProps {
  title?: string;
  body?: string;
  leftElement?: JSX.Element;
  rightElement?: JSX.Element;
}

/**
 * Lists are continuous, vertical indexes of text or images.
 * @param title The title of the list item.
 * @param body The body of the list item.
 * @param leftElement An optional element to render on the left side of the list item.
 * @param rightElement An optional element to render on the right side of the list item.
 */
export const List: FC<ListProps> = ({ title, body, leftElement, rightElement }) => (
  <div className="bg-surface-2 flex w-full items-center gap-4 py-3 pl-4 pr-6">
    {leftElement}
    <div className="flex-1 overflow-hidden">
      <div className="text-body-large text-on-surface truncate">{title}</div>
      <div className="text-on-surface-variant text-body-medium truncate">{body}</div>
    </div>
    {rightElement}
  </div>
);
