import { motion } from "framer-motion";
import { Code, Smartphone, PaintbrushVertical, Database, Server, Search } from "lucide-react";

const services = [
  {
    icon: <Code className="text-2xl text-white" />,
    title: "Web Development",
    description: "Creating custom, responsive websites and web applications that deliver exceptional user experiences across all devices."
  },
  {
    icon: <Smartphone className="text-2xl text-white" />,
    title: "Mobile Development",
    description: "Building native and cross-platform mobile applications that provide seamless experiences on iOS and Android devices."
  },
  {
    icon: <PaintbrushVertical className="text-2xl text-white" />,
    title: "UI/UX Design",
    description: "Designing intuitive user interfaces and experiences that engage users and help achieve business goals."
  },
  {
    icon: <Database className="text-2xl text-white" />,
    title: "Backend Development",
    description: "Building robust, scalable server-side applications and APIs that power your digital products."
  },
  {
    icon: <Server className="text-2xl text-white" />,
    title: "DevOps",
    description: "Setting up CI/CD pipelines, containerization, and cloud infrastructure to streamline development and deployment."
  },
  {
    icon: <Search className="text-2xl text-white" />,
    title: "SEO Optimization",
    description: "Improving your website's visibility on search engines to attract more organic traffic and potential customers."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const Services = () => {
  return (
    <section id="services" className="section bg-[#0a0a0a] py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 font-poppins">My <span className="text-primary">Services</span></h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient mx-auto mb-6 sm:mb-8"></div>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
            I offer a wide range of development and design services to help businesses succeed in the digital world.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 25px rgba(0, 136, 255, 0.2)"
              }}
              className="bg-[#333333] rounded-xl p-6 sm:p-8 hover:bg-gradient-to-br hover:from-[#333333] hover:to-[#0a0a0a] transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient flex items-center justify-center mb-4 sm:mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-poppins">{service.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base mb-4">
                {service.description}
              </p>
              <a href="#contact" className="text-primary text-sm sm:text-base font-medium inline-flex items-center hover:underline">
                Learn More <span className="ml-2">→</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
