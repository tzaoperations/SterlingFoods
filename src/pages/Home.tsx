import HeroSection from '../components/home/HeroSection';
import FoundationSection from '../components/home/FoundationSection';
import SourcingSection from '../components/home/SourcingSection';
import GlobalSection from '../components/home/GlobalSection';
import QuoteSection from '../components/home/QuoteSection';

const Home = () => {
  return (
    <div className="w-full bg-[#030b14]">
      <HeroSection />
      <FoundationSection />
      <SourcingSection />
      <GlobalSection />
      <QuoteSection />
    </div>
  );
};

export default Home;