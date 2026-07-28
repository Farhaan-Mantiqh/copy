'use client';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { stories } from '@/overallData/feeds-constant';
import { prevNextIcons } from '@/overallData/icons';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Stories(): JSX.Element {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoSrc, setSelectedVideoSrc] = useState('');
  const visibleSlides = 3;

  const handlePrevNext = (direction: 'prev' | 'next'): void => {
    if (!api) return;
    direction === 'prev' ? api.scrollPrev() : api.scrollNext();
  };

  useEffect(() => {
    if (!api) return;
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleStoryClick = (videoSrc: string): void => {
    setSelectedVideoSrc(videoSrc);
    setIsModalOpen(true);
  };

  const isAtEnd = current === stories.length - visibleSlides;

  return (
    <>
      <section>
        <h2 className="text-ecoStore text-center font-medium">
          STORIES TO REMEMBER
        </h2>
        <div className="flex items-center justify-center pb-10 pt-7">
          <Carousel
            setApi={setApi}
            opts={{
              loop: false,
              align: 'start',
            }}
            className="flex w-full max-w-[360px] items-center justify-center xs:gap-2 md:gap-4">
            <div onClick={() => handlePrevNext('prev')}>
              {prevNextIcons?.feedsIcons(current === 0)}
            </div>
            <CarouselContent className="items-center justify-start gap-2">
              {stories?.map((story, index: number) => {
                return (
                  <CarouselItem
                    key={index}
                    onClick={() => handleStoryClick(story.videoSrc)}
                    className="flex basis-20 cursor-pointer items-center justify-center">
                    <div className="relative h-[54px] w-[54px] xxs:h-16 xxs:w-16">
                      <img
                        src={
                          typeof story.imgSrc === 'string'
                            ? story.imgSrc
                            : (story.imgSrc as { src: string })?.src
                        }
                        alt="story"
                        className="h-full w-full rounded-full object-cover"
                        width={64}
                        height={64}
                      />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div
              onClick={() => handlePrevNext('next')}
              className="mb-4 rotate-180">
              {prevNextIcons?.feedsIcons(isAtEnd)}
            </div>
          </Carousel>
        </div>
      </section>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="w-full max-w-[90%] overflow-hidden p-0 lg99:max-w-4xl">
          <Button
            onClick={() => setIsModalOpen(false)}
            className="absolute right-2 top-2 z-50 border-none bg-transparent p-0 text-white shadow-none hover:bg-transparent">
            <X strokeWidth={1.5} />
          </Button>

          {selectedVideoSrc && (
            <video
              src={selectedVideoSrc}
              controls
              autoPlay
              className="h-auto w-full"
              style={{ maxHeight: '80vh' }}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
