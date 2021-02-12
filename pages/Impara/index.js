import Link from 'next/link';

//get methods and posts
import { getSortedPosts } from '../../lib/posts';


const BlogIndex = ({ allPostsData }) => {
  return (
      <div className="bg-red-100 h-screen">
        <div 
        className="max-w-screen-md mx-auto grid grid-flow-row gap-4 py-10 px-4"
        >
              {allPostsData.map(({ slug, date, title, excerpt }) => (
                <Link key={slug} href="/Impara/[slug]" as={`/Impara/${slug}`} >
                  <div key={slug} className="rounded-lg shadow-sm p-6 cursor-pointer bg-white">
                        <h2 className="text-2xl">
                          {title}
                        </h2>
                        <p className="text-base mt-2 text-black text-opacity-50">{excerpt}</p>
                        <p className="text-xs mt-1">{date}</p>
                  </div>
                </Link>
              ))}
        </div>
      </div>
  );
};
export default BlogIndex;

export async function getStaticProps() {
  const allPostsData = getSortedPosts();
  return {
    props: {
      allPostsData,
    },
  };
}