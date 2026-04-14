import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Preloader from '../components/layout/Preloader';
import Skeleton from '../components/layout/Skeleton';
import { useAssetLoader } from '../hooks/useAssetLoader';

// --- Asset Imports ---
import squid2Img from '../assets/images/home/squid2.png';
import squidImg from '../assets/images/products/squid/squid.png';
import hoverImg from '../assets/images/products/squid/hover.png';
import gal1 from '../assets/images/products/squid/1.png';
import gal2 from '../assets/images/products/squid/2.png';
// gal3 replaced by mainImg for the expanding center
import gal3 from '../assets/images/products/squid/3.png'; 
import gal5 from '../assets/images/products/squid/5.png';
import gal6 from '../assets/images/products/squid/6.png';
import mainImg from '../assets/images/products/squid/main.png';
import shrimpImg from '../assets/images/products/shrimp.png';
import starImg from '../assets/images/products/squid/star.png';

// --- Dynamic Data for the Hover Section ---
const productShapes = [
  { id: 'whole', label: 'Whole Squid', image: hoverImg },
  { id: 'rings', label: 'Squid Rings', image: hoverImg },
  { id: 'tube', label: 'Squid Tube', image: hoverImg },
  { id: 'tentacles', label: 'Squid Tentacles', image: hoverImg },
];

