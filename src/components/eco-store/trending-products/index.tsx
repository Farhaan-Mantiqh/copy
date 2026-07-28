'use client';
import { useCallback, useMemo } from 'react';
import EcoCard from '@/components/common/ecostore-card';
import { Button } from '@/components/ui/button';
import ecoStoreProducts from '@/overallData/json/ecoStore-Trending.json';
import { EcoStoreItem, HeadingConfig } from '@/types/ecoStore-types';

export default function TrendingProducts(): JSX.Element {
  const filteredProducts = useMemo(() => {
    return ecoStoreProducts
      .filter((product) => !product?.out_of_stock && product?.trending)
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
  }, []);

  const trendingHeading: HeadingConfig = useMemo(() => {
    return {
      beforeText: 'Explore the top',
      highlightedText: 'sustainable',
      afterText:
        'products that are trending and shaping the future of ecofriendly living',
    };
  }, []);

  const renderItem = useCallback(
    (item: EcoStoreItem, openModal: () => void) => {
      return (
        <div className="relative aspect-[81/100] md:aspect-[7/10]">
          <img
            src={
              typeof item?.imgSrc === 'string'
                ? item?.imgSrc
                : (item?.imgSrc as { src: string })?.src
            }
            alt={item?.product}
            className="absolute inset-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 md:p-4 md:pb-5">
            <p className="text-xs font-semibold leading-3 text-white md:text-sm md:leading-4">
              {item?.from}
            </p>

            <p className="text-ecoStore pt-2 font-semibold leading-[15px] text-white md:pt-3 md:text-sm md:leading-[17px]">
              {item?.product}
            </p>

            <p className="pt-2 text-xs font-medium leading-[15px] text-white md:pt-3 md:text-[13px] md:leading-[17px]">
              Use {Number(item?.coins).toLocaleString('en-IN')} ecocoins & get
              this for
            </p>

            <div className="flex items-center justify-between pt-2 md:pt-3">
              <div className="flex items-center gap-2 md:gap-2">
                <p className="text-small rounded-[50px] bg-white px-2 py-[2px] leading-4 text-ecocrewPrimary md:px-3 md:py-[3px] md:text-[13px] md:leading-[18px]">
                  ₹{Number(item?.discountPrice).toLocaleString('en-IN')}
                </p>

                <p className="text-small leading-4 text-gainsboro line-through decoration-1 md:text-[13px] md:leading-[18px]">
                  ₹{Number(item?.price).toLocaleString('en-IN')}
                </p>
              </div>

              <Button
                onClick={openModal}
                className="ml-1 cursor-pointer rounded-[30px] border-none bg-ecocrewPrimary px-3 py-[5px] leading-4 transition-all ease-in-out hover:scale-95 md:px-3 md:py-[4px] md:leading-[16px] lg:px-5 lg:py-[10px]">
                <p className="text-small !font-medium text-white md:text-sm lg:text-base">
                  {item?.buttonTitle}
                </p>
              </Button>
            </div>
          </div>
        </div>
      );
    },
    [],
  );

  return (
    <div className="mx-auto max-w-[1440px]">
      <EcoCard
        sectionTitle="TRENDING PRODUCTS"
        heading={trendingHeading}
        exploreButtonText="Explore trending products"
        exploreButtonLink={null}
        items={filteredProducts}
        renderItem={renderItem}
      />
    </div>
  );
}
