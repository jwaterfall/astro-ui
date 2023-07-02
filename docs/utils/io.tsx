import { ReactElement } from "react";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

export enum DocType {
  Component = "component",
  Docs = "docs",
}

enum ClassType {
  Component = "component",
  Modifier = "modifier",
}

interface Class {
  name: string;
  type: ClassType;
  description: string;
}

export interface DocFrontmatter {
  type: DocType;
  title: string;
  category?: string;
  description?: string;
  classes: Class[];
  published: boolean;
}

export interface Doc extends DocFrontmatter {
  source: MDXRemoteSerializeResult;
}
