import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';

// --- Asset Imports ---
import heroImg from '../assets/images/sourcing/hero.png';
import phil1 from '../assets/images/sourcing/philosophy1.png';
import phil2 from '../assets/images/sourcing/philosophy2.png';
import squid1 from '../assets/images/sourcing/squid1.png';
import squid2 from '../assets/images/sourcing/squid2.png';
import shrimp1 from '../assets/images/sourcing/shrimp1.png';
import shrimp2 from '../assets/images/sourcing/shrimp2.png';
import sourcesImg from '../assets/images/sourcing/sources.png';

// Industry Standards - Top Row
import haccp from '../assets/images/standards/haccp.png';
import ssop from '../assets/images/standards/ssop.png';
import gmp from '../assets/images/standards/gmp.png';
import india from '../assets/images/standards/india.png';
import eu from '../assets/images/standards/eu.png';

// Industry Standards - Bottom Row
import aeo from '../assets/images/standards/aeo.png';
import fssai from '../assets/images/standards/fssai.png';
import brc from '../assets/images/standards/brc.png';
import fda from '../assets/images/standards/fda.png';

const topRowLogos = [haccp, ssop, gmp, india, eu];
const bottomRowLogos = [aeo, fssai, brc, fda];

const SourcingPage = () => {

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

  const MixedHeadingDark = ({ firstLetter, restOfText, className, style }: { firstLetter: React.ReactNode, restOfText: React.ReactNode, className?: string, style?: React.CSSProperties }) => (
    <h2 className={`text-[#001321] ${className}`} style={style}>
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

  const logoContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const logoPop: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <div className="w-full bg-[#001321] text-[#C7D2D9] overflow-clip flex flex-col min-h-screen">
      <Navbar />

      {/* ═══════════════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════════════ */}
      <div className="relative w-full h-[60vh] min-h-[600px] flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-[53.24%] top-0">
          <motion.img variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} src={heroImg} alt="Ocean" className="w-full h-full object-cover shadow-2xl" />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>

        <div className="relative w-full h-full max-w-[1920px] mx-auto z-10" style={{ containerType: 'inline-size' }}>
          <motion.h1 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="absolute left-[20.7%] top-[61.2%] w-[58.6%] text-center font-seasons uppercase leading-[1.1] whitespace-nowrap" style={{ fontSize: 'clamp(2.5rem, 5cqw, 96px)' }}>
            CONSISTENCY BEGINS <br/> BEFORE PROCESSING
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="absolute left-[31%] top-[90.3%] w-[38%] text-center font-poppins font-light text-[#A2ADB4] leading-[1.2]" style={{ fontSize: 'clamp(0.8rem, 1.25cqw, 24px)' }}>
            Where every choice is intentional, and consistency begins long before production
          </motion.p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 2 — A PHILOSOPHY BUILT ON SELECTIVITY
      ═══════════════════════════════════════════════════ */}
      <div className="relative w-full aspect-video max-w-[1920px] mx-auto min-h-[800px]" style={{ containerType: 'inline-size' }}>
        
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="absolute left-[4.48%] top-[17.2%] w-max z-30">
          <MixedHeading firstLetter="A" restOfText={<>PHILOSOPHY BUILT <br/> ON SELECTIVITY</>} style={{ fontSize: 'clamp(2.5rem, 5cqw, 96px)' }} />
        </motion.div>

        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }} className="absolute left-[4.48%] top-[35.9%] w-[35%] font-poppins font-light text-[#A2ADB4] leading-[1.4]" style={{ fontSize: 'clamp(0.85rem, 1.04cqw, 20px)' }}>
          Reliable export quality starts at source. Sterling Foods sources from licensed, regulated fisheries and authorised aquaculture systems operating under defined compliance frameworks.
        </motion.p>

        {/* Small Image Left */}
        <motion.img variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} src={phil2} alt="Processing" className="absolute left-[3.125%] top-[58.3%] w-[14.58%] h-[34.5%] object-cover shadow-xl z-20" />
        
        {/* Large Image Right */}
        <motion.img variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} src={phil1} alt="Fishing Net" className="absolute left-[66.45%] top-[11.6%] w-[30.4%] h-[66.3%] object-cover shadow-2xl z-10" />

        {/* Rotating Circular Text Ring overlay on right image */}
        <div className="absolute left-[58%] top-[65%] w-[16%] aspect-square z-30 animate-[spin_12s_linear_infinite]">
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl">
            <path id="textPath" d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" fill="none" />
            <text fill="#C7D2D9" className="font-poppins text-[14px] uppercase tracking-[0.2em]">
              <textPath href="#textPath" startOffset="0%">
                STERLING FOODS • STERLING FOODS • STERLING FOODS •
              </textPath>
            </text>
          </svg>
        </div>

      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 3 — WHERE OUR SEAFOOD COMES FROM
      ═══════════════════════════════════════════════════ */}
      <div className="w-full flex flex-col">
        
        {/* PART A: SQUID SUBSECTION (Mapped to Frame 2095587701) */}
        <div className="relative w-full aspect-video max-w-[1920px] mx-auto min-h-[800px]" style={{ containerType: 'inline-size' }}>
          
          {/* Main Title */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="absolute left-[10.9%] top-[9.2%] w-max z-30">
            <MixedHeading firstLetter="W" restOfText={<>HERE OUR SEAFOOD <br/> COMES FROM</>} style={{ fontSize: 'clamp(2.5rem, 5cqw, 96px)' }} />
          </motion.div>

          {/* Left Text Block */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="absolute left-[10.9%] top-[30.3%] font-seasons text-[#C7D2D9]" style={{ fontSize: 'clamp(1.5rem, 1.66cqw, 32px)' }}>
            Sea-Catch Squid
          </motion.div>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="absolute left-[10.9%] top-[37.2%] w-[29.2%] font-poppins font-light text-[#A2ADB4] leading-[1.4]" style={{ fontSize: 'clamp(0.85rem, 1.04cqw, 20px)' }}>
            Squid raw material is procured from licensed and regulated fisheries operating in compliance with: US MMPA, EU IUU regulations and EIC / MPEDA standards
          </motion.p>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="absolute left-[10.9%] top-[47.2%] w-[28.4%] font-poppins font-light text-[#A2ADB4] leading-[1.4]" style={{ fontSize: 'clamp(0.85rem, 1.04cqw, 20px)' }}>
            Sourcing is structured around: Species consistency (Loligo for premium programs), landing-condition freshness, size grading at source and controlled transport to processing
          </motion.p>

          {/* Staggered Images */}
          <motion.img variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} src={squid2} alt="Squids on blue" className="absolute left-[42.5%] top-[45.5%] w-[22.5%] h-[46.7%] object-cover shadow-2xl z-20" />
          <motion.img variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} src={squid1} alt="Holding Squid" className="absolute left-[66.25%] top-[23.3%] w-[22.5%] h-[46.7%] object-cover shadow-lg z-10" />

          {/* Right Text Block (Under Image 2) */}
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="absolute left-[66.4%] top-[74%] w-[26.9%] font-poppins font-light text-[#A2ADB4] leading-[1.4]" style={{ fontSize: 'clamp(0.85rem, 1.04cqw, 20px)' }}>
            Supply relationships are built over long-standing operational alignment, ensuring continuity, regulatory compliance, and stable raw material flow.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="absolute left-[66.4%] top-[86.6%]">
            <Link to="/squid"><DotLink label="View Details" /></Link>
          </motion.div>
        </div>

        {/* PART B: SHRIMP SUBSECTION (Mapped to Frame 2095587705) */}
        <div className="relative w-full aspect-video max-w-[1920px] mx-auto min-h-[800px]" style={{ containerType: 'inline-size' }}>
          
          {/* Staggered Images */}
          <motion.img variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} src={shrimp2} alt="Hands holding shrimp" className="absolute left-[11.25%] top-[15.5%] w-[22.5%] h-[46.7%] object-cover shadow-2xl z-20" />
          <motion.img variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} src={shrimp1} alt="Shrimp on plate" className="absolute left-[35%] top-[37.7%] w-[22.5%] h-[46.7%] object-cover shadow-lg z-10" />

          {/* Left Text Block (Under Image 1) */}
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="absolute left-[11.25%] top-[65.9%] w-[22.3%] font-poppins font-light text-[#A2ADB4] leading-[1.4]" style={{ fontSize: 'clamp(0.85rem, 1.04cqw, 20px)' }}>
            Only compliant harvest lots are cleared for processing.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="absolute left-[11.25%] top-[74%]">
            <Link to="/shrimp"><DotLink label="View Details" /></Link>
          </motion.div>

          {/* Right Text Block */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="absolute left-[59.8%] top-[22.5%] font-seasons text-[#C7D2D9]" style={{ fontSize: 'clamp(1.5rem, 1.66cqw, 32px)' }}>
            Vannamei Shrimp
          </motion.div>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="absolute left-[59.8%] top-[29%] w-[27.6%] font-poppins font-light text-[#A2ADB4] leading-[1.4]" style={{ fontSize: 'clamp(0.85rem, 1.04cqw, 20px)' }}>
            Raw shrimp is sourced from authorised farms operating under regulated oversight and export compliance protocols.
          </motion.p>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="absolute left-[59.8%] top-[39.4%] w-[29.2%] font-poppins font-light text-[#A2ADB4] leading-[1.4]" style={{ fontSize: 'clamp(0.85rem, 1.04cqw, 20px)' }}>
            Long-term farm alignment enables: Predictable harvest cycles, Documented pond management systems, Antibiotic and residue screening prior to intake, Stable year-round supply
          </motion.p>
        </div>

      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 4 — HOW WE CHOOSE OUR SOURCES (Light BG)
      ═══════════════════════════════════════════════════ */}
      <div className="relative w-full bg-[#C7D2D9] pt-24 pb-32 overflow-hidden flex flex-col items-center">
        
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="w-full mb-[20%] text-right pr-[8%] relative z-30">
          <MixedHeadingDark firstLetter="H" restOfText={<>OW WE CHOOSE <br/> OUR SOURCES</>} style={{ fontSize: 'clamp(2.5rem, 5vw, 96px)' }} />
        </motion.div>

       {/* Center Suspended Image */}
        <motion.div 
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="absolute left-[50%] top-[15%] -translate-x-1/2 w-[14.5%] aspect-square border-4 border-[#001321] p-1.5 bg-[#C7D2D9] z-20 shadow-2xl"
        >
          <img src={sourcesImg} alt="Sources Shrimp" className="w-full h-full object-cover" />
        </motion.div>

        {/* The 4 Alternating Rows */}
        <div className="w-full flex flex-col items-center gap-[24px]">
          
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-[97.5%] bg-[#BBC5CC] py-[5%] px-[4%] flex justify-between items-center">
            <h3 className="font-seasons text-[#001321]" style={{ fontSize: 'clamp(1.5rem, 1.66vw, 32px)' }}>Proven compliance history</h3>
            <p className="font-poppins font-light text-[#001321] w-[35%]" style={{ fontSize: 'clamp(1rem, 1.25vw, 24px)' }}>
              Raw shrimp is sourced from authorised farms operating under regulated oversight and export compliance protocols.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-[97.5%] bg-[#BBC5CC] py-[5%] px-[4%] flex justify-between items-center">
            <h3 className="font-seasons font-bold text-[#001321]" style={{ fontSize: 'clamp(1.5rem, 1.66vw, 32px)' }}>Full traceability</h3>
            <p className="font-poppins font-light text-[#001321] w-[35%]" style={{ fontSize: 'clamp(1rem, 1.25vw, 24px)' }}>
              Every batch can be traced back to its origin, ensuring clarity in both process and accountability.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-[97.5%] bg-[#BBC5CC] py-[5%] px-[4%] flex justify-between items-center">
            <h3 className="font-seasons font-bold text-[#001321]" style={{ fontSize: 'clamp(1.5rem, 1.66vw, 32px)' }}>Stability of supply</h3>
            <p className="font-poppins font-light text-[#001321] w-[35%]" style={{ fontSize: 'clamp(1rem, 1.25vw, 24px)' }}>
              We prioritise sources that deliver consistent quality, season after season, without fluctuation.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-[97.5%] bg-[#BBC5CC] py-[5%] px-[4%] flex justify-between items-center">
            <h3 className="font-seasons font-bold text-[#001321]" style={{ fontSize: 'clamp(1.5rem, 1.66vw, 32px)' }}>Ability to follow our systems</h3>
            <p className="font-poppins font-light text-[#001321] w-[35%]" style={{ fontSize: 'clamp(1rem, 1.25vw, 24px)' }}>
              Partners must demonstrate disciplined operational practices aligned with our internal standards.
            </p>
          </motion.div>

        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 5 — GOVERNANCE & COMPLIANCE (Dark BG)
      ═══════════════════════════════════════════════════ */}
      <div className="relative w-full bg-[#001321] flex flex-col items-center pt-32 pb-48 z-10">
        
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className="w-full mb-16 flex flex-col items-center text-center">
          <MixedHeading firstLetter="G" restOfText={<>OVERNANCE & <br/> COMPLIANCE</>} style={{ fontSize: 'clamp(2.5rem, 5vw, 96px)' }} />
          
          <p className="font-poppins font-light text-[#A2ADB4] max-w-[841px] mt-6 px-6" style={{ fontSize: 'clamp(0.85rem, 1.04vw, 20px)', lineHeight: '1.4' }}>
            All sourcing programs operate in alignment with export requirements across Asia, the United States, and Europe. Batch-level traceability is maintained from source through processing and final shipment documentation.
          </p>
        </motion.div>

        {/* Global Icons Block */}
        <motion.div 
          className="flex flex-col items-center gap-8 w-full max-w-[1200px]"
          variants={logoContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
        >
          {/* Top Row */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-20">
            {topRowLogos.map((logo, index) => (
              <motion.img key={`top-${index}`} variants={logoPop} src={logo} alt="Certification standard" className="h-10 md:h-14 lg:h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" />
            ))}
          </div>

          {/* Bottom Row */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-20 mt-4 md:mt-8">
            {bottomRowLogos.map((logo, index) => (
              <motion.img key={`bottom-${index}`} variants={logoPop} src={logo} alt="Certification standard" className="h-8 md:h-12 lg:h-14 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" />
            ))}
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default SourcingPage;