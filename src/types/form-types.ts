import type { StaticImageData } from 'next/image';

export interface FormTypes {
  title: string;
  description: string;
  image: StaticImageData | string;
}
