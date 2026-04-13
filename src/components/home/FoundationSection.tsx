import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import Skeleton from '../layout/Skeleton';

// Asset Imports
import heritage1 from '../../assets/images/home/heritage1.png'; // Sauce Pouring
import heritage2 from '../../assets/images/home/heritage2.png'; // Plated Shrimp
import fishOutline from '../../assets/images/home/fishoutline.png';
import squid1 from '../../assets/images/home/squid1.png';
import heritage_vertical from '../../assets/images/home/heritage1.png'; 
import shrimpIcon from '../../assets/shrimpicon.png';
// Add these to your existing Asset Imports at the top:
import squidIcon from '../../assets/squidicon.png';
import squidToggleImg from '../../assets/images/home/squid2.png'; 

// Make sure you import your Shrimp display images too!
import shrimpMainImg from '../../assets/images/home/heritage2.png'; // Replace with actual
import shrimpToggleImg from '../../assets/images/home/shrimp1.png'; // Replace with actual

const FoundationSection = () => {
  const [activeProduct, setActiveProduct] = useState<'squid' | 'shrimp'>('squid');

 // --- SCROLLJACKING LOGIC ---
  const programsRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: programsRef,
    offset: ["start start", "end end"] 
  });

  const p1Op = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);

  const p1Y = useTransform(scrollYProgress, [0.05, 0.15], [50, 0]);



  const p2Op = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);

  const p2Y = useTransform(scrollYProgress, [0.15, 0.25], [50, 0]);



  const p3Op = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);

  const p3Y = useTransform(scrollYProgress, [0.25, 0.35], [50, 0]);



  const p4Op = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);

  const p4Y = useTransform(scrollYProgress, [0.35, 0.45], [50, 0]);
  // --------------------------------

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };
// --- SIGNATURE PRODUCTS DATA ---
  const products = {
    squid: {
      title: "SQUID",
      desc: "Structured supply programs serving Asian markets and premium U.S. buyers through defined grading and processing systems.",
      btnText: "VIEW SQUID PROGRAM",
      mainImg: squid1,
    },
    shrimp: {
      title: "SHRIMP",
      desc: "Premium farm-raised and wild-caught shrimp programs tailored for global retail and food service sectors.",
      btnText: "VIEW SHRIMP PROGRAM",
      mainImg: shrimpMainImg, // The large shrimp display image
    }
  };

  // Step 1 & 3 — cardVariants no longer animates `filter`.
  // Size/position changes (left, width, height) trigger layout recalcs; the
  // `layout` prop on each motion.div converts them to GPU-accelerated FLIP
  // transforms instead. A separate opacity overlay handles the dark/grayscale
  // effect so we never animate a CSS filter directly.
  const cardVariants = {
    active: { // Front, large, full color
      left: "0%",
      bottom: "0%",
      width: "68%", 
      height: "100%",
      zIndex: 20,
      transition: { type: "spring", stiffness: 200, damping: 25 }
    },
    inactive: { // Back, smaller, dark/grayscale
      left: "72%", 
      bottom: "0%", 
      width: "28%",
      height: "85%",
      zIndex: 10,
      transition: { type: "spring", stiffness: 200, damping: 25 }
    }
  };

  // Step 3 — overlay variants: animating opacity is practically free for the GPU.
  const overlayVariants = {
    active: { opacity: 0, transition: { duration: 0.35, ease: 'easeOut' } },
    inactive: { opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } },
  };
  return (
    <section className="relative w-full bg-[#001321] px-6 py-32 text-[#E6F1F8] md:px-12 lg:py-48">
      <div className="mx-auto max-w-[1440px]">
        
     {/* --- 1. HERITAGE SECTION (Strict Figma Math: 1920x1080) --- */}
        <div 
          className="relative min-h-[900px] mb-32 md:aspect-video md:min-h-0 w-full max-w-[1920px] mx-auto"
          // This unlocks the cqw math below so text scales with the box, not the screen
          style={{ containerType: 'inline-size' }}
        >
          
          {/* Heading - Exact Figma Position & Scaling */}
          <motion.h2 
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="absolute top-[10.7%] left-[3.1%] font-seasons font-light uppercase tracking-normal text-[#E6F1F8] text-left z-30 flex flex-col w-[80%] md:w-auto"
            // 96px font / 1920px width = 5cqw. Capped at 96px max.
            style={{ fontSize: 'clamp(2rem, 5cqw, 96px)', lineHeight: '0.85' }}
          >
            <div className="whitespace-nowrap flex items-baseline">
              <span 
                className="pr-2 uppercase leading-none" 
                style={{ fontFamily: "'Corinthia', cursive", fontSize: '1.6em', transform: 'translateY(0.05em)' }}
              >
                A
              </span>
              <span>HERITAGE SEAFOOD</span>
            </div>
            <div className="whitespace-nowrap mt-2">HOUSE BUILT ON DISCIPLINE</div>
          </motion.h2>

          {/* Top Right Image (Sauce Pouring) - Exact Math */}
          {/* Step 2 — willChange offloads this animated wrapper to the GPU */}
          <motion.div 
            className="absolute top-[10.4%] right-[3.1%] hidden md:block w-[22.5%] z-10"
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="relative w-full h-full overflow-hidden shadow-2xl" style={{ transform: 'translateZ(0)' }}>
              <Skeleton className="absolute inset-0 z-0" />
              {/* Step 4 — decoding=async prevents main-thread freeze during image decode */}
              <img src={heritage1} alt="Sauce Pouring" className="relative z-10 w-full object-contain" loading="lazy" decoding="async" />
            </div>
          </motion.div>

          {/* Subtext - Slightly Larger Math */}
          <motion.div 
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="absolute top-[45%] md:top-[38.9%] left-[5%] md:left-[26.8%] w-[90%] md:w-[35.8%] font-poppins font-light tracking-wider text-[#E6F1F8]/70 space-y-6 text-left z-30"
            // Increased to 24px max. Math: 24 / 1920 = 1.25cqw. Min size bumped to 1rem (16px).
            style={{ fontSize: 'clamp(1rem, 1.25cqw, 24px)', lineHeight: '1.6' }}
          >
            <p>Sterling Foods is a multi-decade export house operating structured seafood programs across Asia, the United States, and Europe.</p>
            <p>Our operations are built on controlled sourcing systems, specification-driven processing, regulatory alignment and long-term commercial relationships. Consistency is delivered shipment after shipment.</p>
          </motion.div>

          {/* Bottom Left Image (Plated Shrimp) - Exact Math */}
          {/* Step 2 — willChange offloads this animated wrapper to the GPU */}
          <motion.div 
            className="absolute top-[62.2%] left-[3.1%] hidden md:block w-[14.5%] z-20"
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }}
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="relative w-full h-full overflow-hidden shadow-2xl" style={{ transform: 'translateZ(0)' }}>
              <Skeleton className="absolute inset-0 z-0" />
              {/* Step 4 — decoding=async prevents main-thread freeze during image decode */}
              <img src={heritage2} alt="Plated Shrimp" className="relative z-10 w-full object-contain" loading="lazy" decoding="async" />
            </div>
          </motion.div>

        </div>

       {/* --- 2. OPERATING PROGRAMS SECTION (Pinned Scroll Sequence) --- */}
        {/* Reduced to h-[300vh] for a tighter, faster scroll experience */}
        <div ref={programsRef} className="relative w-full h-[1100vh] mb-32 z-20">
          
          {/* CRITICAL: overflow-visible ensures the fish is NEVER chopped in half */}
          <div className="sticky top-0 w-full h-screen flex flex-col justify-center items-center overflow-visible bg-[#001321]">
            
            <div 
              className="relative w-full aspect-video max-h-screen max-w-[1920px] mx-auto overflow-visible"
              style={{ containerType: 'inline-size' }}
            >
              
              {/* Section Title */}
              <motion.h3 
                className="absolute top-[10.8%] left-[3.1%] font-seasons font-light uppercase tracking-wide text-[#E6F1F8] leading-[1.1] text-left z-20 flex flex-col"
                style={{ fontSize: 'clamp(1.5rem, 3.8cqw, 76px)' }}
              >
                <div className="whitespace-nowrap flex items-baseline">
                  <span className="pr-2 uppercase leading-none" style={{ fontFamily: "'Corinthia', cursive", fontSize: '1.6em', transform: 'translateY(0.05em)' }}>E</span>
                  <span>VERY PROGRAM</span>
                </div>
                <div className="whitespace-nowrap mt-2">OPERATES UNDER</div>
              </motion.h3>

              {/* Central Illustration (Fish) - Disconnected from scroll, triggers immediately! */}
              {/* Step 2 — heavy scroll-driven element gets its own GPU layer */}
              <motion.div 
                className="absolute top-[-37.6%] left-[45%] w-[90%] md:w-[40%] pointer-events-none z-0"
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
                style={{ willChange: 'transform, opacity' }}
              >
                <div className="relative w-full h-full overflow-hidden" style={{ transform: 'translateZ(0)' }}>
                  <Skeleton className="absolute inset-0 z-0 bg-transparent animate-none" />
                  {/* Step 4 — decoding=async prevents main-thread freeze during image decode */}
                  <img src={fishOutline} alt="Fish illustration" className="relative z-10 w-full h-auto object-contain brightness-125 drop-shadow-2xl" loading="lazy" decoding="async" />
                </div>
              </motion.div>

              {/* Numbered Points - Tied strictly to our new perfectly chained scroll math */}
              <motion.div className="absolute top-[39.9%] left-[4.6%] z-10" style={{ opacity: p1Op, y: p1Y }}>
                <div className="flex flex-row items-start gap-3">
                  <span className="font-seasons italic text-[#C7D2D9] leading-none" style={{ fontSize: 'clamp(1.2rem, 2.08cqw, 40px)' }}>( 1 )</span>
                  <span className="font-poppins font-light capitalize text-[#A2ADB4]" style={{ fontSize: 'clamp(1rem, 1.66cqw, 32px)', lineHeight: '1.4' }}>
                    Defined Sourcing <br className="hidden md:block" /> Standards
                  </span>
                </div>
              </motion.div>

              <motion.div className="absolute top-[56.7%] left-[20.4%] z-10" style={{ opacity: p2Op, y: p2Y }}>
                <div className="flex flex-row items-start gap-3">
                  <span className="font-seasons italic text-[#C7D2D9] leading-none" style={{ fontSize: 'clamp(1.2rem, 2.08cqw, 40px)' }}>( 2 )</span>
                  <span className="font-poppins font-light capitalize text-[#A2ADB4]" style={{ fontSize: 'clamp(1rem, 1.66cqw, 32px)', lineHeight: '1.4' }}>
                    Controlled Processing <br/> Parameters
                  </span>
                </div>
              </motion.div>

              <motion.div className="absolute top-[69.2%] left-[43.7%] z-10" style={{ opacity: p3Op, y: p3Y }}>
                <div className="flex flex-row items-start gap-3">
                  <span className="font-seasons italic text-[#C7D2D9] leading-none mt-[2px]" style={{ fontSize: 'clamp(1.2rem, 2.08cqw, 40px)' }}>( 3 )</span>
                  <span className="font-poppins font-light capitalize text-[#A2ADB4]" style={{ fontSize: 'clamp(1rem, 1.66cqw, 32px)', lineHeight: '1.4' }}>
                    Batch-Level Traceability
                  </span>
                </div>
              </motion.div>

              <motion.div className="absolute top-[78.8%] left-[68.5%] z-10" style={{ opacity: p4Op, y: p4Y }}>
                <div className="flex flex-row items-start gap-3">
                  <span className="font-seasons italic text-[#C7D2D9] leading-none" style={{ fontSize: 'clamp(1.2rem, 2.08cqw, 40px)' }}>( 4 )</span>
                  <span className="font-poppins font-light capitalize text-[#A2ADB4]" style={{ fontSize: 'clamp(1rem, 1.66cqw, 32px)', lineHeight: '1.4' }}>
                    Market-Specific Compliance <br/> Frameworks
                  </span>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

        {/* --- 3. SIGNATURE PRODUCTS SECTION (Interactive Layout) --- */}
        <div className="relative pt-24 md:pt-32 border-t border-[#E6F1F8]/10 w-full overflow-hidden">
          
          <div 
            className="relative w-full flex flex-col md:block md:aspect-video md:max-h-screen max-w-[1920px] mx-auto md:mb-24"
            style={{ containerType: 'inline-size' }}
          >
            
            {/* Section Heading */}
            <motion.div 
              className="md:absolute md:top-[9.2%] w-full flex justify-center mb-16 md:mb-0 z-30"
              variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <h2 
                className="font-seasons font-light text-center flex items-center uppercase tracking-normal text-[#C7D2D9]"
                style={{ fontSize: 'clamp(2rem, 5cqw, 96px)' }}
              >
                <span className="leading-none pr-1 md:pr-2" style={{ fontFamily: "'Corinthia', cursive", fontSize: '1.4em', transform: 'translateY(0.1em)' }}>O</span>
                UR SIGNATURE PRODUCTS
              </h2>
            </motion.div>

            {/* --- LEFT COLUMN: DYNAMIC INFO & TOGGLES --- */}
            <motion.div 
              className="md:absolute md:top-[22.2%] md:left-[3.6%] w-full md:w-[37.8%] flex flex-col z-30 mb-12 md:mb-0"
              variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }}
            >
              {/* Dynamic Text Crossfade */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-seasons uppercase text-[#C7D2D9] mb-6" style={{ fontSize: 'clamp(1.5rem, 2.08cqw, 40px)' }}>
                    {products[activeProduct].title}
                  </h3>
                  <p className="font-poppins font-light text-[#A2ADB4]" style={{ fontSize: 'clamp(0.875rem, 1.04cqw, 20px)', lineHeight: '1.4' }}>
                    {products[activeProduct].desc}
                  </p>
                  
                  <Link to={`/${activeProduct}`} className="flex items-center gap-3 mt-8 text-[#C7D2D9] font-poppins capitalize tracking-wide transition-opacity hover:opacity-70 w-max" style={{ fontSize: 'clamp(0.75rem, 0.83cqw, 16px)' }}>
                    <span className="w-1.5 h-1.5 bg-[#C7D2D9] rounded-full"></span>
                    {products[activeProduct].btnText}
                  </Link>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Dynamic Toggles */}
            <motion.div 
              className="md:absolute md:top-[81.1%] md:left-[3.1%] flex gap-4 md:gap-[1.25cqw] z-30 mb-16 md:mb-0"
              variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}
            >
              {/* Squid Toggle */}
              <button 
                onClick={() => setActiveProduct('squid')} 
                className={`w-24 h-24 md:w-[6.66cqw] md:h-[6.66cqw] overflow-hidden transition-all duration-300 border-2 rounded flex justify-center items-center ${activeProduct === 'squid' ? 'border-[#C7D2D9] p-0 ring-2 ring-offset-2 ring-offset-[#001321] ring-[#C7D2D9]' : 'bg-[#001B2E] border-[#C7D2D9]/10 hover:border-[#C7D2D9]/40 p-4'}`}
              >
                {activeProduct === 'squid' ? (
                   <img src={squidToggleImg} alt="Squid thumbnail" className="w-full h-full object-cover" />
                ) : (
                   /* CSS Mask Image trick to perfectly colorize the black PNG */
                   <div 
                     className="w-[75%] h-[75%] bg-[#C7D2D9] opacity-70 transition-opacity hover:opacity-100"
                     style={{
                       WebkitMaskImage: `url(${squidIcon})`,
                       WebkitMaskSize: 'contain',
                       WebkitMaskPosition: 'center',
                       WebkitMaskRepeat: 'no-repeat',
                       maskImage: `url(${squidIcon})`,
                       maskSize: 'contain',
                       maskPosition: 'center',
                       maskRepeat: 'no-repeat',
                     }}
                   />
                )}
              </button>

              {/* Shrimp Toggle */}
              <button 
                onClick={() => setActiveProduct('shrimp')} 
                className={`w-24 h-24 md:w-[6.66cqw] md:h-[6.66cqw] overflow-hidden transition-all duration-300 border-2 rounded flex justify-center items-center ${activeProduct === 'shrimp' ? 'border-[#C7D2D9] p-0 ring-2 ring-offset-2 ring-offset-[#001321] ring-[#C7D2D9]' : 'bg-[#001B2E] border-[#C7D2D9]/10 hover:border-[#C7D2D9]/40 p-4'}`}
              >
                {activeProduct === 'shrimp' ? (
                   <img src={shrimpToggleImg} alt="Shrimp thumbnail" className="w-full h-full object-cover" />
                ) : (
                   /* CSS Mask Image trick to perfectly colorize the black PNG */
                   <div 
                     className="w-[75%] h-[75%] bg-[#C7D2D9] opacity-70 transition-opacity hover:opacity-100"
                     style={{
                       WebkitMaskImage: `url(${shrimpIcon})`,
                       WebkitMaskSize: 'contain',
                       WebkitMaskPosition: 'center',
                       WebkitMaskRepeat: 'no-repeat',
                       maskImage: `url(${shrimpIcon})`,
                       maskSize: 'contain',
                       maskPosition: 'center',
                       maskRepeat: 'no-repeat',
                     }}
                   />
                )}
              </button>
            </motion.div>

            {/* --- RIGHT COLUMN: SWAPPING IMAGE CAROUSEL --- */}
            <motion.div 
              className="relative md:absolute md:top-[22.2%] md:left-[50.8%] w-full md:w-[45%] h-[550px] md:h-[70.7%] z-20 mb-8 md:mb-0 overflow-hidden md:overflow-visible"
              variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }}
            >
              {/* Squid Image (Front when Squid is active, Back when Shrimp is active) */}
              {/* Step 1 — `layout` prop uses FLIP math so Framer animates via GPU transforms
                   instead of recalculating layout for every `left`/`width`/`height` change. */}
              {/* Step 2 — willChange ensures the browser pre-promotes this to a GPU layer. */}
              <motion.div
                layout
                className="absolute shadow-2xl overflow-hidden"
                variants={cardVariants}
                animate={activeProduct === 'squid' ? 'active' : 'inactive'}
                initial={false} // Prevents animation on initial page load
                style={{ willChange: 'transform, opacity' }}
              >
                {/* Step 3 — opacity-only overlay replaces the filter animation (brightness/grayscale).  
                     Animating opacity is free for the GPU; animating filter is very expensive. */}
                <motion.div
                  className="absolute inset-0 bg-[#001321] mix-blend-color z-10 pointer-events-none"
                  variants={overlayVariants}
                  animate={activeProduct === 'squid' ? 'active' : 'inactive'}
                  initial={false}
                />
                <div className="relative w-full h-full overflow-hidden" style={{ transform: 'translateZ(0)' }}>
                  <Skeleton className="absolute inset-0 z-0" />
                  {/* Step 4 — decoding=async prevents main-thread freeze during image decode */}
                  <img src={products.squid.mainImg} alt="Squid" className="relative z-10 w-full h-full object-cover" loading="lazy" decoding="async" />
                </div>
              </motion.div>

              {/* Shrimp Image (Front when Shrimp is active, Back when Squid is active) */}
              {/* Step 1 — `layout` prop, same FLIP rationale as Squid card above. */}
              <motion.div
                layout
                className="absolute shadow-2xl overflow-hidden hidden md:block" // Hidden on mobile so it doesn't break layout
                variants={cardVariants}
                animate={activeProduct === 'shrimp' ? 'active' : 'inactive'}
                initial={false}
                style={{ willChange: 'transform, opacity' }}
              >
                {/* Step 3 — opacity-only overlay, same rationale as Squid card. */}
                <motion.div
                  className="absolute inset-0 bg-[#001321] mix-blend-color z-10 pointer-events-none"
                  variants={overlayVariants}
                  animate={activeProduct === 'shrimp' ? 'active' : 'inactive'}
                  initial={false}
                />
                <div className="relative w-full h-full overflow-hidden" style={{ transform: 'translateZ(0)' }}>
                  <Skeleton className="absolute inset-0 z-0" />
                  {/* Step 4 — decoding=async prevents main-thread freeze during image decode */}
                  <img src={products.shrimp.mainImg} alt="Shrimp" className="relative z-10 w-full h-full object-cover" loading="lazy" decoding="async" />
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FoundationSection;