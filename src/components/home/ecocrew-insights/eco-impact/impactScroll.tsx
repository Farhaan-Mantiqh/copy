interface ImpactScrollProps {
  section5Ref: React.RefObject<HTMLDivElement>;
  scrollSectionClass: string;
}

const ImpactScroll: React.FC<ImpactScrollProps> = ({
  section5Ref,
  scrollSectionClass,
}) => {
  return (
    <div ref={section5Ref} className={scrollSectionClass}>
      <div className="borderLeft md:pl-10 md:pl-7 md:pr-7 lg:mb-[90px]">
        <p className="conSection pt-5 !font-medium leading-3 tracking-wider text-darkLow md:pt-0 md:leading-[30px]">
          ECOCREW IMPACT
        </p>

        <h2 className="main-heading pb-4 pt-4 leading-9 sm:leading-[4rem] lg99:pb-12 lg99:pt-8 lg99:leading-[5.2rem]">
          <span className="inline text-ecocrewPrimary sm:inline-block">
            Ecocrew’s
          </span>{' '}
          impact <span className="inline sm:block">on earth has saved</span>
        </h2>

        <h3 className="text-large pb-2 leading-9 text-darkLow md:leading-7 lg99:pb-3 lg99:leading-9">
          Total recyclables collected by Ecocrew
        </h3>
        <p className="main-heading pb-2 leading-9 text-ecocrewPrimary md:pb-0 md:leading-[3rem] lg99:pb-0 lg99:leading-[6rem]">
          11,11,507.29 KG
        </p>
      </div>
    </div>
  );
};

export default ImpactScroll;
