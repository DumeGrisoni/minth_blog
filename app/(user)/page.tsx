import Header from '@/components/Header';
import React from 'react';

export const metadata = {
  title: "Page d'accueil",
  description:
    'Page principale du blog affichant les articles les plus récents explicant le workflow utilisé pour la création de mes sites utilisant next, javascript, react, tailwind et CSS.',
};

function Home() {
  return (
    <div>
      <Header
        text="Tous les articles créés sont listés sur cette page."
        title="Minth Blog"
      />
    </div>
  );
}

export default Home;
