'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { howEcocrewWorks } from '@/overallData/home-constant';
import { HowEcocrewWorks } from '@/types/home-types';
import EcocrewTitle from '@/components/common/ecocrew-title';

export default function HowEcoCrewWorks(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(contentRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setCurrentIndex((prev) => (prev + 1) % howEcocrewWorks.length);
          gsap.to(contentRef.current, {
            opacity: 1,
            duration: 0.5,
          });
        },
      });
    }, 5000);

    gsap.to(contentRef.current, {
      opacity: 1,
      duration: 0.5,
    });

    return () => clearInterval(interval);
  }, []);

  const currentItem: HowEcocrewWorks = howEcocrewWorks[currentIndex];

  return (
    <div className="w-full py-12 md:py-16">
      <div className="px-5 md:px-[5.556%]">
        <EcocrewTitle title="HOW ECOCREW WORKS" />
        <h2 className="heading1 pt-5 leading-[1.8rem] md:pt-10 md:leading-[3.9rem]">
          How you can contribute on{' '}
          <span className="text-ecocrewPrimary">Ecocrew</span>
        </h2>
      </div>
      <div className="grid h-full min-h-[596px] w-full grid-cols-1 pt-5 md:grid-cols-2 md:pt-16">
        <div className="h-full w-full overflow-hidden border border-gray-300">
          <video
            className="h-full w-full bg-black object-contain"
            controls
            preload="metadata"
            poster="/assets/videos/poster.jpg">
            <source
              src="/assets/videos/What-Ecocrew_(1080P_HD).mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="ecocreWorksbg relative h-full max-h-[140px] md:max-h-full md:bg-bgGradient">
          <div className="hidden md:block">
            <div className="dashed-top absolute top-[90px]" />
            <div className="dashed-right absolute right-[90px]" />
            <div className="dashed-left absolute left-[90px]" />
            <div className="dashed-bottom absolute bottom-[90px]" />
          </div>
          <div ref={contentRef} className="opacity-0">
            <div className="absolute left-5 right-5 top-7 flex flex-col items-start justify-start md:left-[110px] md:right-[110px] md:top-[130px] lg99:top-[150px]">
              <h3
                className={`conTitle max-w-[${currentItem?.width}] w-full leading-5 text-dark md:leading-[2.6rem] xl:leading-[3.9rem]`}>
                {currentItem?.title}
              </h3>
              <p className="conSection mt-1 leading-5 text-darkLow md:mt-3 md:leading-7 lg99:mt-5 lg99:leading-[1.9rem]">
                {currentItem?.description}
              </p>
            </div>
            <div className="recTitle absolute right-5 top-3 text-lightGrey md:left-6 md:top-5 md:leading-[3.25rem]">
              {(currentIndex + 1).toString().padStart(2, '0')}
            </div>
            <div className="absolute bottom-3 right-5 md:top-6">
              <img
                src={
                  typeof currentItem?.imgSrc === 'string'
                    ? currentItem?.imgSrc
                    : (currentItem?.imgSrc as { src: string })?.src
                }
                alt="Ecocrew"
                className="h-[24px] max-h-[48px] w-[24px] max-w-[48px] md:h-full md:w-full"
                width={48}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
