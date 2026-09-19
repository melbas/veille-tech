import fs from "node:fs";
import path from "node:path";

const DIGESTS_DIR = path.join(process.cwd(), "digests");

/** Lit digests/index.json (registre écrit par l'Éditeur à chaque publication). */
export function loadDigests() {
  const idx = path.join(DIGESTS_DIR, "index.json");
  if (!fs.existsSync(idx)) return [];
  try {
    const all = JSON.parse(fs.readFileSync(idx, "utf8"));
    return Array.isArray(all) ? all : [];
  } catch {
    return [];
  }
}

/** Charge un digest précis par date. */
export function loadDigest(date) {
  const f = path.join(DIGESTS_DIR, `${date}.md`);
  if (!fs.existsSync(f)) return null;
  const raw = fs.readFileSync(f, "utf8");
  const m = raw.match(/^#\s*(.+)$/m);
  return { date, title: m ? m[1] : date, body: raw };
}
