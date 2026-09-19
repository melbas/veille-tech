# Système de design — veille-tech

Inspiré d'**Emil Kowalski** (design engineering, ex-Vercel/Linear). Les principes
sont dans la skill `emil-design-eng` ; ce document est l'application concrète
sur ce projet. **Ce fichier est la source de vérité.**

## Stack

- **Next.js 15** static export (`output: export`), React 19
- **Tailwind CSS v4** (`@import "tailwindcss"`, config dans `app/globals.css`)
- **react-markdown** + remark-gfm (rendu des digests)
- **Hébergement** : GitHub Pages, basePath `/veille-tech`
- Aucune librairie d'animation. **CSS seulement** — les animations CSS tournent
  hors du thread principal, elles restent fluides même quand le navigateur charge.

## Palette

Neutre chaud (`#09090b` → nuances blanc/opacity) + **violet `#8b5cf6`** comme
seul accent. L'accent est un *signal* (lire le briefing, un lien), jamais de la
décoration. Saturations faibles, contrastes élevés — c'est un outil de lecture
quotidienne, pas un portfolio.

| Token | Valeur | Usage |
|---|---|---|
| `--bg` | `#09090b` | fond |
| `--bg-elevated` | `#101013` | header sticky |
| `--surface` | `#ffffff08` | cartes |
| `--surface-hover` | `#ffffff0f` | cartes au survol |
| `--border` | `#ffffff14` | bordures |
| `--border-hover` | `#ffffff26` | bordures au survol |
| `--fg` | `#fafafa` | texte principal |
| `--fg-muted` | `#ffffff73` | corps du digest |
| `--fg-subtle` | `#ffffff45` | métadonnées |
| `--fg-faint` | `#ffffff2e` | puces, placeholders |
| `--accent` | `#8b5cf6` | violet, signaux |
| `--accent-fg` | `#c4b5fd` | texte des liens |

### États de fiabilité (badges)

Ce sont les **seules** couleurs sémantiques — elles portent l'information du
statut (✅/🟡/🔴), elles ne s'utilisent nulle part ailleurs :

| Token | Valeur | Statut |
|---|---|---|
| `--ok` | `#34d399` | ✅ Confirmé |
| `--warn` | `#fbbf24` | 🟡 Probable |
| `--rumor` | `#fb7185` | 🔴 Rumeur |

## Motion — les règles

**Courbes custom, jamais les easings CSS natifs** (ils manquent de punch) :

```css
--ease-out:    cubic-bezier(0.23, 1, 0.32, 1);  /* entrées : rapide au départ */
--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1); /* mouvement à l'écran */
--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);  /* style iOS */
```

**Jamais `ease-in`** sur une interaction : ça retarde le moment exact que
l'utilisateur regarde. **Durées sous 300ms** pour tout UI.

| Élément | Durée | Courbe |
|---|---|---|
| Pression bouton (`:active`) | 140ms | `--ease-out` |
| Survol | 180ms | `--ease-out` |
| Carte | 220ms | `--ease-out` |
| Entrée page | 320ms | `--ease-out` |

### Patterns appliqués

- **Boutons** : `scale(0.97)` au `:active`. Un bouton qui ne réagit pas au
  doigt est un bouton cassé.
- **Carte hero** : au survol, `translateY(-2px)` + ombre qui se renforce.
  L'élément se soulève, il devient un objet.
- **Lignes d'archive** : au survol, fond + `translateX(2px)`. Discret, ça
  indique la cliquabilité sans bouger tout le tableau.
- **Entrée en scène** : `rise-in` — `translateY(10px)` + opacity, **jamais
  `scale(0)`** (rien n'apparaît de nulle part dans le monde réel).
- **Cascade** : `.stagger > *` retarde chaque item de 40→390ms (intervalle
  30-80ms). Rien n'arrive tout à la fois. **Le stagger est décoratif :
  il ne bloque jamais l'interaction.**
- **Survol réservé aux pointeurs précis** : `@media (hover: hover) and
  (pointer: fine)`. Sur tactile, le hover se déclenche au tap — les fausses
  positives sont exclues.
- **Reduced motion** : on coupe le mouvement, **on garde les transitions de
  couleur**. Réduire ≠ supprimer.

## Composants

| Classe | Rôle |
|---|---|
| `.card` | carte générique (fond, bordure, transitions de survol) |
| `.card-hero` | carte du dernier briefing + soulèvement |
| `.btn` | tout élément cliquable : `scale(0.97)` au press |
| `.row-archive` | ligne d'archive : fond + translation au survol |
| `.badge` + `.badge-ok/-warn/-rumor` | pastilles de fiabilité |
| `.rise-in` | apparition page |
| `.stagger` | conteneur à cascade (ses enfants s'animent en décalé) |
| `.digest` | le markdown rendu (titres, puces, liens, liens) |

## Rendu markdown (`.digest`)

Les digests arrivent en `.md`, rendus par `components/DigestView.js`. Le style
est dans `globals.css` sous `.digest` — **le composant ne stylise rien** : il ne
fait que brancher les éléments React sur les classes CSS. Une seule source de
vérité, zéro duplication.

## Ce qu'on ne fait pas (anti-patterns Emil)

- `transition: all` → on déclare les propriétés exactes
- `scale(0)` en entrée → `scale(0.95)` ou plus, avec opacity
- `ease-in` sur du UI → `--ease-out`
- Animations sur actions clavier (100+/jour) → **aucune animation**
- Keyframes sur éléments à déclenchement rapide → transitions CSS (interruptibles)
- Animer `width`/`height`/`padding` → **seulement** `transform` et `opacity`
- Survol sans media query tactile → gate `@media (hover: hover)`
- Tout apparaît d'un coup → stagger
- `transform-origin: center` sur un popover → ancré au trigger (sauf modales)

## Maintenance

- Un nouveau composant → classes dans `globals.css`, pas de style inline
- Un nouveau token → ajouté dans `:root` + documenté ici
- Les digests ne dépendent que du markdown — le design ne change jamais leur
  contenu, seulement son rendu
- **Zéro librairie JS d'animation**. CSS uniquement.
