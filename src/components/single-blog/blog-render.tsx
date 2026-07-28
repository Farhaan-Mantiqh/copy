'use client';
import type { ContentSection } from '@/types/blogs-types';

interface BlogContentProps {
  content: ContentSection[];
}

export default function BlogContentRenderer({
  content,
}: BlogContentProps): JSX.Element {
  return (
    <>
      {content.map((section, idx) => {
        switch (section?.type) {
          case 'paragraph':
            return (
              <p
                key={idx}
                className="blogDesText font-normal leading-4 md:leading-6">
                {section?.content as string}
              </p>
            );
          case 'heading':
            return (
              <h3 key={idx} className="blogDesText mb-1 mt-6 font-semibold">
                {section?.content as string}
              </h3>
            );
          case 'bulletList':
            return (
              <ul key={idx} className="my-4 list-disc pl-5">
                {(section?.content as string[]).map((item, i) => (
                  <li key={i} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            );
        }
      })}
    </>
  );
}
