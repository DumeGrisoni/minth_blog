import { previewData } from 'next/headers';
import Header from '@/components/Header';
import React from 'react';
import { groq } from 'next-sanity';
import { sanityClient } from '@/lib/sanity.client';
import { PreviewSuspense } from 'next-sanity/preview';
import PostList from '@/components/PostList';

export const metadata = {
  title: "Page d'accueil",
  description:
    'Page principale du blog affichant les articles les plus récents explicant le workflow utilisé pour la création de mes sites utilisant next, javascript, react, tailwind et CSS.',
};

const getPosts = async () => {
  const query = groq`*[_type == "post"]{..., author ->,categories[]->} | order(_id)`;
  const posts = await sanityClient.fetch(query, {
    cache: 'force-cache',
  });

  return posts;
};

export default async function Home() {
  const posts = await getPosts();
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <Header text="Preview des articles." title="Minth Blog" />
            <p>Chargement en cours...</p>
          </div>
        }
      >
        aa
      </PreviewSuspense>
    );
  }

  return (
    <div>
      <Header
        text="Tous les articles créés sont listés sur cette page."
        title="Minth Blog"
      />
      <div className="mt-10">
        <PostList posts={posts} />
      </div>
    </div>
  );
}
