import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function DigestView({ markdown }) {
  return (
    <article className="digest">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
        {markdown}
      </ReactMarkdown>
    </article>
  );
}

/* Les classes sont dans globals.css (.digest, .badge-*) — le composant ne
   fait que brancher les éléments. Les emojis ✅🟡🔴 deviennent des badges. */
const mdComponents = {
  a: ({ children, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
};
