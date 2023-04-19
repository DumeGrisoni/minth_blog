'use client';
import { type UsePreview } from '@sanity/preview-kit';
import { definePreview } from 'next-sanity/preview';
import { projectId, dataset } from '@/lib/sanity.client';

function onPublicAccessOnly() {
  throw new Error(`Impossible de voir le preview si vous n'êtes pas connecté`);
}

if (!projectId || !dataset) {
  throw new Error(
    `Il manque des variables d'environnement pour le preview (projectId ou dataset), vérifiez que vous avez bien configuré les fichiers .env.local ou sanity.json`
  );
}

export const usePreview: UsePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
});
