import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Trophy, Users, Award } from "lucide-react";
import { leadership } from "@/data/portfolio";

const Leadership = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const icons = [Trophy, Users, Award];

  return (
    <section
      id="leadership"
      className="py-20 animated-gradient relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>

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
                Leadership & Achievements
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-4 rounded-full"></div>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Beyond code: Leading teams and making impact
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((item, index) => {
              const IconComponent = icons[index];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="glass rounded-2xl p-6 border-t-4 border-cyan-500 card-hover glow-cyan group relative overflow-hidden"
                >
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="flex justify-center mb-4">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                        }}
                        className="p-4 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full shadow-lg glow-cyan-strong"
                      >
                        <IconComponent className="text-white" size={36} />
                      </motion.div>
                    </div>

                    <h3 className="text-xl font-bold text-white text-center mb-2 group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-cyan-400 font-semibold text-center mb-3">
                      {item.organization}
                    </p>

                    <p className="text-sm text-slate-500 text-center mb-4">
                      {item.period}
                    </p>

                    <p className="text-slate-400 text-sm text-center leading-relaxed">
                      {item.description}
                    </p>
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

export default Leadership;
