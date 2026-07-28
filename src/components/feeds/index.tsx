import LandingSection from '../common/landing-section';
import Stories from './stories';
import FeedsSection from './feeds-section';
import feedsImages from '../../overallData/json/feeds.json';

export default function Feeds(): JSX.Element {
  const landingImages = feedsImages?.flatMap((category) =>
    category?.feeds?.slice(0, 12).map((feed) => feed?.image?.[0]?.image),
  );

  return (
    <>
      <LandingSection
        title="Get your daily dose of ecofriendly living — tips , trends & environmental news"
        images={landingImages}
        text="feeds"
      />
      <div className="mx-auto max-w-screen-2xl" id="sectionToScroll">
        <div className="px-5 pt-6 md:px-[5.5%] md:pt-10">
          <Stories />
          <FeedsSection />
        </div>
      </div>
    </>
  );
}
