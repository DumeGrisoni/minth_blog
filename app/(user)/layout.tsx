import '@/styles/globals.css';
import Navbar from '@/components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-mywhite">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
