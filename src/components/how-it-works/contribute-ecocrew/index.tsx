'use client';

import { useEffect, useState } from 'react';
import { contributeOnEco } from '@/overallData/howItWorks-constant';
import { ContributeOnEcoItem } from '@/types/howItWorks-types';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

export default function ContrinuteOnEcocrew(): JSX.Element {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    api.on('select', () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  const handleProgressClick = (e: number): void => {
    if (!api) return;
    api.scrollTo(e);
  };

  const isCurrentSlide = (e: number): boolean => e === current;

  return (
    <>
      <h2 className="heading1 mx-auto max-w-[1440px] px-5 pb-5 pt-[92px] leading-[1.8rem] md:px-[5.556%] md:pb-8 md:pt-[122px] md:leading-[3.9rem]">
        How you can contribute on{' '}
        <span className="text-ecocrewPrimary">Ecocrew</span>
      </h2>

      <div className="howItWorksBg md:bg-commonGradient">
        <div className="mx-auto max-w-[1440px]">
          <div className="md:pt-18 lg:pt-22 px-4 pb-4 pt-8 md:px-[5.556%] md:pb-0">
            {/* ----------------------- DESKTOP GRID ----------------------- */}

            <div className="hidden grid-cols-3 gap-4 md:grid md:gap-6 lg:gap-6">
              {contributeOnEco.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  className="relative flex flex-col gap-2 rounded-[20px] border-[1px] border-solid border-dark p-3 pb-5 md:gap-3 md:rounded-b-none md:border-b-0 md:px-3 md:py-3 lg:gap-8 lg:p-4 lg:pb-7">
                  <div className="relative h-[160px] w-full overflow-hidden rounded-2xl md:h-[180px] lg:h-[254px]">
                    <div className="absolute z-10 flex items-center justify-center bg-white/10 px-[19px] py-[20px] text-lightGrey backdrop-blur-[10px]">
                      <span className="text-[20px] font-semibold text-white md:text-[22px] lg:text-[24px]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <img
                      src={
                        typeof item?.imgSrc === 'string'
                          ? item?.imgSrc
                          : (item?.imgSrc as { src: string })?.src
                      }
                      alt="Contribute on Ecocrew"
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      width={500}
                      height={300}
                    />
                  </div>
                  <p className="sub-heading w-full text-sm text-dark md:text-base lg:text-3xl">
                    {item?.title}
                  </p>
                  <p className="pb-3 pt-2 text-sm font-normal leading-5 text-darkLow md:pb-4 md:text-sm md:leading-5 lg:pb-8 lg:text-base lg:leading-6">
                    {item?.description}
                  </p>
                </div>
              ))}
            </div>

            {/* ----------------------- MOBILE CAROUSEL ----------------------- */}
            <div className="block md:hidden">
              <Carousel setApi={setApi} opts={{ align: 'center', loop: false }}>
                <CarouselContent className="-ml-0 gap-3">
                  {contributeOnEco.map(
                    (item: ContributeOnEcoItem, index: number) => (
                      <CarouselItem
                        key={index}
                        className="overflow-hidden rounded-[16px] border border-gainsboro bg-white pl-0">
                        <div>
                          <div className="relative h-[350px] w-full overflow-hidden rounded-t-2xl">
                            <div className="absolute z-10 flex items-center justify-center bg-white/10 px-[19px] py-[20px] text-lightGrey backdrop-blur-[10px]">
                              <span className="text-[24px] font-semibold text-white">
                                {String(index + 1).padStart(2, '0')}
                              </span>
                            </div>

                            <img
                              src={
                                typeof item?.imgSrc === 'string'
                                  ? item?.imgSrc
                                  : (item?.imgSrc as { src: string })?.src
                              }
                              alt="Contribute on Ecocrew"
                              className="h-full w-full object-cover"
                              width={500}
                              height={300}
                            />
                          </div>

                          <div className="px-4 pb-5 pt-4">
                            <p className="sub-heading text-dark">
                              {item?.title}
                            </p>
                            <p className="pt-2 text-sm leading-5 text-darkLow">
                              {item?.description}
                            </p>
                          </div>
                        </div>
                      </CarouselItem>
                    ),
                  )}
                </CarouselContent>
              </Carousel>

              {/* ---- PROGRESS INDICATOR ---- */}
              <div className="mx-auto flex items-center justify-center gap-1 pt-5">
                {Array.from({ length: contributeOnEco.length }).map(
                  (_, index) => (
                    <button
                      key={index}
                      onClick={() => handleProgressClick(index)}
                      className={cn(
                        'rounded-full border-none p-0 transition-all duration-300',
                        isCurrentSlide(index) ? 'w-7' : 'w-[10px]',
                      )}>
                      <Progress
                        value={isCurrentSlide(index) ? 100 : 0}
                        className={cn(
                          'w-full transition-all duration-300',
                          isCurrentSlide(index)
                            ? 'h-[6px] rounded-full'
                            : 'h-[10px] rounded-full',
                        )}
                        indicatorClassName="bg-black"
                      />
                    </button>
                  ),
                )}
              </div>
            </div>

            {/* ------------------------------------------------------------ */}
          </div>
        </div>
      </div>
    </>
  );
}
