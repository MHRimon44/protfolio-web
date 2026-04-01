import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";

const AnimatedCounter = ({ target, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(target * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return <span>{count}</span>;
};

const Hero = () => {
  const isLoaded = true;

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden animated-gradient pt-16"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            y: [-20, 20, -20],
            x: [-20, 20, -20],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="text-cyan-400" size={20} />
                </motion.div>
                <p className="text-cyan-400 font-semibold text-lg">
                  Hello, I&apos;m
                </p>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                {personalInfo.name}
              </h1>
              <p className="text-3xl lg:text-4xl font-semibold gradient-text mb-4">
                {personalInfo.title}
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                {personalInfo.tagline}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white shadow-lg glow-cyan transition-all font-semibold"
                  onClick={() => scrollToSection("#projects")}
                >
                  View Projects
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="glass border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all"
                  onClick={() => scrollToSection("#contact")}
                >
                  <Mail className="mr-2" size={20} />
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="pt-4"
            >
              <motion.div whileHover={{ scale: 1.05, x: 5 }}>
                <Button
                  variant="ghost"
                  className="text-slate-400 hover:text-cyan-400 hover:bg-ocean-800/50"
                >
                  <Download className="mr-2" size={18} />
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Abstract Profile Design */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={isLoaded ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Circle with Geometric Pattern */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 shadow-2xl glow-cyan-strong flex items-center justify-center relative overflow-hidden"
              >
                {/* Inner Circle */}
                <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-full bg-ocean-900 flex items-center justify-center relative overflow-hidden">
                  {/* Geometric Shapes */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="w-32 h-32 border-4 border-cyan-400/30 rounded-lg"></div>
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="w-40 h-40 border-4 border-teal-400/20 rounded-full"></div>
                  </motion.div>
                  {/* Center Icon */}
                  <div className="relative z-10 text-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-6xl mb-2"
                    >
                      <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-full flex items-center justify-center">
                        <span className="text-4xl font-bold text-white">
                          MH
                        </span>
                      </div>
                    </motion.div>
                    <p className="text-sm text-cyan-400 font-medium mt-4">
                      Software Engineer
                    </p>
                  </div>
                </div>
                {/* Animated rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-cyan-400/30"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.1, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500 rounded-full opacity-20 blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-40 h-40 bg-teal-500 rounded-full opacity-20 blur-3xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-cyan-500/20"
        >
          {[
            {
              value: personalInfo.yearsOfExperience,
              suffix: "+",
              label: "Years Experience",
            },
            {
              value: personalInfo.projectsCompleted,
              suffix: "+",
              label: "Projects Completed",
            },
            { value: 100, suffix: "%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="text-center group cursor-pointer"
            >
              <h3 className="text-5xl font-bold gradient-text transition-transform">
                <AnimatedCounter target={stat.value} />
                {stat.suffix}
              </h3>
              <p className="text-slate-400 mt-2 group-hover:text-cyan-400 transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
