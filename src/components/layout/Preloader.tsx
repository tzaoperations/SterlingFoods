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
          // CHANGED: Background is now locked strictly to the brand's #001321
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#001321]"
        >
          <motion.img 
            src={brandLoaderGif} 
            alt="Sterling Foods Loading" 
            className="w-[70%] h-[70%] object-contain"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;