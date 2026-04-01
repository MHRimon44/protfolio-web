import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Layers, Wrench } from "lucide-react";
import { skills } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      items: skills.languages,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      items: skills.frameworks,
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      title: "Tools",
      icon: Wrench,
      items: skills.tools,
      gradient: "from-blue-500 to-teal-500",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 animated-gradient relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl font-bold text-white mb-4">
                Technical Skills
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-4 rounded-full"></div>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                A comprehensive toolkit for building modern, scalable
                applications
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
                  className="glass rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 card-hover glow-cyan group"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} group-hover:scale-110 transition-transform glow-cyan`}
                    >
                      <IconComponent className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          delay: categoryIndex * 0.2 + skillIndex * 0.05,
                          duration: 0.5,
                        }}
                      >
                        <Badge className="px-4 py-2 text-sm font-medium bg-ocean-800 text-cyan-400 border border-cyan-500/30 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500 hover:text-white hover:scale-110 transition-all cursor-pointer">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
