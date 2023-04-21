'use client';
import { usePreview } from '@/lib/sanity.preview';
import PostList from '@/components/PostList';

type Props = {
  query: string;
};

export default function PreviewPost({ query }: Props) {
  const posts = usePreview(null, query);
  return <PostList posts={posts} />;
}
