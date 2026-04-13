import HeroSection from '../components/home/HeroSection';
import FoundationSection from '../components/home/FoundationSection';
import SourcingSection from '../components/home/SourcingSection';
import GlobalSection from '../components/home/GlobalSection';
import QuoteSection from '../components/home/QuoteSection';
import Preloader from '../components/layout/Preloader';
import { useAssetLoader } from '../hooks/useAssetLoader';

import heroBg from '../assets/images/home/HeroBG.png';
import heroYacht from '../assets/images/home/HeroYacht.png';

const Home = () => {
  const isPageLoading = useAssetLoader([heroBg, heroYacht]);

  return (
    <>
      <Preloader isLoading={isPageLoading} />
      <div className="w-full bg-[#030b14]">
      <HeroSection />
      <FoundationSection />
      <SourcingSection />
      <GlobalSection />
      <QuoteSection />
      </div>
    </>
  );
};

export default Home;