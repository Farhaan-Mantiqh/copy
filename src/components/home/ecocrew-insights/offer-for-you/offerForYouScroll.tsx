import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface OfferForYouScrollProps {
  section2Ref: React.RefObject<HTMLDivElement>;
  scrollSectionClass: string;
}

const OfferForYouScroll: React.FC<OfferForYouScrollProps> = ({
  section2Ref,
  scrollSectionClass,
}) => {
  return (
    <div ref={section2Ref} className={scrollSectionClass}>
      <div className="borderLeft md:pl-7 md:pr-7 lg99:pl-10 lg99:pr-7">
        <p className="conSection pt-5 !font-medium leading-4 tracking-wider text-darkLow lg99:pt-0 lg99:leading-[30px]">
          OFFERS FOR YOU
        </p>
        <h2 className="main-heading pb-4 pt-4 leading-9 sm:leading-[4rem] lg99:pb-12 lg99:pt-8 lg99:leading-[5.2rem]">
          <span className="inline sm:block">Welcome bonus </span>
          <span className="inline sm:block">
            get <span className="text-ecocrewPrimary">cashback </span>
          </span>
          <span className="inline sm:block">on your </span>
          <span className="inline sm:block">
            <span className="text-ecocrewPrimary">first recyclables </span>
          </span>
          <span className="inline sm:block">pickup!</span>
        </h2>

        <Link
          href="https://play.google.com/store/apps/details?id=com.ecocrew.app&hl=en_IN"
          rel="noopener noreferrer"
          target="_blank">
          <Button
            variant="outline"
            className="insightsButton lg99:ap-1 mb-4 max-w-[120px] cursor-pointer gap-0 lg99:max-w-[180px] lg99:px-4 lg99:py-3 lg99:tracking-wider">
            Know more
            <ChevronRight
              strokeWidth={1}
              className="h-[16px] w-[16px] md:h-[24px] md:w-[24px]"
            />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OfferForYouScroll;
