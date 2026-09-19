import { loadDigests } from "@/lib/digests";
import Link from "next/link";

export default function Home() {
  const all = loadDigests().sort((a, b) => b.date.localeCompare(a.date));
  const latest = all[0];

  return (
    <div className="min-h-screen">
      <header className="border-b border-white/10">
        <div className="max-w-3xl mx-auto px-5 py-8">
          <div className="flex items-center gap-3 rise-in">
            <span className="text-2xl">🛰️</span>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Cellule de veille techno</h1>
              <p className="text-sm text-white/40">Abdoulaye · WISP/ISP Afrique de l'Ouest · IA &amp; réseaux</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-5 py-10">
        {latest ? (
          <Link
            href={`/digest/${latest.date}`}
            className="card card-hero block p-6 mb-12 rise-in"
          >
            <div className="flex items-baseline justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-violet-400">Aujourd'hui</span>
              <span className="text-xs text-white/40">{latest.date}</span>
            </div>
            <p className="mt-3 text-lg font-semibold">{latest.headline}</p>
            {latest.count != null && (
              <p className="mt-2 text-sm text-white/45">{latest.count} items · score ≥ 6 · dédoublonné 14 j</p>
            )}
            <span className="mt-4 inline-block text-sm text-violet-400">Lire le briefing →</span>
          </Link>
        ) : (
          <div className="card p-6 mb-12 text-white/50 rise-in">
            Premier briefing en cours de génération. Revenez demain matin.
          </div>
        )}

        <h2 className="text-sm font-mono uppercase tracking-wider text-white/40 mb-4">Archive</h2>
        {all.length <= 0 ? (
          <p className="text-white/30 text-sm">Aucun archive pour l'instant.</p>
        ) : (
          <ul className="stagger">
            {all.map((d) => (
              <li key={d.date}>
                <Link
                  href={`/digest/${d.date}`}
                  className="row-archive flex items-baseline justify-between gap-4 py-2.5 px-3 -mx-3 rounded-lg group"
                >
                  <span className="font-mono text-xs text-white/45 group-hover:text-white/80">{d.date}</span>
                  <span className="text-sm text-white/70 group-hover:text-white text-right">{d.headline}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>

      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-3xl mx-auto px-5 py-6 text-xs text-white/30">
          Cellule de veille · 3 agents + 1 éditeur · sources gratuites · statut de fiabilité sur chaque item
        </div>
      </footer>
    </div>
  );
}
