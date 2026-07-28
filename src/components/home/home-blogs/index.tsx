'use client';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CustomCarouselItem,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import NavigationButtons from '@/components/common/navigation-button';
import { blogsData } from '@/overallData/blogs-constant';
import { BlogItem } from '@/types/blogs-types';
import EcocrewTitle from '@/components/common/ecocrew-title';

export default function HomeBlogs(): JSX.Element {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const randomBlogs = useMemo(() => [...blogsData].slice(4, 7), []);

  const totalItems = randomBlogs.length;

  useEffect(() => {
    if (!api) return;

    const onSelect = (): void => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  const handleNavigation = useCallback(
    (direction: 'prev' | 'next') => {
      if (!api) return;
      direction === 'prev' ? api.scrollPrev() : api.scrollNext();
    },
    [api],
  );

  const isCurrentSlide = useCallback(
    (index: number) => current === index,
    [current],
  );

  const renderCarouselItem = useCallback((item: BlogItem) => {
    const blogLink = `/blogs/${item.title
      .toLowerCase()
      .replace(/[:\s]+/g, '-')
      .replace(/[^a-z0-9-]/g, '')}`;

    return (
      <CustomCarouselItem key={item.title}>
        <div className="relative aspect-[3/4] md:aspect-[89/50]">
          <img
            src={
              typeof item.imgSrc === 'string'
                ? item.imgSrc
                : (item.imgSrc as { src: string })?.src
            }
            alt={item.title}
            className="absolute inset-0 h-full w-full rounded-md object-cover"
          />

          <div className="absolute inset-0 flex flex-col justify-end rounded-md bg-gradient-to-t from-black/80 via-black/40 to-transparent px-3 pb-5 md:p-10 xl:pb-[68px]">
            <p className="text-ecoStore w-fit rounded-[50px] p-2 text-center font-medium leading-5 text-white backdrop-blur-lg md:p-3">
              {item.category}
            </p>

            <div className="pt-3">
              <p className="text-homeBlog overflow-hidden truncate text-ellipsis whitespace-nowrap font-medium leading-[18px] text-white md:leading-[30px]">
                {item.title}
              </p>

              <p className="conSection pt-2 leading-4 text-white md:leading-[26px]">
                {(
                  (item.contentSections?.find((s) => s.type === 'paragraph')
                    ?.content as string) || ''
                )
                  .slice(0, 40)
                  .trim() + '…'}
              </p>
            </div>

            <Link href={blogLink} className="mt-4 no-underline">
              <Button
                variant="outline"
                className="flex cursor-pointer gap-1 rounded-[30px] border border-solid border-white bg-transparent py-2 pr-2 md:py-2.5 lg:p-4">
                <p className="conSection !font-medium text-white">Read now</p>
                <ChevronRight
                  strokeWidth={1}
                  stroke="white"
                  width={20}
                  height={20}
                />
              </Button>
            </Link>
          </div>
        </div>
      </CustomCarouselItem>
    );
  }, []);

  return (
    <div className="px-5 pt-12 md:px-[5.556%] md:pt-16">
      <EcocrewTitle title="BLOGS" />
      <h2 className="recTitle pb-5 pt-5 text-left leading-8 md:pt-10 md:leading-[3.25rem]">
        <span className="text-ecocrewPrimary">Sustainability </span>
        made simple: Quick <span className="text-ecocrewPrimary">
          ecotips
        </span>{' '}
        for everyday impact
      </h2>

      <div className="flex items-center justify-between pt-3 md:pt-6">
        <Link href="/blogs">
          <Button
            variant="outline"
            className="insightsButton mb-4 cursor-pointer gap-1 !py-1 leading-[18px] md:!py-2 md:px-4 md:leading-[26px]">
            Explore all blogs
            <ChevronRight strokeWidth={1} width={16} height={16} />
          </Button>
        </Link>

        <div className="hidden md:flex">
          <NavigationButtons
            count={totalItems}
            index={current}
            loop={false}
            onPrevClick={() => handleNavigation('prev')}
            onNextClick={() => handleNavigation('next')}
          />
        </div>
      </div>

      <Carousel
        opts={{ align: 'start', loop: false }}
        className="pt-5 md:pt-8"
        setApi={setApi}>
        <CarouselContent>{randomBlogs.map(renderCarouselItem)}</CarouselContent>
      </Carousel>

      <div className="mx-auto hidden items-center justify-center gap-1 md:flex md:pt-8">
        {Array.from({ length: totalItems }).map((_, index) => (
          <div
            key={index}
            className={cn(
              'transition-all duration-300',
              isCurrentSlide(index) ? 'w-7' : 'w-[10px]',
            )}>
            <Progress
              value={isCurrentSlide(index) ? 100 : 0}
              className={cn(
                'transition-all duration-300',
                isCurrentSlide(index)
                  ? 'h-[6px] rounded-full'
                  : 'h-[10px] rounded-full',
              )}
              indicatorClassName="bg-black"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
