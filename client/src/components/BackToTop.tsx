import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

interface BackToTopProps {
  visible: boolean;
}

const BackToTop = ({ visible }: BackToTopProps) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
