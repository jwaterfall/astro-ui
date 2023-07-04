import { FC, PropsWithChildren } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";

interface CodePreviewProps {
  title: string;
  stretchPreview?: boolean;
}

const CodePreview: FC<PropsWithChildren<CodePreviewProps>> = ({ title, children, stretchPreview }) => {
  return (
    <section className="my-8">
      <h2 className="text-title-medium text-on-surface mb-2">{title}</h2>
      <div className={`card flex gap-4 p-4 ${stretchPreview ? "flex-col" : "flex-wrap items-center justify-center"}`}>
        {children}
        {/* <pre className="bg-code text-code rounded-md p-4 text-sm">
          <code>{reactElementToJSXString(children)}</code>
        </pre> */}
      </div>
    </section>
  );
};

export default CodePreview;
