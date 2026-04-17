import { useRef } from 'react';
import { motion, useScroll, useTransform, type Variants, type MotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Preloader from '../components/layout/Preloader';
import Skeleton from '../components/layout/Skeleton';
import { useAssetLoader } from '../hooks/useAssetLoader';

// --- Asset Imports ---
import heroImg from '../assets/images/products/hero.png';
import shrimpImg from '../assets/images/products/shrimp.png';
import squidImg from '../assets/images/products/squid.png';
import yachtImg from '../assets/images/products/yatch.png';
import squid2Img from '../assets/images/home/squid2.png';
import quoteBg from '../assets/images/home/quotebg.png';
// import squidsmall from '../assets/images/products/squid/squidsmall.png';

// ─── Scroll-Driven Word Component ────────────────────────────────────────────
const Word = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0.05, 1]);
  return (
    // Step 2 — willChange pre-promotes every word to its own GPU layer so the
    // browser doesn't re-composite the page on every scroll-driven opacity tick.
    <motion.span style={{ opacity, willChange: 'opacity' }} className="inline-block mr-[0.25em] mb-[0.1em]">
      {children}
    </motion.span>
  );
};

// ─── Quote Section ────────────────────────────────────────────────────────────
const QuoteSection = () => {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // By using 'start start', the math is super simple: 
    // 0.0 is the exact moment it locks to your screen. 1.0 is the moment it unlocks.
    offset: ['start start', 'end end'],
  });

  const text = 'EACH PROGRAM OPERATES UNDER DEFINED SOURCING SYSTEMS, SPECIFICATION CONTROLLED PROCESSING, AND MARKET ALIGNED GRADING STANDARDS. ONLY CATEGORIES THAT SUPPORT CONSISTENT EXPORT PERFORMANCE ACROSS SHIPMENT CYCLES ARE RETAINED. FOCUS DEFINES QUALITY.';
  const words = text.split(' ');

  return (
    // h-[900vh] provides 9 full scroll-lengths of locking to comfortably read the text
    <section ref={containerRef} className="relative w-full h-[900vh] bg-[#001321]">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        
        {/* Background Image & 25px Blur */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full overflow-hidden blur-[25px]">
            <Skeleton className="absolute inset-0 z-0" />
            {/* Step 2 — willChange + translateZ(0) offloads the blurred BG to GPU.
                 Step 4 — decoding=async stops main thread freezing on decode. */}
            <img
              src={quoteBg}
              alt="Abstract Background"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              style={{
                willChange: 'filter, transform',
                transform: 'translateZ(0)',
              }}
              className="absolute h-[120%] w-[120%] -left-[0%] -top-[10%] object-cover opacity-60 z-10"
            />
          </div>
          <div className="absolute inset-0 bg-[#001321]/40 mix-blend-multiply" />
        </div>

        {/* Scalable Text Canvas */}
        <div
          className="relative z-10 w-full aspect-video max-h-screen max-w-[1920px] mx-auto flex items-center justify-center px-6 md:px-[12vw]"
          style={{ containerType: 'inline-size' }}
        >
          <h2
            className="font-seasons uppercase text-center text-[#C7D2D9]"
            style={{
              fontSize: 'clamp(1.5rem, 3.33cqw, 64px)', 
              lineHeight: '1.15',
              letterSpacing: '-0.03em', 
            }}
          >
            {words.map((word, i) => {
              // Starts lighting up shortly after lock (5%), finishes before unlock (85%)
              const startProgress = 0.05;
              const endProgress = 0.85;
              const step = (endProgress - startProgress) / words.length;
              const start = startProgress + i * step;
              const end = start + step;
              
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </h2>
        </div>
      </div>
    </section>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────
const ProductsPage = () => {
  const isPageLoading = useAssetLoader([heroImg]);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const DotLink = ({ label }: { label: string }) => (
    <div className="flex flex-row items-center gap-[6px] cursor-pointer group w-max">
      <span className="w-[6px] h-[6px] rounded-full bg-[#C7D2D9] shrink-0 group-hover:scale-150 transition-transform duration-300" />
      <span 
        className="font-poppins text-[#C7D2D9] uppercase tracking-wider group-hover:opacity-70 transition-opacity duration-300"
        style={{ fontSize: 'clamp(0.7rem, 0.83cqw, 16px)' }}
      >
        {label}
      </span>
    </div>
  );

  return (
    <>
      {/* CRITICAL FIX: Changed overflow-x-hidden to overflow-clip. 
      This stops horizontal scrolling without breaking the sticky Quote Section! */}
      <Preloader isLoading={isPageLoading} />
      <div className="w-full bg-[#001321] text-[#C7D2D9] overflow-clip flex flex-col">
        <Navbar />

      {/* ═══════════════════════════════════════════════════
          SECTION 1 — HERO 
      ═══════════════════════════════════════════════════ */}
      <div className="relative w-full h-[60vh] min-h-[600px] flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-[53.24%] top-0">
          <motion.img
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
            src={heroImg}
            alt="Ocean hero"
            className="w-full h-full object-cover shadow-2xl"
          />
          <div className="absolute inset-0 bg-black/15 pointer-events-none" />
        </div>

        <div
          className="relative w-full h-full max-w-[1920px] mx-auto z-10"
          style={{ containerType: 'inline-size' }}
        >
          <motion.h1
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="absolute left-[20.7%] top-[66.66%] w-[58.6%] text-center font-seasons uppercase text-[#C7D2D9] leading-[1.1]"
            style={{ fontSize: 'clamp(2.5rem, 5cqw, 96px)' }}
          >
            OUR PRODUCT RANGE
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="absolute left-[31%] top-[83.7%] w-[38%] text-center font-poppins font-light text-[#A2ADB4] leading-[1.2]"
            style={{ fontSize: 'clamp(0.8rem, 1.25cqw, 24px)' }}
          >
            This collection represents the core products we specialise in, selected for their reliability and shaped through years of disciplined sourcing and processing practices.
          </motion.p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 2 — STRUCTURED EXPORT PROGRAMS 
      ═══════════════════════════════════════════════════ */}
      <div className="relative w-full flex flex-col items-center py-24 z-10">
        
        {/* CRITICAL FIX: Replaced margin with amount: 0.1 to ensure it never disappears! */}
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          className="w-full text-center text-[#C7D2D9] z-30 mb-20"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 96px)' }}
        >
          <span className="font-seasons uppercase leading-[1.1]">
            <span style={{ fontFamily: "'Corinthia', cursive", fontSize: '1.5em', textTransform: 'none', display: 'inline-block', transform: 'translateY(0.15em)', marginRight: '10px' }}>S</span> 
            TRUCTURED EXPORT PROGRAMS
          </span>
        </motion.h2>

        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          className="w-full max-w-[1200px] px-6 flex flex-col md:flex-row justify-between gap-12 md:gap-8"
        >
          {/* LEFT COLUMN: Shrimp */}
          <div className="w-full md:w-[48%] flex flex-col gap-6">
            {/* Step 2 — willChange pre-promotes this animated card wrapper to a GPU layer. */}
            <motion.div variants={fadeUp} className="w-full shadow-2xl overflow-hidden aspect-[585/525]" style={{ willChange: 'transform, opacity' }}>
              <div className="relative w-full h-full overflow-hidden hover:scale-105 transition-transform duration-700" style={{ transform: 'translateZ(0)' }}>
                <Skeleton className="absolute inset-0 z-0" />
                {/* Step 4 — decoding=async stops main thread freezing on image decode. */}
                <img src={shrimpImg} alt="Vannamei Shrimp" className="relative z-10 w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
            </motion.div>
            
            <motion.h3 variants={fadeUp} className="font-seasons text-[#C7D2D9] capitalize leading-tight mt-4" style={{ fontSize: 'clamp(1.5rem, 2vw, 32px)' }}>
              Vannamei Shrimp
            </motion.h3>
            
            <motion.p variants={fadeUp} className="font-poppins font-light text-[#A2ADB4] leading-[1.4]" style={{ fontSize: 'clamp(0.85rem, 1vw, 20px)' }}>
              Sourced from authorised aquaculture farms, our shrimp is valued for its balanced texture, uniform size, and stability through processing and freezing.
            </motion.p>
            
            <motion.div variants={fadeUp} className="mt-2">
              <Link to="/shrimp">
                <DotLink label="View Details" />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Squid */}
          <div className="w-full md:w-[48%] flex flex-col gap-6">
            {/* Step 2 — willChange pre-promotes this animated card wrapper to a GPU layer. */}
            <motion.div variants={fadeUp} className="w-full shadow-2xl overflow-hidden aspect-[586/401]" style={{ willChange: 'transform, opacity' }}>
              <div className="relative w-full h-full overflow-hidden hover:scale-105 transition-transform duration-700" style={{ transform: 'translateZ(0)' }}>
                <Skeleton className="absolute inset-0 z-0" />
                {/* Step 4 — decoding=async stops main thread freezing on image decode. */}
                <img src={squidImg} alt="Squid" className="relative z-10 w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
            </motion.div>
            
            <motion.h3 variants={fadeUp} className="font-seasons text-[#C7D2D9] capitalize leading-tight mt-4" style={{ fontSize: 'clamp(1.5rem, 2vw, 32px)' }}>
              Squid
            </motion.h3>
            
            <motion.p variants={fadeUp} className="font-poppins font-light text-[#A2ADB4] leading-[1.4]" style={{ fontSize: 'clamp(0.85rem, 1vw, 20px)' }}>
              Known for its clean texture and structural clarity, our squid is sourced from regulated fisheries and handled through steady, controlled routines that protect form and freshness.
            </motion.p>
            
            <motion.div variants={fadeUp} className="mt-2">
              <Link to="/squid">
                <DotLink label="View Details" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 3 — QUOTE SECTION (Scroll Locked)
      ═══════════════════════════════════════════════════ */}
      <QuoteSection />

      {/* ═══════════════════════════════════════════════════
          SECTION 4 — HERITAGE LABEL
      ═══════════════════════════════════════════════════ */}
      <div
        className="relative w-full aspect-video max-w-[1920px] mx-auto min-h-[600px] md:min-h-0"
        style={{ containerType: 'inline-size' }}
      >
        {/* Step 2 — willChange pre-promotes this scroll-triggered wrapper to a GPU layer. */}
        <motion.div
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          className="absolute left-[58.54%] top-[5.55%] w-[38.33%] h-[88.88%] shadow-2xl z-10"
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="relative w-full h-full overflow-hidden" style={{ transform: 'translateZ(0)' }}>
            <Skeleton className="absolute inset-0 z-0" />
            {/* Step 4 — decoding=async stops main thread freezing on image decode. */}
            <img src={yachtImg} alt="Heritage squid dish" className="relative z-10 w-full h-full object-cover" loading="lazy" decoding="async" />
          </div>
        </motion.div>

        {/* Step 2 — willChange pre-promotes this scroll-triggered wrapper to a GPU layer. */}
        <motion.div
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          className="absolute left-[3.125%] top-[58.42%] w-[14.58%] h-[22.59%] shadow-2xl z-10"
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="relative w-full h-full overflow-hidden" style={{ transform: 'translateZ(0)' }}>
            <Skeleton className="absolute inset-0 z-0" />
            {/* Step 4 — decoding=async stops main thread freezing on image decode. */}
            <img src={squid2Img} alt="Whole squid" className="relative z-10 w-full h-full object-cover" loading="lazy" decoding="async" />
          </div>
        </motion.div>

        {/* Text Size reduced to max 64px, and line breaks added dynamically */}
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          className="absolute left-[10.39%] top-[11.11%] w-[41.61%] text-[#C7D2D9] z-20"
          style={{ fontSize: 'clamp(1.8rem, 3.5cqw, 64px)' }}
        >
          <span className="font-seasons uppercase leading-[1.1]">
            <span style={{ fontFamily: "'Corinthia', cursive", fontSize: '1.5em', textTransform: 'none', display: 'inline-block', transform: 'translateY(0.15em)', marginRight: '10px' }}>A</span> 
            HERITAGE LABEL <br />
            SHAPED BY FIVE DECADES <br />
            OF PRACTICE
          </span>
        </motion.h2>

        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          className="absolute left-[20.46%] top-[58.24%] w-[25%] md:w-[18.59%] flex flex-col gap-[1.5cqw] z-20"
        >
          <motion.p
            variants={fadeUp}
            className="font-poppins font-light text-[#A2ADB4] leading-[1.4]"
            style={{ fontSize: 'clamp(0.75rem, 1.04cqw, 20px)' }}
          >
            YACHT represents Sterling's most selective squid collection. Created in 1970, this legacy brand reflects a refined approach to sourcing and handling, reserved for aligned partners who value consistency and depth.
          </motion.p>
          
          <motion.div variants={fadeUp}>
            <Link to="/yacht">
              <DotLink label="Explore Yacht" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      </div>
    </>
  );
};

export default ProductsPage;