import type { StaticImageData } from 'next/image';
export interface LandingPageTypes {
  description: string;
  buttonText: string;
  landingImages: LandingImagesTypes[];
}
export interface LandingImagesTypes {
  imgSrc: StaticImageData | string;
  text: string;
  imgBottom: StaticImageData | string;
}
export interface LandingCarouselItem {
  title: string;
  imageSrc: StaticImageData | string;
  icon: StaticImageData | string;
}
export interface HowEcocrewWorks {
  title: string;
  description: string;
  imgSrc: StaticImageData | string;
  width: string;
}
export interface InsightsMarqueeItem {
  title: string;
  imgSrc: StaticImageData | string;
}

export interface InsightsCarouselItem {
  imgSrc: StaticImageData | string;
  total: string;
  title: string;
}

export interface RecyclableDataItem {
  title: string;
  highlightTitle: string;
  description: string;
  imgSrc: StaticImageData | string;
}

export interface TestimonialItem {
  profile: StaticImageData | string;
  colon: StaticImageData | string;
  comma: StaticImageData | string;
  review: string;
  name: string;
}

export interface PeopleSaysItem {
  link: string;
  title: string;
}

export interface EcoMapsItem {
  percent: number;
  color: string;
  title: string;
  Description: string;
}

export interface EcocrewNewsTypes {
  title: string;
  news: NewsTypes[];
}

export interface NewsTypes {
  image: StaticImageData | string;
  link: string;
}
