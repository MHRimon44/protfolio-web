import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, CheckCircle2, Layers3 } from "lucide-react";
import { caseStudies } from "@/data/portfolio";

const CaseStudies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="case-studies"
      className="py-20 bg-ocean-950 relative overflow-hidden"
    >
      <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>

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
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Featured Case Studies
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-4 rounded-full"></div>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                A clearer view of the problems, engineering approach, and
                business value behind my production apps.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                className="glass rounded-2xl border border-cyan-500/20 p-6 card-hover glow-cyan"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 p-3 text-white shadow-lg glow-cyan">
                    <Layers3 size={26} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                      {item.project}
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="mb-2 text-sm font-semibold text-cyan-400">
                      Problem
                    </p>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {item.problem}
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-semibold text-cyan-400">
                      Solution
                    </p>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {item.solution}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-cyan-500/15 bg-ocean-900/70 p-4">
                    <div className="mb-2 flex items-center gap-2 text-cyan-400">
                      <CheckCircle2 size={18} />
                      <p className="text-sm font-semibold">Result</p>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-300">
                      {item.result}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-500/20 bg-ocean-800 px-3 py-1 text-xs font-mono text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center text-sm font-semibold text-cyan-400">
                  Production-oriented engineering
                  <ArrowRight className="ml-2" size={16} />
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
