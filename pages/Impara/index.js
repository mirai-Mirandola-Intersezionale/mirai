import Link from 'next/link';
import { getSortedPosts } from '../../lib/posts';

const BlogIndex = ({ allPostsData }) => {
  return (
    <>
          {allPostsData.map(({ slug, date, title, excerpt }) => (
            <div key={slug}>
              <li>
                <div>
                  <Link key={slug} href="/Impara/[slug]" as={`/Impara/${slug}`}>
                    <a>
                      <h1>
                        {title}
                      </h1>
                    </a>
                  </Link>

                  <div>{excerpt}</div>

                  <p>{date}</p>
                </div>
              </li>
            </div>
          ))}
    </>
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