'use client';

import { Button } from '../ui/button';

const carbon =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/icons/carbon_blog.png';

interface NoBlogsProps {
  onReset: () => void;
}

export default function NoBlogs({ onReset }: NoBlogsProps): JSX.Element {
  return (
    <div className="noBlogsBg flex flex-col items-center justify-center rounded-2xl border border-solid border-gainsboro p-10 py-16 text-center">
      <img
        src={
          typeof carbon === 'string' ? carbon : (carbon as { src: string })?.src
        }
        alt=""
        className="mb-3 h-12 w-12 md:h-16 md:w-16"
      />

      <h3 className="text-medium mb-4 font-medium">Oops! No Blogs Here Yet.</h3>

      <p className="text-small mb-5 text-darkLow">
        It looks like we haven’t published any blogs yet. <br /> But don’t worry
        great content is coming soon!
      </p>

      <Button
        onClick={onReset}
        className="cursor-pointer rounded-full border-none bg-buttonGradient px-12 py-2 text-sm font-medium text-white">
        Go back
      </Button>
    </div>
  );
}
