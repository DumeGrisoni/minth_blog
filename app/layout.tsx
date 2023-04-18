import Head from './head';
import '@/styles/globals.css';

export const metadata = {
  title: "Page d'accueil",
  description:
    'Page principale du blog créé avec Next.js, TypeScript et Tailwind CSS. Les données sont récupérées depuis Sanity.io.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Head />
        {children}
      </body>
    </html>
  );
}
