import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "C/C++", "SQL", "R", "CUDA", "JAVA", "Bash"]
    },
    {
      title: "ML/AI Frameworks",
      skills: ["PyTorch", "TensorFlow", "HuggingFace", "LangChain", "Scikit-learn", "Keras", "Scikit-Learn", "Numpy", "Matplotlib", "XGBoost", "FastAPI"]
    },
    {
      title: "NLP & LLMs",
      skills: ["Transformers", "BERT", "GPT", "LLaMA", "Tokenization", "Embeddings", "RAG"]
    },
    {
      title: "MLOps & Tools",
      skills: ["Docker", "MLflow", "Weights & Biases", "Git", "AWS", "CI/CD"]
    },
    {
      title: "Concepts",
      skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Vector Databases", "Fine-tuning", "Operating System", "Computer Networks", "Transformers"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="px-5 py-3 bg-card border border-primary/20 rounded-lg text-sm font-medium text-foreground hover:border-primary hover:glow-cyan transition-all duration-300 cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
