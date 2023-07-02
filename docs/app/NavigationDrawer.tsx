"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdMouse, MdChat } from "react-icons/md";

import { Doc, DocType } from "../utils/io";

interface NavigationDrawerProps {
  docs: Doc[];
}

const NavigationDrawer: FC<NavigationDrawerProps> = async ({ docs }) => {
  const pathname = usePathname();

  const categories = Array.from(new Set(docs.filter((doc) => doc.type === DocType.Component).map((doc) => doc.category)));

  return (
    <nav className="nav-drawer">
      {docs
        .filter((doc) => doc.type === DocType.Docs)
        .map((doc) => {
          const path = `/docs/${doc.title.replace(" ", "-")}`;

          return (
            <Link href={path} className={`nav-drawer-item ${pathname === path ? "active" : ""}`} key={doc.title}>
              {doc.title.charAt(0).toUpperCase() + doc.title.slice(1).toLowerCase()}
            </Link>
          );
        })}
      {categories.map((category) => {
        const categoryDocs = docs.filter((doc) => doc.type === DocType.Component && doc.category === category);
        if (categoryDocs.length === 0) return;

        return (
          <>
            <h4 className="nav-drawer-heading">
              {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
            </h4>
            {categoryDocs.map((doc) => {
              const path = `/docs/${doc.title.replace(" ", "-")}`;
              return (
                <Link href={path} className={`nav-drawer-item ${pathname === path ? "active" : ""}`} key={doc.title}>
                  {doc.title.charAt(0).toUpperCase() + doc.title.slice(1).toLowerCase()}
                </Link>
              );
            })}
          </>
        );
      })}
    </nav>
  );
};

export default NavigationDrawer;
