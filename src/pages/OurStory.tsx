import { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent, type Variants } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Preloader from '../components/layout/Preloader';
import Skeleton from '../components/layout/Skeleton';
import { useAssetLoader } from '../hooks/useAssetLoader';

// --- Asset Imports ---
import heroImg from '../assets/images/our-story/hero.png';
import legacy2 from '../assets/images/our-story/legacy2.png';
import legacy1 from '../assets/images/our-story/legacy1.png';
import story2 from '../assets/images/our-story/story2.png';
import story1 from '../assets/images/our-story/story1.png';
import bubblesImg from '../assets/bubbles.png'; 
import img1of1970 from '../assets/images/our-story/19701.jpg';
import img2of1970 from '../assets/images/our-story/19702.png';
import img3of1970 from '../assets/images/our-story/19703.jpg';
import img4of1970 from '../assets/images/our-story/19704.jpg';
import mangalore1 from '../assets/images/our-story/mangalore1.png';
import img1of1995 from '../assets/images/our-story/Cuttlefish.jpg';
import img2of1995 from '../assets/images/our-story/squid.jpg';
import img1of1996 from '../assets/images/our-story/19961.jpg';
import img2of1996 from '../assets/images/our-story/19962.jpg';
import img1of1990 from '../assets/images/our-story/19901.jpg';
import img1of1997 from '../assets/images/our-story/19971.jpg';
import img2of1997 from '../assets/images/our-story/19972.jpg';
// import img1of1998 from '../assets/images/our-story/19981.png';
import img2of1990 from '../assets/images/our-story/19902.jpg';
// import img1of1999 from '../assets/images/our-story/19991.jpg';
// import img2of1999 from '../assets/images/our-story/19992.jpg';
// import img1of2000 from '../assets/images/our-story/20001.jpg';
// import img2of2000 from '../assets/images/our-story/20002.jpg';
// import img1of2003 from '../assets/images/our-story/20031.jpg';
// import img2of2003 from '../assets/images/our-story/20032.jpg';
// import img1of2010 from '../assets/images/our-story/20101.jpg';
// import img2of2010 from '../assets/images/our-story/20102.jpg';
// import img1of2011 from '../assets/images/our-story/20111.jpg';
// import img2of2011 from '../assets/images/our-story/20112.jpg';
// import img1of2020 from '../assets/images/our-story/20201.jpg';
// import img2of2020 from '../assets/images/our-story/20202.jpg';


// --- Timeline Data Mapping (13 Entries, 2 Images Per Phase) ---
// Note: I alternated the imported images as placeholders. Replace with your actual phase assets!
const timelineData = [
  { year: '1970', label: '1970', text: 'Founded in Mangalore, India.', imageLeft: img1of1970, imageRight: img2of1970 },
  { year: '1970', label: '1970', text: 'Commenced exclusive shrimp processing for the Japanese market in partnership with Taiyo Fishery Company, Limited.', imageLeft: img4of1970, imageRight: img3of1970 },
  { year: '1990', label: '1990', text: 'Concluded the two-decade exclusive shrimp processing program for the Japanese market.', imageLeft: img2of1990, imageRight: img1of1990 },
  { year: '1995', label: '1995', text: 'Exclusive processing of sashimi-grade squid fillets and cuttlefish fillets for the Japanese market through Hero Corporation, Limited.', imageLeft: img1of1995, imageRight: img2of1995 },
  { year: '1996', label: '1996', text: 'Strategic expansion into fish processing for the Chinese market through an exclusive arrangement with China International Fisheries (Hong Kong) Limited.', imageLeft: img2of1996, imageRight: img1of1996 },
  { year: '1997', label: '1997', text: 'Exclusive export program for green mussels to South Africa.', imageLeft: img2of1997, imageRight: img1of1997 },
  { year: '1998', label: '1998', text: 'Exclusive supply of headless Black Tiger shrimp to Japan in partnership with Nissho Iwai Corporation.', imageLeft: story1, imageRight: story2 },
  { year: '1999', label: '1999', text: 'Development and supply of a Yacht brand premium squid program for the United States through a long-standing exclusive private partnership.', imageLeft: legacy2, imageRight: legacy1 },
  { year: '2000', label: '2000', text: 'Exclusive supply of head-on Black Tiger shrimp to France, in collaboration with CRUSTIMEX.', imageLeft: story2, imageRight: story1 },
  { year: '2003', label: '2003', text: 'Indian mackerel processing for Thailand in collaboration with Itochu Corporation Thailand.', imageLeft: legacy1, imageRight: legacy2 },
  { year: '2010', label: '2010', text: 'Supply of whole squid to selected long-term partners in Thailand.', imageLeft: story1, imageRight: story2 },
  { year: '2011', label: '2011', text: 'Introduction of Vannamei shrimp processing for selected partners in China.', imageLeft: legacy2, imageRight: legacy1 },
  { year: '2020', label: '2020', text: 'Expansion of Vannamei shrimp supply to selected partners in Vietnam.', imageLeft: story2, imageRight: story1 },
];

