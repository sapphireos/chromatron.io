import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark as theme } from "react-syntax-highlighter/dist/cjs/styles/prism";
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";

SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('bash', bash);

export default function Code({
  text = "",
  language = "python",
}: {
  text?: string;
  language?: 'python' | 'bash';
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
