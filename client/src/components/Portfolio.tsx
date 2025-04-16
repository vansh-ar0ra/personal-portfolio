import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, Github, Dribbble } from "lucide-react";

// Project categories
const categories = ["All", "Web", "Mobile", "UI/UX"];

// Mock projects data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured online store with inventory management and payment processing.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29kaW5nLHdlYnxlfHx8fHwxNjg1MDQzMjg4&ixlib=rb-4.0.3&q=80",
    category: "Web",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Fitness Tracker App",
    description:
      "A cross-platform mobile app for tracking workouts and fitness progress.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8bW9iaWxlLGFwcHx8fHx8fDE2ODUwNDMyODg&ixlib=rb-4.0.3&q=80",
    category: "Mobile",
    tags: ["React Native", "Firebase", "Redux"],
  },
  {
    id: 3,
    title: "Banking Dashboard",
    description:
      "A modern UI/UX design for a personal banking dashboard application.",
    image:
      "https://images.unsplash.com/photo-1541462608143-67571c6738dd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzaWduLHVpeHx8fHx8fDE2ODUwNDMyODg&ixlib=rb-4.0.3&q=80",
    category: "UI/UX",
    tags: ["Figma", "UI/UX", "Prototyping"],
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description:
      "A responsive admin dashboard with data visualization and user management.",
    image:
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGFzaGJvYXJkLHdlYmFwcHx8fHx8fDE2ODUwNDMyODg&ixlib=rb-4.0.3&q=80",
    category: "Web",
    tags: ["Vue.js", "D3.js", "Laravel"],
  },
  {
    id: 5,
    title: "SaaS Platform",
    description:
      "A subscription-based software service for project management and team collaboration.",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8ZWNvbW1lcmNlLHdlYnx8fHx8fDE2ODUwNDMyODg&ixlib=rb-4.0.3&q=80",
    category: "Web",
    tags: ["Angular", "Django", "PostgreSQL"],
  },
  {
    id: 6,
    title: "Food Delivery App",
    description:
      "A mobile application for on-demand food delivery with real-time tracking.",
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8YXBwLGlvc3x8fHx8fDE2ODUwNDMyODg&ixlib=rb-4.0.3&q=80",
    category: "Mobile",
    tags: ["Flutter", "Firebase", "Google Maps"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter,
  );

  return (
    <section
      id="portfolio"
      className="section bg-[#1a1a1a] py-16 sm:py-20 md:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 font-poppins">
            My <span className="text-primary">Portfolio</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient mx-auto mb-6 sm:mb-8"></div>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
            Here are some of my recent projects. Each one represents a unique
            challenge and solution.
          </p>
        </motion.div>

        {/* Portfolio Filter */}
        <div className="flex flex-wrap justify-center mb-8 sm:mb-12 gap-2 sm:gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full bg-[#333333] text-white hover:bg-primary transition-colors ${
                activeFilter === category ? "bg-primary" : ""
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px rgba(255, 0, 102, 0.2)",
              }}
              className="group overflow-hidden rounded-xl bg-[#333333] transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end">
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 font-poppins">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
                      {project.description}
                    </p>
                    <div className="flex space-x-2 sm:space-x-3">
                      <a
                        href="#"
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center hover:bg-white hover:text-primary transition-colors"
                      >
                        <Link className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center hover:bg-white hover:text-primary transition-colors"
                      >
                        {project.category === "UI/UX" ? (
                          <Dribbble className="h-4 w-4 sm:h-5 sm:w-5" />
                        ) : (
                          <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                        )}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex justify-between mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold font-poppins group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex space-x-1">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-3 py-1 bg-[#0a0a0a] rounded-full text-xs text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10 sm:mt-12">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient rounded-full font-medium inline-block hover:opacity-90 transition-all text-sm sm:text-base"
          >
            Let's Work Together
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
