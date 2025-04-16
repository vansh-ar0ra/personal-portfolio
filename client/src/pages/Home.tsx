import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { useScrollSpy } from "@/utils/scrollSpy";

const Home = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const activeSection = useScrollSpy({
    sectionIds: ["home", "about", "services", "portfolio", "contact"],
    offset: 100
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden">
      <Navigation activeSection={activeSection} />
      <Header />
      <About />
      {/* <Services /> */}
      <Portfolio />
      <Contact />
      <Footer />
      <BackToTop visible={showBackToTop} />
    </div>
  );
};

export default Home;
