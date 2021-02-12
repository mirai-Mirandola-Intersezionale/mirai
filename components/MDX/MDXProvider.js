import { MDXProvider } from "@mdx-js/react";
import Link from 'next/link'

export default function MDXCompProvider(props) {
  const state = {
    h1: (props) => <h1 {...props} />,
    h2: (props) => <h2 {...props} />,
    h3: (props) => <h3 {...props} />,
    h4: (props) => <h4 {...props} />,
    p: (props) => <p {...props} />,
    a: (props) => (
      <Link as="a" {...props} />
    )
  };

  return (
    <MDXProvider components={state}>
      <div {...props} />
    </MDXProvider>
  );
}