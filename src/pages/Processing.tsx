import { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, type Variants } from 'framer-motion';
import Navbar from '../components/layout/Navbar';

// --- Asset Imports ---
import heroImg from '../assets/images/processing/hero.png';
import squidImg from '../assets/images/processing/squid.png';
// Add your other images here:
// import prepImg from '../assets/images/processing/prep.png';
// import gradingImg from '../assets/images/processing/grading.png';

// --- Carousel Data Mapping ---
const processingSteps = [
  {
    stepNum: 'STEP 1/7',
    titleFirst: 'R',
    titleRest: <>AW MATERIAL RECEIVING <br/> & INSPECTION</>,
    groups: [
      {
        heading: 'All incoming raw material is:',
        items: [
          'Received under controlled temperature conditions',
          'Checked for freshness, colour, odour, and structural integrity',
          'Segregated by species, size, and grade',
          'Logged for full batch traceability'
        ]
      }
    ],
    footer: '*Non-compliant material does not enter production.',
    image: squidImg // Replace with actual step 1 image
  },
  {
    stepNum: 'STEP 2/7',
    titleFirst: 'P',
    titleRest: <>RIMARY PROCESSING <br/> & PREPARATION</>,
    groups: [
      {
        heading: 'Product moves through structured washing, cleaning, and preparation sequences designed to:',
        items: [
          'Preserve natural freshness',
          'Protect mantle integrity (squid)',
          'Maintain colour and firmness (shrimp)',
          'Minimise handling stress'
        ]
      }
    ],
    footer: '*Time between intake and freezing is tightly controlled.',
    image: heroImg // Replace with actual step 2 image
  },
  {
    stepNum: 'STEP 3/7',
    titleFirst: 'G',
    titleRest: <>RADING & SPECIFICATION <br/> CONTROL</>,
    groups: [
      {
        heading: 'Each batch is graded and verified based on:',
        items: [
          'Count accuracy (shrimp)',
          'Size and mantle integrity (squid)',
          'A-grade / B-grade segregation (whole squid markets)',
          'Cut uniformity (rings and tentacles)'
        ]
      }
    ],
    footer: '*Specifications are confirmed before freezing.',
    image: squidImg // Replace with actual step 3 image
  },
  {
    stepNum: 'STEP 4/7',
    titleFirst: 'R',
    titleRest: <>APID FREEZING <br/> SYSTEMS</>,
    groups: [
      {
        heading: 'Freezing systems are engineered for rapid core temperature reduction to:',
        items: [
          'Lock structural firmness',
          'Preserve natural colour',
          'Reduce drip loss',
          'Maintain texture stability',
          'Protect net weight integrity'
        ]
      }
    ],
    footer: '*Freezing parameters are monitored and documented.',
    image: heroImg // Replace with actual step 4 image
  },
  {
    stepNum: 'STEP 5/7',
    titleFirst: 'G',
    titleRest: <>LAZING & FINAL <br/> INSPECTION</>,
    groups: [
      {
        heading: 'Glaze application is controlled to ensure:',
        items: [
          'Surface moisture protection',
          'Uniform coverage',
          'Accurate declared net weight'
        ]
      },
      {
        heading: 'All finished product undergoes:',
        items: [
          'Metal detection',
          'Visual quality verification',
          'Weight confirmation',
          'Batch documentation review'
        ]
      }
    ],
    footer: null,
    image: squidImg // Replace with actual step 5 image
  },
  {
    stepNum: 'STEP 6/7',
    titleFirst: 'I',
    titleRest: <>N-HOUSE LABORATORY <br/> & COMPLIANCE CONTROLS</>,
    groups: [
      {
        heading: 'Quality assurance includes:',
        items: [
          'Antibiotic screening protocols',
          'Microbiological testing',
          'Residue and contaminant monitoring',
          'Organoleptic evaluation',
          'Routine batch-level verification'
        ]
      }
    ],
    footer: '*Laboratory systems operate in alignment with export market requirements across Asia, the United States, and Europe.',
    image: heroImg // Replace with actual step 6 image
  },
  {
    stepNum: 'STEP 7/7',
    titleFirst: 'C',
    titleRest: <>OLD STORAGE & <br/> DISPATCH INTEGRITY</>,
    groups: [
      {
        heading: 'Finished goods are transferred to:',
        items: [
          'Temperature-monitored cold storage',
          'Segregated pallet zones',
          'FIFO-controlled dispatch systems'
        ]
      }
    ],
    footer: '*Cold chain integrity is maintained until loading.',
    image: squidImg // Replace with actual step 7 image
  }
];

