'use client';
import { useEffect, useRef, useState } from 'react';
import { collectRecyclableData } from '@/overallData/home-constant';
import { Progress } from '@/components/ui/progress';
import gsap from 'gsap';
import NavigationButtons from '@/components/common/navigation-button';
import EcocrewTitle from '@/components/common/ecocrew-title';

export default function CollectRecyclables(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mainImageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const secondaryImageRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Swipe handling (mobile only)
  const touchStartX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>): void => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (Math.abs(diff) > 50) {
      diff > 0 ? handleNextClick() : handlePrevClick();
    }
  };

  const handleNextClick = (): void => {
    const nextIndex = (currentIndex + 1) % collectRecyclableData.length;
    const nextSecondaryIndex = (nextIndex + 1) % collectRecyclableData.length;

    gsap.to(mainImageRefs.current[currentIndex], {
      x: '-100%',
      duration: 0.5,
    });

    gsap.fromTo(
      mainImageRefs.current[nextIndex],
      { x: '100%' },
      { x: 0, duration: 0.5 },
    );

    gsap.to(secondaryImageRefs.current[nextIndex], {
      x: '-100%',
      duration: 0.5,
      onComplete: () => {
        gsap.set(secondaryImageRefs.current[nextIndex], {
          x: '100%',
          opacity: 0,
        });
      },
    });

    gsap.fromTo(
      secondaryImageRefs.current[nextSecondaryIndex],
      { x: '100%', opacity: 1 },
      { x: 0, opacity: 1, duration: 0.5 },
    );

    setCurrentIndex(nextIndex);
  };

  const handlePrevClick = (): void => {
    const prevIndex =
      (currentIndex - 1 + collectRecyclableData.length) %
      collectRecyclableData.length;

    const prevSecondaryIndex = (prevIndex + 1) % collectRecyclableData.length;

    gsap.to(mainImageRefs.current[currentIndex], {
      x: '100%',
      duration: 0.5,
    });

    gsap.fromTo(
      mainImageRefs.current[prevIndex],
      { x: '-100%' },
      { x: 0, duration: 0.5 },
    );

    gsap.to(secondaryImageRefs.current[prevSecondaryIndex], {
      x: '100%',
      duration: 0.5,
      onComplete: () => {
        gsap.set(secondaryImageRefs.current[prevSecondaryIndex], {
          x: '-100%',
          opacity: 0,
        });
      },
    });

    gsap.fromTo(
      secondaryImageRefs.current[prevIndex],
      { x: '-100%', opacity: 1 },
      { x: 0, opacity: 1, duration: 0.5 },
    );

    setCurrentIndex(prevIndex);
  };

  useEffect(() => {
    mainImageRefs.current = mainImageRefs.current.slice(
      0,
      collectRecyclableData.length,
    );
    secondaryImageRefs.current = secondaryImageRefs.current.slice(
      0,
      collectRecyclableData.length,
    );

    collectRecyclableData.forEach((_, index) => {
      if (index !== currentIndex) {
        gsap.set(mainImageRefs.current[index], { x: '100%' });
      } else {
        gsap.set(mainImageRefs.current[index], { x: 0 });
      }

      if (index === (currentIndex + 1) % collectRecyclableData.length) {
        gsap.set(secondaryImageRefs.current[index], {
          x: 0,
          opacity: 1,
        });
      } else {
        gsap.set(secondaryImageRefs.current[index], {
          x: '100%',
          opacity: 0,
        });
      }
    });
  }, []);

  const progressPercentage =
    ((currentIndex + 1) / collectRecyclableData.length) * 100;

  return (
    <>
      <div className="px-5 pb-5 pt-12 md:px-[5.556%] md:pb-10 md:pt-16">
        <EcocrewTitle title="OUR RECYCLING SERVICES EXTEND TO" />
      </div>

      <div className="grid grid-cols-1 px-5 md:grid-cols-2 md:px-[5.556%]">
        {/* Mobile + Tablet */}
        <div className="flex flex-col lg99:hidden">
          {collectRecyclableData?.map((item, index) =>
            index === currentIndex ? (
              <div className="flex flex-col items-start" key={index}>
                <p className="heading1 leading-8">{'0' + (index + 1)}</p>
                <div className="w-full pt-2 md:min-h-[350px]">
                  {/* Heading */}
                  <h2 className="recTitle pt-2 leading-8 sm:leading-[4rem] md:text-[1.75rem] md:leading-[2.5rem] lg99:text-[2.5rem] lg99:leading-[5.2rem]">
                    {item?.title}{' '}
                    <span className="text-ecocrewPrimary">
                      {item?.highlightTitle}
                    </span>
                  </h2>

                  {/* Paragraph */}
                  <p className="recDescription pt-2 leading-[1.25rem] text-dark md:text-[1rem] md:leading-[1.75rem] lg99:text-[1.125rem] lg99:leading-[30px]">
                    {item?.description}
                  </p>
                </div>
              </div>
            ) : null,
          )}
        </div>

        {/* Desktop */}
        <div className="hidden lg99:block lg99:pl-20">
          {collectRecyclableData?.map((item, index) =>
            index === currentIndex ? (
              <div
                key={index}
                className="relative flex min-h-[650px] w-full flex-col justify-between overflow-hidden">
                <div>
                  <p className="heading1 !text-start leading-8 lg99:leading-[3.9rem]">
                    {'0' + (index + 1)}
                  </p>
                  <h2 className="recTitle pt-2 leading-8 lg99:pt-6 lg99:leading-[3.25rem]">
                    {item?.title}{' '}
                    <span className="text-ecocrewPrimary">
                      {item?.highlightTitle}
                    </span>
                  </h2>
                  <div className="mt-4 max-h-[180px] lg99:mt-8">
                    <p className="recDescription leading-[1.125rem] text-dark lg99:leading-9">
                      {item?.description}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full pb-5 lg99:pb-10">
                  <div className="flex items-center justify-between">
                    <p className="text-regular">{'0' + (index + 1)}</p>

                    {/* Show Navigation Buttons on md and above (tablet + desktop) */}
                    <div className="hidden md:flex">
                      <NavigationButtons
                        loop={false}
                        index={currentIndex}
                        count={collectRecyclableData.length}
                        onPrevClick={handlePrevClick}
                        onNextClick={handleNextClick}
                      />
                    </div>
                  </div>
                  <div className="pt-3">
                    <Progress
                      value={progressPercentage}
                      className="h-[3px]"
                      indicatorClassName="bg-black"
                    />
                  </div>
                </div>
              </div>
            ) : null,
          )}
        </div>

        {/* Image Section */}
        <div className="relative flex h-full items-center justify-center gap-5 overflow-hidden pt-4 md:justify-start md:pl-5 md:pt-0 lg99:pl-3">
          <div
            className="relative h-[399px] w-full overflow-hidden md:h-full md:max-w-[433px]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}>
            {collectRecyclableData?.map((item, index) => (
              <div
                key={index}
                ref={(el) => (mainImageRefs.current[index] = el)}
                className="absolute left-0 top-0 h-full w-full">
                <img
                  src={
                    typeof item.imgSrc === 'string'
                      ? item.imgSrc
                      : (item.imgSrc as { src: string })?.src
                  }
                  alt=""
                  className="h-full w-full object-cover"
                  width={433}
                  height={399}
                />
              </div>
            ))}
          </div>

          <div className="relative hidden h-full max-h-[483px] w-full max-w-[255px] overflow-hidden lg99:block">
            {collectRecyclableData?.map((item, index) => (
              <div
                key={index}
                ref={(el) => (secondaryImageRefs.current[index] = el)}
                className="absolute left-0 top-0 h-full w-full">
                <div className="relative h-full w-full">
                  {/* <img src={typeof (item?.imgSrc) === "string" ? (item?.imgSrc) : (item?.imgSrc as { src: string })?.src} alt="" className="h-full w-full object-cover [filter:grayscale(100%)]" /> */}
                  <img
                    src={
                      typeof item.imgSrc === 'string'
                        ? item.imgSrc
                        : (item.imgSrc as { src: string })?.src
                    }
                    alt=""
                    className="h-full w-full object-cover [filter:grayscale(100%)]"
                    width={255}
                    height={483}
                  />

                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Bottom Progress - Updated to show buttons on tablet */}
        <div className="lg99:hidden">
          {collectRecyclableData.map((_, index) =>
            index === currentIndex ? (
              <div className="flex w-full flex-col pt-4" key={index}>
                <div className="flex justify-between">
                  <p className="text-regular self-end">{'0' + (index + 1)}</p>
                  {/* Show Navigation Buttons on tablet (md) and hide on mobile */}
                  <div className="hidden md:flex">
                    <NavigationButtons
                      loop={false}
                      index={currentIndex}
                      count={collectRecyclableData.length}
                      onPrevClick={handlePrevClick}
                      onNextClick={handleNextClick}
                    />
                  </div>
                </div>
                <div className="pt-3">
                  <Progress
                    value={progressPercentage}
                    className="h-[3px]"
                    indicatorClassName="bg-black"
                  />
                </div>
              </div>
            ) : null,
          )}
        </div>
      </div>
    </>
  );
}
