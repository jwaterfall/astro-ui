import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs/promises";

import { Doc, DocFrontmatter, DocType } from "./io";

export async function readDoc(path: string): Promise<Doc> {
  const file = await fs.readFile(path);

  const { data, content } = matter(file);
  const frontmatter = data as DocFrontmatter;

  if (!Object.values(DocType).includes(frontmatter.type)) {
    throw new Error(`Invalid docs type: ${frontmatter.type}. Path: ${path}`);
  }

  if (!frontmatter.title) {
    throw new Error(`Docs must have a title. Path: ${path}`);
  }

  if (typeof frontmatter.published !== "boolean") {
    throw new Error(`Docs must have a published property of type boolean. Path: ${path}`);
  }

  if (frontmatter.type === DocType.Component && !frontmatter.category) {
    throw new Error(`Component docs must have a category. Path: ${path}`);
  }

  if (frontmatter.type === DocType.Component && (!frontmatter.classes || frontmatter.classes.length === 0)) {
    throw new Error(`Component docs must have at least one class. Path: ${path}`);
  }

  return { ...frontmatter, source: await serialize(content) };
}

export async function getAllDocs(path: string): Promise<Doc[]> {
  const docs: Doc[] = [];

  const items = await fs.readdir(path, { withFileTypes: true });

  for (const item of items) {
    if (item.isDirectory()) {
      const newDocs = await getAllDocs(`${path}/${item.name}`);
      docs.push(...newDocs);
    } else if (item.isFile() && item.name.endsWith(".docs.mdx")) {
      const newDoc = await readDoc(`${path}/${item.name}`);
      docs.push(newDoc);
    }
  }

  const duplicates = docs.filter((doc, index) => docs.findIndex((d) => d.title === doc.title) !== index);
  if (duplicates.length > 0)
    throw new Error(`Duplicate docs found: ${duplicates.map((d) => d.title).join(", ")}. The title of each doc must be unique.`);

  return docs;
}
