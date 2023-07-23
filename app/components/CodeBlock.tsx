import { CopyBlock, dracula as theme } from "react-code-blocks";

export default function CodeBlock({
  text = "",
  language = "python",
  wrapLongLines = true,
  onCopy = () => {},
  ...props
}) {
  return (
    <CopyBlock
      text={text}
      language={language}
      // defaults
      theme={{ mode: "dark", ...theme }}
      showLineNumbers
      wrapLongLines={wrapLongLines}
      codeBlock={false}
      copied={false}
      onCopy={onCopy}
      // allow overrides
      {...props}
    />
  );
}
