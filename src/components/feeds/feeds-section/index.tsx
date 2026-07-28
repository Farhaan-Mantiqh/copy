'use client';
import { useEffect, useRef, useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { feedsIcons } from '@/overallData/icons';
import { Heart, Send } from 'lucide-react';
import { FeedSectionTypes } from '@/types/feeds-types';
import { Button } from '@/components/ui/button';
import DownloadModal from '@/components/common/download-modal';
import feedImg from '@/img/modal/feed-modal.png';
import feedsData from '@/overallData/json/feeds.json';
import Link from 'next/link';

export default function FeedsSection(): JSX.Element {
  const [activeTab, setActiveTab] = useState('allFeeds');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSlideUp, setShowSlideUp] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState<{
    [key: number]: boolean;
  }>({});
  const lastFeedRef = useRef<HTMLDivElement | null>(null);
  const descriptionRefs = useRef<{
    [key: number]: HTMLParagraphElement | null;
  }>({});

  const allFeeds = feedsData?.flatMap((category) =>
    category?.feeds?.map((feed) => ({
      ...feed,
      category: category?.category_name,
      img: feed?.image[0]?.image,
      description: feed?.description,
    })),
  );

  const filteredFeeds =
    activeTab === 'allFeeds'
      ? allFeeds
      : allFeeds.filter(
          (item: FeedSectionTypes) =>
            item?.category?.toLowerCase() === activeTab,
        );

  useEffect(() => {
    const currentRef = lastFeedRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setShowSlideUp(entry.isIntersecting);
      },
      { threshold: 0.5 },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [filteredFeeds]);

  const toggleReadMore = (index: number): void => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const isDescriptionLong = (description: string): boolean => {
    return description.length > 120;
  };

  const modalConfig = {
    modalImage: feedImg as { src: string },
    heading: 'Elevate your ecolifestyle, new tips waiting for you.',
  };

  return (
    <section className="relative border-b-0 border-l-0 border-r-0 border-t border-solid border-t-gainsboro">
      <div className="grid grid-cols-1 pt-10 md:grid-cols-3">
        <div className="md:sticky md:top-20 md:h-[350px]">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="hideScrollBar overflow-scroll">
            <TabsList className="flex h-full items-start justify-start gap-3 bg-transparent md:flex-col md:gap-8">
              {feedsIcons?.map((item, index) => {
                const isActive = activeTab === item?.value;
                return (
                  <Link
                    href="#sectionToScroll"
                    key={index}
                    className="no-underline">
                    <TabsTrigger
                      key={index}
                      value={item?.value}
                      className="flex cursor-pointer items-center justify-center gap-2 rounded-full border-0 bg-transparent text-darkLow transition-all duration-500 ease-in-out data-[state=active]:bg-ecocrewPrimary">
                      {item?.icons(!isActive)}
                      <h3
                        className={`${isActive ? 'text-white' : 'text-darkLow'} text-ecoStore fontFamily font-medium leading-6`}>
                        {item?.category}
                      </h3>
                    </TabsTrigger>
                  </Link>
                );
              })}
            </TabsList>
          </Tabs>
        </div>

        <div className="relative col-span-1">
          {filteredFeeds
            ?.slice(0, 6)
            .map((item: FeedSectionTypes, index: number) => {
              const categoryIcon = feedsIcons?.find(
                (icon) =>
                  icon?.category?.toLowerCase() ===
                  item?.category?.toLowerCase(),
              );

              const descriptionIsLong = isDescriptionLong(item?.description);

              return (
                <div
                  key={index}
                  ref={index === 5 ? lastFeedRef : null}
                  className="relative flex flex-col border-b border-l-0 border-r-0 border-t-0 border-solid border-b-gainsboro">
                  <div
                    className={`flex items-center gap-2 pb-5 ${index === 0 ? 'pt-8 md:pt-0' : 'pt-8'} md:pb-6`}>
                    <div className="flex justify-center rounded-full bg-ecocrewPrimary p-[6px]">
                      {categoryIcon && categoryIcon?.icons(false)}
                    </div>
                    <p className="text-small !font-medium leading-[18px] md:leading-5">
                      {item?.category}
                    </p>
                  </div>
                  <div className="relative aspect-square">
                    <img
                      src={
                        typeof item?.img === 'string'
                          ? item?.img
                          : (item?.img as { src: string })?.src
                      }
                      alt=""
                      className="absolute inset-0 h-full w-full rounded-[5px] object-cover"
                    />
                  </div>
                  <div className="flex gap-3 pt-4">
                    <Heart
                      className="h-6 w-6 cursor-pointer md:h-8 md:w-8"
                      strokeWidth={1.5}
                      onClick={() => setIsModalOpen(true)}
                    />
                    <Send
                      className="h-6 w-6 cursor-pointer md:h-8 md:w-8"
                      strokeWidth={1.5}
                      onClick={() => setIsModalOpen(true)}
                    />
                  </div>
                  <div className="pb-8 pt-4">
                    <p
                      ref={(el) => (descriptionRefs.current[index] = el)}
                      className={`text-small leading-4 text-darkLow md:leading-[18px] ${
                        expandedDescriptions[index]
                          ? 'line-clamp-none'
                          : 'line-clamp-2'
                      }`}>
                      {item?.description}
                    </p>
                    {descriptionIsLong && !expandedDescriptions[index] && (
                      <Button
                        onClick={() => toggleReadMore(index)}
                        className="text-small cursor-pointer border-none bg-transparent p-0 leading-4 text-ecocrewPrimary underline shadow-none md:leading-[18px]">
                        Read more
                      </Button>
                    )}
                    {descriptionIsLong && expandedDescriptions[index] && (
                      <Button
                        onClick={() => toggleReadMore(index)}
                        className="text-small cursor-pointer border-none bg-transparent p-0 leading-4 text-ecocrewPrimary underline shadow-none md:leading-[18px]">
                        Show less
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}

          <div
            className={`transition-all duration-700 ease-in-out ${
              showSlideUp
                ? 'translate-y-0 opacity-100'
                : 'pointer-events-none translate-y-10 opacity-0'
            } absolute bottom-0 left-0 right-0 flex h-[15%] items-end bg-gradient-to-t from-white via-white/90 to-transparent`}>
            <div className="flex w-full flex-col items-center justify-end">
              <p className="text-center text-base font-medium leading-6">
                Stay updated!{' '}
                <span className="text-darkLow">
                  View all feeds on our app click below.
                </span>
              </p>
              <Button
                className="fontFamily text-regular mt-5 cursor-pointer rounded-full border-none bg-buttonGradient px-9 py-[8px] font-medium leading-6 tracking-wide text-white md:text-base"
                onClick={() => setIsModalOpen(true)}>
                View more
              </Button>
            </div>
          </div>
        </div>
      </div>

      <DownloadModal
        modalImage={modalConfig.modalImage}
        heading={modalConfig.heading}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
