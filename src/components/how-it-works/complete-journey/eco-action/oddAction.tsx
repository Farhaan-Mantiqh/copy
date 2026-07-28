'use client';
import { ActionProps } from '@/types/howItWorks-types';

export default function OddAction({
  action,
  imageClasses,
  isComingSoon,
}: ActionProps): JSX.Element {
  return (
    <div className="eco-action-odd relative mr-[calc(50%+8px)] md:mr-[calc(50%+13px)]">
      <div className="ml-auto flex max-w-full flex-col justify-end xxs:max-w-[140px] xs:max-w-[160px] sm:max-w-[225px] md:max-w-[310px]">
        <div className="flex w-full justify-end">
          <div className="flex h-[55px] w-[55px] flex-shrink-0 items-center justify-center rounded-full bg-[#f1f1f1] p-3 md:h-[100px] md:w-[100px] md:px-6 md:py-5">
            <img
              src={
                typeof action.icon === 'string'
                  ? action.icon
                  : (action.icon as { src: string })?.src
              }
              alt={`${action.title} icon`}
              className={imageClasses}
              width={56}
              height={56}
            />
          </div>
          <div className="flex h-[55px] w-full items-center justify-center md:h-[100px]">
            <div className="dashed-line1" />
          </div>
        </div>
        <div className="max-w-[70%] text-left">
          <h3
            className={`text-medium pt-2 ${isComingSoon ? 'text-darkLow' : ''}`}>
            {action.title}
          </h3>
          <p className="text-small text-darkLow">{action.availability}</p>
          <p
            className={`text-large ${isComingSoon ? 'text-darkLow' : 'text-ecocrewPrimary'}`}>
            {action.percentage}
          </p>
        </div>
      </div>
    </div>
  );
}
