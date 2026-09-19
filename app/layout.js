import "./globals.css";

export const metadata = {
  title: "Veille techno — Abdoulaye",
  description: "Cellule de veille technologique : IA, réseaux WISP, concurrence Wi-Fi SaaS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
