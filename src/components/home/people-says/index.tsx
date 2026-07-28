'use client';
import { useEffect, useState } from 'react';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Progress } from '@/components/ui/progress';
import { peopleSaysData } from '@/overallData/home-constant';
import { PeopleSaysItem } from '@/types/home-types';
import NavigationButtons from '@/components/common/navigation-button';
import EcocrewTitle from '@/components/common/ecocrew-title';
import { Dialog } from '@/components/ui/dialog';
import { DialogContent } from '@/components/ui/dialog';

const play =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/icons/play-button.png';

export default function PeopleSays(): JSX.Element {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('');

  const getEmbedUrl = (url: string): string => {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;
  };

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    const onSelect = (): void => {
      setCurrent(api.selectedScrollSnap());
    };
    api.on('select', onSelect);
    setCurrent(0);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  const handleNavigation = (direction: 'prev' | 'next'): void => {
    if (!api) return;
    direction === 'prev' ? api.scrollPrev() : api.scrollNext();
  };

  const progressPercentage = count > 1 ? ((current + 1) / count) * 100 : 0;

  const handleVideoClick = (url: string): void => {
    setSelectedVideoUrl(getEmbedUrl(url));
    setOpenModal(true);
  };

  return (
    <div className="px-5 pt-12 md:px-[5.556%] md:pt-16">
      <EcocrewTitle title="TESTIMONIALS FROM OUR COMMUNITY" />
      <h2 className="recTitle py-5 text-center leading-8 md:py-10 md:leading-[3.25rem]">
        Our <span className="text-ecocrewPrimary">exceptional</span> service is
        consistently praised by{' '}
        <span className="text-ecocrewPrimary">customers</span>
      </h2>
      <Carousel
        opts={{ align: 'start' }}
        className="pt-5 md:pt-8"
        setApi={setApi}>
        <CarouselContent>
          {peopleSaysData?.map((item: PeopleSaysItem, index: number) => (
            <CarouselItem
              key={index}
              className="basis-[70%] pl-5 md:!basis-1/2 lg:!basis-1/2">
              <div
                className="relative aspect-video w-full cursor-pointer"
                onClick={() => handleVideoClick(item?.link)}>
                <div className="absolute inset-0 z-50 flex items-center justify-center">
                  <img
                    src={
                      typeof play === 'string'
                        ? play
                        : (play as { src: string })?.src
                    }
                    alt="Play Button"
                    className="h-16 w-16 object-contain"
                    width={64}
                    height={64}
                  />
                </div>

                <img
                  src={`https://img.youtube.com/vi/${item?.link.split('v=')[1]?.split('&')[0]}/hqdefault.jpg`}
                  alt={item?.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <p className="text-medium pt-2 !font-medium leading-[1.125rem] md:leading-8">
                {item?.title}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mx-auto w-full max-w-[650px] pt-2 lg99:pt-12">
          <div className="hidden justify-end gap-2 pb-4 sm:flex">
            <NavigationButtons
              loop={false}
              index={current}
              count={count}
              onPrevClick={() => handleNavigation('prev')}
              onNextClick={() => handleNavigation('next')}
            />{' '}
          </div>{' '}
          <Progress
            value={progressPercentage}
            className="h-[2px]"
            indicatorClassName="bg-black"
          />{' '}
        </div>
      </Carousel>

      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="w-full max-w-[90%] overflow-hidden p-0 lg99:max-w-4xl">
          {selectedVideoUrl && (
            <iframe
              width="100%"
              height="500"
              src={selectedVideoUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
