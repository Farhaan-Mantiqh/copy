import Marquee from 'react-fast-marquee';
import { testimonialData } from '@/overallData/home-constant';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { TestimonialItem } from '@/types/home-types';
import EcocrewTitle from '@/components/common/ecocrew-title';

export default function Testimonials(): JSX.Element {
  return (
    <>
      <div className="px-4 pb-4 pt-8 sm:px-6 sm:pb-6 sm:pt-12 md:px-[5.556%] md:pb-10 md:pt-16">
        <EcocrewTitle title="HERE IT FROM OUR USERS" />
        <div className="flex items-center justify-center py-4 sm:py-6 md:py-10">
          <h2 className="recTitle text-2xl leading-7 sm:text-3xl sm:leading-8 md:text-4xl md:leading-[3.25rem]">
            <span className="text-ecocrewPrimary">Trusted</span> by thousands
            here&apos; why
          </h2>
        </div>
      </div>
      <Marquee direction="left" speed={50} pauseOnHover>
        <div className="relative flex h-full pb-4 sm:pb-6 md:min-h-[300px] lg:min-h-[400px]">
          {testimonialData?.map((item: TestimonialItem, index: number) => (
            <div
              key={index}
              className="testimonialBg relative ml-4 max-w-[240px] rounded-xl border border-solid border-darkLow p-4 sm:ml-4 sm:max-w-[220px] sm:p-3 md:ml-5 md:max-w-[320px] md:p-4 lg:max-w-[413px] lg:p-5">
              <div className="flex justify-end pb-3 sm:pb-4 md:pb-6 lg:pb-9">
                <Avatar className="h-12 w-12 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16">
                  <img
                    src={
                      typeof item.profile === 'string'
                        ? item.profile
                        : (item.profile as { src: string })?.src
                    }
                    alt={item.name}
                    className="rounded-full object-cover"
                    width={64}
                    height={64}
                  />
                </Avatar>
              </div>

              <img
                src={
                  typeof item.colon === 'string'
                    ? item.colon
                    : (item.colon as { src: string })?.src
                }
                alt={item.name}
                className="h-6 w-7 sm:h-5 sm:w-6 md:h-7 md:w-8 lg:h-11 lg:w-11"
                width={44}
                height={44}
              />

              <p className="conSection h-full max-h-[120px] pt-1 text-sm leading-4 text-dark sm:max-h-[100px] sm:pt-1 sm:text-xs sm:leading-[0.875rem] md:max-h-[120px] md:pt-2 md:text-sm md:leading-[1.2rem] lg:max-h-[180px] lg:pt-5 lg:text-lg lg:leading-[1.63rem]">
                {item?.review}
              </p>
              <p className="testName pt-2 text-xs leading-[14px] text-darkLow sm:pt-1.5 sm:text-[0.7rem] sm:leading-3 md:pt-2 md:text-xs md:leading-[14px] lg:pt-5 lg:text-base lg:leading-5">
                {item?.name}
              </p>
              <div className="flex gap-0.5 pt-1 sm:gap-0.5 sm:pt-1 md:pt-1.5 lg:pt-2">
                {Array.from({ length: 5 }).map((_, index: number) => (
                  <span key={index}>
                    <Star
                      fill="#D67934"
                      stroke="none"
                      className="h-3 w-3 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 lg:h-4 lg:w-4"
                    />
                  </span>
                ))}
              </div>

              <img
                src={
                  typeof item.comma === 'string'
                    ? item.comma
                    : (item.comma as { src: string })?.src
                }
                alt=""
                className="... absolute bottom-2 right-2 h-[70px] w-[90px]"
                width={190}
                height={190}
              />
            </div>
          ))}
        </div>
      </Marquee>
    </>
  );
}
