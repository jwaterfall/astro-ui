import React, { FC } from "react";
import { MdPerson } from "react-icons/md";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { Badge } from "../Badge";

interface AvatarProps {
  size?: "xs" | "sm" | "md" | "lg";
  ring?: "primary" | "secondary";
  src?: string;
  name?: string;
  badgeText?: string;
}

/**
 * Avatar component displays an image or initials of a user.
 * @param size The size of the avatar. Can be "xs", "sm", "md", or "lg".
 * @param ring The color of the ring around the avatar. Can be "primary" or "secondary".
 * @param src The source URL of the image to display.
 * @param name The name of the user, it will be formatted depending on the size of the avatar.
 * @param badgeText The text to display in the badge.
 */
export const Avatar: FC<AvatarProps> = ({ size = "md", ring, src, name, badgeText }) => {
  const getSizeStyles = () => {
    switch (size) {
      case "xs":
        return "h-8";
      case "sm":
        return "h-10";
      case "md":
        return "h-12";
      case "lg":
        return "h-16";
    }
  };

  const getIconSize = () => {
    switch (size) {
      case "xs":
        return 12;
      case "sm":
        return 16;
      case "md":
        return 20;
      case "lg":
        return 24;
    }
  };

  const getRingStyles = () => {
    switch (ring) {
      case "primary":
        return "animate-spin-slow animation bg-gradient-to-r from-green-500 via-blue-500 to-purple-500";
      case "secondary":
        return "bg-primary";
    }
  };

  const getFormattedName = () => {
    switch (size) {
      case "xs":
        return name?.[0];
      case "sm":
        return name
          ?.split(" ")
          .map((n) => n[0])
          .join("");
      case "md":
        return name?.split(" ")[0];
      default:
        return name;
    }
  };

  const InnerAvatar: FC = () => (
    <div className={`absolute z-10 ${!ring ? "inset-0" : "inset-1"}`}>
      <AvatarPrimitive.Image className="rounded-full" src={src} />
      <AvatarPrimitive.Fallback
        className={`flex h-full w-full items-center justify-center overflow-hidden overflow-ellipsis rounded-full bg-surface-container-low p-1 text-center text-body-small text-on-surface ${
          size === "sm" ? "uppercase" : "capitalize"
        }`}
      >
        {name ? getFormattedName() : <MdPerson size={getIconSize()} />}
      </AvatarPrimitive.Fallback>
    </div>
  );

  return (
    <AvatarPrimitive.Root className={`relative flex aspect-square ${getSizeStyles()}`}>
      {badgeText && (
        <div className="absolute -right-0.5 -top-0.5 z-20">
          <Badge>{badgeText}</Badge>
        </div>
      )}
      {ring ? (
        <>
          <InnerAvatar />
          <div className={`absolute inset-0 rounded-full p-0.5 ${getRingStyles()}`}>
            <div className="absolute inset-0.5 rounded-full bg-background" />
          </div>
        </>
      ) : (
        <InnerAvatar />
      )}
    </AvatarPrimitive.Root>
  );
};
