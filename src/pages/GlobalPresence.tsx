import { motion, type Variants } from 'framer-motion';
import Navbar from '../components/layout/Navbar';

// --- Asset Imports ---
import heroImg from '../assets/images/global-presence/hero.png';
import mapImg from '../assets/map.png';
import fishIcon from '../assets/fishicon.png';

// Industry Standards - Top Row
import haccp from '../assets/images/standards/haccp.png';
import ssop from '../assets/images/standards/ssop.png';
import gmp from '../assets/images/standards/gmp.png';
import india from '../assets/images/standards/india.png';
import eu from '../assets/images/standards/eu.png';

// Industry Standards - Bottom Row
import aeo from '../assets/images/standards/aeo.png';
import fssai from '../assets/images/standards/fssai.png';
import brc from '../assets/images/standards/brc.png';
import fda from '../assets/images/standards/fda.png';

const exportLocations = [
  { 
    id: 'us', 
    country: 'UNITED STATES', 
    top: '46%', left: '20%', 
    textTop: '48%', textLeft: '11%', textAlign: 'right',
  },
  { 
    id: 'eu', 
    country: 'EUROPE', 
    top: '38%', left: '48%', 
    textTop: '30%', textLeft: '40%', textAlign: 'right',
  },
  { 
    id: 'me', 
    country: 'MIDDLE EAST', 
    top: '48%', left: '56%', 
    textTop: '52%', textLeft: '50%', textAlign: 'right',
  },
  { 
    id: 'in', 
    country: 'INDIA', 
    top: '52%', left: '68%', 
    textTop: '58%', textLeft: '63%', textAlign: 'right',
  },
  { 
    id: 'cn', 
    country: 'CHINA', 
    top: '42%', left: '76%', 
    textTop: '35%', textLeft: '76%', textAlign: 'left',
  },
  { 
    id: 'jp', 
    country: 'JAPAN', 
    top: '38%', left: '85%', 
    textTop: '30%', textLeft: '88%', textAlign: 'left',
  },
];

const topRowLogos = [haccp, ssop, gmp, india, eu];
const bottomRowLogos = [aeo, fssai, brc, fda];

