'use client';
import EcocrewTitle from '@/components/common/ecocrew-title';
import { highlightText } from '@/lib/constant';
import { aboutEcocrewData } from '@/overallData/aboutEcocrew-constant';
import { AboutFoundersTypes } from '@/types/aboutEcocrew-types';

export default function Founders(): JSX.Element {
  return (
    <div className="px-5 pb-8 pt-6 md:px-[5.556%] md:pb-10 md:pt-0">
      <EcocrewTitle title="ABOUT FOUNDERS" />
      <div className="flex flex-col items-center justify-between gap-3 py-6 md:py-10 lg:flex-row lg:gap-8">
        <h4 className="recTitle flex flex-wrap justify-center gap-2 leading-8 md:flex-nowrap md:leading-[52px]">
          {highlightText(aboutEcocrewData?.founders?.title, 'title')}
        </h4>
        <p className="recDescription text-center leading-4 text-darkLow md:leading-8 lg:text-left">
          {aboutEcocrewData?.founders?.description}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-5 lg99:grid-cols-3">
        {aboutEcocrewData?.founders?.aboutFounders?.map(
          (item: AboutFoundersTypes, index: number) => {
            return (
              <div
                key={index}
                className={`flex flex-col items-center justify-center gap-2 md:gap-4 lg99:items-start ${index === 2 ? 'items-center md:col-span-2 lg99:col-span-1 lg99:items-start' : ''}`}>
                <img
                  src={
                    typeof item?.image === 'string'
                      ? item?.image
                      : (item?.image as { src: string })?.src
                  }
                  alt="founders"
                  className="h-full max-h-[415px] min-h-[215px] w-full max-w-[415px] rounded-[8px] object-cover"
                  width={415}
                  height={415}
                />
                <div className="pt-4 md:pt-2">
                  <h5 className="text-medium pb-1 text-center leading-5 md:pb-2 md:leading-7 lg99:text-left">
                    {item?.name}
                  </h5>
                  <p className="text-regular text-center leading-5 lg99:text-left">
                    {item?.role}
                  </p>
                </div>
                <p
                  className={`text-small max-w-96 text-center leading-4 text-darkLow md:leading-[18px] lg99:text-left`}>
                  {item?.description}
                </p>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
}
