import { loadDigests, loadDigest } from "@/lib/digests";
import Link from "next/link";
import DigestView from "@/components/DigestView";

export const dynamicParams = false;

export function generateStaticParams() {
  return loadDigests().map((d) => ({ date: d.date }));
}

export default function DigestPage({ params }) {
  const d = loadDigest(params.date);
  if (!d) return notFound();
  const all = loadDigests();
  const i = all.findIndex((x) => x.date === params.date);
  const prev = all[i + 1];
  const next = all[i - 1];

  return (
    <div className="min-h-screen">
      <header className="border-b border-white/10 bg-black/40 backdrop-blur sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-5 py-4 flex items-center justify-between">
          <Link href="/" className="text-sm text-white/60 hover:text-white">
            ← Archive
          </Link>
          <span className="text-xs text-white/40 font-mono">{d.date}</span>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-5 py-10">
        <DigestView markdown={d.body} />
        <nav className="mt-16 flex justify-between text-sm">
          {prev ? (
            <Link href={`/digest/${prev.date}`} className="text-white/60 hover:text-white">
              ← {prev.date}
            </Link>
          ) : <span />}
          {next ? (
            <Link href={`/digest/${next.date}`} className="text-white/60 hover:text-white">
              {next.date} →
            </Link>
          ) : <span />}
        </nav>
      </main>
    </div>
  );
}

function notFound() {
  return <div className="min-h-screen grid place-items-center text-white/50">Digest introuvable</div>;
}
