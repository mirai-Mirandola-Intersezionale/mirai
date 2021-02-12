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
      <div className="pt-4 max-w-screen-xl mx-auto">
        <h1>{frontMatter.title}</h1>
        <hr/>
        <p>{content}</p>
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