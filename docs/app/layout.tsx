import { FC, PropsWithChildren } from "react";
import { FaGithub, FaNpm } from "react-icons/fa";

import { getAllDocs } from "../utils/docs";
import NavigationDrawer from "./NavigationDrawer";

import "../styles.css";
import "../../src/components/index.css";

export const metadata = {
  title: "Astro UI",
  description: "A collection of Tailwind CSS styles to build components following the Material Design 3 guidelines.",
};

const Layout: FC<PropsWithChildren> = async ({ children }) => {
  const docs = await getAllDocs(process.cwd() + "/../src");

  return (
    <html lang="en" className="dark">
      <body>
        <main className="bg-surface-0 flex h-screen w-screen flex-col overflow-hidden">
          <header className="top-app-bar">
            <div className="top-app-bar-section">
              <h1 className="text-title-large text-on-surface p-4 font-bold">
                Astro<span className="text-primary">UI</span>
              </h1>
            </div>
            <div className="top-app-bar-section">
              <button className="btn btn-text btn-icon">
                <FaNpm size={18} />
              </button>
              <button className="btn btn-text btn-icon">
                <FaGithub size={18} />
              </button>
            </div>
          </header>
          <div className="flex flex-1 overflow-hidden ">
            <div className="overflow-y-auto">
              <NavigationDrawer docs={docs} />
            </div>
            <div className="flex-1 overflow-y-auto p-4">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
};

export default Layout;
