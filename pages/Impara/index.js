import Link from 'next/link';
import { getSortedPosts } from '../../lib/posts';

const BlogIndex = ({ allPostsData }) => {
  return (
    <div className="max-w-screen-md mx-auto">
          {allPostsData.map(({ slug, date, title, excerpt }) => (
            <div key={slug} className="border-2 rounded-md shadow-md">
                  <Link key={slug} href="/Impara/[slug]" as={`/Impara/${slug}`}>
                    <a>
                      <h1>
                        {title}
                      </h1>
                    </a>
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