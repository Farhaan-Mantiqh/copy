import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface BusinessScrollProps {
  section4Ref: React.RefObject<HTMLDivElement>;
  scrollSectionClass: string;
}

const BusinessScroll: React.FC<BusinessScrollProps> = ({
  section4Ref,
  scrollSectionClass,
}) => {
  return (
    <div ref={section4Ref} className={scrollSectionClass}>
      <div className="borderLeft md:pl-7 md:pr-7 lg99:pl-10 lg99:pr-7">
        <p className="conSection pt-5 !font-medium leading-4 tracking-wider text-darkLow md:pt-0 md:leading-[18px] lg99:pt-0 lg99:leading-[30px]">
          REGISTER YOUR BUSINESS
        </p>

        <h2 className="main-heading pb-4 pt-4 leading-9 sm:leading-[4rem] lg99:pb-12 lg99:pt-8 lg99:leading-[5.2rem]">
          Register your{' '}
          <span className="inline text-ecocrewPrimary sm:inline-block">
            business
          </span>{' '}
          on{' '}
          <span className="inline text-ecocrewPrimary sm:inline-block">
            Ecocrew
          </span>{' '}
          and get convenient recycling pickups
        </h2>

        <Link href="/register-business">
          <Button
            variant="outline"
            className="insightsButton mb-4 max-w-[120px] cursor-pointer gap-0 lg99:max-w-[180px] lg99:gap-1 lg99:px-4 lg99:py-3 lg99:tracking-wider">
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

export default BusinessScroll;
