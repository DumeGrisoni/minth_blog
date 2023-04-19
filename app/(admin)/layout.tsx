import '@/styles/globals.css';

export const metadata = {
  title: "Page de gestion d'articles",
  description:
    "Page de gestion d'articles, permettant de créer, modifier et supprimer des articles, utilisant Sanity.io sous forme de studio embarqué dans l'application directement.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
