import { motion, AnimatePresence } from 'framer-motion';
// Replace with your actual animated GIF or SVG logo path
import brandLoaderGif from '../../assets/images/shared/sterling-loader.gif'; 

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader = ({ isLoading }: PreloaderProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="global-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#001321]"
        >
          {/* The Logo / GIF */}
          <motion.img 
            src={brandLoaderGif} 
            alt="Sterling Foods Loading" 
            className="w-32 h-auto md:w-48 object-contain"
            // Optional: Add a gentle pulse if it's a static image instead of a GIF
            // animate={{ opacity: [0.5, 1, 0.5] }}
            // transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;