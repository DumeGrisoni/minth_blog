import '@/styles/globals.css';
import Navbar from '@/components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta
          name="google-site-verification"
          content="yo6Wdr8XFqeQzfzZQ5CMsvtuADMht-fmo6BxA_OzeEw"
        />
      </head>
      <body className="bg-mywhite">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
