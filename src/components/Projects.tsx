import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Movie Recommendation System",
      description: "Built a modular, content-based movie recommender (5K+ titles) with TF-IDF, sparse matrix compression (80% size reduction), and <1s Streamlit inference.",
      tags: ["Python", "TF-IDF", "Collaborative Filtering", "Cosine Similarity", "Streamlit"],
      github: "https://github.com/AnuragIndora/Movie-Recommendation-System.git",
      demo: "https://anuragindora-movie-recommendation-system-app-wtc1rn.streamlit.app/",
    },
    {
      title: "Text Summarization Engine",
      description: "Transformer-based abstractive summarizer for long documents, reducing reading time by 80% while maintaining key insights.",
      tags: ["Python", "HuggingFace", "Transformers", "BART", "FastAPI", "Streamlit"],
      github: "https://github.com/AnuragIndora/Text-Summarizer.git",
      demo: "#"
    },
    {
      title: "Crime Analysis",
      description: "Predictive data visualization platform analyzing crime patterns with interactive maps and ML-powered forecasting.",
      tags: ["Python", "Scikit-learn", "Matplotlib", "Pandas"],
      github: "https://github.com/AnuragIndora/Indian-Crimes.git",
      demo: "#"
    },
    {
      title: "NeuralPS: Polymer Prediction",
      description: "Won Silver Medal in Kaggle NeuralPS Open Polymer Challenge 2025 by predicting 5 polymer properties using CatBoost, stacking, ensembles, and RDKit-driven feature engineering.",
      tags: ["Python", "CatBoost", "RdKit", "Stacking"],
      github: "https://github.com/AnuragIndora/NeurlPS---Open-Polymer-Prediction-2025.git",
      demo: "https://www.kaggle.com/certification/competitions/evilak09/neurips-open-polymer-prediction-2025",
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 group hover:glow-cyan hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-background/50 border border-border rounded-full text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/50 hover:bg-primary/10 hover:border-primary text-foreground transition-all duration-300"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-secondary hover:bg-secondary/90 text-secondary-foreground transition-all duration-300"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Read More
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
