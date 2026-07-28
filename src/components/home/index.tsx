import CollectRecyclables from './collect-recyclabes';
import EcocrewInsights from './ecocrew-insights';
import HowEcoCrewWorks from './ecocrew-works';
import HomeBlogs from './home-blogs';
import HomeEcoStore from './home-ecoStore';
// import FAQS from './faqs';
import HomeFeeds from './home-feeds';
import HomeLandingSection from './landing-page';
import EcocrewNews from './news';
import PeopleSays from './people-says';
import Testimonials from './testimonials';

export default function HomePage(): JSX.Element {
  return (
    <div className="mx-auto max-w-[1440px]">
      <HomeLandingSection />
      <HowEcoCrewWorks />
      <EcocrewInsights />
      <CollectRecyclables />
      <Testimonials />
      <PeopleSays />
      <EcocrewNews />
      <HomeEcoStore />
      <HomeBlogs />
      <HomeFeeds />
      {/* <FAQS /> */}
    </div>
  );
}
