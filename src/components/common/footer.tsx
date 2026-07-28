'use client';
import Link from 'next/link';
import { footerInfoData } from '@/overallData/footer-constant';
import { FooterSectionsItem } from '@/types/footer-types';

const logo =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/logos/ecocrew-logo.png';
const app =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/footer/apple_store_icon.png';
const play =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/footer/play_store_icon.png';

export default function Footer(): JSX.Element {
  const DownloadSection = ({
    className,
  }: {
    className: string;
  }): JSX.Element => (
    <div className={`col-span-4 flex flex-col gap-3 ${className}`}>
      <p className="text-regular font-medium text-grey">Download Ecocrew</p>
      <p className="text-small leading-snug">
        Download ecocrew application from Playstore and App store. Rewarding you
        for being ecofriendly.
      </p>
      <div className="flex gap-3">
        <Link
          href="https://apps.apple.com/in/app/ecocrew-ecofriendly-made-easy/id1669327969"
          className="h-full max-h-[43px]"
          rel="noopener noreferrer"
          target="_blank">
          <img
            src={typeof app === 'string' ? app : (app as { src: string })?.src}
            alt="App Store"
            className="h-full w-full max-w-[135px]"
            width={135}
            height={43}
          />
        </Link>
        <Link
          href="https://play.google.com/store/apps/details?id=com.ecocrew.app&hl=en_IN"
          className="h-full max-h-[43px]"
          rel="noopener noreferrer"
          target="_blank">
          <img
            src={
              typeof play === 'string' ? play : (play as { src: string })?.src
            }
            alt="Play Store"
            className="h-full w-full max-w-[135px]"
            width={135}
            height={43}
          />
        </Link>
      </div>
    </div>
  );

  return (
    <section id="footer" className="mt-8 bg-[#FAFAFA] md:mt-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="px-[5.556%] pt-5 md:pt-14">
          <div className="flex flex-col gap-5 md:flex-row md:gap-10">
            <img
              src={
                typeof logo === 'string' ? logo : (logo as { src: string })?.src
              }
              alt="logo"
              className="h-full max-h-[52px] w-full max-w-[136px]"
              width={136}
              height={52}
            />
            <DownloadSection className="md:hidden" />

            <div className="grid grid-cols-2 gap-6 pb-5 md:grid-cols-3 md:gap-10 md:pb-10 lg99:grid-cols-10">
              {footerInfoData?.map(
                (section: FooterSectionsItem, index: number) => (
                  <div
                    key={index}
                    className="flex flex-col gap-3 pt-4 md:col-span-1 lg99:col-span-2">
                    <p className="text-regular font-medium text-grey">
                      {section?.title}
                    </p>
                    {section?.items?.map(
                      (item: { text: string; url?: string }) =>
                        item?.url ? (
                          <Link
                            key={item?.text}
                            href={item?.url}
                            className="text-small leading-snug no-underline">
                            {item.text}
                          </Link>
                        ) : (
                          <p
                            key={item?.text}
                            className="text-small leading-snug">
                            {item.text}
                          </p>
                        ),
                    )}
                  </div>
                ),
              )}
              <DownloadSection className="hidden pt-4 md:flex" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 border border-l-0 border-r-0 border-solid border-b-gainsboro py-7">
            <Link
              aria-label="instagram"
              href={
                'https://www.instagram.com/ecocrewofficial?igsh=MW1pdGhqY2k0eGdudA=='
              }
              className="cursor-pointer border-none bg-transparent p-0 shadow-none hover:bg-transparent"
              rel="noopener noreferrer"
              target="_blank">
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="#A0A0A0"
                stroke="#A0A0A0"
                strokeWidth={0}>
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
              </svg>
            </Link>

            <Link
              aria-label="X"
              href={'https://x.com/EcocrewOfficial'}
              className="cursor-pointer border-none bg-transparent p-0 shadow-none hover:bg-transparent"
              rel="noopener noreferrer"
              target="_blank">
              <svg
                viewBox="0 0 512 512"
                className="h-6 w-6"
                fill="#A0A0A0"
                stroke="#A0A0A0"
                strokeWidth={0}>
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345  L233.7 318.6 106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z" />
              </svg>
            </Link>

            <Link
              aria-label="facebook"
              href={'https://www.facebook.com/EcocrewOfficial/'}
              className="cursor-pointer border-none bg-transparent p-0 shadow-none hover:bg-transparent"
              rel="noopener noreferrer"
              target="_blank">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="#A0A0A0"
                strokeWidth={1.8}>
                <path d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>
            <Link
              aria-label="linkedin"
              href={'https://in.linkedin.com/company/ecocrew-2021'}
              className="cursor-pointer border-none bg-transparent p-0 shadow-none hover:bg-transparent"
              rel="noopener noreferrer"
              target="_blank">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="#A0A0A0"
                stroke="#A0A0A0"
                strokeWidth={0.4}>
                <path d="M5 1.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5M3.75 4a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m-1.5 4A.75.75 0 0 1 3 7.25h4a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zm1.5.75v11.5h2.5V8.75zM9.25 8a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v.434l.435-.187a7.8 7.8 0 0 1 2.358-.595C20.318 7.4 22.75 9.58 22.75 12.38V21a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-7a1.25 1.25 0 0 0-2.5 0v7a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75zm1.5.75v11.5h2.5V14a2.75 2.75 0 1 1 5.5 0v6.25h2.5v-7.87c0-1.904-1.661-3.408-3.57-3.234a6.3 6.3 0 0 0-1.904.48l-1.48.635a.75.75 0 0 1-1.046-.69V8.75z" />
              </svg>
            </Link>
          </div>
          <div className="flex items-center pb-10 pt-5">
            <p className="text-regular font-normal text-darkGrey">
              Recycling since 2022 . All copyrights reserved by Ecocrew Private
              Limited.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
