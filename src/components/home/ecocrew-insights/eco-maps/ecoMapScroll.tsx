import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ecoMapsData } from '@/overallData/home-constant';
import { EcoMapsItem } from '@/types/home-types';
import { Minus, Plus } from 'lucide-react';

interface EcoMapScrollProps {
  section3Ref: React.RefObject<HTMLDivElement>;
  scrollSectionClass: string;
}

const EcoMapScroll: React.FC<EcoMapScrollProps> = ({
  section3Ref,
  scrollSectionClass,
}) => {
  return (
    <div ref={section3Ref} className={scrollSectionClass}>
      <div className="borderLeft md:pl-7 md:pr-7 lg99:pl-10 lg99:pr-7">
        <p className="conSection pt-2 !font-medium leading-[18px] tracking-wider text-darkLow md:pt-3 md:leading-[20px] lg99:pt-0 lg99:leading-[30px]">
          ECO MAPS
        </p>
        <h2 className="main-heading pb-2 pt-2 leading-[2.2rem] sm:pt-3 sm:leading-[4rem] md:pb-8 md:pt-4 md:leading-[4.2rem] lg99:pb-12 lg99:pt-8 lg99:leading-[5.2rem]">
          <span className="text-ecocrewPrimary">Recycle</span> regularly
          <span className="inline sm:block"> and rise as your </span>
          <span className="inline sm:block">area’s top</span>
          <span className="inline sm:block">
            <span className="text-ecocrewPrimary"> ecofriendly</span> home
          </span>
        </h2>

        <Accordion type="single" collapsible className="borderBottom pb-3">
          <AccordionItem value="item-1">
            <AccordionTrigger className="fontFamily group cursor-pointer border-none bg-transparent p-0 text-base font-medium leading-5 lg99:text-xl lg99:leading-[26px]">
              <h3 className="conSection !font-medium leading-[16px] md:leading-[18px] lg99:leading-[30px]">
                How ecomaps work
              </h3>
              <div className="relative h-6 w-6">
                <Plus
                  stroke="black"
                  strokeWidth={2}
                  className="absolute transition-all duration-500 ease-in-out group-data-[state=open]:rotate-90 group-data-[state=open]:opacity-0"
                  width={24}
                  height={24}
                />
                <Minus
                  stroke="black"
                  strokeWidth={2}
                  className="absolute rotate-90 opacity-0 transition-all duration-500 ease-in-out group-data-[state=open]:rotate-0 group-data-[state=open]:opacity-100"
                  width={24}
                  height={24}
                />
              </div>
            </AccordionTrigger>
            <AccordionContent className="mt-2 flex flex-col gap-5">
              {ecoMapsData?.map((item: EcoMapsItem, index: number) => (
                <div key={index} className="">
                  <h4 className="text-homeBlog font-medium leading-[20px] md:leading-7 lg99:leading-9">
                    <span style={{ color: item?.color }}>{item?.percent}%</span>{' '}
                    {item?.title}
                  </h4>
                  <p className="text-ecoStore pt-1 font-normal leading-[18px] text-darkLow md:leading-[20px] lg99:leading-6">
                    {item?.Description}
                  </p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default EcoMapScroll;
