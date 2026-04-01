import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle2, Zap } from "lucide-react";
import { about } from "@/data/portfolio";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-ocean-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl font-bold text-white mb-4">About Me</h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Summary */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg text-slate-300 leading-relaxed">
                {about.summary}
              </p>
              <div className="glass p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all card-hover">
                <div className="flex items-center space-x-2 mb-4">
                  <Zap className="text-cyan-400" size={24} />
                  <h3 className="text-2xl font-semibold text-white">
                    What I Bring to the Table
                  </h3>
                </div>
                <ul className="space-y-3">
                  {about.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                      className="flex items-start space-x-3 group"
                    >
                      <CheckCircle2
                        className="text-cyan-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                        size={20}
                      />
                      <span className="text-slate-300 group-hover:text-white transition-colors">
                        {highlight}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right: Competencies */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-ocean-800 to-ocean-900 rounded-2xl p-8 shadow-2xl glow-cyan border border-cyan-500/20">
                <h3 className="text-3xl font-bold gradient-text mb-6">
                  Core Competencies
                </h3>
                <div className="space-y-5">
                  {[
                    { skill: "Mobile App Development", level: 95 },
                    { skill: "React Native", level: 90 },
                    { skill: "TypeScript/JavaScript", level: 88 },
                    { skill: "State Management", level: 92 },
                    { skill: "UI/UX Implementation", level: 85 },
                  ].map((item, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between text-white mb-2">
                        <span className="text-sm font-medium group-hover:text-cyan-400 transition-colors">
                          {item.skill}
                        </span>
                        <span className="text-sm font-semibold text-cyan-400">
                          {item.level}%
                        </span>
                      </div>
                      <div className="w-full bg-ocean-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${item.level}%` } : {}}
                          transition={{
                            delay: 0.7 + index * 0.1,
                            duration: 1,
                            ease: "easeOut",
                          }}
                          className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative glow */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-teal-500 rounded-full opacity-10 blur-3xl"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
