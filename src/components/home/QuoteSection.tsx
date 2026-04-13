import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import quoteBg from '../../assets/images/home/quotebg.png';
import Skeleton from '../layout/Skeleton';

// --- CLEANED UP WORD COMPONENT ---
const Word = ({ 
  children, 
  progress, 
  range 
}: { 
  children: string, 
  progress: MotionValue<number>, 
  range: [number, number] 
}) => {
  // Stays incredibly dim (0.05) until you scroll to it, then lights up!
  const opacity = useTransform(progress, range, [0.05, 1]);
  
  return (
    // Step 2 — willChange pre-promotes every word to its own GPU layer so the
    // browser doesn't re-composite the page on every scroll-driven opacity tick.
    <motion.span 
      style={{ opacity, willChange: 'opacity' }} 
      className="inline-block mr-[0.25em] mb-[0.1em]"
    >
      {children}
    </motion.span>
  );
};

const QuoteSection = () => {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Tracking begins the exact pixel the top of this section enters the bottom of your monitor!
    offset: ['start end', 'end end'],
  });

  const text = "OUR WORK IS GROUNDED IN DISCIPLINE AND SHAPED THROUGH LONG-TERM PRACTICE. WHAT WE DELIVER IS A REFLECTION OF THE STANDARDS WE CHOOSE EVERY DAY.";
  const words = text.split(" ");

  return (
    <section ref={containerRef} className="relative w-full h-[900vh] bg-[#001321]">
      
      {/* Sticky Inner Container */}
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        
        {/* Background Image & 25px Blur */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full overflow-hidden blur-[25px]">
            <Skeleton className="absolute inset-0 z-0" />
            {/* Step 2 — willChange + translateZ(0) offloads the blurred BG to GPU.
                 Step 4 — decoding=async stops the main thread freezing on decode. */}
            <img 
              src={quoteBg} 
              alt="Abstract Background" 
              loading="eager" 
              fetchPriority="high"
              decoding="async"
              style={{ 
                willChange: 'filter, transform',
                transform: 'translateZ(0)'
              }}
              className="h-[120%] w-[120%] -left-[0%] -top-[10%] absolute object-cover opacity-60 z-10"
            />
          </div>
          <div className="absolute inset-0 bg-[#001321]/40 mix-blend-multiply"></div>
        </div>

        {/* 16:9 Scalable Canvas */}
        <div 
          className="relative z-10 w-full aspect-video max-h-screen max-w-[1920px] mx-auto flex items-center justify-center px-6 md:px-[12vw]"
          style={{ containerType: 'inline-size' }}
        >
          <h2 
            className="font-seasons uppercase text-center text-[#C7D2D9]"
            style={{ 
              fontSize: 'clamp(2rem, 4.37cqw, 84px)', 
              lineHeight: '1.12',
              letterSpacing: '-0.02em' 
            }}
          >
            {words.map((word, i) => {
              
              // --- THE NEW VIEWPORT MATH ---
              // It takes 33% of the scroll for the section to slide up from the bottom 
              // and hit the top of the screen. So we start at 35% to ensure it is locked!
              const startProgress = 0.65; 
              
              // Finishes at 85%, leaving a comfortable 15% buffer at the end to read.
              const endProgress = 0.95; 

              const step = (endProgress - startProgress) / words.length;
              const start = startProgress + (i * step);
              const end = start + step;

              return (
                <Word 
                  key={i} 
                  progress={scrollYProgress} 
                  range={[start, end]}
                >
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

export default QuoteSection;