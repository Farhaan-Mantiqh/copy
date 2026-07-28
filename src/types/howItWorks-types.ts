import type { StaticImageData } from 'next/image';

export interface ContributeOnEcoItem {
  imgSrc: StaticImageData | string;
  title: string;
  space?: boolean;
  description: string;
}

export interface OurProcessItem {
  image: StaticImageData | string;
  title: string;
  step: string;
}

export interface CompleteJourneyItem {
  icon: StaticImageData | string;
  title: string;
  availability: string;
  percentage: string;
}

export interface ActionProps {
  action: CompleteJourneyItem;
  imageClasses: string;
  isComingSoon: boolean;
}
