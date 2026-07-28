import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { insightsCarousel } from '@/overallData/home-constant';
import { InsightsCarouselItem } from '@/types/home-types';
import { Progress } from '@/components/ui/progress';

interface ImpactPinnedProps {
  rightContent5Ref: React.RefObject<HTMLDivElement>;
  pinnedSectionClass: string;
}

const ImpactPinned: React.FC<ImpactPinnedProps> = ({
  rightContent5Ref,
  pinnedSectionClass,
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const slideDuration = 3000;

  useEffect(() => {
    if (!api) return;

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
      setProgress(0);
    });

    const slideInterval = setInterval(() => api.scrollNext(), slideDuration);

    return () => clearInterval(slideInterval);
  }, [api]);

  useEffect(() => {
    const progressStep = 100 / (slideDuration / 50);
    let progressValue = 0;

    const progressInterval = setInterval(() => {
      progressValue += progressStep;

      if (progressValue >= 100) {
        progressValue = 100;
        clearInterval(progressInterval);
      }

      setProgress(progressValue);
    }, 50);

    return () => clearInterval(progressInterval);
  }, [current, slideDuration]);

  return (
    <div ref={rightContent5Ref} className={pinnedSectionClass}>
      <div className="relative h-full w-full md:pl-1">
        <div className="absolute left-0 right-0 top-10 z-10 flex justify-center gap-4 px-8 md:gap-7">
          {Array.from({ length: insightsCarousel.length }).map((_, idx) => (
            <div key={idx} className="w-[45px] xxs:w-[55px] sm:w-[99px]">
              <Progress
                value={current === idx ? progress : idx < current ? 100 : 0}
                className="h-[2px] rounded-full md:h-[4px]"
              />
            </div>
          ))}
        </div>

        <Carousel
          opts={{ loop: true }}
          setApi={setApi}
          className="h-full max-h-[650px]">
          <CarouselContent>
            {insightsCarousel?.map(
              (item: InsightsCarouselItem, index: number) => (
                <CarouselItem key={index}>
                  <div className="relative">
                    <img
                      src={
                        typeof item.imgSrc === 'string'
                          ? item.imgSrc
                          : (item.imgSrc as { src: string })?.src
                      }
                      alt="Ecocrew image"
                      className="h-full max-h-[650px] w-full object-cover"
                      width={1440}
                      height={650}
                    />

                    <div className="absolute bottom-0 left-0 right-0 h-20 backdrop-blur-lg md:h-[100px]" />
                    <div className="absolute inset-0 flex flex-col justify-end px-8 pb-4">
                      <div>
                        <div className="flex flex-col md:left-8">
                          <p className="text-large tracking-widest text-white">
                            {item?.total}
                          </p>
                          <p className="recDescription tracking-widest text-white">
                            {item?.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ),
            )}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default ImpactPinned;
