import CombinedSections from './scrollTrigger';
import EcocrewTitle from '@/components/common/ecocrew-title';

export default function EcocrewInsights(): JSX.Element {
  return (
    <>
      <div className="">
        <div className="px-5 md:px-[5.556%]">
          <EcocrewTitle title="ECOCREW INSIGHTS" />
        </div>
      </div>
      <CombinedSections />
    </>
  );
}
