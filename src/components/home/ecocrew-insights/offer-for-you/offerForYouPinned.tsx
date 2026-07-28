import { offerForYouData } from '@/overallData/home-constant';

interface OfferForYouPinnedProps {
  rightContent2Ref: React.RefObject<HTMLDivElement>;
  pinnedSectionClass: string;
}

const OfferForYouPinned: React.FC<OfferForYouPinnedProps> = ({
  rightContent2Ref,
  pinnedSectionClass,
}) => {
  return (
    <div
      ref={rightContent2Ref}
      className={pinnedSectionClass}
      style={{ display: 'flex' }}>
      <div className="h-full max-h-[650px] w-full px-[7%] md:pl-[14%] md:pr-[17%]">
        <div className="relative rounded-[20px] bg-commonGradient px-[8%] pb-9 pt-7 md:pb-14 md:pt-8">
          <div className="absolute right-0 top-0 rounded-bl-[20px] rounded-tr-[20px] bg-black px-4 py-2 md:px-10 md:py-4">
            <p className="text-xs leading-4 tracking-wider text-white">
              Cashback
            </p>
          </div>
          {offerForYouData?.map((item, index) => (
            <div key={index} className="borderBottom pt-[10px] md:pt-8">
              <h3 className="recTitle leading-9 text-dark lg99:leading-[3.75rem]">
                {item?.cashback}
              </h3>
              <p className="conSection pt-1 leading-4 text-darkLow lg99:leading-[26px]">
                extra cash on recyclables
              </p>
              <p className="conSection pb-8 pt-1 leading-4 text-darkLow lg99:leading-[26px]">
                <span className="conSection pt-1 leading-4 text-darkLow lg99:leading-[26px]">
                  worth
                </span>{' '}
                {item?.price} or more
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferForYouPinned;
