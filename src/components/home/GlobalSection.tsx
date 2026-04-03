import { motion, type Variants } from 'framer-motion';

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

// --- Data Mapping (Exact coordinates for responsive map) ---
const exportLocations = [
  { 
    id: 'us', 
    country: 'UNITED STATES', 
    top: '32%', left: '20%', // Fish position
    textTop: '34%', textLeft: '11%', textAlign: 'right', // Tag position
    products: ['Premium Seafood Program'] 
  },
  { 
    id: 'fr', 
    country: 'FRANCE', 
    top: '28%', left: '48%', 
    textTop: '20%', textLeft: '40%', textAlign: 'right',
    products: ['Black Tiger Shrimp'] 
  },
  { 
    id: 'za', 
    country: 'SOUTH AFRICA', 
    top: '72%', left: '53%', 
    textTop: '76%', textLeft: '45%', textAlign: 'right',
    products: ['Green Mussels'] 
  },
  { 
    id: 'th', 
    country: 'THAILAND', 
    top: '52%', left: '72%', 
    textTop: '58%', textLeft: '63%', textAlign: 'right',
    products: ['Shrimp', 'Mackerel'] 
  },
  { 
    id: 'vn', 
    country: 'VIETNAM', 
    top: '54%', left: '76%', 
    textTop: '64%', textLeft: '73%', textAlign: 'center',
    products: ['Vannamei Shrimp'] 
  },
  { 
    id: 'cn', 
    country: 'CHINA', 
    top: '42%', left: '78%', 
    textTop: '35%', textLeft: '78%', textAlign: 'left',
    products: ['Fish', 'Squid'] 
  },
  { 
    id: 'jp', 
    country: 'JAPAN', 
    top: '36%', left: '85%', 
    textTop: '28%', textLeft: '88%', textAlign: 'left',
    products: ['Shrimp', 'Black Tiger Shrimp', 'Squid & Cuttlefish'] 
  },
];

const topRowLogos = [haccp, ssop, gmp, india, eu];
const bottomRowLogos = [aeo, fssai, brc, fda];

const GlobalSection = () => {

  // --- Animation Variants ---
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  // Fishes cascade in one by one
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

  // Tags wait for all fishes to finish, then fade in TOGETHER
  const tagsReveal: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      // 7 fishes * 0.15s stagger + 0.5s initial delay = ~1.5s total wait time
      transition: { duration: 1, delay: 1.6, ease: 'easeInOut' } 
    }
  };

  const logoContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const logoPop: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section className="relative w-full bg-[#001321] px-6 py-32 md:px-12 lg:py-48 flex flex-col items-center overflow-hidden">
      
      {/* --- Heading --- */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="text-center mb-24 z-10 w-full"
      >
        <h2 className="font-seasons text-[#C7D2D9] uppercase tracking-widest text-4xl md:text-5xl lg:text-6xl flex justify-center items-baseline">
          <span 
            className="pr-2 leading-none" 
            style={{ fontFamily: "'Corinthia', cursive", fontSize: '1.6em', transform: 'translateY(0.05em)' }}
          >
            D
          </span>
          ELIVERING EXCELLENCE <br className="hidden md:block" /> ACROSS BORDERS
        </h2>
      </motion.div>

      {/* --- Interactive Map Section --- */}
      {/* Container Query applied here so text scales with the map! */}
      <div 
        className="relative w-full max-w-[1600px] aspect-[16/9] mx-auto mb-32"
        style={{ containerType: 'inline-size' }}
      >
        
        {/* Map Background */}
        <motion.img 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          src={mapImg} 
          alt="Global Export Map" 
          className="w-full h-full object-contain"
        />

        {/* 1. THE FISHES (Staggered Pop-in) */}
        <motion.div
          variants={fishContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="absolute inset-0 z-20 pointer-events-none"
        >
          {exportLocations.map((loc) => (
            <motion.div
              key={`fish-${loc.id}`}
              variants={fishPop}
              className="absolute w-[3cqw] h-[3cqw] max-w-[32px] max-h-[32px] min-w-[12px] min-h-[12px]"
              style={{ top: loc.top, left: loc.left, transform: 'translate(-50%, -50%)' }}
            >
              <img src={fishIcon} alt="Pin" className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(199,210,217,0.5)]" />
            </motion.div>
          ))}
        </motion.div>

        {/* 2. THE TAGS (Delayed Simultaneous Fade-in) */}
        <motion.div
          variants={tagsReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="absolute inset-0 z-10 pointer-events-none"
        >
          {exportLocations.map((loc) => (
            <div
              key={`tag-${loc.id}`}
              className="absolute flex flex-col"
              style={{ 
                top: loc.textTop, 
                left: loc.textLeft,
                // Automatically handle alignment based on the data configuration
                alignItems: loc.textAlign === 'right' ? 'flex-end' : loc.textAlign === 'center' ? 'center' : 'flex-start',
                textAlign: loc.textAlign as any
              }}
            >
              <h4 
                className="font-seasons uppercase text-[#C7D2D9] leading-tight"
                // Responsive math: scales perfectly from mobile to ultra-wide
                style={{ fontSize: 'clamp(0.6rem, 1.2cqw, 24px)' }}
              >
                {loc.country}
              </h4>
              <div className="mt-[0.2cqw] flex flex-col">
                {loc.products.map((product, idx) => (
                  <span 
                    key={idx} 
                    className="font-poppins font-light text-[#A2ADB4]"
                    style={{ fontSize: 'clamp(0.45rem, 0.75cqw, 14px)' }}
                  >
                    {product}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- Industry Standards & Certifications --- */}
      <motion.div 
        className="flex flex-col items-center gap-8 w-full max-w-[1200px]"
        variants={logoContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Top Row */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-20">
          {topRowLogos.map((logo, index) => (
            <motion.img 
              key={`top-${index}`}
              variants={logoPop}
              src={logo} 
              alt="Certification standard" 
              className="h-10 md:h-14 lg:h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-20 mt-4 md:mt-8">
          {bottomRowLogos.map((logo, index) => (
            <motion.img 
              key={`bottom-${index}`}
              variants={logoPop}
              src={logo} 
              alt="Certification standard" 
              className="h-8 md:h-12 lg:h-14 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </motion.div>

    </section>
  );
};

export default GlobalSection;