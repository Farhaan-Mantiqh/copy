'use client';

import { useEffect, useState } from 'react';
import { ourProcess } from '@/overallData/howItWorks-constant';
import { OurProcessItem } from '@/types/howItWorks-types';

import EcocrewTitle from '@/components/common/ecocrew-title';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

export default function OurProcess(): JSX.Element {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    if (!api) return;

    api.on('select', () => {
      const snap = api.selectedScrollSnap();
      if (typeof snap === 'number') {
        setCurrent(snap);
      }
    });
  }, [api]);

  const handleProgressClick = (e: number): void => {
    if (!api) return;
    api.scrollTo(e);
  };
  const isCurrent = (index: number): boolean => index === current;

  return (
    <>
      <div className="mx-auto max-w-[1440px]">
        <div className="px-4 pt-6 md:px-[5.556%] md:pt-16">
          <EcocrewTitle title="OUR PROCESS" />
          <h2 className="recTitle pb-5 pt-5 text-center font-medium leading-8 md:pb-12 md:pt-10 md:leading-[3.9rem]">
            Follow the <span className="text-ecocrewPrimary">ecofriendly</span>{' '}
            path, from concept to impactful change
          </h2>
        </div>
      </div>

      <div className="bg-[#F1F1F1]">
        <div className="mx-auto max-w-[1440px] px-4 py-10 md:px-[5.556%] xl:px-[11.5%]">
          <div className="hidden grid-cols-3 gap-5 md:grid md:gap-8">
            {ourProcess.map((item: OurProcessItem, index) => (
              <div
                key={index}
                className="relative flex h-[300px] flex-col items-center justify-end overflow-hidden rounded-[20px] border border-solid border-gainsboro bg-white md:h-[300px] lg:h-[400px]">
                <img
                  src={
                    typeof item.image === 'string'
                      ? item.image
                      : (item.image as { src: string })?.src
                  }
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="sub-heading relative z-40 w-full px-6 pb-6">
                  <p className="inline-block rounded-full bg-white px-4 py-1.5 text-sm font-medium uppercase text-black">
                    {item.step}
                  </p>
                  <p className="pt-2 text-[18px] font-medium text-white md:pt-2 lg:pt-0 lg:text-[20px]">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="block md:hidden">
            <Carousel setApi={setApi} opts={{ align: 'center', loop: false }}>
              <CarouselContent className="-ml-0 gap-4">
                {ourProcess.map((item: OurProcessItem, index) => (
                  <CarouselItem
                    key={index}
                    className="overflow-hidden rounded-[20px] border border-gainsboro bg-white pl-0">
                    <div className="relative h-[360px] w-full">
                      <img
                        src={
                          typeof item.image === 'string'
                            ? item.image
                            : (item.image as { src: string })?.src
                        }
                        alt={item.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />

                      {/* Step Pill */}
                      <div className="absolute bottom-14 left-4 z-20 rounded-full bg-white px-4 py-1.5 text-sm font-medium uppercase text-black">
                        {item.step}
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-5">
                        <p className="text-[18px] font-semibold text-white drop-shadow">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="mx-auto flex items-center justify-center gap-1 pt-5">
              {Array.from({ length: ourProcess.length }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleProgressClick(i)}
                  className={cn(
                    'rounded-full border-none p-0 transition-all duration-300',
                    isCurrent(i) ? 'w-7' : 'w-[10px]',
                  )}>
                  <Progress
                    value={isCurrent(i) ? 100 : 0}
                    className={cn(
                      'w-full transition-all duration-300',
                      isCurrent(i)
                        ? 'h-[6px] rounded-full'
                        : 'h-[10px] rounded-full',
                    )}
                    indicatorClassName="bg-black"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
