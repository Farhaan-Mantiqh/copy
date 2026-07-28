import type { StaticImageData } from 'next/image';
import BlogInner from '@/components/single-blog';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { blogsData } from '@/overallData/blogs-constant';

type Props = {
  params: { 'blog-id': string[] };
};

const createSlug = (title: string): string =>
  title
    .toLowerCase()
    .replace(/[:\s]+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

export function generateStaticParams(): { 'blog-id': string[] }[] {
  return blogsData.map((blog) => ({
    'blog-id': [createSlug(blog.title)],
  }));
}

const resolveImageUrl = (img: string | StaticImageData): string =>
  typeof img === 'string' ? img : img.src;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // eslint-disable-next-line @typescript-eslint/await-thenable
  const paths = await params;
  const slug = decodeURIComponent(paths['blog-id'][0]);

  const blog = blogsData.find((blog) => createSlug(blog.title) === slug);

  if (!blog) {
    return Promise.resolve({
      title: 'Blog Not Found',
    });
  }

  const baseUrl = 'https://www.ecocrew.in';

  const fullUrl = `${baseUrl}/blogs/${slug}`;
  const imageUrl = `${typeof window !== 'undefined' ? window?.location?.hostname : baseUrl}${resolveImageUrl(blog.imgSrc)}`;

  return Promise.resolve({
    title: blog.title,
    description:
      typeof blog.contentSections?.[0]?.content === 'string'
        ? blog.contentSections[0].content
        : 'Read this blog',
    openGraph: {
      title: blog.title,
      description:
        typeof blog.contentSections?.[0]?.content === 'string'
          ? blog.contentSections[0].content
          : '',
      url: fullUrl,
      type: 'article',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description:
        typeof blog.contentSections?.[0]?.content === 'string'
          ? blog.contentSections[0].content
          : '',
      images: [imageUrl],
    },
  });
}

export default async function BlogDetailPage({
  params,
}: Props): Promise<JSX.Element> {
  // eslint-disable-next-line @typescript-eslint/await-thenable
  const paths = await params;
  const slug = decodeURIComponent(paths['blog-id']?.[0] || '');

  const blog = blogsData.find((blog) => createSlug(blog.title) === slug);

  if (!blog) {
    notFound();
  }

  return <BlogInner blog={blog} />;
}
