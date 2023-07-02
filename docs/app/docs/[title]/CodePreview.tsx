import { FC, PropsWithChildren } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";

interface CodePreviewProps {
  title: string;
}

const CodePreview: FC<PropsWithChildren<CodePreviewProps>> = ({ title, children }) => {
  return (
    <div>
      {title}
      {children}
      <pre className="bg-code text-code rounded-md p-4 text-sm">
        <code>{reactElementToJSXString(children)}</code>
      </pre>
    </div>
  );
};

export default CodePreview;
