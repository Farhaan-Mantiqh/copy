'use client';
import EcocrewTitle from '@/components/common/ecocrew-title';
import { highlightText } from '@/lib/constant';
import { ecocrewNews } from '@/overallData/home-constant';
import { NewsTypes } from '@/types/home-types';
import Link from 'next/link';

export default function EcocrewNews(): JSX.Element {
  return (
    <div className="px-5 pt-12 md:px-[5.556%] md:pt-16">
      <EcocrewTitle title="PRESS MENTIONS & MEDIA FEATURES" />
      <h3 className="recTitle flex flex-wrap items-center justify-center gap-x-2 pb-5 pt-5 leading-8 md:px-6 md:pb-16 md:pt-10 md:leading-[3.25rem]">
        {highlightText(ecocrewNews?.title, 'title')}
      </h3>

      <div
        className={`flex flex-col items-center justify-center gap-5 md:flex-row lg99:gap-16`}>
        {ecocrewNews?.news?.map((item: NewsTypes, index: number) => {
          return (
            <Link key={index} href={item?.link}>
              <img
                src={
                  typeof item?.image === 'string'
                    ? item?.image
                    : (item?.image as { src: string })?.src
                }
                alt="newsChannels"
                className={`h-full max-h-20 w-full md:max-h-28 ${
                  index === 1
                    ? 'max-w-md border-x border-y-0 border-gainsboro md:border-solid'
                    : 'max-w-20 md:max-w-28'
                } object-cover`}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
