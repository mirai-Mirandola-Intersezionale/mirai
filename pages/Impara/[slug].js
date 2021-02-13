import Link from 'next/link'
import { NextSeo } from 'next-seo'

/** jsx jsx */
import { getAllPostSlugs, getPostdata } from "../../lib/posts"
import matter from "gray-matter"

// MDX rendering
import renderToString from "next-mdx-remote/render-to-string"
import hydrate from "next-mdx-remote/hydrate"

const components = {}

export default function Posts({ source, frontMatter }) {
const content = hydrate(source, {components});
  return (
    <>
      <NextSeo
        title={frontMatter.title}
      />
      <button><Link href="/Impara" as={`/Impara`}>Back button</Link></button>
      <div className="pt-4 max-w-screen-xl mx-auto">
        <h1>{frontMatter.title}</h1>
        <hr/>
        <p>{content}</p>
        <hr/>
        <div className="tags p-4 flex flex-row space-x-3">
          { 
          frontMatter.tags.map((tag) => 
            (
                <p key={tag} className="px-4 py-2 hover:text-gray-100 hover:bg-red-200 rounded-full border-2 border-gray-600 hover:border-red-500 w-max text-xs font-medium text-opacity-50 hover:shadow-md cursor-pointer transition-all">
                  {tag}
                </p>
            )
          )
          }
        </div>
      </div>
    </>
  );
}
export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false
  };
}
export async function getStaticProps({ params }) {
    const postContent = await getPostdata(params.slug);
    const { data, content } = matter(postContent);
    const mdxSource = await renderToString(content, {
      components,
      scope: data
    });
    return {
      props: {
        source: mdxSource,
        frontMatter: data
      }
    };
}