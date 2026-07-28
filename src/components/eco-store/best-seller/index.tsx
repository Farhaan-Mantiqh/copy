'use client';
import ecoStoreProducts from '@/overallData/json/ecoStore-best-seller.json';
import { Button } from '@/components/ui/button';
import EcoCard from '@/components/common/ecostore-card';
import { EcoStoreItem, HeadingConfig } from '@/types/ecoStore-types';

export default function BestSeller(): JSX.Element {
  const filteredProducts = ecoStoreProducts
    .filter(
      (product) =>
        !product?.out_of_stock && !product?.trending && product?.best_seller,
    )
    .slice(0, 9)
    .map((product) => ({
      imgSrc: product?.images[0],
      from: product?.brand_name,
      product: product?.name,
      coins: product?.redeemable_eco_points,
      discountPrice: product?.discounted_price,
      price: product?.original_price,
      buttonTitle: 'Buy now',
    }));

  const sellerHeading: HeadingConfig = {
    beforeText: 'Explore our',
    highlightedText: 'best-selling',
    afterText: 'sustainable products that are leading the way',
  };

  return (
    <div className="mx-auto max-w-[1440px] pb-5 md:pb-10">
      <EcoCard
        sectionTitle="BEST SELLERS"
        heading={sellerHeading}
        exploreButtonText="Explore best sellers"
        exploreButtonLink={null}
        items={filteredProducts}
        renderItem={(item: EcoStoreItem, openModal) => (
          <div className="relative aspect-[81/100] md:aspect-[7/10]">
            <img
              src={
                typeof item?.imgSrc === 'string'
                  ? item?.imgSrc
                  : (item?.imgSrc as { src: string })?.src
              }
              alt=""
              className="absolute inset-0 h-full w-full rounded-md object-cover"
            />

            <div className="absolute inset-0 flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3 md:p-4 lg:p-6">
              <p className="text-[10px] font-semibold leading-3 text-white md:text-xs md:leading-4 lg:text-sm">
                {item?.from}
              </p>

              <p className="text-ecoStore overflow-hidden text-ellipsis whitespace-nowrap pt-2 font-semibold leading-[14px] text-white md:pt-3 md:text-sm md:leading-5 lg:pt-4 lg:text-base">
                {item?.product}
              </p>

              <p className="pt-2 text-[10px] font-medium leading-[14px] text-white md:pt-3 md:text-xs md:leading-4 lg:pt-4 lg:text-sm">
                Use {Number(item?.coins).toLocaleString('en-IN')} ecocoins & get
                this for
              </p>

              <div className="flex items-center justify-between pt-2 md:pt-3 lg:pt-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <p className="rounded-[50px] bg-white px-2 py-[3px] text-xs leading-4 text-ecocrewPrimary md:px-3 md:py-[4px] md:text-sm md:leading-5 lg:px-4 lg:py-[8px] lg:text-base lg:leading-6">
                    ₹{Number(item?.discountPrice).toLocaleString('en-IN')}
                  </p>

                  <p className="text-xs leading-4 text-gainsboro line-through decoration-1 md:text-sm md:leading-5 lg:text-base lg:leading-6">
                    ₹{Number(item?.price).toLocaleString('en-IN')}
                  </p>
                </div>

                <Button
                  onClick={openModal}
                  className="ml-1 cursor-pointer rounded-[30px] border-none bg-ecocrewPrimary px-2 py-[4px] leading-4 transition-all ease-in-out hover:scale-95 md:px-4 md:py-[6px] md:leading-[18px] lg:px-5 lg:py-[10px]">
                  <p className="text-[10px] !font-medium text-white md:text-xs lg:text-sm">
                    {item?.buttonTitle}
                  </p>
                </Button>
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
}
