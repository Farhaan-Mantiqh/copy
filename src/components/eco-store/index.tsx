import LandingSection from '../common/landing-section';
import BestSeller from './best-seller';
import ByCategories from './categories';
import TrendingProducts from './trending-products';
import productsData from '@/overallData/json/ecostore-Landing.json';

export default function EcoStore(): JSX.Element {
  const landingImages = productsData
    .slice(0, 12)
    .map((product) => product.images[0]);

  console.log(landingImages);

  return (
    <>
      <LandingSection
        title="Redeem your ecocoins by choosing from our selection of ecofriendly products"
        images={landingImages}
        text="ecostore"
      />
      <ByCategories />
      <TrendingProducts />
      <BestSeller />
    </>
  );
}
