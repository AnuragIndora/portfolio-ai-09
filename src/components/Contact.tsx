import { motion } from "framer-motion";
import { Github, Linkedin, Code2, Trophy, BookOpen, Globe, Mail} from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/AnuragIndora",
      color: "hover:text-primary"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/anurag-indora/",
      color: "hover:text-primary"
    },
    {
      name: "LeetCode",
      icon: Code2,
      url: "https://leetcode.com/u/anuragindora_03/",
      color: "hover:text-secondary"
    },
    {
      name: "Kaggle",
      icon: Trophy,
      url: "https://www.kaggle.com/evilak09",
      color: "hover:text-secondary"
    },
    {
      name: "Gmail",
      icon: Mail,
      url: "mailto:anuragindora474@gmail.com",
      color: "hover:text-primary" 
    }
    // {
    //   name: "Hugging Face",
    //   icon: Globe,
    //   url: "https://huggingface.co",
    //   color: "hover:text-primary"
    // },
    // {
    //   name: "Medium",
    //   icon: BookOpen,
    //   url: "https://medium.com",
    //   color: "hover:text-secondary"
    // }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-card/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect
        </motion.h2>

        <motion.p
          className="text-xl text-muted-foreground mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Interested in collaboration or have a question? Feel free to reach out!
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target={link.url.startsWith("mailto:") ? "_self" : "_blank"} // <--- small optional tweak
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-2 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-lg transition-all duration-300 ${link.color} hover:border-primary/50 hover:glow-cyan group`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <link.icon className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-sm font-medium">{link.name}</span>
            </motion.a>
          ))}

        </motion.div>

        {/* CTA Text with Pulse */}
        <motion.div
          className="inline-block"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-lg text-primary font-medium animate-glow-pulse">
            Open to exciting opportunities and collaborations
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
