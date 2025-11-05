import { motion } from "framer-motion";
import profileImage from "@/assets/profile-pic.png";

const About = () => {
  const focusAreas = [
    "NLP",
    "Deep Learning",
    "Transformers",
    "LLMs",
  ];

  const timeline = [
    { year: "05/2024-06/2024", title: "Machine Learning Engineer Intern", org: "CodSoft" },
    { year: "12/2020-05/2025", title: "Integrated M. Tech. in Mathematics & Computing", org: "Indian Institute of Technology (ISM) Dhanbad" },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Portrait */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-75 blur-xl animate-glow-pulse"></div>
              <img
                src={profileImage}
                alt="Profile"
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-primary/30"
              />
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I'm passionate about building intelligent systems that learn from data and language.
              </p>
              <p>
                With expertise in Natural Language Processing and Deep Learning, I transform complex problems into elegant AI solutions that push the boundaries of what machines can understand.
              </p>
              <p>
                My work spans from research in cutting-edge transformer architectures to deploying production-ready ML systems that scale.
              </p>
            </div>

            {/* Focus Areas */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Focus Areas</h3>
              <div className="flex flex-wrap gap-3">
                {focusAreas.map((area, index) => (
                  <motion.span
                    key={area}
                    className="px-4 py-2 bg-card border border-secondary/30 rounded-lg text-sm font-medium text-secondary hover:border-secondary hover:glow-violet transition-all duration-300 cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {area}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Journey</h3>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4 items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className="flex-shrink-0 w-16 text-primary font-bold">{item.year}</div>
                    <div className="flex-grow">
                      <div className="font-semibold text-foreground">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.org}</div>
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="absolute left-16 mt-8 h-12 w-0.5 bg-gradient-to-b from-primary to-secondary opacity-30"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
