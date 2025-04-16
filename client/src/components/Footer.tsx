import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="mb-4 sm:mb-6">
          <a href="#" className="text-2xl sm:text-3xl font-bold font-poppins">
            <span className="text-white">Vanshin</span>
            <span className="text-primary">.tech</span>
          </a>
        </div>
        <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 max-w-md mx-auto">
          Turning data into intelligence with Gen AI. Let’s build the future of
          smart solutions together.
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-0 sm:space-x-4 md:space-x-8 mb-6 sm:mb-8">
          <a
            href="#home"
            className="text-gray-400 text-sm sm:text-base hover:text-primary transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-400 text-sm sm:text-base hover:text-primary transition-colors"
          >
            About
          </a>
          {/* <a
            href="#services"
            className="text-gray-400 text-sm sm:text-base hover:text-primary transition-colors"
          >
            Services
          </a> */}
          <a
            href="#portfolio"
            className="text-gray-400 text-sm sm:text-base hover:text-primary transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="text-gray-400 text-sm sm:text-base hover:text-primary transition-colors"
          >
            Contact
          </a>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-4 sm:pt-6"
        >
          <p className="text-gray-400 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} All Rights Reserved. Design by{" "}
            <a href="#" className="text-primary hover:underline">
              Vansh Arora
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
