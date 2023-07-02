import { FC, PropsWithChildren } from "react";

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
        <main className="bg-surface-0 flex h-screen w-screen overflow-hidden">
          <div className="overflow-y-auto">
            <NavigationDrawer docs={docs} />
          </div>
          <div className="flex-1 overflow-y-auto p-4">{children}</div>
        </main>
      </body>
    </html>
  );
};

export default Layout;
