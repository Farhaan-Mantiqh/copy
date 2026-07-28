'use client';
import { aboutEcocrewData } from '@/overallData/aboutEcocrew-constant';
import ImageCard from './image-card';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import { ProblemSolutionCarouselTypes } from '@/types/aboutEcocrew-types';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

gsap.registerPlugin(ScrollTrigger);

export default function ProblemSolutionReward(): JSX.Element {
  const problemSolutionData = aboutEcocrewData?.problemSolution;
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);

  const handleProgressClick = (e: number): void => {
    if (!api) return;
    api.scrollTo(e);
  };

  const isCurrentSlide = (e: number): boolean => e === current;

  useGSAP(() => {
    if (window?.innerWidth > 768) {
      const items = gsap.utils.toArray('.imageCard');
      items?.forEach((item, index) => {
        const startValue = 30 + index * 40;
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item as HTMLElement,
            start: `top top+=${startValue}`,
            endTrigger: '#triggerEnd',
            end: 'top 660',
            pin: true,
            pinSpacing: false,
            scrub: true,
          },
        });

        tl.to(item as HTMLElement, {
          scale: 0.95 + 0.02 * index,
        });
      });
    }
  }, []);

  useEffect(() => {
    if (!api) return;
    api.on('select', () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <div className="px-5 py-5 md:px-[5.556%] md:pb-0 md:pt-10">
      <div className="relative hidden flex-col gap-2 md:flex">
        <ImageCard
          image={problemSolutionData?.imageCard1?.image}
          title={problemSolutionData?.imageCard1?.title}
          description={problemSolutionData?.imageCard1?.description}
        />
        <ImageCard
          image={problemSolutionData?.imageCard2?.image}
          title={problemSolutionData?.imageCard2?.title}
          description={problemSolutionData?.imageCard2?.description}
        />
        <ImageCard
          image={problemSolutionData?.imageCard3?.image}
          title={problemSolutionData?.imageCard3?.title}
          description={problemSolutionData?.imageCard3?.description}
        />
      </div>
      <div className="block md:hidden">
        <Carousel setApi={setApi} opts={{ align: 'center', loop: false }}>
          <CarouselContent className="-ml-0 gap-3">
            {aboutEcocrewData?.problemSolutionCarousel?.map(
              (item: ProblemSolutionCarouselTypes, index: number) => {
                return (
                  <CarouselItem
                    key={index}
                    className="rounded-[8px] border-2 border-solid border-gainsboro pl-0">
                    <div>
                      <img
                        src={
                          typeof item?.image === 'string'
                            ? item?.image
                            : (item?.image as { src: string })?.src
                        }
                        alt="problem"
                        className="h-full min-h-[305px] w-full max-w-[768px] rounded-t-[8px] object-cover"
                        width={768}
                        height={305}
                      />
                      <div className="px-5 pb-5 pt-4">
                        <div className="flex gap-1">
                          <p className="sub-heading text-black">
                            The{' '}
                            <span className="text-ecocrewPrimary">
                              {item?.title}
                            </span>
                          </p>
                          <p
                            className={`${index === 2 ? 'block' : 'hidden'} sub-heading`}>
                            and the{' '}
                            <span className="text-ecocrewPrimary">reward</span>
                          </p>
                        </div>
                        <p className="pt-2 text-xs font-normal">
                          {item?.description}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                );
              },
            )}
          </CarouselContent>
        </Carousel>

        <div className="mx-auto flex items-center justify-center gap-1 pt-5">
          {Array.from({ length: 3 }).map((_, index: number) => (
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
          ))}
        </div>
      </div>
      <div id="triggerEnd" className="pt-20"></div>
    </div>
  );
}
