import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const currentDir = process.cwd();

export function getFilesFrom(dir) {
  return fs.readdirSync(path.join(currentDir, dir));
}

export async function getFileBySlug({ slug, dir = 'blog' }) {
  const mdxContent = fs.readFileSync(
    path.join(currentDir, dir, `${slug}.mdx`),
  );

  const { data, content } = matter(mdxContent);
  const source = await serialize(content, {});

  return {
    source,
    frontmatter: {
      slug,
      ...data,
    }
  };
}

export async function getAllFilesMetadata(fromDir = 'blog') {
  const files = getFilesFrom(fromDir);

  return files.reduce((filesMetadata, file) => {
    const mdxContent = fs.readFileSync(
      path.join(currentDir, fromDir, `${file}`),
      'utf-8',
    );

    const { data } = matter(mdxContent);

    return [
      ...filesMetadata,
      { ...data, slug: file.replace(/\.mdx$/, ''), }
    ];
  }, []);
}