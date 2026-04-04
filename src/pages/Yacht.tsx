import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';

// --- Asset Imports ---
import heroBg from '../assets/images/yacht/herobg.png';
import squidTop from '../assets/images/yacht/squidtop.png';
import starIcon from '../assets/images/yacht/star.png';
import folderBg from '../assets/images/yacht/folder.png'; 

import f1 from '../assets/images/yacht/f12.png';
import f2 from '../assets/images/yacht/f22.png';
import f3 from '../assets/images/yacht/f32.png';

import premiumSquid from '../assets/images/yacht/premiumsquid.png';

import stack1 from '../assets/images/yacht/1.png';
import stack2 from '../assets/images/yacht/2.png';
import stack3 from '../assets/images/yacht/3.png';
import stack4 from '../assets/images/yacht/4.png';

import shrimpCard from '../assets/images/yacht/shrimp.png';
import squidCard from '../assets/images/yacht/squid.png';

const YachtPage = () => {

  const MixedHeading = ({ firstLetter, restOfText, className, style }: { firstLetter: React.ReactNode, restOfText: React.ReactNode, className?: string, style?: React.CSSProperties }) => (
    <h2 className={`text-[#C7D2D9] ${className}`} style={style}>
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

  const DotLink = ({ label }: { label: string }) => (
    <div className="flex flex-row items-center gap-[6px] cursor-pointer group w-max">
      <span className="w-[6px] h-[6px] rounded-full bg-[#C7D2D9] shrink-0 group-hover:scale-150 transition-transform duration-300" />
      <span className="font-poppins text-[#C7D2D9] uppercase tracking-wider group-hover:opacity-70 transition-opacity duration-300" style={{ fontSize: 'clamp(0.7rem, 0.83cqw, 16px)' }}>
        {label}
      </span>
    </div>
  );

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  return (
    <div className="w-full bg-[#001321] text-[#C7D2D9] overflow-clip flex flex-col pb-32">
      <Navbar />

      {/* ═══════════════════════════════════════════════════
          SECTION 1 — HERO 
      ═══════════════════════════════════════════════════ */}
      <div 
        className="relative w-full aspect-video max-w-[1920px] mx-auto min-h-[800px] overflow-hidden bg-center bg-cover"
        style={{ backgroundImage: `url(${heroBg})`, containerType: 'inline-size' }}
      >
        {/* 1. Typography (z-10: BEHIND the glass) */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, delay: 0.3 }} className="absolute left-[3.125%] top-[53.05%] w-max z-10 drop-shadow-lg">
          <span className="font-seasons uppercase tracking-tight text-[#E6F1F8]" style={{ fontSize: 'clamp(3rem, 6.7cqw, 130px)' }}>INTRODUCING</span>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, delay: 0.4 }} className="absolute left-[62.4%] top-[53.05%] w-max z-10 drop-shadow-lg">
          <span className="font-seasons uppercase tracking-tight text-[#E6F1F8]" style={{ fontSize: 'clamp(3rem, 7.2cqw, 140px)' }}>YACHT</span>
        </motion.div>

        {/* 2. LIQUID GLASS BOX (z-20: Subtle 3px blur instead of heavy frost) */}
        <motion.div 
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} 
          className="absolute left-[38.54%] top-[17.77%] w-[26.82%] h-[58.14%] z-20"
        >
          <div className="absolute inset-0 bg-white/5 backdrop-blur-[3px] rounded-sm border border-white/20 shadow-[inset_0_0_20px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.3)]"></div>
        </motion.div>

        {/* 3. SQUID IMAGE (z-30: Massively scaled up using w-[150%]) */}
        <motion.img 
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, delay: 0.2 }} 
          src={squidTop} alt="Squid" 
          className="absolute left-[50%] top-[45%] -translate-x-1/2 -translate-y-1/2 w-[100%] max-w-none h-auto object-contain z-30 drop-shadow-2xl" 
        />

        {/* Subtitles (z-40) */}
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, delay: 0.5 }} className="absolute right-[3.125%] top-[59%] w-[13%] text-right font-poppins text-[#E6F1F8] drop-shadow-md z-40" style={{ fontSize: 'clamp(0.8rem, 1.25cqw, 24px)' }}>
          Yacht is Sterling’s premium squid sub brand, shaped quietly since 1970
        </motion.p>
        
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, delay: 0.6 }} className="absolute left-[38.4%] top-[78.8%] w-[22.6%] text-center font-poppins text-[#E6F1F8] z-40" style={{ fontSize: 'clamp(0.8rem, 1.25cqw, 24px)' }}>
          and reserved for partners who value consistency and refinement
        </motion.p>
      </div>
{/* ═══════════════════════════════════════════════════
          SECTION 2 — WHAT YACHT REPRESENTS
      ═══════════════════════════════════════════════════ */}
      <div className="relative w-full aspect-video max-w-[1920px] mx-auto min-h-[800px] overflow-hidden" style={{ containerType: 'inline-size' }}>
        
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="absolute left-[7.4%] top-[9.2%] w-max z-30">
          <MixedHeading firstLetter="W" restOfText={<>HAT YACHT <br/> REPRESENTS</>} style={{ fontSize: 'clamp(2.5rem, 5cqw, 96px)' }} />
        </motion.div>

        <motion.img variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} src={starIcon} alt="Star Icon" className="absolute left-[86.7%] top-[14%] w-[7%] h-auto object-contain" />

        {/* Scaled down by 15% (scale-[0.85]) to accommodate the heading perfectly */}
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="absolute inset-0 z-10 pointer-events-none scale-[0.90] origin-center">
          
          {/* Polaroids */}
          <div className="absolute left-[35.8%] top-[21.2%] w-[15.9%] aspect-[305/435] bg-[#C7D2D9] -rotate-[19.8deg] z-0 shadow-lg p-[0.5cqw] pb-[3.1cqw]">
            <img src={f2} alt="Prep 1" className="w-full h-full object-cover" />
          </div>
          <div className="absolute left-[43.1%] top-[25.7%] w-[16.2%] aspect-[312/424] bg-[#C7D2D9] rotate-[3.5deg] z-10 shadow-2xl p-[0.5cqw] pb-[3.1cqw]">
            <img src={f3} alt="Prep 2" className="w-full h-full object-cover" />
          </div>
          <div className="absolute left-[55%] top-[25.7%] w-[13.8%] aspect-[265/411] bg-[#C7D2D9] rotate-[16.38deg] z-0 shadow-lg p-[0.5cqw] pb-[3.1cqw]">
            <img src={f1} alt="Prep 3" className="w-full h-full object-cover" />
          </div>
          
          {/* BULLETPROOF FOLDER & LIQUID BLUR */}
          <div className="absolute left-[30%] top-[38.33%] w-[40.58%] h-[39.22%] z-20">
            {/* LIQUID GLASS EFFECT:
                - backdrop-blur-[14px]: Thicker glass blur
                - backdrop-saturate-150 & contrast-110: Makes the colors behind it "pop" like looking through water
                - bg-gradient-to-br: Adds a subtle light-to-dark liquid sheen
                - clip-path: Mapped EXACTLY to Vector (1).jpg 
            */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-black/10 backdrop-blur-[14px] backdrop-saturate-150 backdrop-contrast-110 shadow-[inset_0_1px_20px_rgba(255,255,255,0.2)]"
              style={{ clipPath: 'polygon(0% 0%, 28% 0%, 38% 18%, 100% 18%, 100% 100%, 0% 100%)' }}
            ></div>
            {/* The Visual Folder PNG */}
            <img src={folderBg} alt="Folder" className="absolute inset-0 w-full h-full object-fill drop-shadow-2xl" />
          </div>

        </motion.div>

        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }} className="absolute left-[16.8%] top-[82.7%] w-[66.3%] text-center font-poppins font-light text-[#A2ADB4] leading-[1.4]" style={{ fontSize: 'clamp(0.85rem, 1.04cqw, 20px)' }}>
          Yacht began as an internal label for batches that consistently exceeded Sterling’s own quality expectations. Over time, it evolved into a quiet premium brand that remains purposefully restrained. Its foundation is unchanged controlled sourcing, disciplined handling, and alignment maintained over generations.
        </motion.p>
      </div>
      {/* ═══════════════════════════════════════════════════
          SECTION 3 — PREMIUM FOR THE ALIGNED
      ═══════════════════════════════════════════════════ */}
      <div className="relative w-full aspect-video max-w-[1920px] mx-auto min-h-[800px]" style={{ containerType: 'inline-size' }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="absolute left-[3.125%] top-[5.5%] w-max z-30">
          <MixedHeading firstLetter="P" restOfText={<>REMIUM FOR THE <br/> ALIGNED</>} style={{ fontSize: 'clamp(2.5rem, 5cqw, 96px)' }} />
        </motion.div>

        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }} className="absolute left-[3.125%] top-[84%] w-[46%] font-poppins font-light text-[#A2ADB4] leading-[1.4]" style={{ fontSize: 'clamp(0.85rem, 1.04cqw, 20px)' }}>
          Yacht began as an internal label for batches that consistently exceeded Sterling’s own quality expectations. Over time, it evolved into a quiet premium brand that remains purposefully restrained. Its foundation is unchanged controlled sourcing, disciplined handling, and alignment maintained over generations.
        </motion.p>

        <motion.img variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} src={premiumSquid} alt="Premium Squid" className="absolute left-[50.6%] top-[5.5%] w-[46.25%] h-[88.8%] object-cover shadow-2xl" />
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 4 — A GLIMPSE INTO THE LABEL
      ═══════════════════════════════════════════════════ */}
      <div className="relative w-full aspect-video max-w-[1920px] mx-auto min-h-[800px]" style={{ containerType: 'inline-size' }}>
        
        {/* Symmetrically Pinned Left */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="absolute left-[5%] top-[50%] -translate-y-1/2 w-max z-30">
          <MixedHeading firstLetter="A" restOfText="GLIMPSE INTO" style={{ fontSize: 'clamp(1.8rem, 4cqw, 80px)' }} />
        </motion.div>

        {/* Center Stack - Reduced size to w-[24%] to give text breathing room */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="absolute left-[53%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[24%] aspect-[550/722] z-10 flex items-center justify-center">
          <motion.img variants={fadeIn} src={stack1} alt="Dish 1" className="absolute w-full h-full object-cover shadow-2xl rotate-[6.47deg]" />
          <motion.img variants={fadeIn} src={stack2} alt="Dish 2" className="absolute w-full h-full object-cover shadow-2xl -rotate-[4.92deg]" />
          <motion.img variants={fadeIn} src={stack3} alt="Dish 3" className="absolute w-full h-full object-cover shadow-2xl rotate-[9.37deg]" />
          <motion.img variants={fadeIn} src={stack4} alt="Dish 4" className="absolute w-full h-full object-cover shadow-2xl rotate-0" />
        </motion.div>

        {/* Symmetrically Pinned Right */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="absolute right-[9%] top-[50%] -translate-y-1/2 w-max z-30">
          <h2 className="font-seasons uppercase text-[#C7D2D9]" style={{ fontSize: 'clamp(1.8rem, 4cqw, 80px)' }}>THE LABEL</h2>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 5 — EXPLORE CATEGORIES
      ═══════════════════════════════════════════════════ */}
      <div className="relative w-full flex flex-col items-center py-24 z-10">
        
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="w-full text-center text-[#C7D2D9] z-30 mb-20">
          <MixedHeading firstLetter="E" restOfText="XPLORE STERLING’S CORE CATEGORIES" className="w-full text-center" style={{ fontSize: 'clamp(2.5rem, 5vw, 96px)' }} />
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="w-full max-w-[1200px] px-6 flex flex-col md:flex-row justify-between gap-12 md:gap-8">
          
          <div className="w-full md:w-[48%] flex flex-col gap-6">
            <motion.div variants={fadeUp} className="w-full shadow-2xl overflow-hidden">
              <img src={shrimpCard} alt="Vannamei Shrimp" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" style={{ aspectRatio: '585/525' }} />
            </motion.div>
            <motion.h3 variants={fadeUp} className="font-seasons text-[#C7D2D9] capitalize leading-tight mt-4" style={{ fontSize: 'clamp(1.5rem, 2vw, 32px)' }}>Vannamei Shrimp</motion.h3>
            <motion.p variants={fadeUp} className="font-poppins font-light text-[#A2ADB4] leading-[1.4]" style={{ fontSize: 'clamp(0.85rem, 1vw, 20px)' }}>
              Sourced from authorised aquaculture farms, our shrimp is valued for its balanced texture, uniform size, and stability through processing and freezing.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-2"><Link to="/shrimp"><DotLink label="View Details" /></Link></motion.div>
          </div>

          <div className="w-full md:w-[48%] flex flex-col gap-6">
            <motion.div variants={fadeUp} className="w-full shadow-2xl overflow-hidden">
              <img src={squidCard} alt="Squid" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" style={{ aspectRatio: '586/401' }} />
            </motion.div>
            <motion.h3 variants={fadeUp} className="font-seasons text-[#C7D2D9] capitalize leading-tight mt-4" style={{ fontSize: 'clamp(1.5rem, 2vw, 32px)' }}>Squid</motion.h3>
            <motion.p variants={fadeUp} className="font-poppins font-light text-[#A2ADB4] leading-[1.4]" style={{ fontSize: 'clamp(0.85rem, 1vw, 20px)' }}>
              Known for its clean texture and structural clarity, our squid is sourced from regulated fisheries and handled through steady, controlled routines that protect form and freshness.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-2"><Link to="/squid"><DotLink label="View Details" /></Link></motion.div>
          </div>

        </motion.div>
      </div>

    </div>
  );
};

export default YachtPage;