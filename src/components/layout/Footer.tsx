import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import Skeleton from './Skeleton';

// Import the specific logo icon
import logoIcon from '../../assets/images/shared/Sterling icon 2.png';

const Footer = () => {
  // Simple fade-in animation for when the footer scrolls into view
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut' } 
    }
  };

  return (
    <footer className="relative w-full bg-[#C7D2D9] text-[#001321] overflow-hidden flex justify-center">
      
      {/* THE MASTER CONTAINER:
          Tightened padding (pt-10, px-10) pushes the logo up and to the left corner.
      */}
      <motion.div 
        className="w-full max-w-[1920px] flex flex-col relative z-10 pt-10 pb-8 px-6 md:pt-10 md:pb-10 md:px-10"
        style={{ containerType: 'inline-size' }}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        
        {/* --- Top Row: Logo & Navigation --- */}
        <div className="flex flex-col md:flex-row justify-between items-start w-full">
           
           {/* Logo - Pushed securely to top left */}
           <div className="mb-12 md:mb-0">
             <div className="relative h-16 md:h-20 lg:h-24 aspect-square overflow-hidden">
               <Skeleton className="absolute inset-0 z-0" />
               <img 
                 src={logoIcon} 
                 alt="Sterling Foods Icon" 
                 className="relative z-10 h-full w-auto object-contain" 
                 loading="lazy"
               />
             </div>
           </div>

           {/* Navigation Columns - Readable Text Sizes */}
           <div className="flex gap-12 md:gap-32 text-base md:text-lg font-inter">
              <div className="flex flex-col gap-4 md:gap-5">
                 <Link to="/" className="hover:opacity-60 transition-opacity">Home</Link>
                 <Link to="/our-story" className="hover:opacity-60 transition-opacity">Our story</Link>
                 <Link to="/sourcing" className="hover:opacity-60 transition-opacity">Sourcing</Link>
                 <Link to="/processing" className="hover:opacity-60 transition-opacity">Processing</Link>
                 <Link to="/products" className="hover:opacity-60 transition-opacity">Products</Link>
              </div>
              <div className="flex flex-col gap-4 md:gap-5">
                 <Link to="/global-presence" className="hover:opacity-60 transition-opacity">Global Presence</Link>
                 <Link to="/contact" className="hover:opacity-60 transition-opacity">Contact Us</Link>
              </div>
           </div>
        </div>

        {/* --- Reduced Dynamic Spacer --- */}
        {/* Shrank the spacer from 15vw down to a clean 100px/128px to reduce footer height */}
        <div className="h-20 md:h-32"></div>

        {/* --- Middle Row: Legal Links --- */}
        {/* Perfectly Distributed: Removed nested groups. justify-between now spaces all 4 elements equally! */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm md:text-base lg:text-lg font-inter gap-4 md:gap-0 mb-8 md:mb-10">
           <Link to="/terms" className="hover:opacity-60 transition-opacity">Terms of Service</Link>
           <Link to="/acceptable-use" className="hover:opacity-60 transition-opacity">Acceptable Use Policy</Link>
           <span className="text-center">Pika © 2026. All rights reserved.</span>
           <Link to="/privacy" className="hover:opacity-60 transition-opacity">Privacy Policy</Link>
        </div>

        {/* --- Bottom Section: Giant Typography Lockup --- */}
        <div className="w-full flex flex-col items-center select-none pointer-events-none">
           
           {/* Top Layer: Sliced Light Blue Text */}
           {/* Height adjusted mathematically to match new scale */}
           <div className="relative w-full h-[8vw] md:h-[4cqw] overflow-hidden flex justify-center mb-3 md:mb-[1cqw]">
              <span 
                 className="absolute top-[2vw] md:top-[0.8cqw] font-seasons uppercase text-[#7392A9] whitespace-nowrap tracking-tight" 
                 // Scaled up to 13.5cqw to stretch edge-to-edge
                 style={{ fontSize: 'clamp(4rem, 13.5cqw, 260px)', lineHeight: '0.6' }}
              >
                 STERLING FOODS
              </span>
           </div>

           {/* Bottom Layer: Full Dark Blue Text */}
           <div 
              className="w-full flex justify-center font-seasons uppercase text-[#001321] whitespace-nowrap tracking-tight" 
              style={{ fontSize: 'clamp(4rem, 13.5cqw, 260px)', lineHeight: '0.6' }}
           >
              STERLING FOODS
           </div>

        </div>

      </motion.div>
    </footer>
  );
};

export default Footer;