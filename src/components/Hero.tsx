import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, FileDown, ChevronDown } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-neural-network.jpg";

const Hero = () => {
  const handleDownloadResume = () => {
    // In a real implementation, this would trigger a file download
    const link= document.createElement("a")
    link.href = "/resume/Anurag_Indora_Resume.pdf"
    link.download = "Anurag_Indora_Resume.pdf"
    link.click();

    toast({
      title: "Resume Downloaded",
      description: "Your resume has been downloaded — thanks for your interest!",
    });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const taglines = [
    "Software Developer",
    "Machine Learning",
    "NLP",
    "MLOps",
    "Research",
    "LLMs"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Neural Network Visualization" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="gradient-text">Anurag Indora</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Teaching Machines to Understand Human Language
          </motion.p>

          {/* Animated Taglines */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {taglines.map((tag, index) => (
              <motion.span
                key={tag}
                className="px-4 py-2 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-full text-sm font-medium text-primary"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: "var(--glow-cyan)" }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button
              onClick={handleDownloadResume}
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan transition-all duration-300 text-lg px-8 py-6"
            >
              <FileDown className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button
              onClick={scrollToProjects}
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 hover:border-primary text-foreground text-lg px-8 py-6 transition-all duration-300"
            >
              View Projects
            </Button>
          </motion.div>

          {/* Stats Placeholder */}
          {/* <motion.div  */}
            {/* className="flex flex-wrap justify-center gap-8 mt-12 text-sm" */}
            {/* initial={{ opacity: 0 }} */}
            {/* animate={{ opacity: 1 }} */}
            {/* transition={{ duration: 0.8, delay: 1.4 }} */}
          {/* > */}
            {/* <div className="flex items-center gap-2"> */}
              {/* <Github className="h-4 w-4 text-primary" /> */}
              {/* <span className="text-muted-foreground">GitHub Stars: <span className="text-foreground font-semibold">5</span></span> */}
            {/* </div> */}
            {/* <div className="text-muted-foreground"> */}
              {/* Kaggle Rank: <span className="text-foreground font-semibold">Expert</span> */}
            {/* </div> */}
            {/* <div className="text-muted-foreground"> */}
              {/* LeetCode: <span className="text-foreground font-semibold">1000+ Problems</span> */}
            {/* </div> */}
          {/* </motion.div> */}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-8 w-8 text-primary opacity-50" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
