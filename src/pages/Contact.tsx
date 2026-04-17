import { motion, type Variants } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Preloader from '../components/layout/Preloader';
import { useAssetLoader } from '../hooks/useAssetLoader';

// --- Asset Imports ---
import starfishImg from '../assets/images/contact/image.png';

const ContactPage = () => {
  const isPageLoading = useAssetLoader([starfishImg]);

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

  // Reusable minimal form input component
  const FormInput = ({ placeholder, type = "text", className = "" }: { placeholder: string, type?: string, className?: string }) => (
    <div className={`w-full border-b border-[#A2ADB4] pb-2 ${className}`}>
      <input 
        type={type} 
        placeholder={placeholder}
        className="w-full bg-transparent font-poppins font-light text-[#A2ADB4] text-lg md:text-xl outline-none placeholder:text-[#A2ADB4]/60 focus:text-[#C7D2D9] transition-colors"
      />
    </div>
  );

  return (
    <>
      <Preloader isLoading={isPageLoading} />
      <div className="w-full bg-[#001321] text-[#C7D2D9] overflow-clip flex flex-col min-h-screen">
        <Navbar />

      {/* ═══════════════════════════════════════════════════
          CONTACT FORM SECTION (Mapped to 1920x1080)
      ═══════════════════════════════════════════════════ */}
      <div className="relative w-full aspect-video max-w-[1920px] mx-auto min-h-[800px] mt-24 md:mt-0 flex-grow" style={{ containerType: 'inline-size' }}>
        
        {/* Left Column: Massive Heading */}
        <motion.div 
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="absolute left-[3.125%] top-[60.8%]" // Mapped to top: 744px
        >
          <h1 className="font-seasons uppercase leading-[0.85] text-[#C7D2D9]" style={{ fontSize: 'clamp(3rem, 9cqw, 173px)' }}>
            <span style={{ 
              fontFamily: "'Corinthia', cursive", 
              fontSize: '1.3em', 
              textTransform: 'none', 
              display: 'inline-block', 
              transform: 'translateY(-0.05em)', 
              marginRight: '8px' 
            }}>
              W
            </span>
            RITE<br/>TO US
          </h1>
        </motion.div>

        {/* Center-Left: Subtitle & Image */}
        <motion.div 
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="absolute left-[19%] top-[14.9%] w-[15.3%]" // Mapped to left: calc(50% - ...), top: 161px
        >
          <p 
            className="font-poppins font-light italic uppercase text-[#A2ADB4] leading-[1.3] mb-8"
            style={{ fontSize: 'clamp(1rem, 1.66cqw, 32px)' }}
          >
            SHARE A FEW<br/>DETAILS TO HELP US<br/>RESPOND
          </p>
        </motion.div>

        <motion.img 
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }}
          src={starfishImg} 
          alt="Starfish in water" 
          className="absolute left-[34.79%] top-[26.57%] w-[16.3%] aspect-square object-cover shadow-2xl" // Mapped to left: 668px, top: 287px
        />

        {/* Right Column: The Form */}
        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          className="absolute left-[57.29%] top-[24.8%] w-[39.8%]" // Mapped to left: 1100px, top: 268px
        >
          <form className="flex flex-col gap-8 w-full">
            
            <motion.div variants={fadeUp}>
              <FormInput placeholder="Full Name" />
            </motion.div>
            
            <motion.div variants={fadeUp}>
              <FormInput placeholder="Email Address" type="email" />
            </motion.div>
            
            {/* Phone Number Row (Custom Layout) */}
            <motion.div variants={fadeUp} className="w-full flex items-center border-b border-[#A2ADB4] pb-2">
              <div className="flex items-center gap-2 pr-4 border-r border-[#A2ADB4]/40 cursor-pointer group">
                <span className="font-poppins font-light text-[#A2ADB4] text-lg md:text-xl group-hover:text-[#C7D2D9] transition-colors">+91</span>
                {/* Simple dropdown arrow */}
                <svg className="w-4 h-4 text-[#A2ADB4] group-hover:text-[#C7D2D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
              <input 
                type="tel" 
                placeholder=""
                className="w-full bg-transparent pl-4 font-poppins font-light text-[#A2ADB4] text-lg md:text-xl outline-none placeholder:text-[#A2ADB4]/60 focus:text-[#C7D2D9] transition-colors"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <FormInput placeholder="Company" />
            </motion.div>
            
            <motion.div variants={fadeUp}>
              <FormInput placeholder="Purpose of enquiry" />
            </motion.div>
            
            <motion.div variants={fadeUp} className="w-full border-b border-[#A2ADB4] pb-8 pt-4">
              <textarea 
                placeholder="Your message"
                rows={3}
                className="w-full bg-transparent font-poppins font-light text-[#A2ADB4] text-lg md:text-xl outline-none placeholder:text-[#A2ADB4]/60 focus:text-[#C7D2D9] transition-colors resize-none"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={fadeUp} className="mt-4">
              <button 
                type="button" 
                className="flex items-center gap-[6px] group cursor-pointer w-max bg-transparent border-none p-0"
              >
                <span className="w-[6px] h-[6px] rounded-full bg-[#C7D2D9] shrink-0 group-hover:scale-150 transition-transform duration-300" />
                <span className="font-poppins text-[#C7D2D9] uppercase tracking-wider group-hover:opacity-70 transition-opacity duration-300" style={{ fontSize: 'clamp(0.7rem, 0.83cqw, 16px)' }}>
                  SEND MESSAGE
                </span>
              </button>
            </motion.div>

          </form>
        </motion.div>

      </div>
      </div>
    </>
  );
};

export default ContactPage;