import { motion, type Variants } from 'framer-motion';

// --- Asset Imports ---
import heroImg from '../assets/images/our-story/hero.png';
import legacy2 from '../assets/images/our-story/legacy2.png';
import legacy1 from '../assets/images/our-story/legacy1.png';
import story2 from '../assets/images/our-story/story2.png';
import story1 from '../assets/images/our-story/story1.png';
// New bubbles import based on your specific path
import bubblesImg from '../assets/bubbles.png'; 

const OurStorySection = () => {
  
  // --- Animation Timelines ---
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

  // Custom variants to preserve rotation during the fade-up animation!
  const fadeUpRotateRight: Variants = {
    hidden: { opacity: 0, y: 30, rotate: -7.38 },
    visible: { opacity: 1, y: 0, rotate: -7.38, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const fadeUpRotateLeft: Variants = {
    hidden: { opacity: 0, y: 30, rotate: 13.7 },
    visible: { opacity: 1, y: 0, rotate: 13.7, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <section className="w-full bg-[#001321] text-[#C7D2D9] overflow-hidden flex flex-col">
      
      {/* --- 1. HERO & INTRO --- */}
      {/* Removed max-w-[1920px] so this stretches infinitely on 2k+ displays */}
      <div 
        className="relative w-full aspect-video min-h-[600px] md:min-h-0" 
        style={{ containerType: 'inline-size' }}
      >
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

      {/* --- 2. MEASURED DECISIONS --- */}
      <div 
        className="relative w-full aspect-[1.219] max-w-[1920px] mx-auto min-h-[800px] md:min-h-0 mb-16" 
        style={{ containerType: 'inline-size' }}
      >
      {/* Multiline Header with Corinthia 'A' */}
        <motion.h2 
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} 
          className="absolute top-[2%] w-full text-center z-30 text-[#C7D2D9]" 
          // 1. Scaled down the font size math (was 2.5rem, 5cqw, 96px)
          style={{ fontSize: 'clamp(2rem, 4cqw, 80px)' }}
        >
          {/* 2. Tightened the line height (was leading-[1.1], now leading-[0.95]) */}
          <span className="font-seasons uppercase leading-[0.45]">
            <span style={{ fontFamily: "'Corinthia', cursive", fontSize: '1.5em', textTransform: 'none', display: 'inline-block', transform: 'translateY(0em)', marginRight: '10px' }}>A</span> 
            LEGACY BUILT ON<br />
            MEASURED DECISIONS
          </span>
        </motion.h2>

        {/* Bubbles Image */}
        <motion.img 
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          src={bubblesImg} alt="Decorative bubbles" 
          className="absolute left-[71.13%] top-[5.42%] w-[6.16%] h-auto z-10" 
        />

        {/* Center Main Image (z-20 so it sits UNDER the blue box) */}
        <motion.img 
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} 
          src={legacy1} alt="Fishing techniques" 
          className="absolute left-[33.8%] top-[13.96%] w-[31.4%] h-[46.85%] object-cover shadow-2xl z-20" 
        />

        {/* Left Floating Image */}
        <motion.img 
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} 
          src={legacy2} alt="Processing lines" 
          className="absolute left-[21.3%] top-[31.68%] w-[14.68%] h-[19.74%] object-cover shadow-2xl z-30" 
        />

        {/* --- THE BLUE BOX (z-30) & TEXT (z-40) --- */}
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
        {/* -------------------------------------- */}

        {/* Bottom Headline */}
        <motion.h3 
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} 
          className="absolute left-[17.34%] top-[63.36%] w-[65.36%] text-center font-seasons leading-[1.31] z-20" 
          style={{ fontSize: 'clamp(1.2rem, 1.66cqw, 32px)' }}
        >
          From the beginning, the objective was clear: build a processing operation capable of delivering consistent export quality under demanding international standards
        </motion.h3>

        {/* Bottom Text Columns */}
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

      {/* --- 3. TIMELINE 1970 --- */}
      <div 
        className="relative w-full aspect-video max-w-[1920px] mx-auto min-h-[600px] md:min-h-0" 
        style={{ containerType: 'inline-size' }}
      >
        {/* Header with Corinthia 'A' */}
        <motion.h2 
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} 
          className="absolute top-[5.55%] w-full text-center z-30 text-[#A2ADB4]" 
          style={{ fontSize: 'clamp(2.5rem, 5cqw, 96px)' }}
        >
          <span className="font-seasons uppercase leading-[1.1]">
            <span style={{ fontFamily: "'Corinthia', cursive", fontSize: '1.5em', textTransform: 'none', display: 'inline-block', transform: 'translateY(0.15em)', marginRight: '10px' }}>A</span> 
            LEGACY BUILT IN PHASES
          </span>
        </motion.h2>

        <motion.div 
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} 
          className="absolute top-[17.5%] w-full text-center font-seasons font-light leading-none pointer-events-none select-none z-0" 
          style={{ fontSize: 'clamp(6rem, 28.1cqw, 540px)' }}
        >
          1970
        </motion.div>

        {/* Right Rotated Image (Using custom rotation variant) */}
        <motion.div 
          variants={fadeUpRotateRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          className="absolute left-[69.47%] top-[17.31%] w-[23.07%] h-[25.46%] shadow-2xl overflow-hidden z-10" 
        >
          <img src={story1} alt="Historical fleet" className="w-full h-full object-cover scale-110" />
        </motion.div>

        {/* Left Rotated Image (Using custom rotation variant) */}
        <motion.div 
          variants={fadeUpRotateLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          className="absolute left-[12.7%] top-[42.59%] w-[17.58%] h-[18.9%] shadow-2xl overflow-hidden z-10" 
        >
          <img src={story2} alt="Early processing" className="w-full h-full object-cover scale-110" />
        </motion.div>

        {/* Pushed up to Top-[77%] so it sits perfectly above the timeline track! */}
        <motion.div 
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} 
          className="absolute top-[77%] w-full text-center font-inter font-light text-[#A2ADB4] tracking-[-0.03em] z-10" 
          style={{ fontSize: 'clamp(0.8rem, 1.25cqw, 24px)' }}
        >
          Founded in Mangalore, India
        </motion.div>

        {/* Interactive Timeline Slider Track */}
        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }} 
          className="absolute top-[84.62%] w-full h-[15%] z-20"
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#A2ADB4]/40"></div>
          <motion.div variants={fadeIn} className="absolute top-0 left-0 w-[15.2%] h-[2px] bg-[#C7D2D9]"></motion.div>

          <div 
            className="absolute top-[3cqw] left-[3.125%] w-[93.75%] flex justify-between items-center font-seasons uppercase" 
            style={{ fontSize: 'clamp(1rem, 3.33cqw, 64px)' }}
          >
            <motion.span variants={fadeUp} className="text-[#C7D2D9]">1970</motion.span>
            <motion.span variants={fadeUp} className="text-[#A2ADB4]/60">1990</motion.span>
            <motion.span variants={fadeUp} className="text-[#A2ADB4]/60">1995</motion.span>
            <motion.span variants={fadeUp} className="text-[#A2ADB4]/60">1996</motion.span>
            <motion.span variants={fadeUp} className="text-[#A2ADB4]/60">1997</motion.span>
            <motion.span variants={fadeUp} className="text-[#A2ADB4]/60">1998</motion.span>
            <motion.span variants={fadeUp} className="text-[#A2ADB4]/60">1999</motion.span>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default OurStorySection;