import cx from 'classnames';
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark as theme } from "react-syntax-highlighter/dist/cjs/styles/prism";
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";

SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('bash', bash);

export default function Code({
  className = '',
  text = "",
  language = "python",
}: {
  className?: string;
  text?: string;
  language?: 'python' | 'bash';
}) {
  return (
    <SyntaxHighlighter
      className={cx(className, '!mt-0')}
      showLineNumbers
      wrapLongLines
      language={language}
      style={theme}
    >
      {text}
    </SyntaxHighlighter>
  );
}
