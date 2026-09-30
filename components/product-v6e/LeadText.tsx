import * as React from "react";

/**
 * Renders a locked string with the label before the first colon in bold.
 * Every character (including the colon and the exact spacing) is preserved —
 * this only changes weight, not content.
 */
export function LeadText({ text, className = "" }: { text: string; className?: string }) {
  const idx = text.indexOf(":");
  if (idx === -1) return <p className={className}>{text}</p>;
  const label = text.slice(0, idx + 1); // include the colon
  const rest = text.slice(idx + 1); // includes the following space, preserved
  return (
    <p className={`whitespace-pre-wrap ${className}`}>
      <span className="font-bold text-starry">{label}</span>
      <span>{rest}</span>
    </p>
  );
}
