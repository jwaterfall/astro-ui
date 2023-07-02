"use client";

import { FC } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

// Docs
import CodePreview from "./CodePreview";
// Icons
import { MdShoppingCart, MdClose } from "react-icons/md";
// Radix UI
import * as RadixAvatar from "@radix-ui/react-avatar";
import * as RadixToast from "@radix-ui/react-toast";

interface ContentProps {
  source: MDXRemoteSerializeResult;
}

const components = {
  // Docs
  CodePreview: (props) => <CodePreview {...props} />,
  // Icons
  MdShoppingCart,
  MdClose,
  // Radix UI
  RadixAvatarRoot: (props) => <RadixAvatar.Root {...props} />,
  RadixAvatarImage: (props) => <RadixAvatar.Image {...props} />,
  RadixAvatarFallback: (props) => <RadixAvatar.Fallback {...props} />,
  RadixToastProvider: (props) => <RadixToast.Provider {...props} />,
  RadixToastRoot: (props) => <RadixToast.Root {...props} />,
  RadixToastAction: (props) => <RadixToast.Action {...props} />,
  RadixToastClose: (props) => <RadixToast.Close {...props} />,
  RadixToastViewport: (props) => <RadixToast.Viewport {...props} />,
};

const Content: FC<ContentProps> = ({ source }) => {
  return <MDXRemote {...source} components={components} />;
};

export default Content;
