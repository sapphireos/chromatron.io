import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark as theme } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Code({
  text = "",
  language = "python",
}: {
  text?: string;
  language?: string;
}) {
  return (
    <SyntaxHighlighter
      showLineNumbers
      wrapLongLines
      language={language}
      style={theme}
    >
      {text}
    </SyntaxHighlighter>
  );
}
