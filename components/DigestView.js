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

const mdComponents = {
  h1: ({ children }) => <h1 className="text-3xl font-bold tracking-tight mb-6">{children}</h1>,
  h2: ({ children }) => (
    <h2 className="text-lg font-semibold mt-12 mb-4 text-white/90 flex items-center gap-2">
      <span className="h-px w-6 bg-white/20" /> {children}
    </h2>
  ),
  h3: ({ children }) => <h3 className="text-base font-semibold mt-6 mb-2 text-white/80">{children}</h3>,
  p: ({ children }) => <p className="text-white/70 leading-relaxed mb-4">{children}</p>,
  li: ({ children }) => <li className="mb-2 text-white/75 leading-relaxed">{children}</li>,
  ul: ({ children }) => <ul className="space-y-1 mb-6 list-disc list-inside marker:text-white/25">{children}</ul>,
  a: ({ children, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer"
       className="text-violet-400 hover:text-violet-300 underline decoration-white/20 underline-offset-2">
      {children}
    </a>
  ),
  code: ({ children }) => <code className="font-mono text-xs bg-white/5 px-1.5 py-0.5 rounded">{children}</code>,
  hr: () => <hr className="border-white/10 my-8" />,
  strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-white/15 pl-4 text-white/50 italic my-4">{children}</blockquote>
  ),
};
