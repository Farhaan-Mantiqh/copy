'use client';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { highlightText } from '@/lib/constant';
import { aboutEcocrewData } from '@/overallData/aboutEcocrew-constant';
import { prevNextIcons } from '@/overallData/icons';
import { JourneyPointsTypes, JourneyTypes } from '@/types/aboutEcocrew-types';
import { useEffect, useState } from 'react';

export default function MobileJourney(): JSX.Element {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const handlePrevNext = (direction: 'prev' | 'next'): void => {
    if (!api) return;
    direction === 'prev' ? api.scrollPrev() : api.scrollNext();
  };

  const getHeightClass = (index: number): string => {
    switch (index) {
      case 0:
        return 'h-[550px]';
      case 1:
        return 'h-[920px]';
      case 2:
        return 'h-[575px]';
      case 3:
        return 'h-[550px]';
      case 4:
        return 'h-[400px]';
      default:
        return 'h-auto';
    }
  };

  const heightClass = getHeightClass(current);

  useEffect(() => {
    if (!api) return;
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="block lg:hidden">
      <div className="flex items-center justify-center gap-5 py-10">
        <div onClick={() => handlePrevNext('prev')} className="-mb-[10px]">
          {prevNextIcons?.journeryIcons(current === 0)}
        </div>
        <p className="text-[32px] leading-[48px]">
          {aboutEcocrewData?.journey?.[current]?.year || '2024'}
        </p>
        <div
          className="mb-[6px] rotate-180"
          onClick={() => handlePrevNext('next')}>
          {prevNextIcons?.journeryIcons(
            current === aboutEcocrewData?.journey?.length - 1,
          )}
        </div>
      </div>
      <Carousel setApi={setApi}>
        <CarouselContent className={`${heightClass}`}>
          {aboutEcocrewData?.journey?.map(
            (item: JourneyTypes, index: number) => {
              return (
                <CarouselItem key={index}>
                  <h5 className="heading2 flex items-center justify-center gap-2 pb-4 leading-7">
                    {highlightText(item?.title, 'title')}
                  </h5>
                  {item?.journeyPoints?.map(
                    (points: JourneyPointsTypes, index: number) => {
                      return (
                        <div
                          key={index}
                          className={`${index === 1 || item?.year === '2026' ? '' : 'relative mb-5 border-b border-l-0 border-r-0 border-t-0 border-solid border-gainsboro pb-3'}`}>
                          {points?.image && (
                            <img
                              src={
                                typeof points?.image === 'string'
                                  ? points?.image
                                  : (points?.image as { src: string })?.src
                              }
                              alt="icons"
                              width={50}
                              height={50}
                            />
                          )}
                          <span
                            className={`absolute ${index === 1 || item?.year === '2026' ? 'hidden' : 'block'} recTitle right-0 top-0 text-[#00000029]`}>
                            {index === 0 ? '0' + (index + 1) : '0' + index}
                          </span>
                          <h6
                            className={`text-medium leading-5 ${item?.year === '2026' ? 'text-center' : 'pb-2 text-left'}`}>
                            {points?.title}
                          </h6>
                          {points?.type === 'notParagraph' ? (
                            <div className="text-small grid gap-x-3 gap-y-1 leading-[1.125rem]">
                              <p className="text-darkLow">
                                Trees: <span>{points?.values?.[0]}</span>
                              </p>
                              <p className="text-darkLow">
                                Water: <span>{points?.values?.[1]}</span>
                              </p>
                              <p className="text-darkLow">
                                Energy: <span>{points?.values?.[2]}</span>
                              </p>
                              <p className="text-darkLow">
                                Oil: <span>{points?.values?.[3]}</span>
                              </p>
                              <p className="text-darkLow">
                                Landfill: <span>{points?.values?.[4]}</span>
                              </p>
                              <p className="col-span-3 text-darkLow">
                                Total recyclables collected:{' '}
                                <span>{points?.values?.[5]}</span>
                              </p>
                            </div>
                          ) : (
                            <p
                              className={`text-small leading-4 ${item?.year === '2026' ? 'text-center' : 'text-left'}`}>
                              {points?.description &&
                                highlightText(
                                  points.description,
                                  'description',
                                )}
                            </p>
                          )}
                        </div>
                      );
                    },
                  )}
                </CarouselItem>
              );
            },
          )}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
