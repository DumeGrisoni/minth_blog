import Image from 'next/image';
import urlFor from '@/lib/urlFor';
import ClientRoute from './ClientRoute';

type Props = {
  posts: Post[];
};

const PostList = ({ posts }: Props) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-1">
      {posts.map((post) => (
        <ClientRoute key={post._id} route={`/article/${post.slug.current}`}>
          <div className="max-w-[450px] bg-white flex justify-center flex-col items-center rounded overflow-hidden shadow-md shadow-myblack m-4 p-4 hover:bg-mywhite hover:scale-105 transition cursor-pointer">
            <Image
              className=" mb-2 shadow-sm shadow-myblack w-[350px] h-[350px] rounded  object-cover object-center"
              src={urlFor(post.mainImage).url()}
              width={350}
              height={350}
              alt={`image de ${post.title}`}
            />

            <div className="w-full">
              {/* AUTEUR */}
              <div className="px-6 py-4 flex flex-col justify-center items-start h-[150px]">
                <h1 className="font-bold text-2xl mb-2 font-serif ">
                  {post.title}
                </h1>
                <p className="text-mygrey font-sans ">
                  <i>{post.description}</i>
                </p>
              </div>
              <div>
                <hr className="border-myblue" />

                {/* CONTENU  */}
                <div className="px-6 pt-4 pb-2 ">
                  <span className="px-3 py-1 text-sm font-semibold  text-myblack ">
                    {post.author.name}
                  </span>
                  {'-'}
                  <span className="px-3 py-1 text-sm font-light  italic text-mygrey ">
                    {new Date(post._createdAt).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <span className=" px-6 py-1 text-sm font-light  text-mygrey flex justify-start items-center ">
                  {post.categories.map((category) => (
                    <span
                      key={category._id}
                      className="bg-myblue rounded-full py-1 px-2 text-xs font-light text-myblack mr-2"
                    >
                      {category.title}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </ClientRoute>
      ))}
    </div>
  );
};

export default PostList;
