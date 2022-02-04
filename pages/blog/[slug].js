import { MDXRemote } from 'next-mdx-remote';
import { getFileBySlug, getFilesFrom } from '@Lib/mdx';
import { MDXComponents } from '@Components/Mdx';

export default function Post({ source, frontmatter }) {
  return (
    <MDXRemote {...source} components={MDXComponents} />
  );
}

export async function getStaticProps({ params }) {  
  const { source, frontmatter } = await getFileBySlug({ slug: params.slug });

  return {
    props: {
      source,
      frontmatter,
    }
  }
}

export async function getStaticPaths() {
  const posts = await getFilesFrom('blog');
  const paths = posts.map(post => (
    { params: { slug: post.replace(/\.mdx$/, '') } }
  ));

  return {
    paths,
    fallback: false,
  }
}