const SquidPage = () => {
  // Added mainImg to the preloader to guarantee a smooth transition
  const isPageLoading = useAssetLoader([squidImg, squid2Img, mainImg]);

  // --- Cursor Tracking State for Section 2 ---
  const [hoveredShape, setHoveredShape] = useState<string | null>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Tightened spring physics for a more responsive follow
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20, mass: 1 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20, mass: 1 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!section2Ref.current) return;
    const rect = section2Ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // ═══════════════════════════════════════════════════
  // SCROLL ANIMATION LOGIC FOR THE CINEMATIC GALLERY
  // ═══════════════════════════════════════════════════
  const galleryRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start start", "end end"]
  });

  // --- THE HOLDING PHASE (400vh total container) ---
  const holdStart = 0.2;
  const animEnd = 0.7; 

  // 1. Center Image Expands (Bypassing Framer Motion's unit parser via calc)
  const expandProgress = useTransform(scrollYProgress, [holdStart, animEnd], [0, 1]);
  const centerW = useTransform(expandProgress, (p) => `calc(28.12vw + ((100vw - 28.12vw) * ${p}))`);
  const centerH = useTransform(expandProgress, (p) => `calc(34.06vw + ((100vh - 34.06vw) * ${p}))`);

  // 2. Side Images slide outwards and fade away
  const sideXLeft = useTransform(scrollYProgress, [holdStart, 0.6], ["0vw", "-15vw"]);
  const sideXRight = useTransform(scrollYProgress, [holdStart, 0.6], ["0vw", "15vw"]);
  const sideOpacity = useTransform(scrollYProgress, [holdStart, 0.5], [1, 0]);

  // 3. Title fades and scrolls up out of the way
  const titleY = useTransform(scrollYProgress, [holdStart, 0.6], ["0%", "-100%"]);
  const titleOpacity = useTransform(scrollYProgress, [holdStart, 0.45], [1, 0]);

  const MixedHeading = ({ firstLetter, restOfText, className, style }: { firstLetter: React.ReactNode, restOfText: React.ReactNode, className?: string, style?: React.CSSProperties }) => (
    <h2 className={`text-[#C7D2D9] ${className}`} style={style}>
      <span className="font-seasons uppercase leading-[1.1]">
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
    <>
      <Preloader isLoading={isPageLoading} />
      <div className="w-full bg-[#001321] text-[#C7D2D9] overflow-clip flex flex-col pb-32">
        <Navbar />

      {/* ═══════════════════════════════════════════════════
          SECTION 1 — INTRO 
      ═══════════════════════════════════════════════════ */}
      <div className="relative w-full aspect-video max-w-[1920px] mx-auto min-h-[800px] mt-[100px]" style={{ containerType: 'inline-size' }}>
        
        <img src={squid2Img} alt="Whole squid" className="absolute left-[4.06%] top-[7%] w-[10.52%] h-[22.59%] object-cover shadow-2xl" style={{ transform: 'translateZ(0)' }} />
        <img src={squidImg} alt="Squid close-up" className="absolute left-[58.54%] top-[7%] w-[38.33%] h-[81.57%] object-cover shadow-2xl" style={{ transform: 'translateZ(0)' }} />

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
      <div 
        ref={section2Ref}
        onMouseMove={handleMouseMove}
        className="relative w-full aspect-video max-w-[1920px] mx-auto min-h-[800px] overflow-hidden" 
        style={{ containerType: 'inline-size' }}
      >
        
        <MixedHeading 
          firstLetter="T" 
          restOfText={<>HE WAYS OUR <br /> PRODUCT TAKES SHAPE</>}
          className="absolute left-[3.125%] top-[6.74%] w-max whitespace-nowrap z-30 pointer-events-none"
          style={{ fontSize: 'clamp(1.8rem, 3.5cqw, 72px)' }} 
        />

        {/* Dynamic Text List */}
        <div 
          className="absolute left-[34.79%] top-[42.4%] w-[27.96%] flex flex-col gap-[2cqw] z-40"
          style={{ fontSize: 'clamp(1.2rem, 2.5cqw, 48px)' }}
        >
          {productShapes.map((shape) => (
            <div 
              key={shape.id}
              onMouseEnter={() => setHoveredShape(shape.id)}
              onMouseLeave={() => setHoveredShape(null)}
              className={`font-seasons capitalize cursor-default transition-colors duration-150 w-max ${
                hoveredShape === shape.id 
                  ? 'italic text-[#C7D2D9]' 
                  : 'text-[#A2ADB4]'
              }`}
            >
              {shape.label}
            </div>
          ))}
        </div>

        {/* The Trailing Cursor Image */}
        <AnimatePresence>
          {hoveredShape && (
            <motion.img 
              key="cursor-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              src={productShapes.find(s => s.id === hoveredShape)?.image} 
              alt="Shape Preview" 
              className="absolute top-0 left-0 w-[19.73%] h-[33.51%] object-cover shadow-2xl z-20 pointer-events-none" 
              style={{
                x: springX,
                y: springY,
                translateX: '0%',
                translateY: '-100%'
              }}
            />
          )}
        </AnimatePresence>

        {/* Decorative Star Image */}
        <img 
          src={starImg} 
          alt="Decorative star"
          className="absolute left-[88.43%] top-[79.44%] w-[8.43%] h-auto object-contain z-10 pointer-events-none" 
        />
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 3 & 4 COMBINED — CINEMATIC FULLSCREEN GALLERY
      ═══════════════════════════════════════════════════ */}
      <div ref={galleryRef} className="relative w-full h-[400vh] mt-16 md:mt-0 z-20">
          
          <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#001321]">

            {/* LAYER 0 — Animated Title */}
            <motion.div
              style={{ opacity: titleOpacity, y: titleY }}
              className="absolute left-[3.125vw] top-[10vh] z-30 pointer-events-none"
            >
              <MixedHeading
                firstLetter="I" restOfText={<>N ITS <br /> TRUE FORM</>}
                className="w-max whitespace-nowrap"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 72px)' }}
              />
            </motion.div>

            {/* LAYER 1 — Flex row with perfect Figma gap and center justification */}
            <div className="absolute inset-0 flex flex-row items-center justify-center gap-[2.08vw] px-[3.125vw] z-10 pointer-events-none">

              <motion.div style={{ x: sideXLeft, opacity: sideOpacity }} className="relative w-[10.1vw] aspect-[194/216] overflow-hidden shadow-xl shrink-0">
                <Skeleton className="absolute inset-0 z-0" />
                <img src={gal1} alt="Gallery 1" className="relative z-10 w-full h-full object-cover" loading="lazy" decoding="async" />
              </motion.div>

              <motion.div style={{ x: sideXLeft, opacity: sideOpacity }} className="relative w-[19.11vw] aspect-[367/430] overflow-hidden shadow-xl shrink-0">
                <Skeleton className="absolute inset-0 z-0" />
                <img src={gal2} alt="Gallery 2" className="relative z-10 w-full h-full object-cover" loading="lazy" decoding="async" />
              </motion.div>

              {/* INVISIBLE PLACEHOLDER — mathematically exact Figma dimensions */}
              <div className="relative w-[28.12vw] aspect-[540/654] invisible shrink-0" />

              <motion.div style={{ x: sideXRight, opacity: sideOpacity }} className="relative w-[19.11vw] aspect-[367/430] overflow-hidden shadow-xl shrink-0">
                <Skeleton className="absolute inset-0 z-0" />
                <img src={gal5} alt="Gallery 4" className="relative z-10 w-full h-full object-cover" loading="lazy" decoding="async" />
              </motion.div>

              <motion.div style={{ x: sideXRight, opacity: sideOpacity }} className="relative w-[10.1vw] aspect-[194/216] overflow-hidden shadow-xl shrink-0">
                <Skeleton className="absolute inset-0 z-0" />
                <img src={gal6} alt="Gallery 5" className="relative z-10 w-full h-full object-cover" loading="lazy" decoding="async" />
              </motion.div>

            </div>

            {/* LAYER 2 — Absolute Center Image */}
            <motion.div
              style={{ width: centerW, height: centerH, x: "-50%", y: "-50%", willChange: 'width, height' }}
              className="absolute z-20 overflow-hidden shadow-2xl top-1/2 left-1/2 bg-[#001321]"
            >
              <Skeleton className="absolute inset-0 z-0" />
              <img src={mainImg} alt="Main squid dish" className="absolute inset-0 w-full h-full object-cover" style={{ transform: 'translateZ(0)' }} loading="lazy" decoding="async" />
            </motion.div>

          </div>
        </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 5 — YOU MAY ALSO LIKE
      ═══════════════════════════════════════════════════ */}
      <div className="relative w-full aspect-video max-w-[1920px] mx-auto min-h-[600px] mt-24" style={{ containerType: 'inline-size' }}>
        
        <MixedHeading 
          firstLetter="Y" 
          restOfText={<>OU MAY ALSO <br /> LIKE TO VIEW</>}
          className="absolute right-[3.125%] top-[10.37%] w-max text-right whitespace-nowrap"
          style={{ fontSize: 'clamp(1.8rem, 3.5cqw, 72px)' }}
        />

        <div className="absolute left-[3.125%] top-[26.48%] w-[30.46%] flex flex-col gap-[2cqw]">
          <div className="relative w-full aspect-[585/430] overflow-hidden shadow-2xl">
            <Skeleton className="absolute inset-0 z-0" />
            <img 
              src={shrimpImg} 
              alt="Vannamei Shrimp" 
              className="relative z-10 w-full h-full object-cover" 
              loading="lazy"
              decoding="async"
              style={{ transform: 'translateZ(0)' }}
            />
          </div>
          
          <h3 className="font-seasons text-[#C7D2D9] capitalize leading-tight mt-[1cqw]" style={{ fontSize: 'clamp(1.2rem, 1.66cqw, 32px)' }}>
            Vannamei Shrimp
          </h3>
          
          <p className="font-poppins font-light text-[#A2ADB4] leading-[1.4]" style={{ fontSize: 'clamp(0.75rem, 1.04cqw, 20px)' }}>
            Sourced from authorised aquaculture farms, our shrimp is valued for its balanced texture, uniform size, and stability through processing and freezing.
          </p>
          
          <div className="mt-[0.5cqw]">
             <Link to="/shrimp">
               <div className="flex flex-row items-center gap-[6px] cursor-pointer group w-max">
                <span className="w-[6px] h-[6px] rounded-full bg-[#C7D2D9] shrink-0 group-hover:scale-150 transition-transform duration-300" />
                <span className="font-poppins text-[#C7D2D9] uppercase tracking-wider group-hover:opacity-70 transition-opacity duration-300" style={{ fontSize: 'clamp(0.7rem, 0.83cqw, 16px)' }}>
                  View Details
                </span>
              </div>
            </Link>
          </div>
        </div>

      </div>

      </div>
    </>
  );
};

export default SquidPage;