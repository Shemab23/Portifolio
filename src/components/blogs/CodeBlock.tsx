import React from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

export function CodeBlock({ children, className }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);
  const language = className?.replace("language-", "") ?? "code";
  const codeText = String(children).trim();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative rounded-lg bg-app-border/10 border border-app-border/40 my-4">
      <div className="flex items-center justify-between px-4 py-2 border-b border-app-border/30">
        <span className="text-xs text-app-text/50">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs text-app-text/60 hover:text-app-brand transition-colors"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm">
        <code>{codeText}</code>
      </pre>
    </div>
  );
}
