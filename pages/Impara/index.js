import Link from 'next/link';
import { getSortedPosts } from '../../lib/posts';

const BlogIndex = ({ allPostsData }) => {
  return (
    <div className="max-w-screen-md mx-auto grid grid-flow-row gap-4 mt-10 px-4">
          {allPostsData.map(({ slug, date, title, excerpt }) => (
            <Link key={slug} href="/Impara/[slug]" as={`/Impara/${slug}`}>
              <div key={slug} className="rounded-md shadow-sm p-4 cursor-pointer">
                    <h2 className="text-2xl">
                      {title}
                    </h2>
                    <p className="text-base mt-2 text-black text-opacity-50">{excerpt}</p>
                    <p className="text-xs mt-1">{date}</p>
              </div>
            </Link>
          ))}
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