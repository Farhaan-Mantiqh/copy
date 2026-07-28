import { insightsMarquee } from '@/overallData/home-constant';
import { InsightsMarqueeItem } from '@/types/home-types';
import { useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import gsap from 'gsap';
import { useMediaQuery } from '@/hooks/useDevice';

interface RateCardPinnedProps {
  rightContent1Ref: React.RefObject<HTMLDivElement>;
  pinnedSectionClass: string;
}

const RateCardPinned: React.FC<RateCardPinnedProps> = ({
  rightContent1Ref,
  pinnedSectionClass,
}) => {
  const marqueeUpRef = useRef<HTMLDivElement>(null);
  const marqueeDownRef = useRef<HTMLDivElement>(null);
  // const isTablet = useMediaQuery('(min-width: 992px)');
  const isTablet = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    const marqueeUpElement = marqueeUpRef.current;
    const marqueeDownElement = marqueeDownRef.current;

    marqueeUpElement &&
      marqueeDownElement &&
      (() => {
        const marqueeUpItems =
          marqueeUpElement.querySelectorAll('.marquee-item');
        const marqueeDownItems =
          marqueeDownElement.querySelectorAll('.marquee-item');

        const getItemsHeight = (items: NodeListOf<Element>): number => {
          let totalHeight = 0;
          items.forEach((item) => {
            totalHeight += item.clientHeight;
          });
          return totalHeight;
        };

        const marqueeUpHeight = getItemsHeight(marqueeUpItems);
        const marqueeDownHeight = getItemsHeight(marqueeDownItems);

        const cloneItems = (
          parent: HTMLDivElement,
          items: NodeListOf<Element>,
        ): void => {
          items.forEach((item) => {
            const clone = item.cloneNode(true);
            parent.appendChild(clone);
          });
        };

        cloneItems(marqueeUpElement, marqueeUpItems);
        cloneItems(marqueeDownElement, marqueeDownItems);

        gsap.to(marqueeUpElement, {
          y: -marqueeUpHeight,
          ease: 'none',
          duration: 30,
          repeat: -1,
          onRepeat: () => {
            gsap.set(marqueeUpElement, { y: 0 });
          },
        });

        gsap.fromTo(
          marqueeDownElement,
          { y: -marqueeDownHeight },
          {
            y: 0,
            ease: 'none',
            duration: 30,
            repeat: -1,
            onRepeat: () => {
              gsap.set(marqueeDownElement, { y: -marqueeDownHeight });
            },
          },
        );
      })();

    return () => {
      marqueeUpElement && gsap.killTweensOf(marqueeUpElement);
      marqueeDownElement && gsap.killTweensOf(marqueeDownElement);
    };
  }, [isTablet]);

  const renderDesktopMarqueeItem = (
    item: InsightsMarqueeItem,
    index: number,
  ): JSX.Element => (
    <div
      key={index}
      className="marquee-item mb-5 flex flex-col gap-4 rounded-[10px] border border-solid border-[#D3D3D3] bg-white">
      <img
        src={
          typeof item?.imgSrc === 'string'
            ? item?.imgSrc
            : (item?.imgSrc as { src: string })?.src
        }
        alt=""
        className="aspect-[4/3] h-auto w-full rounded-t-[10px] object-cover"
      />

      <p className="conSection px-5 pb-5 !font-medium leading-[30px]">
        {item?.title}
      </p>
    </div>
  );

  const renderMobileMarqueeItem = (
    item: InsightsMarqueeItem,
    index: number,
  ): JSX.Element => (
    <div
      key={index}
      className="marquee-item flex flex-col overflow-hidden rounded-[10px] border border-solid border-[#D3D3D3] bg-white"
      style={{ width: '155px', height: '180px' }}>
      <div className="h-full max-h-[130px] w-full">
        <img
          src={
            typeof item?.imgSrc === 'string'
              ? item?.imgSrc
              : (item?.imgSrc as { src: string })?.src
          }
          alt=""
          className="h-full w-full rounded-t-[10px] object-cover"
        />
      </div>
      <div className="p-2">
        <p className="conSection overflow-hidden !font-medium leading-[18px]">
          {item?.title}
        </p>
      </div>
    </div>
  );

  return (
    <div ref={rightContent1Ref} className={pinnedSectionClass}>
      {!isTablet ? (
        // Mobile marquees
        <div className="mx-auto flex flex-col gap-5">
          <div style={{ height: '180px' }}>
            <Marquee speed={40} gradient={false}>
              <div className="flex gap-3 px-3">
                {insightsMarquee?.marquee1?.map((item, index) => (
                  <div key={index}>{renderMobileMarqueeItem(item, index)}</div>
                ))}
              </div>
            </Marquee>
          </div>

          <div style={{ height: '180px' }}>
            <Marquee speed={30} direction="right" gradient={false}>
              <div className="flex gap-3 px-3">
                {insightsMarquee?.marquee2?.map((item, index) => (
                  <div key={index}>{renderMobileMarqueeItem(item, index)}</div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      ) : (
        // Desktop marquees
        <div className="grid gap-5 overflow-hidden pl-8 pr-[11.112%] md:grid-cols-2 md:gap-12">
          <div className="flex h-full w-full">
            <div ref={marqueeUpRef} className="flex h-full flex-col">
              {insightsMarquee?.marquee1?.map((item, index) =>
                renderDesktopMarqueeItem(item, index),
              )}
            </div>
          </div>
          <div className="flex h-full w-full">
            <div ref={marqueeDownRef} className="flex h-full flex-col">
              {insightsMarquee?.marquee2?.map((item, index) =>
                renderDesktopMarqueeItem(item, index),
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RateCardPinned;
