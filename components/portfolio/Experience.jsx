import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, CheckCircle2, TrendingUp } from "lucide-react";
import { experience } from "@/data/portfolio";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="experience"
      className="py-20 bg-ocean-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>

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
                Work Experience
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-4 rounded-full"></div>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Professional journey building impactful solutions
              </p>
            </motion.div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-teal-500 to-cyan-500 opacity-30"></div>

            <div className="space-y-16">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.3, duration: 0.8 }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 group">
                    <div className="glass rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 card-hover glow-cyan">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-xl font-semibold gradient-text mb-3">
                            {exp.company}
                          </p>
                        </div>
                        {exp.current && (
                          <span className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg animate-pulse">
                            Current
                          </span>
                        )}
                      </div>

                      <div className="flex items-center text-slate-400 mb-4">
                        <Calendar size={18} className="mr-2 text-cyan-400" />
                        <span className="text-sm font-medium">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-slate-300 mb-5 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.3 + 0.5 + i * 0.1 }}
                            className="flex items-start space-x-3 group/item"
                          >
                            <CheckCircle2
                              className="text-cyan-400 flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform"
                              size={18}
                            />
                            <span className="text-sm text-slate-400 group-hover/item:text-slate-300 transition-colors">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex items-center justify-center relative">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.3 + 0.3, type: "spring" }}
                      className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg glow-cyan-strong z-10"
                    >
                      {exp.current ? (
                        <TrendingUp className="text-white" size={32} />
                      ) : (
                        <Briefcase className="text-white" size={32} />
                      )}
                    </motion.div>
                    {/* Pulse effect */}
                    <div className="absolute inset-0 w-20 h-20 bg-cyan-500 rounded-full animate-ping opacity-20"></div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
