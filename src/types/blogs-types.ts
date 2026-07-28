import type { StaticImageData } from 'next/image';

export type ContentSectionType = 'paragraph' | 'heading' | 'bulletList';

export interface ContentSection {
  type: ContentSectionType;
  content: string | string[];
}

export interface BlogItem {
  imgSrc: string | StaticImageData;
  category: string;
  title: string;
  time?: string;
  contentSections?: ContentSection[];
}
