'use client';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationButtonsProps {
  onPrevClick: () => void;
  onNextClick: () => void;
  loop: boolean;
  index?: number;
  count?: number;
  isLastSlide?: (index: number, count: number) => boolean;
}

export default function NavigationButtons({
  onPrevClick,
  onNextClick,
  loop,
  index = 0,
  count = 0,
  isLastSlide,
}: NavigationButtonsProps): JSX.Element {
  const isFirst = index === 0;
  const isLast = isLastSlide ? isLastSlide(index, count) : index === count - 1;

  return (
    <div className="flex gap-2">
      <Button
        onClick={() => {
          if (!loop && isFirst) return;
          onPrevClick();
        }}
        disabled={!loop && isFirst}
        className={`h-[clamp(24px,5vw,70px)] w-[clamp(24px,5vw,70px)] rounded-full border-none p-[clamp(2px,1vw,18px)] ${!loop && isFirst ? 'cursor-not-allowed bg-gainsboro opacity-60' : 'cursor-pointer bg-black hover:bg-black'} `}>
        <ChevronLeft
          stroke="white"
          strokeWidth={1}
          className="h-[clamp(12px,2.5vw,32px)] w-[clamp(12px,2.5vw,32px)]"
        />
      </Button>

      <Button
        onClick={() => {
          if (!loop && isLast) return;
          onNextClick();
        }}
        disabled={!loop && isLast}
        className={`h-[clamp(24px,5vw,70px)] w-[clamp(24px,5vw,70px)] rounded-full border-none p-[clamp(2px,1vw,18px)] ${!loop && isLast ? 'cursor-not-allowed bg-gainsboro opacity-60' : 'cursor-pointer bg-black hover:bg-black'} `}>
        <ChevronRight
          stroke="white"
          strokeWidth={1}
          className="h-[clamp(12px,2.5vw,32px)] w-[clamp(12px,2.5vw,32px)]"
        />
      </Button>
    </div>
  );
}
