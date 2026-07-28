'use client';
import { RefObject, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { completeJourney } from '@/overallData/howItWorks-constant';
import EvenAction from './evenAction';
import OddAction from './oddAction';
import { CompleteJourneyItem } from '@/types/howItWorks-types';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const useEcoAnimation = (
  containerRef: RefObject<HTMLDivElement>,
  fillRef: RefObject<HTMLDivElement>,
  stopIndex: number,
): void => {
  useEffect(() => {
    const container = containerRef.current;
    const fillLine = fillRef.current;
    if (!container || !fillLine) return;

    gsap.set(fillLine, { scaleY: 0 });

    const elements = container.querySelectorAll<HTMLElement>(
      '.eco-action-even, .eco-action-odd',
    );

    let currentMaxScale = 0;

    elements.forEach((element, idx) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top center+=100',
          end: 'bottom center',
          toggleActions: 'play none none none',
        },
      });

      tl.fromTo(
        element,
        {
          opacity: 0,
          x: idx % 2 === 0 ? -50 : 50,
          scale: 0.8,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
        },
      );

      if (idx <= stopIndex) {
        tl.to(
          fillLine,
          {
            duration: 0.8,
            ease: 'power2.out',
            scaleY: () => {
              const containerHeight = container.offsetHeight;
              const elementRect = element.getBoundingClientRect();
              const containerRect = container.getBoundingClientRect();

              const elementCenterY =
                elementRect.top - containerRect.top + elementRect.height / 2;
              const newScale = elementCenterY / containerHeight;

              if (newScale > currentMaxScale) {
                currentMaxScale = newScale;
              }
              return currentMaxScale;
            },
          },
          '-=0.3',
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [containerRef, fillRef, stopIndex]);
};

const getImageClasses = (isComingSoon: boolean): string =>
  isComingSoon
    ? 'h-[20px] w-[20px] md:h-[40px] md:w-[40px]'
    : 'h-full max-h-14 w-full max-w-7 md:max-w-14';

export default function EcoActions(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  useEcoAnimation(containerRef, fillRef, 3);

  const renderAction = (
    action: CompleteJourneyItem,
    index: number,
  ): JSX.Element => {
    const isEven = index % 2 === 0;
    const isComingSoon = action.availability === 'coming soon';
    const imageClasses = getImageClasses(isComingSoon);

    return isEven ? (
      <EvenAction
        key={index}
        action={action}
        imageClasses={imageClasses}
        isComingSoon={isComingSoon}
      />
    ) : (
      <OddAction
        key={index}
        action={action}
        imageClasses={imageClasses}
        isComingSoon={isComingSoon}
      />
    );
  };

  return (
    <div ref={containerRef} className="pb-6 pt-10">
      <div className="relative mx-auto grid max-w-4xl grid-cols-2">
        <div className="absolute left-1/2 top-0 z-10 h-full -translate-x-1/2 transform">
          <div className="relative h-full w-4 overflow-hidden rounded-full bg-[#EBEBEB] md:w-6">
            <div
              ref={fillRef}
              className="absolute left-0 top-0 w-full origin-top rounded-full"
              style={{
                height: '100%',
                background: `
                  linear-gradient(
                    to bottom,
                    #DCFBCC 0%,
                    #DCFBCC 20%,
                    #DCFBCC 50%,
                    #DCFBCC 80%,
                    #DCFBCC 100%
                  )
                `,
                boxShadow: '0 0 10px rgba(120,255,120,0.4)',
              }}
            />
          </div>
        </div>

        <div className="col-span-2">{completeJourney.map(renderAction)}</div>
      </div>
    </div>
  );
}
