import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { MapPin, Mail, Phone, Github, Linkedin, Twitter, Dribbble } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();
  const { toast } = useToast();

  const onSubmit = (data: FormValues) => {
    // In a real application, you would send the form data to your backend
    console.log(data);
    
    // Show success toast
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
    reset();
  };

  return (
    <section id="contact" className="section bg-[#0a0a0a] py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 font-poppins">Contact <span className="text-primary">Me</span></h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient mx-auto mb-6 sm:mb-8"></div>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 font-poppins">Get In <span className="text-primary">Touch</span></h3>
            <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8">
              Feel free to reach out if you have any questions or want to discuss potential projects. I'm always open to new opportunities and collaborations.
            </p>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#333333] flex items-center justify-center mr-3 sm:mr-4">
                  <MapPin className="text-primary h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-medium mb-1">Location</h4>
                  <p className="text-gray-300 text-sm sm:text-base">New Delhi, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#333333] flex items-center justify-center mr-3 sm:mr-4">
                  <Mail className="text-primary h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-medium mb-1">Email</h4>
                  <p className="text-gray-300 text-sm sm:text-base">v.aroravansh@gmail.com</p>
                </div>
              </div>
              
              {/* <div className="flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#333333] flex items-center justify-center mr-3 sm:mr-4">
                  <Phone className="text-primary h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-medium mb-1">Phone</h4>
                  <p className="text-gray-300 text-sm sm:text-base">+61 123 456 7890</p>
                </div>
              </div> */}
            </div>
            
            <div className="mt-8 sm:mt-10">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-poppins">Follow <span className="text-primary">Me</span></h3>
              <div className="flex space-x-3 sm:space-x-4">
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1, backgroundColor: "#ff0066" }}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#333333] flex items-center justify-center text-white transition-colors"
                >
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1, backgroundColor: "#ff0066" }}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#333333] flex items-center justify-center text-white transition-colors"
                >
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1, backgroundColor: "#ff0066" }}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#333333] flex items-center justify-center text-white transition-colors"
                >
                  <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1, backgroundColor: "#ff0066" }}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#333333] flex items-center justify-center text-white transition-colors"
                >
                  <Dribbble className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-6 lg:mt-0"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 font-poppins">Send Me a <span className="text-primary">Message</span></h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="name" className="text-sm sm:text-base">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-[#333333] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs sm:text-sm">{errors.name.message}</p>
                  )}
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-[#333333] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs sm:text-sm">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <Label htmlFor="subject" className="text-sm sm:text-base">Subject</Label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-[#333333] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  {...register("subject", { required: "Subject is required" })}
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs sm:text-sm">{errors.subject.message}</p>
                )}
              </div>
              <div className="space-y-1 sm:space-y-2">
                <Label htmlFor="message" className="text-sm sm:text-base">Message</Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-[#333333] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs sm:text-sm">{errors.message.message}</p>
                )}
              </div>
              <Button
                type="submit"
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient rounded-full font-medium text-sm sm:text-base hover:opacity-90 transition-all transform hover:scale-105 w-full sm:w-auto"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
