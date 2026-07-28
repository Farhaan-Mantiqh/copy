import EcoActions from './eco-action/index';
import EcocrewTitle from '@/components/common/ecocrew-title';

export default function CompleteJourney(): JSX.Element {
  return (
    <div className="mx-auto max-w-[1440px]">
      <div className="px-4 pt-6 md:px-[5.556%] md:pt-16">
        <EcocrewTitle title="THE COMPLETE JOURNEY" />
        <div className="pt-5 md:pt-10">
          <h2 className="recTitle pb-5 text-center font-medium leading-8 md:pb-12 md:leading-[3.9rem]">
            The complete journey towards being{' '}
            <span className="text-ecocrewPrimary">
              100% <br /> ecofriendly
            </span>
          </h2>
          <p className="conSection text-center leading-5 text-darkLow md:leading-8">
            See what are the factors that contribute to living an ecofriendly
            life and how you can start doing them. Also get to know how ecocrew
            will help you and reward you for it.
          </p>
        </div>
        <EcoActions />
      </div>
    </div>
  );
}
