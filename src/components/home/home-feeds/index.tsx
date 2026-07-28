'use client';
import { useCallback, useMemo } from 'react';
import EcoCard from '@/components/common/ecostore-card';
import { Button } from '@/components/ui/button';
import feedsData from '@/overallData/json/feeds.json';
import { HeadingConfig } from '@/types/ecoStore-types';
import { FeedSectionTypes } from '@/types/feeds-types';
import { ChevronRight } from 'lucide-react';

export default function HomeFeeds(): JSX.Element {
  const allFeeds = useMemo(() => {
    return feedsData
      ?.flatMap((category) =>
        category?.feeds?.map((feed) => ({
          ...feed,
          img: feed?.image[0]?.image,
          description: feed?.description,
        })),
      )
      ?.slice(11, 19);
  }, []);

  const homFeedsHeading: HeadingConfig = useMemo(
    () => ({
      beforeText: 'Get your daily dose of ',
      highlightedText: 'ecofriendly ',
      afterText: 'living — tips , trends & environmental news',
    }),
    [],
  );

  const renderItem = useCallback(
    (item: FeedSectionTypes, openModal: () => void) => (
      <div className="relative aspect-[81/100] md:aspect-[7/10]">
        <img
          src={
            typeof item?.img === 'string'
              ? item?.img
              : (item?.img as { src: string })?.src
          }
          alt=""
          className="absolute inset-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 md:pb-6">
          <p className="text-small line-clamp-2 text-ellipsis pt-1 !font-medium leading-4 text-white md:pt-4 md:leading-5">
            {item?.description}
          </p>
          <div className="flex items-center justify-start pt-2">
            <Button
              variant="outline"
              onClick={openModal}
              className="flex cursor-pointer items-center gap-1 rounded-[30px] border border-solid border-white bg-transparent py-2.5 pr-2 md:pr-1.5 lg:px-6 lg:py-[12px]">
              <p className="text-xs font-medium leading-4 text-white md:text-[13px] md:leading-[18px] lg:text-base lg:leading-[20px]">
                Read more
              </p>

              <ChevronRight
                strokeWidth={1}
                stroke="white"
                className="h-4 w-4 md:h-[18px] md:w-[18px] lg:h-5 lg:w-5"
              />
            </Button>
          </div>
        </div>
      </div>
    ),
    [],
  );

  return (
    <div className="mx-auto max-w-[1440px]">
      <EcoCard
        sectionTitle="FEEDS"
        heading={homFeedsHeading}
        exploreButtonText="Explore all feeds"
        exploreButtonLink="/feeds"
        items={allFeeds}
        renderItem={renderItem}
      />
    </div>
  );
}
