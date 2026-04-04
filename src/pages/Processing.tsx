import { motion, type Variants } from 'framer-motion';
import Navbar from '../components/layout/Navbar';

// --- Asset Imports ---
import heroImg from '../assets/images/processing/hero.png';
import squidImg from '../assets/images/processing/squid.png';

const ProcessingPage = () => {

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

  // List data for Step 1
  const inspectionSteps = [
    { text: "Received under controlled temperature conditions", num: "01" },
    { text: "Checked for freshness, colour, odour, and structural integrity", num: "02" },
    { text: "Segregated by species, size, and grade", num: "03" },
    { text: "Logged for full batch traceability", num: "04" }
  ];

  return (
    <div className="w-full bg-[#001321] text-[#C7D2D9] overflow-clip flex flex-col pb-32">
      <Navbar />

      {/* ═══════════════════════════════════════════════════
          SECTION 1 — HERO (Mapped to 1920x1080)
      ═══════════════════════════════════════════════════ */}
      <div className="relative w-full h-[60vh] min-h-[600px] flex flex-col items-center justify-center mb-16 md:mb-0">
        
        {/* Full Bleed Image Container */}
        <div className="absolute inset-0 w-full h-[53.24%] top-0">
          <motion.img
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
            src={heroImg}
            alt="Chef plating seafood"
            className="w-full h-full object-cover shadow-2xl"
          />
          {/* Gradient overlay matching Figma CSS: linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)) */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>

        {/* Constrained Text Wrapper */}
        <div className="relative w-full h-full max-w-[1920px] mx-auto z-10" style={{ containerType: 'inline-size' }}>
          
          <motion.h1 
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }}
            className="absolute left-[16.6%] top-[61.2%] w-[66.7%] text-center font-seasons uppercase leading-[1.1]" 
            style={{ fontSize: 'clamp(2.5rem, 5cqw, 96px)' }}
          >
            CRAFTED WITH INTENTION.<br/>REFINED THROUGH TIME.
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }}
            className="absolute left-[21.9%] top-[92%] w-[56.1%] text-center font-poppins font-light text-[#C7D2D9] leading-[1.2]"
            style={{ fontSize: 'clamp(0.8rem, 1.25cqw, 24px)' }}
          >
            At Sterling Foods, processing is controlled from the moment raw material enters the processing hall until finished product is transferred to monitored cold storage
          </motion.p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 2 — RAW MATERIAL RECEIVING (Mapped to 1920x1080)
      ═══════════════════════════════════════════════════ */}
      <div className="relative w-full aspect-video max-w-[1920px] mx-auto min-h-[800px]" style={{ containerType: 'inline-size' }}>
        
        {/* Right Image (Rectangle 34624773) */}
        <motion.img 
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          src={squidImg} 
          alt="Raw Squid" 
          className="absolute left-[52.55%] top-[8.33%] w-[42.96%] h-[83.7%] object-cover shadow-2xl" 
        />

        {/* Step Label */}
        <motion.div 
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="absolute left-[4.48%] top-[8.33%] font-poppins font-light text-[#A2ADB4] tracking-widest uppercase"
          style={{ fontSize: 'clamp(0.7rem, 1.04cqw, 20px)' }}
        >
          STEP 1/8
        </motion.div>

        {/* Section Heading */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="absolute left-[4.48%] top-[12.4%] w-[41.6%]">
          <MixedHeading 
            firstLetter="R" 
            restOfText={<>AW MATERIAL RECEIVING <br/> & INSPECTION</>}
            style={{ fontSize: 'clamp(1.3rem, 3.6cqw, 80px)' }}
          />
        </motion.div>

        {/* List Subheading */}
        <motion.div 
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          className="absolute left-[4.48%] top-[64.26%] font-seasons text-[#A2ADB4]"
          style={{ fontSize: 'clamp(1.2rem, 1.66cqw, 32px)' }}
        >
          All incoming raw material is
        </motion.div>

        {/* List Container */}
        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          className="absolute left-[4.48%] top-[69.07%] w-[42.96%] flex flex-col"
        >
          {inspectionSteps.map((step, index) => (
            <motion.div 
              key={index}
              variants={fadeUp}
              className="flex justify-between items-center border-b border-[#A2ADB4]/30 py-[1cqw]"
            >
              <span className="font-poppins font-light text-[#A2ADB4] w-[90%]" style={{ fontSize: 'clamp(0.75rem, 1.04cqw, 20px)' }}>
                {step.text}
              </span>
              <span className="font-poppins font-light text-[#A2ADB4]" style={{ fontSize: 'clamp(0.75rem, 1.04cqw, 20px)' }}>
                {step.num}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer Footer */}
        <motion.div 
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }}
          className="absolute left-[4.48%] top-[100.44%] font-poppins font-light text-[#A2ADB4]"
          style={{ fontSize: 'clamp(0.6rem, 0.83cqw, 16px)' }}
        >
          *Non-compliant material does not enter production
        </motion.div>

      </div>

    </div>
  );
};

export default ProcessingPage;