const ProcessingPage = () => {
  // --- Scroll Tracking State ---
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = Math.min(
      Math.floor(latest * processingSteps.length), 
      processingSteps.length - 1
    );
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  });

  // Reusable component for Corinthia/Seasons headings (with baseline fix)
  const MixedHeading = ({ firstLetter, restOfText, className, style }: { firstLetter: React.ReactNode, restOfText: React.ReactNode, className?: string, style?: React.CSSProperties }) => (
    <h2 className={`text-[#C7D2D9] ${className}`} style={style}>
      <span className="font-seasons uppercase leading-[0.95] block">
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
  const fadeUpHero: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } }
  };

  const fadeInHero: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5, ease: 'easeOut' } }
  };

  // --- Slowed Down Carousel Animations ---
  const customEase = [0.22, 1, 0.36, 1];

  // Text flows UPWARDS (fades in from bottom, fades out to top)
  const textVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 1.5, ease: customEase } },
    exit: { opacity: 0, y: -50, transition: { duration: 1.2, ease: customEase } }
  };

  // Image flows DOWNWARDS (fades in from top, fades out to bottom)
  const imageVariants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0, transition: { duration: 1.5, ease: customEase } },
    exit: { opacity: 0, y: 50, transition: { duration: 1.2, ease: customEase } }
  };

  const activeStep = processingSteps[activeIndex];

  return (
    <div className="w-full bg-[#001321] text-[#C7D2D9] overflow-clip flex flex-col pb-0">
      <Navbar />

      {/* ═══════════════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════════════ */}
      <div className="relative w-full h-[60vh] min-h-[600px] flex flex-col items-center justify-center">
        
        <div className="absolute inset-0 w-full h-[53.24%] top-0">
          <motion.img
            variants={fadeInHero} initial="hidden" whileInView="visible" viewport={{ once: true }}
            src={heroImg}
            alt="Chef plating seafood"
            className="w-full h-full object-cover shadow-2xl"
          />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>

        <div className="relative w-full h-full max-w-[1920px] mx-auto z-10" style={{ containerType: 'inline-size' }}>
          <motion.h1 
            variants={fadeUpHero} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }}
            className="absolute left-[16.6%] top-[61.2%] w-[66.7%] text-center font-seasons uppercase leading-[1.1]" 
            style={{ fontSize: 'clamp(2.5rem, 5cqw, 96px)' }}
          >
            CRAFTED WITH INTENTION.<br/>REFINED THROUGH TIME.
          </motion.h1>

          <motion.p
            variants={fadeUpHero} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }}
            className="absolute left-[21.9%] top-[92%] w-[56.1%] text-center font-poppins font-light text-[#C7D2D9] leading-[1.2]"
            style={{ fontSize: 'clamp(0.8rem, 1.25cqw, 24px)' }}
          >
            At Sterling Foods, processing is controlled from the moment raw material enters the processing hall until finished product is transferred to monitored cold storage
          </motion.p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 2 — INTERACTIVE SCROLL CAROUSEL
      ═══════════════════════════════════════════════════ */}
      {/* THE FIX: Increased height from 100vh per step to 150vh per step. 
          This increases the "scroll runway", naturally slowing down how fast the user shifts between steps. */}
      <div 
        ref={containerRef} 
        className="relative w-full" 
        style={{ height: `${processingSteps.length * 120}vh` }}
      >
        {/* Sticky container locks the view to the screen while scrolling */}
        <div className="sticky top-0 w-full h-screen max-w-[1920px] mx-auto overflow-hidden bg-[#001321] flex items-center" style={{ containerType: 'inline-size' }}>
          
          <AnimatePresence mode="popLayout">
            
            {/* === LEFT SIDE: TEXT BLOCK (Animates UPWARDS) === */}
            <motion.div 
              key={`text-${activeIndex}`}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute left-[4.48%] w-[42%] flex flex-col justify-center gap-[2cqw]"
            >
              {/* Step Label */}
              <div className="font-poppins font-light text-[#A2ADB4] tracking-widest uppercase" style={{ fontSize: 'clamp(0.7rem, 1.04cqw, 20px)' }}>
                {activeStep.stepNum}
              </div>

              {/* Title */}
              <MixedHeading 
                firstLetter={activeStep.titleFirst} 
                restOfText={activeStep.titleRest}
                style={{ fontSize: 'clamp(1.3rem, 3.6cqw, 80px)' }}
              />

              {/* Dynamic List Groups */}
              <div className="flex flex-col gap-[3cqw] mt-[2cqw]">
                {activeStep.groups.map((group, groupIdx) => (
                  <div key={groupIdx} className="flex flex-col">
                    <div className="font-seasons text-[#A2ADB4] mb-[1cqw]" style={{ fontSize: 'clamp(1.2rem, 1.66cqw, 32px)' }}>
                      {group.heading}
                    </div>
                    
                    <div className="flex flex-col">
                      {group.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex justify-between items-center border-b border-[#A2ADB4]/30 py-[1cqw]">
                          <span className="font-poppins font-light text-[#A2ADB4] w-[90%]" style={{ fontSize: 'clamp(0.75rem, 1.04cqw, 20px)' }}>
                            {item}
                          </span>
                          <span className="font-poppins font-light text-[#A2ADB4]" style={{ fontSize: 'clamp(0.75rem, 1.04cqw, 20px)' }}>
                            {(itemIdx + 1).toString().padStart(2, '0')}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Optional Footer Disclaimer */}
              {activeStep.footer && (
                <div className="font-poppins font-light text-[#A2ADB4] mt-[1cqw]" style={{ fontSize: 'clamp(0.6rem, 0.83cqw, 16px)' }}>
                  {activeStep.footer}
                </div>
              )}
            </motion.div>

            {/* === RIGHT SIDE: IMAGE BLOCK (Animates DOWNWARDS) === */}
            <motion.div 
              key={`image-${activeIndex}`}
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute left-[52.55%] w-[42.96%] h-[83.7%] flex items-center justify-center overflow-hidden shadow-2xl"
            >
              <img 
                src={activeStep.image} 
                alt={activeStep.titleFirst} 
                className="w-full h-full object-cover" 
              />
            </motion.div>

          </AnimatePresence>

        </div>
      </div>

    </div>
  );
};

export default ProcessingPage;