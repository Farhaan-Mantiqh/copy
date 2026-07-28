'use client';
import { Button } from '@/components/ui/button';
import { landingPageData } from '@/overallData/home-constant';
import { LandingImagesTypes } from '@/types/home-types';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function RewardingEcoFriendly(): JSX.Element {
  const [downloadLink, setDownloadLink] = useState<string>('');

  useEffect(() => {
    const userAgent =
      (typeof navigator !== 'undefined' &&
        (navigator.userAgent || navigator.vendor)) ||
      (typeof window !== 'undefined' &&
        (window as Window & { opera?: string }).opera) ||
      '';
    if (/android/i.test(userAgent)) {
      setDownloadLink(
        'https://play.google.com/store/apps/details?id=com.ecocrew.app&hl=en_IN',
      );
    }
    // iOS/macOS → App Store (TypeScript-safe check)
    else if (
      /iPad|iPhone|iPod|Macintosh/.test(userAgent) &&
      !('MSStream' in window)
    ) {
      setDownloadLink(
        'https://apps.apple.com/in/app/ecocrew-ecofriendly-made-easy/id1669327969',
      );
    } else {
      setDownloadLink(
        'https://play.google.com/store/apps/details?id=com.ecocrew.app&hl=en_IN',
      );
    }
  }, []);

  return (
    <div className="hidden px-[5.556%] pt-32 xl:grid xl:grid-cols-2">
      <div data-aos="fade-up" className="flex flex-col gap-5">
        <h2 className="title max-w-[688px] font-medium leading-[6.9rem]">
          <span className="text-ecocrewPrimary">Recycle</span> Smart, Earn Big
          Only
          <br />
          on Ecocrew
        </h2>

        <p className="text-xl font-normal leading-[1.9rem] text-dark">
          {landingPageData?.description}
        </p>

        {downloadLink && (
          <Link href={downloadLink} rel="noopener noreferrer" target="_blank">
            <Button className="mt-5 max-w-[250px] cursor-pointer rounded-full border-none bg-buttonGradient px-8 py-[18px] text-xl font-medium leading-[30px] tracking-wide">
              {landingPageData?.buttonText || 'Download EcoCrew'}
            </Button>
          </Link>
        )}
      </div>
      <div className="relative flex h-full min-h-[570px] justify-end gap-[5px]">
        {landingPageData?.landingImages?.map(
          (item: LandingImagesTypes, index: number) => {
            const roundedClasses =
              index === 0
                ? 'rounded-bl-[45px] rounded-tr-[45px]'
                : index === 2
                  ? 'rounded-br-[45px] rounded-tl-[45px]'
                  : '';

            return (
              <div
                data-aos={`${index === 1 ? 'fade-up' : 'fade-down'}`}
                className="relative h-full w-full max-w-[156px]"
                key={index}>
                <img
                  src={
                    typeof item.imgSrc === 'string'
                      ? item.imgSrc
                      : (item.imgSrc as { src: string })?.src
                  }
                  alt=""
                  className={`h-full w-full object-cover ${roundedClasses}`}
                  width={156}
                  height={570}
                />

                <div
                  className={`absolute inset-0 bg-black/30 ${roundedClasses}`}></div>
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-7">
                  <p className="text-medium pb-1 text-xl text-white">
                    {item?.text}
                  </p>

                  <img
                    src={
                      typeof item.imgBottom === 'string'
                        ? item.imgBottom
                        : (item.imgBottom as { src: string })?.src
                    }
                    alt=""
                    width={44}
                    height={44}
                  />
                </div>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
}