const GlobalPresencePage = () => {

  // Reusable component for Corinthia/Seasons headings
  const MixedHeading = ({ firstLetter, restOfText, className, style }: { firstLetter: React.ReactNode, restOfText: React.ReactNode, className?: string, style?: React.CSSProperties }) => (
    <h2 className={`text-[#C7D2D9] ${className}`} style={style}>
      <span className="font-seasons uppercase leading-[1.1] block text-center w-full">
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

  // --- Animation Variants ---
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } }
  };

  const fishContainerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } }
  };

  const fishPop: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { type: 'spring', stiffness: 300, damping: 20 } 
    }
  };

  const tagsReveal: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 1, delay: 1.6, ease: 'easeInOut' } 
    }
  };

  const logoContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const logoPop: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <div className="w-full bg-[#001321] text-[#C7D2D9] overflow-clip flex flex-col pb-32">
      <Navbar />

      {/* ═══════════════════════════════════════════════════
          SECTION 1 — HERO 
      ═══════════════════════════════════════════════════ */}
      <div className="relative w-full h-[60vh] min-h-[600px] flex flex-col items-center justify-center mb-16">
        
        {/* Full Bleed Image Container */}
        <div className="absolute inset-0 w-full h-[53.24%] top-0">
          <motion.img
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
            src={heroImg}
            alt="Ocean waves"
            className="w-full h-full object-cover shadow-2xl"
          />
          {/* Linear gradient overlay matching CSS */}
          <div className="absolute inset-0 bg-black/15 pointer-events-none" />
        </div>

        {/* Constrained Text Wrapper */}
        <div className="relative w-full h-full max-w-[1920px] mx-auto z-10" style={{ containerType: 'inline-size' }}>
          
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }} className="absolute left-[20.7%] top-[62.96%] w-[58.6%]">
            <MixedHeading 
              firstLetter="A" 
              restOfText={<>DISCIPLINED GLOBAL <br/> FOOTPRINT</>}
              style={{ fontSize: 'clamp(2.3rem, 4.5cqw, 90px)' }}
            />
          </motion.div>

          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }}
            className="absolute left-[31%] top-[93.09%] w-[38%] text-center font-poppins font-light text-[#A2ADB4] leading-[1.2]"
            style={{ fontSize: 'clamp(0.8rem, 1.25cqw, 24px)' }}
          >
            Export partnerships refined across decades of <br/> consistent performance
          </motion.p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 2 — THE MAP 
      ═══════════════════════════════════════════════════ */}
      <div className="relative w-full flex flex-col items-center pt-16 z-10" style={{ containerType: 'inline-size' }}>
        
        {/* Title & Subtitle */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="w-full mb-16 flex flex-col items-center">
          <MixedHeading 
            firstLetter="P" 
            restOfText="RESENCE ACROSS TRUSTED MARKETS"
            style={{ fontSize: 'clamp(2.3rem, 4.5vw, 90px)' }}
          />
          <p 
            className="font-poppins font-light text-[#A2ADB4] text-center max-w-[841px] mt-6 px-6"
            style={{ fontSize: 'clamp(0.85rem, 1.04vw, 20px)', lineHeight: '1.4' }}
          >
            Our reach is focused, not expansive. We serve markets that value structured sourcing, transparent systems, and reliable long-term continuity. Each market is the result of years of alignment and performance not pursuit of scale.
          </p>
        </motion.div>

        {/* Map Container */}
        <div className="relative w-full max-w-[1600px] aspect-[16/9] mx-auto mb-32">
          <motion.img 
            initial={{ opacity: 0 }} whileInView={{ opacity: 0.3 }} viewport={{ once: true }} transition={{ duration: 1.5 }}
            src={mapImg} alt="Global Export Map" 
            className="w-full h-full object-contain"
          />

          <motion.div variants={fishContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="absolute inset-0 z-20 pointer-events-none">
            {exportLocations.map((loc) => (
              <motion.div key={`fish-${loc.id}`} variants={fishPop} className="absolute w-[3cqw] h-[3cqw] max-w-[32px] max-h-[32px] min-w-[12px] min-h-[12px]" style={{ top: loc.top, left: loc.left, transform: 'translate(-50%, -50%)' }}>
                <img src={fishIcon} alt="Pin" className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(199,210,217,0.5)]" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={tagsReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="absolute inset-0 z-10 pointer-events-none">
            {exportLocations.map((loc) => (
              <div key={`tag-${loc.id}`} className="absolute flex flex-col" style={{ top: loc.textTop, left: loc.textLeft, alignItems: loc.textAlign === 'right' ? 'flex-end' : loc.textAlign === 'center' ? 'center' : 'flex-start', textAlign: loc.textAlign as any }}>
                <h4 className="font-seasons uppercase text-[#C7D2D9] leading-tight" style={{ fontSize: 'clamp(0.6rem, 1.2cqw, 24px)' }}>
                  {loc.country}
                </h4>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 3 — CERTIFICATIONS 
      ═══════════════════════════════════════════════════ */}
      <div className="relative w-full flex flex-col items-center pt-8 pb-32 z-10">
        
        {/* Title & Subtitle */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className="w-full mb-20 flex flex-col items-center">
          <MixedHeading 
            firstLetter="I" 
            restOfText="NTERNATIONAL STANDARDS WE UPHOLD"
            style={{ fontSize: 'clamp(2rem, 4.3vw, 86px)' }}
          />
          <p 
            className="font-poppins font-light text-[#A2ADB4] text-center max-w-[841px] mt-6 px-6"
            style={{ fontSize: 'clamp(0.85rem, 1.04vw, 20px)', lineHeight: '1.4' }}
          >
            Our certifications reflect the systems, controls, and discipline that define our approach to seafood programs.
          </p>
        </motion.div>

        {/* Logos Grid */}
        <motion.div 
          className="flex flex-col items-center gap-12 w-full max-w-[1200px]"
          variants={logoContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-20">
            {topRowLogos.map((logo, index) => (
              <motion.img key={`top-${index}`} variants={logoPop} src={logo} alt="Certification" className="h-16 md:h-24 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" />
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-20 mt-4 md:mt-8">
            {bottomRowLogos.map((logo, index) => (
              <motion.img key={`bottom-${index}`} variants={logoPop} src={logo} alt="Certification" className="h-12 md:h-20 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" />
            ))}
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default GlobalPresencePage;