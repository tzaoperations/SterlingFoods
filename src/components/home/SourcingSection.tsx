import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Skeleton from '../layout/Skeleton';

import sourcing1 from '../../assets/images/home/sourcing1.png'; 
import sourcing2 from '../../assets/images/home/sourcing2.png'; 
import sourcing3 from '../../assets/images/home/sourcing3.png'; 
import sourcing4 from '../../assets/images/home/sourcing4.png'; 
import bgRipple from '../../assets/images/home/HeroBG.png'; 

const SourcingSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Track scroll strictly against the 400vh container
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // --- THE STRICT SCROLL TIMELINE ---

  // STAGE 0: The Buffer (0.00 to 0.05) - Nothing happens.

  // STAGE 1: Top Heading Fades In (0.05 to 0.15)
  const titleOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.05, 0.15], [30, 0]);

  // STAGE 2: Headlines Fly In & Bottom Text Sweeps Up (0.15 to 0.30)
  const sourcingX = useTransform(scrollYProgress, [0.15, 0.30], ['-100vw', '0vw']);
  const disciplineX = useTransform(scrollYProgress, [0.15, 0.30], ['100vw', '0vw']);
  
  const bodyTextOpacity = useTransform(scrollYProgress, [0.15, 0.45], [0, 1]);
  const bodyTextY = useTransform(scrollYProgress, [0.15, 0.45], ['50vh', '0vh']);

  // STAGE 3: The Grand Sweep (Images rise from 120vh to -120vh)
  const img1Y = useTransform(scrollYProgress, [0.35, 0.65, 0.90], ['120vh', '0vh', '-120vh']);
  const img2Y = useTransform(scrollYProgress, [0.40, 0.70, 0.95], ['120vh', '0vh', '-120vh']);
  const img3Y = useTransform(scrollYProgress, [0.45, 0.75, 1.00], ['120vh', '0vh', '-120vh']);
  const img4Y = useTransform(scrollYProgress, [0.50, 0.80, 1.00], ['120vh', '0vh', '-120vh']);

  // STAGE 4: HIGH-INTENSITY Inner Parallax 
  // Doubled from 15% to 30% for a much more noticeable internal sweep!
  const img1InnerY = useTransform(scrollYProgress, [0.35, 0.90], ['-30%', '30%']);
  const img2InnerY = useTransform(scrollYProgress, [0.40, 0.95], ['-30%', '30%']);
  const img3InnerY = useTransform(scrollYProgress, [0.45, 1.00], ['-30%', '30%']);
  const img4InnerY = useTransform(scrollYProgress, [0.50, 1.00], ['-30%', '30%']);

  return (
    <div ref={sectionRef} className="relative w-full h-[400vh] bg-[#C7D2D9] text-[#001321] z-10">
      
      <div className="sticky top-0 w-full h-screen flex justify-center items-center overflow-hidden">
        
        <div 
          className="absolute inset-0 z-0 opacity-[0.03] bg-cover bg-center mix-blend-multiply"
          style={{ backgroundImage: `url(${bgRipple})` }}
        ></div>

        <div 
          className="relative w-full aspect-video max-h-screen max-w-[1920px] mx-auto"
          style={{ containerType: 'inline-size' }}
        >
          
          {/* STAGE 1 */}
          <motion.div 
            className="absolute top-[9.2%] w-full flex justify-center z-30"
            style={{ opacity: titleOpacity, y: titleY }}
          >
            <h2 
              className="font-seasons font-light text-center flex items-center uppercase tracking-normal"
              style={{ fontSize: 'clamp(1.5rem, 5cqw, 96px)' }}
            >
              <span className="leading-none pr-1 md:pr-2" style={{ fontFamily: "'Corinthia', cursive", fontSize: '1.4em', transform: 'translateY(0.1em)' }}>O</span>
              UR APPROACH TO PREPARATION
            </h2>
          </motion.div>

          {/* STAGE 2 */}
          <motion.h2
            className="absolute top-[34.7%] left-[10.6%] font-seasons uppercase tracking-normal z-30 leading-none whitespace-nowrap"
            style={{ x: sourcingX, fontSize: 'clamp(2.5rem, 6.66cqw, 128px)' }}
          >
            SOURCING WITH
          </motion.h2>

          <motion.h2
            className="absolute top-[47.5%] left-[58.1%] font-seasons uppercase tracking-normal z-30 leading-none whitespace-nowrap"
            style={{ x: disciplineX, fontSize: 'clamp(2.5rem, 6.66cqw, 128px)' }}
          >
            DISCIPLINE
          </motion.h2>

          <motion.div
            className="absolute top-[81.3%] w-full flex justify-center z-30"
            style={{ y: bodyTextY, opacity: bodyTextOpacity }}
          >
            <p 
              className="font-poppins font-normal text-center uppercase max-w-[37.8cqw] leading-[1.4]"
              style={{ fontSize: 'clamp(0.7rem, 1.04cqw, 20px)' }}
            >
              WE SOURCE ONLY FROM REGULATED FISHERIES AND AUTHORISED FARMS, 
              RETAINED THROUGH LONG-TERM RELATIONSHIPS BUILT ON COMPLIANCE 
              AND RELIABILITY
            </p>
          </motion.div>


          {/* STAGE 3 & 4 */}
          
          <motion.div
            className="absolute z-20 left-[3.3%] w-[14.5%] h-[33.4%] overflow-hidden shadow-2xl"
            style={{ top: '7.6%', y: img1Y }}
          >
            <motion.div
              className="absolute w-full h-[180%] top-[-40%]"
              style={{ y: img1InnerY }}
            >
              <div className="relative w-full h-full overflow-hidden">
                <Skeleton className="absolute inset-0 z-0" />
                <img src={sourcing1} alt="Fish farm" className="relative z-10 w-full h-full object-cover" loading="lazy" />
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="absolute z-20 left-[58.1%] w-[15%] h-[28.5%] overflow-hidden shadow-2xl"
            style={{ top: '26.8%', y: img2Y }}
          >
            <motion.div
              className="absolute w-full h-[180%] top-[-40%]"
              style={{ y: img2InnerY }}
            >
              <div className="relative w-full h-full overflow-hidden">
                <Skeleton className="absolute inset-0 z-0" />
                <img src={sourcing2} alt="Pouring water" className="relative z-10 w-full h-full object-cover" loading="lazy" />
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="absolute z-20 left-[26.8%] w-[14.5%] h-[31.7%] overflow-hidden shadow-2xl"
            style={{ top: '74.1%', y: img3Y }}
          >
            <motion.div
              className="absolute w-full h-[180%] top-[-40%]"
              style={{ y: img3InnerY }}
            >
              <div className="relative w-full h-full overflow-hidden">
                <Skeleton className="absolute inset-0 z-0" />
                <img src={sourcing3} alt="Raw shrimp" className="relative z-10 w-full h-full object-cover" loading="lazy" />
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="absolute z-20 left-[74.3%] w-[14.5%] h-[31.7%] overflow-hidden shadow-2xl"
            style={{ top: '89.1%', y: img4Y }}
          >
            <motion.div
              className="absolute w-full h-[180%] top-[-40%]"
              style={{ y: img4InnerY }}
            >
              <div className="relative w-full h-full overflow-hidden">
                <Skeleton className="absolute inset-0 z-0" />
                <img src={sourcing4} alt="Fish net" className="relative z-10 w-full h-full object-cover" loading="lazy" />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default SourcingSection;