import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Header = () => {
  const profileRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 500], [1, 0.6]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.2]);
  const translateY = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <header
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="bg-black opacity-90 absolute inset-0"></div>
      </div>

      {/* Mobile Profile Image - Right aligned on mobile, hidden on larger screens */}
      <div className="absolute -right-14 top-0 bottom-0 sm:hidden z-[1] w-full">
        <div className="h-full w-full relative">
          <img
            src="/src/assets/images/profile.png"
            alt="Developer Profile"
            className="object-cover object-object-left h-full w-full opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/90 to-transparent"></div>
        </div>
      </div>

      {/* Desktop Profile image - Hidden on mobile, visible on larger screens */}
      <motion.div
        ref={profileRef}
        style={{
          scale,
          opacity,
          y: translateY,
        }}
        className="absolute right-0 top-10 bottom-0 hidden sm:flex md:right-0 lg:right-0 xl:right-0 h-screen items-center z-10"
      >
        <div className="relative w-auto h-full">
          <img
            src="/src/assets/images/profile.png"
            alt="Developer Profile"
            className="object-cover object-right h-full opacity-90"
          />
        </div>
      </motion.div>

      {/* Hero Content - Positioned at bottom left on mobile, left side on desktop */}
      <div className="container mx-auto relative z-20">
        <div className="sm:max-w-md md:max-w-lg lg:max-w-xl absolute sm:relative sm:left-0 bottom-10 sm:bottom-auto sm:top-auto left-4 sm:left-4 md:left-8 lg:left-16 w-1/2 sm:w-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-secondary font-medium mb-2 sm:mb-4 tracking-wider font-poppins"
          >
            Data Scientist
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 font-poppins"
          >
            Hi, I'm <span className="text-primary">Vansh</span> <br />
            <span className="text-xl sm:text-3xl md:text-4xl font-normal text-gray-200">
              Arora From India
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-b-4 border-primary w-24 sm:w-32 sm:hidden mt-2 mb-3"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-lg hidden sm:block"
          >
            Exploring the frontiers of Artificial Intelligence is my passion. I
            specialize in building intelligent systems and GenAI-powered
            solutions that not only push technological boundaries but also solve
            meaningful real-world problems.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-5 sm:px-8 py-2.5 sm:py-3 bg-gradient rounded-full font-medium hover:opacity-90 transition-opacity transform hover:scale-105 text-center text-sm sm:text-base"
            >
              Hire Me
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-white rounded-full font-medium hover:bg-white hover:text-[#0a0a0a] transition-colors transform hover:scale-105 text-center hidden sm:inline-block"
            >
              View Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-white opacity-70 hover:opacity-100 transition-opacity hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.div>
      </motion.a>
    </header>
  );
};

export default Header;
