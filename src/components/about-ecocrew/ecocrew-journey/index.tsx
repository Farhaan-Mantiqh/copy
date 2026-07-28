'use client';
import EcocrewTitle from '@/components/common/ecocrew-title';
import { highlightText } from '@/lib/constant';
import { aboutEcocrewData } from '@/overallData/aboutEcocrew-constant';
import { JourneyPointsTypes, JourneyTypes } from '@/types/aboutEcocrew-types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Fragment, useState } from 'react';
import MobileJourney from './mobile-journey';

gsap.registerPlugin(ScrollTrigger);

export default function EcocrewJourney(): JSX.Element {
  const [currentYear, setCurrentYear] = useState(
    aboutEcocrewData?.journey?.[0]?.year || '2022',
  );

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const sections = gsap.utils.toArray<HTMLElement>('.journey-card');
      const timeline = gsap.timeline({
        defaults: {
          duration: 1,
          ease: 'power2.inOut',
          stagger: 0.2,
        },
      });

      const updateYear = (index: number): void => {
        const year = aboutEcocrewData?.journey?.[index]?.year ?? '2022';
        setCurrentYear(year);
      };

      updateYear(0);

      sections.forEach((section, index) => {
        const isFirst = index === 0;
        const isLast = index === sections?.length - 1;

        if (!isFirst) {
          timeline.from(section, {
            opacity: 0,
            y: 20,
            duration: 2,
            ease: 'power2.out',
            onStart: () => updateYear(index),
            onReverseComplete: () => updateYear(index - 1),
          });
        }

        if (!isLast) {
          timeline.to(section, {
            opacity: 0,
            y: -20,
            duration: 2,
            ease: 'power2.in',
          });
        }
      });

      ScrollTrigger.create({
        trigger: '.journey-card',
        start: 'top 12%',
        // end: 'bottom bottom',
        end: '+=4000',
        pin: '#journey',
        endTrigger: '#footer',
        animation: timeline,
        toggleActions: 'play pause resume none',
        scrub: 2,
      });

      return () => {
        timeline.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div
      id="journey"
      className="px-5 pt-1 md:px-[5.556%] lg:min-h-screen 2xl:pt-24">
      <EcocrewTitle title="ECOCREW'S JOURNEY" />
      <MobileJourney />
      <div className="hidden lg:block">
        <div className="relative">
          <div className="absolute !left-0 z-10 w-full">
            <div className="grid grid-cols-3 place-items-center gap-x-5 gap-y-10 pt-36">
              <div className="order-1 col-span-1 aspect-video"></div>
              <div className="aboutNumberGradient order-2 col-span-1 aspect-video h-full w-full rounded-xl">
                <div className="flex h-full w-full items-center justify-center">
                  <p>{currentYear}</p>
                </div>
              </div>
            </div>
          </div>
          {aboutEcocrewData?.journey?.map(
            (item: JourneyTypes, index: number) => {
              return (
                <div className="journey-card absolute pt-10" key={index}>
                  <h5 className="heading2 flex items-center justify-center gap-2 leading-[3.25rem]">
                    {highlightText(item?.title, 'title')}
                  </h5>
                  <div
                    className={`pointsCard grid grid-cols-3 place-items-center gap-x-8 ${item?.year === '2026' ? 'gap-y-0' : 'gap-y-10'} pt-[30px]`}>
                    {item?.journeyPoints?.map(
                      (points: JourneyPointsTypes, index: number) => {
                        return (
                          <Fragment key={index}>
                            <div
                              style={{ order: points?.order }}
                              className={`col-span-1`}>
                              {Object.keys(points)?.length === 1 ? (
                                <div
                                  className={`flex h-full min-h-[232px] w-full items-center justify-center ${item?.year === '2026' && points?.order === '4' ? 'bg-transparent' : 'bg-white'}`}>
                                  &nbsp;
                                </div>
                              ) : (
                                <div className={`flex w-full flex-col gap-2`}>
                                  <div className="flex items-center justify-between gap-2">
                                    {points?.image && (
                                      <img
                                        src={
                                          typeof points?.image === 'string'
                                            ? points?.image
                                            : (points?.image as { src: string })
                                                ?.src
                                        }
                                        alt="icons"
                                        width={70}
                                        height={70}
                                      />
                                    )}
                                    <span
                                      className={`recTitle leading-[52px] text-[#00000029] ${item?.year === '2026' ? 'hidden' : 'block'}`}>
                                      0{index === 0 ? index + 1 : index}
                                    </span>
                                  </div>
                                  <h6
                                    className={`text-medium pt-2 leading-relaxed ${item?.year === '2026' ? 'text-center' : 'text-left'}`}>
                                    {points?.title}
                                  </h6>
                                  {points?.type === 'notParagraph' ? (
                                    <div className="text-small grid gap-x-3 gap-y-1 leading-[1.125rem]">
                                      <p className="text-darkLow">
                                        Trees:{' '}
                                        <span>{points?.values?.[0]}</span>
                                      </p>
                                      <p className="text-darkLow">
                                        Water:{' '}
                                        <span>{points?.values?.[1]}</span>
                                      </p>
                                      <p className="text-darkLow">
                                        Energy:{' '}
                                        <span>{points?.values?.[2]}</span>
                                      </p>
                                      <p className="text-darkLow">
                                        Oil: <span>{points?.values?.[3]}</span>
                                      </p>
                                      <p className="text-darkLow">
                                        Landfill:{' '}
                                        <span>{points?.values?.[4]}</span>
                                      </p>
                                      <p className="col-span-3 text-darkLow">
                                        Total Recyclables Collected:{' '}
                                        <span>{points?.values?.[5]}</span>
                                      </p>
                                    </div>
                                  ) : (
                                    <h6
                                      className={`text-small leading-tight ${item?.year === '2026' ? 'text-center' : 'text-left'}`}>
                                      {points?.description &&
                                        highlightText(
                                          points.description,
                                          'description',
                                        )}
                                    </h6>
                                  )}
                                </div>
                              )}
                            </div>
                          </Fragment>
                        );
                      },
                    )}
                  </div>
                </div>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
}
