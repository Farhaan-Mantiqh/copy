import { ReactElement } from 'react';

export const colorText = [
  'beginning',
  'growth',
  'Heights',
  'future',
  'minds',
  'inspired',
  'publications',
  'Sustainability',
  'ecocoins',
  'ecofriendly',
  'ecotips',
  'Ecofriendly',
  'Growth',
  'Beginning',
  'Milestone',
  'Future',
  'tips',
];
export const highlightedLocations = [
  '50%',
  '10%',
  '25%',
  'JP',
  'Nagar',
  'Jaya',
  'Nagar',
  'Akshaya',
  'Banashankari',
  'Koramangala',
  'Electronic',
  'Basavanagudi',
  'City',
  'HSR',
  'Layout',
  'Whitefield',
  'Marathahalli',
  'Mahadevapura',
  'Hoodi',
  'Indiranagar',
  'Bellandur',
  'KR',
  'Puram',
  'Bommanahalli',
  'BTM',
  'Begur',
];

export const highlightText = (text: string, type: string): ReactElement[] => {
  return text.split(' ').map((word, index) => {
    const wordsToMatch = type === 'title' ? colorText : highlightedLocations;
    const isHighlighted = wordsToMatch.some((match) => word.includes(match));
    const textColor =
      type === 'title'
        ? isHighlighted
          ? 'text-ecocrewPrimary'
          : 'text-black'
        : isHighlighted
          ? 'text-black'
          : 'text-darkLow';

    return (
      <span key={index} className={`${textColor}`}>
        {word}
        {type === 'description' ? ' ' : ''}
      </span>
    );
  });
};

export const cloudfrontURL = process.env.NEXT_PUBLIC_IMAGE_URL;
