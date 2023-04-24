import Header from '@/components/Header';
import { sanityClient } from '@/lib/sanity.client';
import { groq } from 'next-sanity';
import Image from 'next/image';
import React from 'react';
import urlFor from '@/lib/urlFor';
import { PortableText } from '@portabletext/react';
import { TextComponent } from '@/components/TextComponent';

type Props = {
  params: {
    slug: string;
  };
};

const Post = async ({ params: { slug } }: Props) => {
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
        ...,
        author ->,
        categories[]->
        }`;

  const post: Post = await sanityClient.fetch(query, { slug });

  return (
    <article className="flex justify-center items-center flex-col">
      <Header title={post.title} text={post.description} />
      <section className=" mt-4">
        <div className="flex mb-4 justify-start items-center">
          <p className="font-bold text-sm">
            Créé le: {''}
            <span className="font-light italic">
              {new Date(post._createdAt).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </p>
          <p className="font-bold text-sm ml-4">
            Par: {''}
            <span className="font-light italic">{post.author.name}</span>
          </p>
        </div>
        <div className="flex justify-center items-center">
          {post.categories.map((category) => (
            <span
              key={category._id}
              className="mr-4 border border-myblack py-2 px-4 rounded-full font-light text-sm bg-myblue"
            >
              {category.title}
            </span>
          ))}
        </div>
      </section>
      <Image
        src={urlFor(post.mainImage).url()}
        alt={`Image principale de l'article ${post.title}`}
        width={600}
        height={400}
        className="my-10 shadow-lg rounded-lg "
      />
      <section className="max-w-[80%] my-10">
        <PortableText value={post.body} components={TextComponent} />
      </section>
    </article>
  );
};

export default Post;
