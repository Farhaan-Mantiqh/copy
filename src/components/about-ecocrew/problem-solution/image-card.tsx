'use client';

import type { StaticImageData } from 'next/image';

type ImageCardProps = {
  image: StaticImageData | string;
  title: string;
  description: string;
};

export default function ImageCard({
  image,
  title,
  description,
}: ImageCardProps): JSX.Element {
  return (
    <div className="imageCard relative">
      <img
        src={
          typeof image === 'string' ? image : (image as { src: string })?.src
        }
        alt="problem"
        className="h-full max-h-[670px] w-full max-w-[1280px] rounded object-cover"
        width={1280}
        height={670}
      />
      <div className="absolute bottom-5 left-5 z-10 flex max-w-[630px] flex-col gap-5 bg-white px-8 py-12">
        <h5 className="sub-heading flex gap-2">
          The <span className="text-ecocrewPrimary">{title}</span>
          {title === 'Good work' && (
            <p>
              and the <span className="text-ecocrewPrimary"> reward</span>
            </p>
          )}
        </h5>
        <p>{description}</p>
      </div>
    </div>
  );
}
