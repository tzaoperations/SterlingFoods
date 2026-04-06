import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
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

  // --- Hover State for the Folder Interaction ---
  const [isFolderHovered, setIsFolderHovered] = useState(false);

  // ═══════════════════════════════════════════════════
  // MICRO-ADJUSTMENTS: GLIMPSE SECTION
  // ═══════════════════════════════════════════════════
  // 1. Text Distances
  const textStartDistance = "50vw"; // Start completely off-screen
  const textMeetDistance = "0vw";   // 0vw = meets perfectly in the center
  const textEndDistance = "13.5vw"; // PERFECTED DISTANCE: Pushes out just past the 12vw images

  // 2. Scroll Timings (Values from 0.0 to 1.0 representing the 400vh scroll progress)
  const textStartMoving = 0.05; // When text begins sliding in
  const textMeetsCenter = 0.20; // When text reaches the center
  const textStartsPushOut = 0.30; // When text begins sliding to the edges
  const textEndsPushOut = 0.45; // When text stops at the edges

  // 3. Image Fade-in Timings
  // PERFECTED TIMING: Ends at 0.75, leaving the final 25% of the scroll track fully revealed and locked.
  const img1Start = 0.45; const img1End = 0.52;
  const img2Start = 0.52; const img2End = 0.59;
  const img3Start = 0.59; const img3End = 0.66;
  const img4Start = 0.66; const img4End = 0.75;

  // --- Scroll State for Section 4 ---
  const section4Ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: s4Progress } = useScroll({
    target: section4Ref,
    offset: ["start start", "end end"]
  });

  // Apply the Text Timings
  const leftTextX = useTransform(
    s4Progress, 
    [0, textStartMoving, textMeetsCenter, textStartsPushOut, textEndsPushOut], 
    [`-${textStartDistance}`, `-${textStartDistance}`, textMeetDistance, textMeetDistance, `-${textEndDistance}`]
  );
  
  const rightTextX = useTransform(
    s4Progress, 
    [0, textStartMoving, textMeetsCenter, textStartsPushOut, textEndsPushOut], 
    [textStartDistance, textStartDistance, textMeetDistance, textMeetDistance, textEndDistance]
  );

  // Apply the Image Timings (Fade from 0 to 1 and stay at 1 forever)
  const img1Opacity = useTransform(s4Progress, [img1Start, img1End], [0, 1]);
  const img2Opacity = useTransform(s4Progress, [img2Start, img2End], [0, 1]);
  const img3Opacity = useTransform(s4Progress, [img3Start, img3End], [0, 1]);
  const img4Opacity = useTransform(s4Progress, [img4Start, img4End], [0, 1]);


  // --- Typography & Layout Components ---
  const MixedHeading = ({ firstLetter, restOfText, className, style }: { firstLetter: React.ReactNode, restOfText: React.ReactNode, className?: string, style?: React.CSSProperties }) => (
    <h2 className={`text-[#C7D2D9] m-0 p-0 ${className}`} style={style}>
      <span className="font-seasons uppercase leading-[0.85] block whitespace-nowrap">
        <span style={{ fontFamily: "'Corinthia', cursive", fontSize: '1.3em', textTransform: 'none', display: 'inline-block', transform: 'translateY(-0.05em)', marginRight: '4px' }}>
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
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, delay: 0.3 }} className="absolute left-[3.125%] top-[53.05%] w-max z-10 drop-shadow-lg">
          <span className="font-seasons uppercase tracking-tight text-[#E6F1F8]" style={{ fontSize: 'clamp(3rem, 6.7cqw, 130px)' }}>INTRODUCING</span>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, delay: 0.4 }} className="absolute left-[62.4%] top-[53.05%] w-max z-10 drop-shadow-lg">
          <span className="font-seasons uppercase tracking-tight text-[#E6F1F8]" style={{ fontSize: 'clamp(3rem, 7.2cqw, 140px)' }}>YACHT</span>
        </motion.div>

        <motion.div 
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} 
          className="absolute left-[38.54%] top-[17.77%] w-[26.82%] h-[58.14%] z-20"
        >
          <div className="absolute inset-0 bg-white/5 backdrop-blur-[3px] rounded-sm border border-white/20 shadow-[inset_0_0_20px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.3)]"></div>
        </motion.div>

        <motion.img 
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, delay: 0.2 }} 
          src={squidTop} alt="Squid" 
          className="absolute left-[50%] top-[45%] -translate-x-1/2 -translate-y-1/2 w-[100%] max-w-none h-auto object-contain z-30 drop-shadow-2xl" 
        />

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

        {/* VISUAL CONTAINER */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}
          className="absolute inset-0 z-10 scale-[0.90] origin-center pointer-events-none"
        >
          
          {/* Polaroid 1 (Left) - z-0 keeps it behind the folder */}
          <motion.div 
            animate={isFolderHovered ? "hover" : "initial"}
            variants={{
              initial: { x: 0, y: 0, rotate: -19.8 },
              hover: { x: "-4cqw", y: "-4cqw", rotate: -25, transition: { type: "spring", bounce: 0.4 } }
            }}
            className="absolute left-[35.8%] top-[21.2%] w-[15.9%] aspect-[305/435] bg-[#C7D2D9] z-0 shadow-lg p-[0.5cqw] pb-[3.1cqw]"
          >
            <img src={f2} alt="Prep 1" className="w-full h-full object-cover" />
          </motion.div>
          
          {/* Polaroid 2 (Center) - z-10 keeps it behind the folder but over Polaroid 1 */}
          <motion.div 
            animate={isFolderHovered ? "hover" : "initial"}
            variants={{
              initial: { x: 0, y: 0, rotate: 3.5 },
              hover: { x: 0, y: "-6cqw", rotate: 0, transition: { type: "spring", bounce: 0.4 } }
            }}
            className="absolute left-[43.1%] top-[25.7%] w-[16.2%] aspect-[312/424] bg-[#C7D2D9] z-10 shadow-2xl p-[0.5cqw] pb-[3.1cqw]"
          >
            <img src={f3} alt="Prep 2" className="w-full h-full object-cover" />
          </motion.div>
          
          {/* Polaroid 3 (Right) - z-0 keeps it behind the folder */}
          <motion.div 
             animate={isFolderHovered ? "hover" : "initial"}
             variants={{
               initial: { x: 0, y: 0, rotate: 16.38 },
               hover: { x: "4cqw", y: "-4cqw", rotate: 22, transition: { type: "spring", bounce: 0.4 } }
             }}
            className="absolute left-[55%] top-[25.7%] w-[13.8%] aspect-[265/411] bg-[#C7D2D9] z-0 shadow-lg p-[0.5cqw] pb-[3.1cqw]"
          >
            <img src={f1} alt="Prep 3" className="w-full h-full object-cover" />
          </motion.div>
          
          {/* THE FOLDER: 
              Strictly z-20 to sit ON TOP of images.
              onHoverStart and onHoverEnd placed strictly on the folder bounds!
          */}
          <motion.div 
            onHoverStart={() => setIsFolderHovered(true)}
            onHoverEnd={() => setIsFolderHovered(false)}
            animate={isFolderHovered ? "hover" : "initial"}
            variants={{
              initial: { filter: 'drop-shadow(0px 0px 0px rgba(255,255,255,0))' },
              hover: { filter: 'drop-shadow(0px 0px 30px rgba(255,255,255,0.25))', transition: { duration: 0.3 } }
            }}
            // Re-enabled pointer-events-auto so this specific block can detect the mouse
            className="absolute left-[30%] top-[38.33%] w-[40.58%] h-[39.22%] z-20 pointer-events-auto cursor-pointer"
          >
            <div 
              className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-black/10 backdrop-blur-[14px] backdrop-saturate-150 backdrop-contrast-110 shadow-[inset_0_1px_20px_rgba(255,255,255,0.2)]"
              style={{ clipPath: 'polygon(0% 0%, 28% 0%, 38% 18%, 100% 18%, 100% 100%, 0% 100%)' }}
            ></div>
            <img src={folderBg} alt="Folder" className="absolute inset-0 w-full h-full object-fill drop-shadow-2xl pointer-events-none" />
          </motion.div>

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
          SECTION 4 — A GLIMPSE INTO THE LABEL (Cinematic Scroll)
      ═══════════════════════════════════════════════════ */}
      <div ref={section4Ref} className="relative w-full" style={{ height: '400vh' }}>
        
        <div className="sticky top-0 w-full h-screen max-w-[1920px] mx-auto overflow-hidden bg-[#001321]">
          
          {/* THE MASTER ALIGNMENT FIX: 
              Both text components strictly anchored to absolute center with perfect baselines. */}
          <div className="absolute inset-0 pointer-events-none z-30">
            
            {/* Left Text - Pushes Left perfectly */}
            <motion.div style={{ x: leftTextX }} className="absolute right-[50%] top-[50%] -translate-y-[50%] pr-[0.5vw]">
              <MixedHeading firstLetter="A" restOfText="GLIMPSE INTO" style={{ fontSize: 'clamp(1.8rem, 4cqw, 80px)' }} />
            </motion.div>

            {/* Right Text - Stripped of padding, perfectly matching MixedHeading baseline */}
            <motion.div style={{ x: rightTextX }} className="absolute left-[50%] top-[48.5%] -translate-y-[50%] pl-[0.5vw]">
              <h2 className="text-[#C7D2D9] m-0 p-0" style={{ fontSize: 'clamp(1.8rem, 4cqw, 80px)' }}>
                <span className="font-seasons uppercase leading-[0.85] block whitespace-nowrap">THE LABEL</span>
              </h2>
            </motion.div>
            
          </div>

          {/* Center Stack - Images mapped ONLY to scroll opacities */}
          <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[24%] aspect-[550/722] z-10 flex items-center justify-center">
            <motion.img style={{ opacity: img1Opacity }} src={stack1} alt="Dish 1" className="absolute w-full h-full object-cover shadow-2xl rotate-[6.47deg]" />
            <motion.img style={{ opacity: img2Opacity }} src={stack2} alt="Dish 2" className="absolute w-full h-full object-cover shadow-2xl -rotate-[4.92deg]" />
            <motion.img style={{ opacity: img3Opacity }} src={stack3} alt="Dish 3" className="absolute w-full h-full object-cover shadow-2xl rotate-[9.37deg]" />
            <motion.img style={{ opacity: img4Opacity }} src={stack4} alt="Dish 4" className="absolute w-full h-full object-cover shadow-2xl rotate-0" />
          </div>

        </div>
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