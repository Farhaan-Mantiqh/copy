import type { StaticImageData } from 'next/image';

export interface aboutEcocrewTypes {
  problemSolution: {
    imageCard1: {
      title: string;
      description: string;
      image: StaticImageData | string;
    };
    imageCard2: {
      title: string;
      description: string;
      image: StaticImageData | string;
    };
    imageCard3: {
      title: string;
      description: string;
      image: StaticImageData | string;
    };
  };
  problemSolutionCarousel: ProblemSolutionCarouselTypes[];
  journey: JourneyTypes[];
  founders: {
    title: string;
    description: string;
    aboutFounders: AboutFoundersTypes[];
  };
}

export interface AboutFoundersTypes {
  name: string;
  role: string;
  image: StaticImageData | string;
  description: string;
}

export interface JourneyTypes {
  title: string;
  journeyPoints: JourneyPointsTypes[];
  year: string;
}

export interface JourneyPointsTypes {
  title?: string;
  description?: string;
  image?: StaticImageData | string;
  type?: string;
  values?: string[];
  order?: string;
  className?: string;
}

export interface ProblemSolutionCarouselTypes {
  title: string;
  description: string;
  image: StaticImageData | string;
}
