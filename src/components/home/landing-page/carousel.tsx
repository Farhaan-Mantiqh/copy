'use client';
import { useEffect, useState } from 'react';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  landingCarouselItems,
  landingPageData,
} from '@/overallData/home-constant';
import { LandingCarouselItem } from '@/types/home-types';
import Link from 'next/link';

export default function LandingCarousel(): JSX.Element {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [appStoreLink, setAppStoreLink] = useState<string>('');

  useEffect(() => {
    const detectDeviceAndSetLink = (): void => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      const isIOS = /iphone|ipad|ipod/.test(userAgent);
      const isMacOS = /macintosh/.test(userAgent);

      const playStoreLink =
        'https://play.google.com/store/apps/details?id=com.ecocrew.app&hl=en_IN';
      const appStoreLink =
        'https://apps.apple.com/in/app/ecocrew-ecofriendly-made-easy/id1669327969';

      if (isIOS || isMacOS) {
        setAppStoreLink(appStoreLink);
      } else {
        setAppStoreLink(playStoreLink);
      }
    };

    detectDeviceAndSetLink();

    if (!api) return;
    api.on('select', () => setCurrent(api.selectedScrollSnap()));

    const interval = setInterval(() => api.scrollNext(), 3000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="relative xl:hidden">
      <Carousel opts={{ loop: true }} setApi={setApi}>
        <CarouselContent>
          {landingCarouselItems?.map(
            (item: LandingCarouselItem, index: number) => (
              <CarouselItem key={index}>
                <div className="relative overflow-hidden">
                  <img
                    src={
                      typeof item?.imageSrc === 'string'
                        ? item?.imageSrc
                        : (item?.imageSrc as { src: string })?.src
                    }
                    alt="Ecocrew image"
                    className="h-[453px] w-full rounded-bl-[40px] rounded-br-[40px] object-cover md:rounded-none"
                  />
                  <div className="absolute inset-0 h-[453px] rounded-bl-[40px] rounded-br-[40px] bg-black opacity-50 md:rounded-none" />
                  <div className="absolute left-1/2 top-[350px] flex -translate-x-1/2 flex-col items-center text-white">
                    <p className="text-lg tracking-widest text-white">
                      {item?.title}
                    </p>
                    <img
                      src={
                        typeof item?.icon === 'string'
                          ? item?.icon
                          : (item?.icon as { src: string })?.src
                      }
                      alt="Ecocrew icon"
                      className="h-8 w-8"
                    />
                  </div>
                </div>
              </CarouselItem>
            ),
          )}
        </CarouselContent>
      </Carousel>
      <h2 className="title z-999 absolute left-1/2 top-32 w-full -translate-x-1/2 px-5 text-center font-medium text-white md:top-[135px] md:text-center md:leading-[1.25] lg:leading-snug">
        <span className="text-ecocrewPrimary">Recycle</span> Smart, Earn Big
        Only <br />
        on Ecocrew
      </h2>

      <div className="z-999 absolute left-1/2 top-[434px] flex -translate-x-1/2 transform justify-center gap-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="w-[42px]">
            <Progress
              value={current === index ? 100 : 0}
              className="h-[3px] rounded-full"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center px-4 pt-5 text-center">
        <p className="text-ecoStore leading-4">{landingPageData.description}</p>
        <Link href={appStoreLink} rel="noopener noreferrer" target="_blank">
          <Button className="fontFamily mt-5 cursor-pointer rounded-full border-none bg-buttonGradient px-6 py-3 text-[13px] leading-5 md:text-xl">
            {landingPageData.buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
}
