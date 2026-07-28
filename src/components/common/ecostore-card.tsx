'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { ChevronRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import NavigationButtons from '@/components/common/navigation-button';
import EcocrewTitle from '@/components/common/ecocrew-title';
import DownloadModal from '@/components/common/download-modal';
import { useMediaQuery } from '@/hooks/useDevice';
import { HeadingConfig } from '@/types/ecoStore-types';
import feedModal from '@/img/modal/feed-modal.png';
import storeModal from '@/img/modal/store-modal.png';
import { Item } from '@radix-ui/react-accordion';

export interface ModalConfig {
  modalImage: { src: string } | string;
  heading: string;
}

export interface EcoCardProps<T> {
  sectionTitle: string;
  heading: HeadingConfig;
  exploreButtonText: string;
  exploreButtonLink?: string | null;
  items: T[];
  renderItem: (item: T, openModal: () => void) => React.ReactNode;
  modalConfig?: ModalConfig;
  hideNavOnMobile?: boolean;
}

export default function EcoCard<T>({
  sectionTitle,
  heading,
  exploreButtonText,
  exploreButtonLink = null,
  items,
  renderItem,
  modalConfig,
  hideNavOnMobile = false,
}: EcoCardProps<T>): JSX.Element {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [activeSlideGroup, setActiveSlideGroup] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalItems = items?.length;

  const isLargeScreen = useMediaQuery('(min-width: 1200px)');
  const isMediumScreen = useMediaQuery('(min-width: 768px)');

  const finalModalConfig: ModalConfig = modalConfig
    ? modalConfig
    : sectionTitle === 'FEEDS'
      ? {
          modalImage: feedModal as { src: string },
          heading: 'Elevate your ecolifestyle, new tips waiting for you.',
        }
      : {
          modalImage: storeModal as { src: string },
          heading:
            sectionTitle === 'EXPLORE BY CATEGORIES'
              ? 'Go green, shop smart discover our ecofriendly products today!'
              : 'Unlock clear and affordable pricing, get our rate card.',
        };

  useEffect(() => {
    const newItemsPerPage = isLargeScreen ? 3 : isMediumScreen ? 2 : 1;
    setItemsPerPage((prev) => {
      if (newItemsPerPage !== prev && api) {
        api.scrollTo(0);
        setCurrent(0);
        setActiveSlideGroup(0);
      }
      return newItemsPerPage;
    });
  }, [api, isLargeScreen, isMediumScreen]);

  useEffect(() => {
    if (!api) return;
    const onSelect = (): void => {
      const selectedIndex = api.selectedScrollSnap();
      setCurrent(selectedIndex);
      const totalGroups = Math.ceil(totalItems / itemsPerPage);
      const group = Math.floor(selectedIndex / itemsPerPage);
      const validGroup = Math.min(group, totalGroups - 1);
      setActiveSlideGroup(validGroup);
    };
    api.on('select', onSelect);
    return () => {
      if (api) {
        api.off('select', onSelect);
      }
    };
  }, [api, totalItems, itemsPerPage]);

  const getNumberOfSlides = (): number => Math.ceil(totalItems / itemsPerPage);

  const handleNavigation = (direction: 'prev' | 'next'): void => {
    if (!api) return;
    const totalGroups = getNumberOfSlides();
    let newActiveGroup: number;
    if (direction === 'prev') {
      newActiveGroup = activeSlideGroup > 0 ? activeSlideGroup - 1 : 0;
    } else {
      newActiveGroup =
        activeSlideGroup < totalGroups - 1
          ? activeSlideGroup + 1
          : totalGroups - 1;
    }
    setActiveSlideGroup(newActiveGroup);
    const targetPosition = newActiveGroup * itemsPerPage;
    api.scrollTo(targetPosition);
  };

  const isCurrentSlide = (index: number): boolean => index === activeSlideGroup;

  return (
    <div
      className={`px-5 pt-12 md:px-[5.556%] ${sectionTitle === 'EXPLORE BY CATEGORIES' ? 'md:pt-10' : 'md:pt-16'}`}>
      <EcocrewTitle title={sectionTitle} />
      <h2 className="recTitle pt-5 text-left leading-8 md:pt-10 md:leading-[3.25rem]">
        {heading?.beforeText}{' '}
        <span className="text-ecocrewPrimary">{heading?.highlightedText}</span>{' '}
        {heading?.afterText}
      </h2>

      <div className="flex items-center justify-between pb-4 pt-3 md:pt-6">
        <div className="flex-shrink-0">
          {exploreButtonLink === null ? (
            <Button
              variant="outline"
              onClick={() => setIsModalOpen(true)}
              className="insightsButton mb-4 cursor-pointer gap-1 !py-1 font-medium leading-[18px] md:!py-2 md:px-4 md:leading-[26px]">
              {exploreButtonText}
              <ChevronRight strokeWidth={1} width={16} height={16} />
            </Button>
          ) : (
            <Link href={exploreButtonLink}>
              <Button
                variant="outline"
                className="insightsButton cursor-pointer gap-1 !py-1 font-medium leading-[18px] md:!py-2 md:px-4 md:leading-[26px]">
                {exploreButtonText}
                <ChevronRight strokeWidth={1} width={16} height={16} />
              </Button>
            </Link>
          )}
        </div>
        <div className="hidden flex-shrink-0 md:flex">
          <NavigationButtons
            loop={false}
            index={current}
            count={totalItems}
            isLastSlide={(index: number, count: number) =>
              index + itemsPerPage >= count
            }
            onPrevClick={() => handleNavigation('prev')}
            onNextClick={() => handleNavigation('next')}
          />
        </div>
      </div>
      <Carousel
        opts={{
          align: 'start',
          loop: false,
          slidesToScroll: 1,
          containScroll: 'keepSnaps',
        }}
        className="pt-5 md:pt-8"
        setApi={setApi}>
        <CarouselContent>
          {items?.map((item: T, index: number) => (
            <CarouselItem
              key={index}
              className="basis-[85%] sm:basis-1/3 lg99:basis-1/3">
              {renderItem(item, () => setIsModalOpen(true))}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="mx-auto hidden items-center justify-center gap-1 md:flex md:pt-10">
        {Array.from({ length: getNumberOfSlides() }).map((_, index) => {
          const isActive = isCurrentSlide(index);
          return (
            <div
              key={index}
              className={cn(
                'transition-all duration-300',
                isActive ? 'w-7' : 'w-[10px]',
              )}>
              <Progress
                value={isActive ? 100 : 0}
                className={cn(
                  'transition-all duration-300',
                  isActive ? 'h-[6px] rounded-full' : 'h-[10px] rounded-full',
                )}
                indicatorClassName="bg-black"
              />
            </div>
          );
        })}
      </div>
      {finalModalConfig && (
        <DownloadModal
          modalImage={finalModalConfig?.modalImage}
          heading={finalModalConfig?.heading}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
