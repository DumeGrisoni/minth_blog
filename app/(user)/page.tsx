import { previewData } from 'next/headers';
import Header from '@/components/Header';
import PreviewSuspense from '@/components/PreviewSuspense';
import React from 'react';

export const metadata = {
  title: "Page d'accueil",
  description:
    'Page principale du blog affichant les articles les plus récents explicant le workflow utilisé pour la création de mes sites utilisant next, javascript, react, tailwind et CSS.',
};

export default function Home() {
  if (previewData()) {
    return (
      <div>
        <Header text="Preview des articles." title="Minth Blog" />
      </div>
    );
  }

  return (
    <div>
      <Header
        text="Tous les articles créés sont listés sur cette page."
        title="Minth Blog"
      />
    </div>
  );
}
