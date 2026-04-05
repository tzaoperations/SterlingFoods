import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

// --- Asset Imports ---
import mapImg from '../../assets/map.png'; 
import fishIcon from '../../assets/fishicon.png';

// Industry Standards - Top Row
import haccp from '../../assets/images/standards/haccp.png';
import ssop from '../../assets/images/standards/ssop.png';
import gmp from '../../assets/images/standards/gmp.png';
import india from '../../assets/images/standards/india.png';
import eu from '../../assets/images/standards/eu.png';

// Industry Standards - Bottom Row
import aeo from '../../assets/images/standards/aeo.png';
import fssai from '../../assets/images/standards/fssai.png';
import brc from '../../assets/images/standards/brc.png';
import fda from '../../assets/images/standards/fda.png';

// --- Data Mapping (Updated strictly from Sterling Locations.docx) ---
const exportLocations = [
  { 
    id: 'us', 
    country: 'UNITED STATES OF AMERICA', 
    // Shifted slightly right to sit squarely on the US landmass
    top: '34%', left: '22%', 
    products: ['Premium Squid - YACHT'] 
  },
  { 
    id: 'eu', 
    country: 'FRANCE', 
    // Perfectly positioned over Central/Western Europe
    top: '28%', left: '49%', 
    products: ['Black Tiger Shrimp'] 
  },
  { 
    id: 'za', 
    country: 'SOUTH AFRICA', 
    // Snapped to the southern tip of the African continent
    top: '74%', left: '53%', 
    products: ['Green Mussels'] 
  },
  { 
    id: 'th', 
    country: 'THAILAND', 
    // Shifted down and right into Southeast Asia
    top: '52%', left: '73%', 
    products: ['Indian Mackerel', 'Whole Squid'] 
  },
  { 
    id: 'vn', 
    country: 'VIETNAM', 
    // Placed exactly east of Thailand on the coast
    top: '52%', left: '76%', 
    products: ['Vannamei Shrimp'] 
  },
  { 
    id: 'cn', 
    country: 'CHINA', 
    // Centered cleanly over the Chinese mainland
    top: '40%', left: '75%', 
    products: ['Fish', 'Vannamei Shrimp'] 
  },
  { 
    id: 'jp', 
    country: 'JAPAN', 
    // Snapped over the Japanese islands
    top: '36%', left: '85%', 
    products: ['Shrimp', 'Squid & Cuttlefish Fillets'] 
  },
];

const topRowLogos = [haccp, ssop, gmp, india, eu];
const bottomRowLogos = [aeo, fssai, brc, fda];

const GlobalSection = () => {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  // --- Animation Variants ---
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
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

  const logoContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const logoPop: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section className="relative w-full bg-[#001321] px-6 py-32 md:px-12 lg:py-48 flex flex-col items-center overflow-hidden">
      
      {/* --- Heading --- */}
      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className="text-center mb-24 z-10 w-full">
        <h2 className="font-seasons text-[#C7D2D9] uppercase tracking-widest text-4xl md:text-5xl lg:text-6xl flex justify-center items-baseline">
          <span className="pr-2 leading-none" style={{ fontFamily: "'Corinthia', cursive", fontSize: '1.6em', transform: 'translateY(0.05em)' }}>D</span>
          ELIVERING EXCELLENCE <br className="hidden md:block" /> ACROSS BORDERS
        </h2>
      </motion.div>

      {/* --- Interactive Map Section --- */}
      <div className="relative w-full max-w-[1600px] aspect-[16/9] mx-auto mb-32" style={{ containerType: 'inline-size' }}>
        
        {/* Map Background */}
        <motion.img 
          initial={{ opacity: 0 }} whileInView={{ opacity: 0.3 }} viewport={{ once: true }} transition={{ duration: 1.5 }}
          src={mapImg} alt="Global Export Map" className="w-full h-full object-contain pointer-events-none"
        />

        {/* INTERACTIVE FISH LAYER */}
        <motion.div variants={fishContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="absolute inset-0 z-20">
          {exportLocations.map((loc) => (
            
            // STABLE HOVER WRAPPER WITH DYNAMIC Z-INDEX
            <div 
              key={`fish-wrapper-${loc.id}`} 
              className={`absolute flex items-center justify-center cursor-pointer transition-all ${
                hoveredLocation === loc.id ? 'z-[60]' : 'z-30'
              }`}
              style={{ top: loc.top, left: loc.left, width: '48px', height: '48px', transform: 'translate(-50%, -50%)' }}
              onMouseEnter={() => setHoveredLocation(loc.id)}
              onMouseLeave={() => setHoveredLocation(null)}
            >
              
              {/* === THE REGIONAL LIGHT-UP EFFECT === */}
              <div 
                className={`absolute inset-0 rounded-full transition-all duration-700 ease-out pointer-events-none
                  ${hoveredLocation === loc.id 
                    ? 'bg-[#6F90D3] blur-[25px] opacity-60 scale-[4.5]' 
                    : 'bg-transparent blur-0 opacity-0 scale-100'}`}
              />

              {/* DYNAMIC BUBBLE TOOLTIP */}
              <AnimatePresence>
                {hoveredLocation === loc.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 z-50 flex flex-col items-center pointer-events-none"
                  >
                    <div className="bg-[#D9D9D9] rounded-[18px] py-3 px-6 shadow-[0_10px_30px_rgba(0,19,33,0.5)] flex flex-col items-center min-w-max border border-white/20">
                      <h4 className="font-seasons uppercase text-[#001321] leading-tight text-lg md:text-xl mb-1.5">
                        {loc.country}
                      </h4>
                      <div className="flex flex-col items-center gap-0.5">
                        {loc.products.map((product, idx) => (
                          <span key={idx} className="font-poppins font-light text-[#001321] text-xs md:text-sm leading-tight text-center">
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-[#D9D9D9]"></div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* The Fish Icon & CSS Neon Glow */}
              <motion.div
                variants={fishPop}
                animate={{
                  scale: hoveredLocation === loc.id ? 1.25 : 1,
                  filter: hoveredLocation === loc.id 
                    ? 'drop-shadow(0px 0px 10px #6F90D3) drop-shadow(0px 0px 5px #6F90D3) drop-shadow(0px 0px 2px #6F90D3)' 
                    : 'drop-shadow(0px 0px 8px rgba(199,210,217,0.3))'
                }}
                transition={{ duration: 0.3 }}
                className="relative w-[3cqw] h-[3cqw] max-w-[32px] max-h-[32px] min-w-[16px] min-h-[16px] z-40"
              >
                <img src={fishIcon} alt="Pin" className="w-full h-full object-contain pointer-events-none" />
              </motion.div>

            </div>
          ))}
        </motion.div>
      </div>

      {/* --- Industry Standards & Certifications --- */}
      <motion.div 
        className="flex flex-col items-center gap-8 w-full max-w-[1200px]"
        variants={logoContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
      >
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-20">
          {topRowLogos.map((logo, index) => (
            <motion.img key={`top-${index}`} variants={logoPop} src={logo} alt="Certification" className="h-10 md:h-14 lg:h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" />
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-20 mt-4 md:mt-8">
          {bottomRowLogos.map((logo, index) => (
            <motion.img key={`bottom-${index}`} variants={logoPop} src={logo} alt="Certification" className="h-8 md:h-12 lg:h-14 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" />
          ))}
        </div>
      </motion.div>

    </section>
  );
};

export default GlobalSection;