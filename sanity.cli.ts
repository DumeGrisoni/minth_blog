import { defineCliConfig } from 'sanity/cli';
import { loadEnvConfig } from '@next/env';

const projectId = process.env.NEXT_PUBLIC_SANITY_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

const dev = process.env.NODE_ENV !== 'production';
loadEnvConfig(__dirname, dev, { info: () => null, error: console.error });

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
});
