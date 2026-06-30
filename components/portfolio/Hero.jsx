import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
  Smartphone,
  Store,
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
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

const profileCards = [
  {
    icon: Smartphone,
    label: "Mobile systems",
    text: "React Native CLI + Expo apps",
  },
  {
    icon: Store,
    label: "Business domains",
    text: "Commerce, POS, ERP, CRM, HRM, logistics",
  },
  {
    icon: Code2,
    label: "Engineering depth",
    text: "Offline data, native device flows, APIs, backend exposure",
  },
];

const Hero = () => {
  const isLoaded = true;

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownload = () => {
    window.open(personalInfo.resumeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden animated-gradient pt-20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], scale: [1, 1.2, 1] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ y: [-20, 20, -20], x: [-20, 20, -20] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-7 max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 mb-4 rounded-full border border-cyan-500/30 bg-ocean-900/70 px-4 py-2 text-cyan-400">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles size={18} />
                </motion.div>
                <span className="text-sm font-semibold">
                  {personalInfo.subtitle}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight wrap-break-word">
                {personalInfo.name}
              </h1>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold gradient-text mb-5">
                {personalInfo.title}
              </p>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
                {personalInfo.tagline}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              {personalInfo.focusAreas.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-500/25 bg-ocean-900/60 px-4 py-2 text-sm font-medium text-slate-300"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-linear-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white shadow-lg glow-cyan transition-all font-semibold"
                  onClick={() => scrollToSection("#projects")}
                >
                  View Production Apps
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
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={handleDownload}
                  className="text-slate-300 hover:text-cyan-400 hover:bg-ocean-800/50"
                >
                  <Download className="mr-2" size={18} />
                  Resume
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex items-center gap-4"
            >
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:text-white"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon size={22} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:text-white"
                aria-label="GitHub profile"
              >
                <GithubIcon size={22} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={isLoaded ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="relative"
          >
            <div className="glass rounded-3xl border border-cyan-500/25 p-6 shadow-2xl glow-cyan">
              <div className="mb-6 rounded-2xl border border-cyan-500/20 bg-ocean-900 p-6 text-center">
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br from-cyan-500 to-teal-500 text-3xl font-extrabold text-white shadow-xl glow-cyan-strong">
                  MH
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Mobile & Business App Engineer
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  16+ projects across mobile, POS, enterprise, and backend
                  workflows
                </p>
              </div>

              <div className="space-y-4">
                {profileCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <motion.div
                      key={card.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.65 + index * 0.1, duration: 0.5 }}
                      className="flex items-start gap-4 rounded-2xl border border-cyan-500/15 bg-ocean-900/70 p-4"
                    >
                      <div className="rounded-xl bg-linear-to-br from-cyan-500 to-teal-500 p-3 text-white">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">
                          {card.label}
                        </h3>
                        <p className="text-sm text-slate-400">{card.text}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-teal-500/10 blur-3xl" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.95, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-16 pt-10 border-t border-cyan-500/20"
        >
          {personalInfo.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="glass rounded-2xl border border-cyan-500/20 p-6 text-center"
            >
              <h3 className="text-4xl sm:text-5xl font-bold gradient-text transition-transform">
                <AnimatedCounter target={stat.value} />
                {stat.suffix}
              </h3>
              <p className="text-slate-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