const OurStoryPage = () => {
  const isPageLoading = useAssetLoader([heroImg]);

  // --- Scroll Tracking State ---
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = Math.min(
      Math.floor(latest * timelineData.length), 
      timelineData.length - 1
    );
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  });

  // Capped scroll distance so it stops nicely at 2020 without blank space
  const horizontalScrollRaw = useTransform(
    scrollYProgress, 
    [0, 1], 
    ["0%", "-45%"] 
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

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  return (
    <>
      <Preloader isLoading={isPageLoading} />
      <div className="w-full bg-[#001321] text-[#C7D2D9] overflow-clip flex flex-col pb-0">
        <Navbar />

      {/* ═══════════════════════════════════════════════════
          SECTION 1 — HERO & INTRO
      ═══════════════════════════════════════════════════ */}
      <div className="relative w-full aspect-video min-h-[600px] md:min-h-0" style={{ containerType: 'inline-size' }}>
        <motion.img 
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
          src={heroImg} alt="Sterling Foods History" 
          className="absolute top-0 left-0 w-full h-[53.24%] object-cover shadow-2xl" 
        />
        
        <motion.h1 
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }}
            className="absolute top-[61.2%] left-[20.7%] w-[58.6%] text-center font-seasons uppercase leading-[1.1] whitespace-nowrap" 
            style={{ fontSize: 'clamp(2rem, 5cqw, 96px)' }}
        >
            WHERE OUR STORY <br /> 
            FINDS ITS SHAPE
        </motion.h1>
        
        <motion.p 
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }}
          className="absolute top-[83.3%] left-[31%] w-[38%] text-center font-poppins font-light leading-[1.17]" 
          style={{ fontSize: 'clamp(0.8rem, 1.25cqw, 24px)' }}
        >
          Journey defined not by haste, but by discipline, intention, and <br /> an unbroken commitment to clarity.
        </motion.p>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 2 — MEASURED DECISIONS
      ═══════════════════════════════════════════════════ */}
      <div className="relative w-full aspect-[1.219] max-w-[1920px] mx-auto min-h-[800px] md:min-h-0 mb-16" style={{ containerType: 'inline-size' }}>
        <motion.h2 
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} 
          className="absolute top-[2%] w-full text-center z-30 text-[#C7D2D9]" 
          style={{ fontSize: 'clamp(2rem, 4cqw, 80px)' }}
        >
          <span className="font-seasons uppercase leading-[0.45]">
            <span style={{ fontFamily: "'Corinthia', cursive", fontSize: '1.5em', textTransform: 'none', display: 'inline-block', transform: 'translateY(0em)', marginRight: '10px' }}>A</span> 
            LEGACY BUILT ON<br />
            MEASURED DECISIONS
          </span>
        </motion.h2>

        <motion.img 
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          src={bubblesImg} alt="Decorative bubbles" 
          className="absolute left-[71.13%] top-[5.42%] w-[6.16%] h-auto z-10" 
        />

        <motion.div 
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} 
          className="absolute left-[33.8%] top-[13.96%] w-[31.4%] h-[46.85%] shadow-2xl z-20" 
        >
          <div className="relative w-full h-full overflow-hidden">
            <Skeleton className="absolute inset-0 z-0" />
            <img src={legacy1} alt="Fishing techniques" className="relative z-10 w-full h-full object-cover" loading="lazy" />
          </div>
        </motion.div>

        <motion.div 
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} 
          className="absolute left-[21.3%] top-[31.68%] w-[14.68%] h-[19.74%] shadow-2xl z-30" 
        >
          <div className="relative w-full h-full overflow-hidden">
            <Skeleton className="absolute inset-0 z-0" />
            <img src={mangalore1} alt="Processing lines" className="relative z-10 w-full h-full object-cover" loading="lazy" />
          </div>
        </motion.div>

        <motion.div 
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} 
          className="absolute left-[61.56%] top-[26.47%] w-[21.14%] h-[24.95%] bg-[#C7D2D9] z-30 shadow-2xl" 
        />

        <motion.h3 
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }} 
          className="absolute left-[64.68%] top-[30.34%] w-[14.89%] font-seasons font-bold text-[#001321] leading-[1.31] z-40"
          style={{ fontSize: 'clamp(1rem, 1.66cqw, 32px)' }}
        >
          Founded in 1970 in Mangalore, India, by Stanley C. David,
        </motion.h3>

        <motion.p 
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }} 
          className="absolute left-[64.68%] top-[40.38%] w-[14.89%] font-poppins text-[#001321] leading-[1.4] z-40" 
          style={{ fontSize: 'clamp(0.7rem, 1.04cqw, 20px)' }}
        >
          Sterling Foods was established during the formative years of India’s seafood export industry.
        </motion.p>

        <motion.h3 
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} 
          className="absolute left-[17.34%] top-[63.36%] w-[65.36%] text-center font-seasons leading-[1.31] z-20" 
          style={{ fontSize: 'clamp(1.2rem, 1.66cqw, 32px)' }}
        >
          From the beginning, the objective was clear: build a processing operation capable of delivering consistent export quality under demanding international standards
        </motion.h3>

        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} 
          className="absolute left-[17.34%] top-[72.38%] w-[65.98%] flex justify-between z-20"
        >
          <div className="w-[46%] flex flex-col gap-[2cqw]">
            <motion.p variants={fadeUp} className="font-poppins font-light text-[#A2ADB4] leading-[1.4]" style={{ fontSize: 'clamp(0.75rem, 1.04cqw, 20px)' }}>
              Over five decades, the seafood industry has remained volatile influenced by regulatory shifts, ecological cycles, and global pricing pressures. Sterling Foods has navigated these conditions through structured systems and long-term commercial alignment.
            </motion.p>
            <motion.p variants={fadeUp} className="font-poppins font-light text-[#A2ADB4] leading-[1.4]" style={{ fontSize: 'clamp(0.75rem, 1.04cqw, 20px)' }}>
              Each program was initiated at the right time, scaled with stability, and concluded when market or regulatory cycles shifted ensuring continuity of standards across changing conditions.
            </motion.p>
          </div>
          
          <div className="w-[46%] flex flex-col gap-[2cqw]">
            <motion.p variants={fadeUp} className="font-poppins font-light text-[#A2ADB4] leading-[1.4]" style={{ fontSize: 'clamp(0.75rem, 1.04cqw, 20px)' }}>
              Preparation for third-generation stewardship is underway to ensure continuity of these operating standards. Sterling Foods defines itself not by momentary scale but by durability.
            </motion.p>
            <motion.p variants={fadeUp} className="font-poppins font-light text-[#A2ADB4] leading-[1.4]" style={{ fontSize: 'clamp(0.75rem, 1.04cqw, 20px)' }}>
              Today, under second-generation leadership, the company continues to operate with the same foundational priorities: Reliable delivery across shipment cycles, Structured processing systems, Long-standing commercial relationships and Regulatory alignment across major markets.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 3 — SCROLL-LOCKED TIMELINE
      ═══════════════════════════════════════════════════ */}
      <div 
        className="relative w-full" 
        style={{ height: `${timelineData.length * 100}vh` }} 
        ref={containerRef}
      >
        <div className="sticky top-0 w-full h-screen max-w-[1920px] mx-auto overflow-hidden bg-[#001321] flex flex-col justify-center">
          
          {/* Header */}
          <h2 
            className="absolute top-[8%] w-full text-center z-30 text-[#A2ADB4]" 
            style={{ fontSize: 'clamp(2.5rem, 5vw, 96px)' }}
          >
            <span className="font-seasons uppercase leading-[1.1]">
              <span style={{ fontFamily: "'Corinthia', cursive", fontSize: '1.5em', textTransform: 'none', display: 'inline-block', transform: 'translateY(0.15em)', marginRight: '10px' }}>A</span> 
              LEGACY BUILT IN PHASES
            </span>
          </h2>

          {/* === THE ROLLING WHEEL YEAR === */}
          <div className="absolute top-[28%] w-full flex justify-center items-center pointer-events-none z-0">
            <div className="flex font-seasons font-light text-[#C7D2D9] leading-none select-none" style={{ fontSize: 'clamp(6rem, 24vw, 420px)' }}>
              {timelineData[activeIndex].year.split('').map((digit, idx) => (
                <span key={idx} className="relative inline-flex justify-center items-center overflow-hidden h-[1.25em] w-[0.6em]">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={`${idx}-${digit}`}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      exit={{ y: "-100%", opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute"
                    >
                      {digit}
                    </motion.span>
                  </AnimatePresence>
                </span>
              ))}
            </div>
          </div>

          {/* === CONTINUOUS IMAGE FLIGHT WITH MID-AIR CROSSFADE === */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {timelineData.map((data, index) => {
              const isActive = index === activeIndex;       // The Current Slide
              const isPrev = index === activeIndex - 1;     // The Previous Slide
              
              return (
                <div key={`timeline-slide-${index}`}>
                  
                  {/* THE LEFT IMAGE */}
                  {/* Fades IN while flying Right -> Left. Fades OUT when flying Left -> Offscreen */}
                  <motion.div
                    initial={false}
                    animate={{
                      left: isActive ? '12.7%' : isPrev ? '-30%' : '69.47%',
                      top: isActive ? '42.59%' : isPrev ? '42.59%' : '17.31%',
                      width: isActive ? '17.58%' : isPrev ? '17.58%' : '23.07%',
                      height: isActive ? '18.9%' : isPrev ? '18.9%' : '25.46%',
                      rotate: isActive ? 13.7 : isPrev ? 25 : -7.38,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute shadow-2xl overflow-hidden"
                    style={{ zIndex: isActive ? 20 : 10 }}
                  >
                    <div className="relative w-full h-full overflow-hidden">
                      <Skeleton className="absolute inset-0 z-0" />
                      <img src={data.imageLeft} alt="History Phase Left" className="relative z-10 w-full h-full object-cover scale-110" loading="lazy" />
                    </div>
                  </motion.div>

                  {/* THE RIGHT IMAGE */}
                  {/* Fades IN while entering from Far Right. Fades OUT while flying Right -> Left */}
                  <motion.div
                    initial={false}
                    animate={{
                      left: isActive ? '69.47%' : isPrev ? '12.7%' : '100%',
                      top: isActive ? '17.31%' : isPrev ? '42.59%' : '17.31%',
                      width: isActive ? '23.07%' : isPrev ? '17.58%' : '23.07%',
                      height: isActive ? '25.46%' : isPrev ? '18.9%' : '25.46%',
                      rotate: isActive ? -7.38 : isPrev ? 13.7 : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute shadow-2xl overflow-hidden"
                    style={{ zIndex: isPrev ? 25 : 15 }}
                  >
                    <div className="relative w-full h-full overflow-hidden">
                      <Skeleton className="absolute inset-0 z-0" />
                      <img src={data.imageRight} alt="History Phase Right" className="relative z-10 w-full h-full object-cover scale-110" loading="lazy" />
                    </div>
                  </motion.div>
                  
                </div>
              );
            })}
          </div>

          {/* Text Description */}
          <div className="absolute top-[75%] w-full h-[80px] flex justify-center items-center overflow-hidden z-20">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center font-inter font-light text-[#A2ADB4] tracking-[-0.03em] max-w-[50%]" 
                style={{ fontSize: 'clamp(0.8rem, 1.2vw, 24px)' }}
              >
                {timelineData[activeIndex].text}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive Timeline Progress Bar */}
          <div className="absolute top-[85%] w-full h-[15%] z-20">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#A2ADB4]/20"></div>
            
            <motion.div 
              style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
              className="absolute top-0 left-0 w-full h-[2px] bg-[#C7D2D9]"
            ></motion.div>

            <div className="absolute top-[2vw] left-[3.125%] w-[93.75%] overflow-hidden">
              <motion.div 
                className="flex items-center gap-[4vw] font-seasons uppercase whitespace-nowrap pt-2 pr-[5vw]"
                style={{ fontSize: 'clamp(1rem, 3.33vw, 64px)', x: horizontalScrollRaw }}
              >
                {timelineData.map((item, index) => (
                  <motion.span 
                    key={index} 
                    className="transition-colors duration-500 cursor-pointer"
                    style={{ 
                      color: activeIndex === index ? '#C7D2D9' : 'rgba(162, 173, 180, 0.4)',
                      opacity: activeIndex === index ? 1 : 0.6 
                    }}
                  >
                    {item.label}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      </div>
    </>
  );
};

export default OurStoryPage;