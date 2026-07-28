'use client';
import { highlightText } from '@/lib/constant';
import Link from 'next/link';

type Props = {
  title: string;
  images: (string | { src: string })[];
  text: string;
};

export default function LandingSection({
  title,
  images,
  text,
}: Props): JSX.Element {
  return (
    <section className="relative">
      <div className="bg-commonGradient">
        <div className="mx-auto max-w-screen-2xl pt-[75px]">
          <div className="px-5 md:px-[5.556%]">
            <div className="min-h-[calc(100svh-75px)] overflow-hidden pt-2 md:min-h-[calc(100svh-360px)] md:pt-10 lg:min-h-[calc(100svh-10px)] lg:pt-10">
              <h1
                data-aos="fade-down"
                className="heading1 flex flex-wrap items-center justify-center gap-2 leading-9 md:leading-[3.25rem]">
                {highlightText(title, 'title')}
              </h1>
              <div
                data-aos="fade-up"
                className="mx-auto -mb-[275px] grid max-w-[450px] grid-cols-2 grid-rows-2 gap-4 pt-7 md:flex md:items-start md:justify-center md:gap-4 lg:pt-[80px]">
                <div>
                  <div className="relative block h-[180px] w-full min-w-[150px] md:block md:h-[180px] md:min-w-[165px] lg:h-[244px] lg:min-w-[196px]">
                    <img
                      src={
                        typeof images[0] === 'string'
                          ? images[0]
                          : (images[0] as { src: string })?.src
                      }
                      alt="image"
                      className="absolute inset-0 h-full w-full rounded-[20px] object-cover"
                    />
                  </div>
                  <div className="relative mt-5 block h-[180px] w-full min-w-[150px] md:block md:h-[180px] md:min-w-[165px] lg:h-[244px] lg:min-w-[196px]">
                    <img
                      src={
                        typeof images[1] === 'string'
                          ? images[1]
                          : (images[1] as { src: string })?.src
                      }
                      alt="image"
                      className="absolute inset-0 h-full w-full rounded-[20px] object-cover"
                    />
                  </div>
                </div>
                <div className="md:pt-24">
                  <div className="relative block h-[180px] w-full min-w-[150px] md:block md:h-[180px] md:min-w-[165px] lg:h-[244px] lg:min-w-[196px]">
                    <img
                      src={
                        typeof images[2] === 'string'
                          ? images[2]
                          : (images[2] as { src: string })?.src
                      }
                      alt="image"
                      className="absolute inset-0 h-full w-full rounded-[20px] object-cover"
                    />
                  </div>
                  <div className="relative mt-5 block h-[180px] w-full min-w-[150px] md:block md:h-[180px] md:min-w-[165px] lg:h-[244px] lg:min-w-[196px]">
                    <img
                      src={
                        typeof images[3] === 'string'
                          ? images[3]
                          : (images[3] as { src: string })?.src
                      }
                      alt="image"
                      className="absolute inset-0 h-full w-full rounded-[20px] object-cover"
                    />
                  </div>
                </div>
                <div className="md:pt-36">
                  <div className="relative hidden h-[180px] w-full min-w-[150px] md:block md:h-[180px] md:min-w-[165px] lg:h-[244px] lg:min-w-[196px]">
                    <img
                      src={
                        typeof images[4] === 'string'
                          ? images[4]
                          : (images[4] as { src: string })?.src
                      }
                      alt="image"
                      className="absolute inset-0 h-full w-full rounded-[20px] object-cover"
                    />
                  </div>
                  <div className="relative mt-5 hidden h-[180px] w-full min-w-[150px] md:block md:h-[180px] md:min-w-[165px] lg:h-[244px] lg:min-w-[196px]">
                    <img
                      src={
                        typeof images[5] === 'string'
                          ? images[5]
                          : (images[5] as { src: string })?.src
                      }
                      alt="image"
                      className="absolute inset-0 h-full w-full rounded-[20px] object-cover"
                    />
                  </div>
                </div>
                <div className="md:pt-36">
                  <div className="relative hidden h-[180px] w-full min-w-[150px] md:block md:h-[180px] md:min-w-[165px] lg:h-[244px] lg:min-w-[196px]">
                    <img
                      src={
                        typeof images[6] === 'string'
                          ? images[6]
                          : (images[6] as { src: string })?.src
                      }
                      alt="image"
                      className="absolute inset-0 h-full w-full rounded-[20px] object-cover"
                    />
                  </div>
                  <div className="relative mt-5 hidden h-[180px] w-full min-w-[150px] md:block md:h-[180px] md:min-w-[165px] lg:h-[244px] lg:min-w-[196px]">
                    <img
                      src={
                        typeof images[7] === 'string'
                          ? images[7]
                          : (images[7] as { src: string })?.src
                      }
                      alt="image"
                      className="absolute inset-0 h-full w-full rounded-[20px] object-cover"
                    />
                  </div>
                </div>
                <div className="md:pt-24">
                  <div className="relative hidden h-[180px] w-full min-w-[150px] md:block md:h-[180px] md:min-w-[165px] lg:h-[244px] lg:min-w-[196px]">
                    <img
                      src={
                        typeof images[8] === 'string'
                          ? images[8]
                          : (images[8] as { src: string })?.src
                      }
                      alt="image"
                      className="absolute inset-0 h-full w-full rounded-[20px] object-cover"
                    />
                  </div>
                  <div className="relative mt-5 hidden h-[180px] w-full min-w-[150px] md:block md:h-[180px] md:min-w-[165px] lg:h-[244px] lg:min-w-[196px]">
                    <img
                      src={
                        typeof images[9] === 'string'
                          ? images[9]
                          : (images[9] as { src: string })?.src
                      }
                      alt="image"
                      className="absolute inset-0 h-full w-full rounded-[20px] object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="relative hidden h-[180px] w-full min-w-[150px] md:block md:h-[180px] md:min-w-[165px] lg:h-[244px] lg:min-w-[196px]">
                    <img
                      src={
                        typeof images[10] === 'string'
                          ? images[10]
                          : (images[10] as { src: string })?.src
                      }
                      alt="image"
                      className="absolute inset-0 h-full w-full rounded-[20px] object-cover"
                    />
                  </div>
                  <div className="relative mt-5 hidden h-[180px] w-full min-w-[150px] md:block md:h-[180px] md:min-w-[165px] lg:h-[244px] lg:min-w-[196px]">
                    <img
                      src={
                        typeof images[11] === 'string'
                          ? images[11]
                          : (images[11] as { src: string })?.src
                      }
                      alt="image"
                      className="absolute inset-0 h-full w-full rounded-[20px] object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 md:bottom-4">
                <Link
                  href="#sectionToScroll"
                  className="scroll-smooth no-underline">
                  <div className="flex flex-col items-center gap-3 hover:cursor-pointer">
                    <span className="text-base font-medium">
                      Let&apos;s explore {text}
                    </span>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      className="animate-bounce">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.9993 1.66797C23.9153 1.66797 30.3327 8.0853 30.3327 16.0013C30.3327 23.9173 23.9153 30.3346 15.9993 30.3346C8.08335 30.3346 1.66602 23.9173 1.66602 16.0013C1.66602 8.0853 8.08335 1.66797 15.9993 1.66797ZM12.0393 13.9613C11.8498 13.7847 11.5991 13.6885 11.34 13.6931C11.0809 13.6976 10.8337 13.8026 10.6505 13.9858C10.4673 14.169 10.3624 14.4162 10.3578 14.6753C10.3532 14.9343 10.4494 15.1851 10.626 15.3746L15.2927 20.0413C15.4802 20.2286 15.7343 20.3338 15.9993 20.3338C16.2643 20.3338 16.5185 20.2286 16.706 20.0413L21.3727 15.3746C21.4709 15.2831 21.5497 15.1727 21.6044 15.05C21.659 14.9274 21.6884 14.7949 21.6908 14.6607C21.6932 14.5264 21.6685 14.393 21.6182 14.2685C21.5679 14.144 21.493 14.0309 21.3981 13.9359C21.3031 13.841 21.19 13.7661 21.0655 13.7158C20.941 13.6655 20.8076 13.6408 20.6733 13.6432C20.539 13.6455 20.4066 13.6749 20.284 13.7296C20.1613 13.7842 20.0509 13.8631 19.9593 13.9613L15.9993 17.9213L12.0393 13.9613Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-[5%] w-full bg-gradient-to-t from-white to-transparent md:h-[30%]"></div>
    </section>
  );
}
