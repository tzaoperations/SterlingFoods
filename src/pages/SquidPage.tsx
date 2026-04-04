import Navbar from '../components/layout/Navbar';

// --- Asset Imports ---
import squid2Img from '../assets/images/home/squid2.png';
import squidImg from '../assets/images/products/squid/squid.png';
import hoverImg from '../assets/images/products/squid/hover.png';
import gal1 from '../assets/images/products/squid/1.png';
import gal2 from '../assets/images/products/squid/2.png';
import gal3 from '../assets/images/products/squid/3.png';
import gal5 from '../assets/images/products/squid/5.png';
import gal6 from '../assets/images/products/squid/6.png';
import mainImg from '../assets/images/products/squid/main.png';
import shrimpImg from '../assets/images/products/shrimp.png';
import starImg from '../assets/images/products/squid/star.png';

const SquidPage = () => {
  // CRITICAL FIX: The translateY is now negative (-0.05em) to lift the letter up to the baseline!
  // Added whitespace-nowrap and explicit <br /> support to force exact Figma line breaks.
  const MixedHeading = ({ firstLetter, restOfText, className, style }: { firstLetter: React.ReactNode, restOfText: React.ReactNode, className?: string, style?: React.CSSProperties }) => (
    <h2 className={`text-[#C7D2D9] ${className}`} style={style}>
      <span className="font-seasons uppercase leading-[1.1]">
        <span style={{ 
          fontFamily: "'Corinthia', cursive", 
          fontSize: '1.3em', // Scaled down from 1.5em so it matches better
          textTransform: 'none', 
          display: 'inline-block', 
          transform: 'translateY(-0.05em)', // Pulled UP instead of pushed down
          marginRight: '4px' 
        }}>
          {firstLetter}
        </span>
        {restOfText}
      </span>
    </h2>
  );

  return (
    <div className="w-full bg-[#001321] text-[#C7D2D9] overflow-clip flex flex-col pb-32">
      <Navbar />

      {/* ═══════════════════════════════════════════════════
          SECTION 1 — INTRO 
      ═══════════════════════════════════════════════════ */}
      <div className="relative w-full aspect-video max-w-[1920px] mx-auto min-h-[800px] mt-[100px]" style={{ containerType: 'inline-size' }}>
        
        <img 
          src={squid2Img} 
          alt="Whole squid" 
          className="absolute left-[4.06%] top-[7%] w-[10.52%] h-[22.59%] object-cover shadow-2xl" 
        />

        <img 
          src={squidImg} 
          alt="Squid close-up" 
          className="absolute left-[58.54%] top-[7%] w-[38.33%] h-[81.57%] object-cover shadow-2xl" 
        />

        {/* Scaled down to max 80px */}
        <MixedHeading 
          firstLetter="S" 
          restOfText="QUID"
          className="absolute left-[3.125%] top-[65.09%] w-max"
          style={{ fontSize: 'clamp(2rem, 4cqw, 80px)' }}
        />

        <p 
          className="absolute left-[3.125%] top-[78.42%] w-[38.85%] font-poppins font-light text-[#A2ADB4] leading-[1.4]"
          style={{ fontSize: 'clamp(0.85rem, 1.04cqw, 20px)' }}
        >
          Our Vannamei shrimp is selected for its uniform shape and gentle firmness. Farms are chosen for traceability, predictable texture, and steady quality across seasons. Through controlled handling and measured preparation, the shrimp retains its clarity, freshness, and natural sweetness.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 2 — THE WAYS OUR PRODUCT TAKES SHAPE
      ═══════════════════════════════════════════════════ */}
      <div className="relative w-full aspect-video max-w-[1920px] mx-auto min-h-[800px]" style={{ containerType: 'inline-size' }}>
        
        {/* Exact Figma line break using <br /> */}
        <MixedHeading 
          firstLetter="T" 
          restOfText={<>HE WAYS OUR <br /> PRODUCT TAKES SHAPE</>}
          className="absolute left-[3.125%] top-[6.74%] w-max whitespace-nowrap"
          style={{ fontSize: 'clamp(1.8rem, 3.5cqw, 72px)' }} 
        />

        <img 
          src={hoverImg} 
          alt="Squid rings" 
          className="absolute left-[47.03%] top-[25.64%] w-[19.73%] h-[33.51%] object-cover shadow-2xl z-10" 
        />

        <div 
          className="absolute left-[34.79%] top-[42.4%] w-[27.96%] flex flex-col gap-[2cqw] z-20"
          style={{ fontSize: 'clamp(1.2rem, 2.5cqw, 48px)' }}
        >
          <div className="font-seasons capitalize text-[#A2ADB4]">Whole Squid</div>
          <div className="font-seasons capitalize italic text-[#C7D2D9]">Squid Rings</div>
          <div className="font-seasons capitalize text-[#A2ADB4]">Squid Tube</div>
          <div className="font-seasons capitalize text-[#A2ADB4]">Squid Tentacles</div>
        </div>

        {/* Decorative Star Image */}
        <img 
          src={starImg} 
          alt="Decorative star"
          className="absolute left-[88.43%] top-[79.44%] w-[8.43%] h-auto object-contain" 
        />
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 3 — IN ITS TRUE FORM & GALLERY
      ═══════════════════════════════════════════════════ */}
      <div className="relative w-full aspect-video max-w-[1920px] mx-auto min-h-[800px]" style={{ containerType: 'inline-size' }}>
        
        {/* Exact Figma line break using <br /> */}
        <MixedHeading 
          firstLetter="I" 
          restOfText={<>N ITS <br /> TRUE FORM</>}
          className="absolute left-[3.125%] top-[7.4%] w-max whitespace-nowrap"
          style={{ fontSize: 'clamp(1.8rem, 3.5cqw, 72px)' }}
        />

        <div className="absolute top-[25.46%] w-full px-[3.125%] flex flex-row items-center justify-between gap-[2cqw]">
          <img src={gal1} alt="Gallery 1" className="w-[10.1%] aspect-[194/216] object-cover shadow-xl" />
          <img src={gal2} alt="Gallery 2" className="w-[19.11%] aspect-[367/430] object-cover shadow-xl" />
          <img src={gal3} alt="Gallery 3" className="w-[28.12%] aspect-[540/654] object-cover shadow-2xl" />
          <img src={gal5} alt="Gallery 4" className="w-[19.11%] aspect-[367/430] object-cover shadow-xl" />
          <img src={gal6} alt="Gallery 5" className="w-[10.1%] aspect-[194/216] object-cover shadow-xl" />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 4 — MASSIVE MAIN IMAGE
      ═══════════════════════════════════════════════════ */}
      <div className="w-full max-w-[1920px] mx-auto my-12">
        <img 
          src={mainImg} 
          alt="Main squid dish" 
          className="w-full aspect-video object-cover shadow-2xl" 
        />
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 5 — YOU MAY ALSO LIKE
      ═══════════════════════════════════════════════════ */}
      <div className="relative w-full aspect-video max-w-[1920px] mx-auto min-h-[600px]" style={{ containerType: 'inline-size' }}>
        
        {/* Pinned to the Right side and forced into two lines */}
        <MixedHeading 
          firstLetter="Y" 
          restOfText={<>OU MAY ALSO <br /> LIKE TO VIEW</>}
          className="absolute right-[3.125%] top-[10.37%] w-max text-right whitespace-nowrap"
          style={{ fontSize: 'clamp(1.8rem, 3.5cqw, 72px)' }}
        />

        <div className="absolute left-[3.125%] top-[26.48%] w-[30.46%] flex flex-col gap-[2cqw]">
          <img 
            src={shrimpImg} 
            alt="Vannamei Shrimp" 
            className="w-full aspect-[585/430] object-cover shadow-2xl" 
          />
          
          <h3 className="font-seasons text-[#C7D2D9] capitalize leading-tight mt-[1cqw]" style={{ fontSize: 'clamp(1.2rem, 1.66cqw, 32px)' }}>
            Vannamei Shrimp
          </h3>
          
          <p className="font-poppins font-light text-[#A2ADB4] leading-[1.4]" style={{ fontSize: 'clamp(0.75rem, 1.04cqw, 20px)' }}>
            Sourced from authorised aquaculture farms, our shrimp is valued for its balanced texture, uniform size, and stability through processing and freezing.
          </p>
          
          <div className="mt-[0.5cqw]">
             <div className="flex flex-row items-center gap-[6px] cursor-pointer group w-max">
              <span className="w-[6px] h-[6px] rounded-full bg-[#C7D2D9] shrink-0 group-hover:scale-150 transition-transform duration-300" />
              <span className="font-poppins text-[#C7D2D9] uppercase tracking-wider group-hover:opacity-70 transition-opacity duration-300" style={{ fontSize: 'clamp(0.7rem, 0.83cqw, 16px)' }}>
                View Details
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default SquidPage;