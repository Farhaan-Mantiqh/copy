'use client';
import EcoCard from '@/components/common/ecostore-card';
import { byCategoriesData } from '@/overallData/ecoStore-constant';
import { ByCategoryItem, HeadingConfig } from '@/types/ecoStore-types';

export default function ByCategories(): JSX.Element {
  const homFeedsHeading: HeadingConfig = {
    beforeText: 'Switch your',
    highlightedText: 'everyday',
    afterText: ' products to ecofriendly alternatives from our ecostore',
  };

  return (
    <div className="mx-auto max-w-[1440px]" id="sectionToScroll">
      <EcoCard
        sectionTitle="EXPLORE BY CATEGORIES"
        heading={homFeedsHeading}
        exploreButtonText="Explore all products"
        exploreButtonLink={null}
        items={byCategoriesData}
        renderItem={(item: ByCategoryItem, openModal) => (
          <div
            onClick={openModal}
            className="relative aspect-[1/1] cursor-pointer md:aspect-[17/20]">
            <img
              src={
                typeof item?.imgSrc === 'string'
                  ? item?.imgSrc
                  : (item?.imgSrc as { src: string })?.src
              }
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex h-full w-full items-end p-5 md:p-4 lg:p-8">
              <p className="text-ecoStore rounded-full bg-black px-4 py-2 text-center font-medium leading-3 text-white md:leading-5 lg:px-6 lg:py-3">
                {item?.category}
              </p>
            </div>
          </div>
        )}
      />
    </div>
  );
}
