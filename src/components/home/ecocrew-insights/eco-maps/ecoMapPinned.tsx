import ecomap from '@/img/home/ecocrew-insights/ecomap.png';

interface EcoMapPinnedProps {
  rightContent3Ref: React.RefObject<HTMLDivElement>;
  pinnedSectionClass: string;
}

const EcoMapPinned: React.FC<EcoMapPinnedProps> = ({
  rightContent3Ref,
  pinnedSectionClass,
}) => {
  return (
    <div ref={rightContent3Ref} className={pinnedSectionClass}>
      <div className="relative aspect-[19/20] h-full w-full">
        <img
          src={
            typeof ecomap === 'string'
              ? ecomap
              : (ecomap as { src: string })?.src
          }
          alt="Ecomap"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default EcoMapPinned;
