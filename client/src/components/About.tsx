import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendar,
  FaGraduationCap,
} from "react-icons/fa";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaPython,
  FaAws,
  FaDocker,
} from "react-icons/fa";
import {
  Code,
  Server,
  Paintbrush,
  Smartphone,
  CloudCog,
  Star,
  StarHalf,
} from "lucide-react";

// Updated skills with icons and proficiency level
const Skills = [
  {
    name: "Data Wrangling & Exploratory Analysis",
    level: "Expert",
    icon: <Code className="w-6 h-6 text-white" />,
    stars: 5,
    color: "bg-blue-500",
  },
  {
    name: "Generative AI & Prompt Engineering",
    level: "Expert",
    icon: <Server className="w-6 h-6 text-white" />,
    stars: 5,
    color: "bg-purple-500",
  },
  {
    name: "Data Engineering & Architecture",
    level: "Advanced",
    icon: <Paintbrush className="w-6 h-6 text-white" />,
    stars: 4,
    color: "bg-pink-500",
  },
  {
    name: "Machine Learning & Predictive Modeling",
    level: "Intermediate",
    icon: <Smartphone className="w-6 h-6 text-white" />,
    stars: 3,
    color: "bg-amber-500",
  },
  {
    name: "MLOps",
    level: "Intermediate",
    icon: <CloudCog className="w-6 h-6 text-white" />,
    stars: 3,
    color: "bg-emerald-500",
  },
];

const TechStack = {
  "Programming Languages": [
    { name: "Python", icon: <FaPython />, bg: "bg-blue-500/20 text-blue-400" },
    { name: "JavaScript", icon: <FaJs />, bg: "bg-blue-500/20 text-blue-400" },
    { name: "TypeScript", icon: <FaJs />, bg: "bg-blue-500/20 text-blue-400" },
    { name: "SQL", icon: <FaJs />, bg: "bg-blue-500/20 text-blue-400" },
  ],
  "AI/ML": [
    {
      name: "Numpy",
      icon: <FaPython />,
      bg: "bg-orange-600/20 text-orange-400",
    },
    {
      name: "Pandas",
      icon: <FaPython />,
      bg: "bg-orange-600/20 text-orange-400",
    },
    {
      name: "Matplotlib",
      icon: <FaPython />,
      bg: "bg-orange-600/20 text-orange-400",
    },
    {
      name: "PyTorch",
      icon: <FaPython />,
      bg: "bg-orange-600/20 text-orange-400",
    },
    {
      name: "TensorFlow",
      icon: <FaPython />,
      bg: "bg-orange-600/20 text-orange-400",
    },
    {
      name: "Scikit-learn",
      icon: <FaPython />,
      bg: "bg-orange-600/20 text-orange-400",
    },
  ],
  "LLM Tools": [
    {
      name: "LangChain",
      icon: <FaReact />,
      bg: "bg-green-600/20 text-green-400",
    },
    {
      name: "Hugging Face",
      icon: <FaNodeJs />,
      bg: "bg-green-600/20 text-green-400",
    },
    { name: "LangGraph", icon: <FaJs />, bg: "bg-green-600/20 text-green-400" },
  ],
  "Deployment Tools": [
    {
      name: "Docker",
      icon: <FaDocker />,
      bg: "bg-purple-700/20 text-purple-400",
    },
    { name: "AWS", icon: <FaAws />, bg: "bg-purple-700/20 text-purple-400" },
    {
      name: "Kubernetes",
      icon: <FaDocker />,
      bg: "bg-purple-700/20 text-purple-400",
    },
  ],
  "Data Infrastructure": [
    {
      name: "Pinecone VectorDB",
      icon: <FaAws />,
      bg: "bg-pink-600/20 text-pink-400",
    },
    {
      name: "Weaviate VectorDB",
      icon: <FaAws />,
      bg: "bg-pink-600/20 text-pink-400",
    },
    {
      name: "QDrant VectorDB",
      icon: <FaAws />,
      bg: "bg-pink-600/20 text-pink-400",
    },
    {
      name: "Neo4j GraphDB",
      icon: <FaDocker />,
      bg: "bg-pink-600/20 text-pink-400",
    },
  ],
};

// Component for star rating
const StarRating = ({ stars }: { stars: number }) => {
  const fullStars = Math.floor(stars);
  const hasHalfStar = stars % 1 !== 0;

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-4 h-4 fill-primary text-primary" />
      ))}
      {hasHalfStar && (
        <StarHalf className="w-4 h-4 fill-primary text-primary" />
      )}
      {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-500" />
      ))}
    </div>
  );
};

const About = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const isSkillsInView = useInView(skillsRef, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      className="section bg-[#1a1a1a] py-16 sm:py-20 md:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 font-poppins">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient mb-6 sm:mb-8"></div>
            <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
              I'm an AI and Data Science enthusiast with hands-on experience
              across GenAI platforms, aviation, and food-tech. I've built
              intelligent search systems, recommender engines, and AI
              agents—driving real-world impact at United Airlines and
              high-growth startups through scalable and context-aware AI
              solutions.
            </p>
            <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8">
              I blend deep technical skills with a product-driven mindset,
              focusing on building AI systems that are robust, personalized, and
              user-centric. From prompt engineering to agent design, my work
              aims to deliver solutions that are both intelligent and impactful.
            </p>

            {/* Skills Section */}
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 font-poppins">
              My <span className="text-primary">Skills</span>
            </h3>
            <div
              ref={skillsRef}
              className="grid grid-cols-1 gap-3 sm:gap-4 w-full mb-8"
            >
              {" "}
              {Skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isSkillsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-[#252525] rounded-lg p-3 sm:p-4 shadow-lg border-l-4 hover:shadow-xl transition-shadow border-${skill.color.replace("bg-", "")}`}
                >
                  <div className="flex items-start mb-2">
                    <div className={`p-2 rounded-md ${skill.color} mr-3`}>
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm sm:text-base">
                        {skill.name}
                      </h4>
                      <span className="text-xs text-gray-400">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <StarRating stars={skill.stars} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="hidden lg:block lg:w-1/2 mt-10 lg:mt-0"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 font-poppins">
              Technology <span className="text-primary">Stack</span>
            </h3>
            <div className="grid grid-cols-1 gap-4 mb-6">
              {Object.entries(TechStack).map(([category, tools]) => (
                <div
                  key={category}
                  className="bg-[#252525] rounded-lg p-4 hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-base font-semibold mb-3 text-primary border-b border-gray-700 pb-2">
                    {category}
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {tools.map((tech, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center"
                      >
                        <motion.span
                          className={`w-full px-3 py-1.5 ${tech.bg} rounded text-sm transition-colors cursor-default flex items-center gap-2 justify-center`}
                        >
                          <span className="text-lg">{tech.icon}</span>
                          {tech.name}
                        </motion.span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isSkillsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 sm:mt-8"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
