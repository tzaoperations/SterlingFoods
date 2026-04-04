import Navbar from '../components/layout/Navbar';

// --- Asset Imports ---
import shrimpsmallImg from '../assets/images/products/shrimp/shrimpsmall.png';
import shrimpImg from '../assets/images/products/shrimp/shrimp.png';
import gal1 from '../assets/images/products/shrimp/1.png';
import gal2 from '../assets/images/products/shrimp/2.png';
import gal3 from '../assets/images/products/shrimp/3.png';
import gal4 from '../assets/images/products/shrimp/4.png';
import gal5 from '../assets/images/products/shrimp/5.png';
import mainImg from '../assets/images/products/shrimp/main.png';
import squidCardImg from '../assets/images/products/shrimp/squid.png';

const ShrimpPage = () => {
  /// Reusable component for the mixed Corinthia/Seasons headings
  const MixedHeading = ({ firstLetter, restOfText, className, style }: { firstLetter: React.ReactNode, restOfText: React.ReactNode, className?: string, style?: React.CSSProperties }) => (
    <h2 className={`text-[#C7D2D9] ${className}`} style={style}>
      {/* CRITICAL FIX: Changed leading-[1.1] to leading-[0.85] to tighten line spacing */}
      <span className="font-seasons uppercase leading-[0.85] block">
        <span style={{ 
          fontFamily: "'Corinthia', cursive", 
          fontSize: '1.3em', 
          textTransform: 'none', 
          display: 'inline-block', 
          transform: 'translateY(-0.05em)', 
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
        
        {/* Top Left Small Image */}
        <img 
          src={shrimpsmallImg} 
          alt="Raw shrimp" 
          className="absolute left-[4.06%] top-[7%] w-[10.52%] h-[22.59%] object-cover shadow-2xl" 
        />

        {/* Top Right Tall Image */}
        <img 
          src={shrimpImg} 
          alt="Shrimp on ice" 
          className="absolute left-[58.54%] top-[7%] w-[38.33%] h-[81.57%] object-cover shadow-2xl" 
        />

        {/* Title */}
        <MixedHeading 
          firstLetter="V" 
          restOfText={<>ANNAMEI <br /> SHRIMP</>}
          className="absolute left-[3.125%] top-[63.09%] w-max whitespace-nowrap"
          style={{ fontSize: 'clamp(2rem, 4cqw, 80px)' }}
        />

        {/* Paragraph */}
        <p 
          className="absolute left-[3.125%] top-[78.42%] w-[38.85%] font-poppins font-light text-[#A2ADB4] leading-[1.4]"
          style={{ fontSize: 'clamp(0.85rem, 1.04cqw, 20px)' }}
        >
          Our Vannamei shrimp is selected for its uniform shape and gentle firmness. Farms are chosen for traceability, predictable texture, and steady quality across seasons. Through controlled handling and measured preparation, the shrimp retains its clarity, freshness, and natural sweetness.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 2 — IN ITS TRUE FORM & GALLERY
      ═══════════════════════════════════════════════════ */}
      <div className="relative w-full aspect-video max-w-[1920px] mx-auto min-h-[800px] mt-16 md:mt-0" style={{ containerType: 'inline-size' }}>
        
        {/* Title */}
        <MixedHeading 
          firstLetter="I" 
          restOfText={<>N ITS <br /> TRUE FORM</>}
          className="absolute left-[3.125%] top-[7.4%] w-max whitespace-nowrap"
          style={{ fontSize: 'clamp(1.8rem, 3.5cqw, 72px)' }}
        />

        {/* Scaled Gallery Flexbox */}
        <div className="absolute top-[25.46%] w-full px-[3.125%] flex flex-row items-center justify-between gap-[2cqw]">
          <img src={gal1} alt="Gallery 1" className="w-[10.1%] aspect-[194/216] object-cover shadow-xl" />
          <img src={gal2} alt="Gallery 2" className="w-[19.11%] aspect-[367/430] object-cover shadow-xl" />
          <img src={gal3} alt="Gallery 3" className="w-[28.12%] aspect-[540/654] object-cover shadow-2xl" />
          <img src={gal4} alt="Gallery 4" className="w-[19.11%] aspect-[367/430] object-cover shadow-xl" />
          <img src={gal5} alt="Gallery 5" className="w-[10.1%] aspect-[194/216] object-cover shadow-xl" />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 3 — MASSIVE MAIN IMAGE
      ═══════════════════════════════════════════════════ */}
      <div className="w-full max-w-[1920px] mx-auto my-12">
        <img 
          src={mainImg} 
          alt="Main shrimp dish" 
          className="w-full aspect-video object-cover shadow-2xl" 
        />
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 4 — YOU MAY ALSO LIKE
      ═══════════════════════════════════════════════════ */}
      <div className="relative w-full aspect-video max-w-[1920px] mx-auto min-h-[600px]" style={{ containerType: 'inline-size' }}>
        
        {/* Title pinned to the Right */}
        <MixedHeading 
          firstLetter="Y" 
          restOfText={<>OU MAY ALSO <br /> LIKE TO VIEW</>}
          className="absolute right-[3.125%] top-[10.37%] w-max text-right whitespace-nowrap"
          style={{ fontSize: 'clamp(1.8rem, 3.5cqw, 72px)' }}
        />

        {/* Squid Product Card */}
        <div className="absolute left-[3.125%] top-[26.48%] w-[30.46%] flex flex-col gap-[2cqw]">
          <img 
            src={squidCardImg} 
            alt="Squid" 
            className="w-full aspect-[586/401] object-cover shadow-2xl" 
          />
          
          <h3 className="font-seasons text-[#C7D2D9] capitalize leading-tight mt-[1cqw]" style={{ fontSize: 'clamp(1.2rem, 1.66cqw, 32px)' }}>
            Squid
          </h3>
          
          <p className="font-poppins font-light text-[#A2ADB4] leading-[1.4]" style={{ fontSize: 'clamp(0.75rem, 1.04cqw, 20px)' }}>
            Known for its clean texture and structural clarity, our squid is sourced from regulated fisheries and handled through steady, controlled routines that protect form and freshness.
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

export default ShrimpPage;