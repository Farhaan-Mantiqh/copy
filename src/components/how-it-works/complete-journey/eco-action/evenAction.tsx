'use client';
import { ActionProps } from '@/types/howItWorks-types';

export default function EvenAction({
  action,
  imageClasses,
  isComingSoon,
}: ActionProps): JSX.Element {
  return (
    <div className="eco-action-even relative ml-[calc(50%+8px)] flex justify-start md:ml-[calc(50%+13px)]">
      <div className="flex w-full flex-row">
        <div className="dashed-line xxs:max-w-[85px] xs:max-w-[105px] sm:max-w-[170px] md:max-w-[210px]" />
        <div className="flex flex-col items-start">
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
          <div className="relative text-left">
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
    </div>
  );
}
