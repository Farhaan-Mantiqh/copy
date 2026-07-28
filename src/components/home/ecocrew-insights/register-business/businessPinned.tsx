import flow from '@/img/home/ecocrew-insights/flow.png';

interface BusinessPinnedProps {
  rightContent4Ref: React.RefObject<HTMLDivElement>;
  pinnedSectionClass: string;
}

const BusinessPinned: React.FC<BusinessPinnedProps> = ({
  rightContent4Ref,
  pinnedSectionClass,
}) => {
  return (
    <div ref={rightContent4Ref} className={pinnedSectionClass}>
      <img
        src={typeof flow === 'string' ? flow : (flow as { src: string })?.src}
        alt="Flow diagram"
        className="h-full max-h-[375px] w-full max-w-[214px] lg99:max-h-[655px] lg99:max-w-[360px]"
        width={360}
        height={655}
      />
    </div>
  );
};

export default BusinessPinned;
