import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';

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
    // The background color closely matches the light grayish-blue in the design
    <footer className="relative w-full overflow-hidden bg-[#C7D2D9] text-[#001321] pt-16 md:pt-20 flex flex-col justify-between">
      
      <motion.div 
        className="mx-auto w-full max-w-[1920px] px-6 md:px-12 flex flex-col z-10"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        
        {/* --- Top Section: Logo & Navigation --- */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-24">
          
          {/* Top Left: Logo */}
          <div className="mb-12 md:mb-0">
            <img 
              src={logoIcon} 
              alt="Sterling Foods Icon" 
              className="h-20 w-auto object-contain" 
            />
          </div>

          {/* Top Right: Navigation Links Grid */}
          <div className="flex gap-12 md:gap-32 text-base font-inter tracking-normal">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <Link to="/" className="hover:opacity-60 transition-opacity">Home</Link>
              <Link to="/our-story" className="hover:opacity-60 transition-opacity">Our story</Link>
              <Link to="/sourcing" className="hover:opacity-60 transition-opacity">Sourcing</Link>
              <Link to="/processing" className="hover:opacity-60 transition-opacity">Processing</Link>
              <Link to="/products" className="hover:opacity-60 transition-opacity">Products</Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <Link to="/global-presence" className="hover:opacity-60 transition-opacity">Global Presence</Link>
              <Link to="/contact" className="hover:opacity-60 transition-opacity">Contact Us</Link>
            </div>
          </div>
        </div>

        {/* --- Middle Section: Legal Links --- */}
        <div className="flex flex-col md:flex-row justify-between items-center text-base font-inter tracking-normal w-full gap-4 md:gap-0">
          <Link to="/terms" className="hover:opacity-60 transition-opacity">Terms of Service</Link>
          <Link to="/acceptable-use" className="hover:opacity-60 transition-opacity">Acceptable Use Policy</Link>
          <span>Pika © 2026. All rights reserved.</span>
          <Link to="/privacy" className="hover:opacity-60 transition-opacity">Privacy Policy</Link>
        </div>

      </motion.div>

      {/* --- Bottom Section: Clipped & Stacked Typography --- */}
      {/* This is mapped exactly to the Figma coordinates:
        - Font Size: 223px / 1920px = 11.6vw
        - Clipped Box Height: 63px = 3.3vw
        - Gap between text: 23px = 1.2vw
      */}
      <div className="w-full flex flex-col items-center select-none pointer-events-none mt-16 md:mt-[6vw] pb-[2vw]">
        
        {/* Top Layer: Sliced Light Blue Text */}
        <div 
          className="relative w-full overflow-hidden flex justify-center" 
          style={{ height: '3.3vw', marginBottom: '1.2vw' }}
        >
          <span 
            className="absolute font-seasons uppercase text-[#7392A9] whitespace-nowrap"
            // top: 1vw matches the 19px push-down in Figma
            style={{ fontSize: '11.6vw', lineHeight: '0.58', top: '1vw' }}
          >
            STERLING FOODS
          </span>
        </div>
        
        {/* Bottom Layer: Full Dark Blue Text */}
        <div 
          className="font-seasons uppercase text-[#001321] whitespace-nowrap flex justify-center w-full"
          style={{ fontSize: '11.6vw', lineHeight: '0.58' }}
        >
          STERLING FOODS
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;