import Link from 'next/link';
import { getSortedPosts } from '../../lib/posts';

const BlogIndex = ({ allPostsData }) => {
  return (
    <div className="max-w-screen-md mx-auto grid grid-flow-col gap-4 mt-10">
          {allPostsData.map(({ slug, date, title, excerpt }) => (
            <div key={slug} className="rounded-md shadow-sm p-4">
                  <Link key={slug} href="/Impara/[slug]" as={`/Impara/${slug}`} className="cursor-pointer">
                      <h1>
                        {title}
                      </h1>
                  </Link>
                  <p>{excerpt}</p>
                  <small>{date}</small>
            </div>
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