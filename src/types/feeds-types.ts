import type { StaticImageData } from 'next/image';

export interface FeedConstantTypes {
  title: string;
  images: StaticImageData[];
  stories: StaticImageData[];
  feedSection: FeedSectionTypes[];
}

export interface FeedSectionTypes {
  category?: string;
  img: string;
  description: string;
}
