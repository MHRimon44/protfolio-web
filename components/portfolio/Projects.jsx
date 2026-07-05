import React, { useRef, useState } from "react";
import { flushSync } from "react-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Apple, CheckCircle2 } from "lucide-react";
import { projects, projectCategories } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const PlayStoreLogo = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="mr-2 h-4 w-4 shrink-0">
    <path d="M3.5 2.5v19l9.2-9.1z" fill="#00d9ff" />
    <path
      d="M12.7 12.4l2.7-2.7L6 2.7c-.7-.4-1.5-.4-2.1 0l8.8 9.7z"
      fill="#14b8a6"
    />
    <path
      d="M12.7 12.4L3.9 22c.6.4 1.4.4 2.1 0l9.4-6-2.7-3.6z"
      fill="#00bcd4"
    />
    <path
      d="M15.4 15.5L22 12c0-.8-.4-1.5-1.1-1.9l-5.5-3.2-2.7 2.7z"
      fill="#ffcf4d"
    />
    <path
      d="M15.4 15.5l-2.7-3.1-8.8 9.6c.6.3 1.3.3 1.9 0l9.6-6.5z"
      fill="#ff6b6b"
    />
  </svg>
);

const Projects = () => {
  const lastFeaturedProjectRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAllProjects, setShowAllProjects] = useState(false);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);
  const sortedProjects = [...filteredProjects].sort(
    (a, b) => Number(b.featured) - Number(a.featured),
  );
  const featuredProjects = sortedProjects.filter((project) => project.featured);
  const visibleProjects =
    selectedCategory === "All" && !showAllProjects
      ? featuredProjects
      : sortedProjects;
  const hiddenProjectCount = sortedProjects.length - visibleProjects.length;
  const lastFeaturedProjectId =
    featuredProjects[featuredProjects.length - 1]?.id;

  const scrollToLastFeaturedProject = () => {
    const element = lastFeaturedProjectRef.current;

    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const top = element.getBoundingClientRect().top + window.scrollY - 88;

    window.scrollTo({
      top,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const scrollWithoutAnimation = (top) => {
    const html = document.documentElement;
    const body = document.body;

    const previousHtmlScrollBehavior = html.style.scrollBehavior;
    const previousBodyScrollBehavior = body.style.scrollBehavior;

    html.style.scrollBehavior = "auto";
    body.style.scrollBehavior = "auto";

    window.scrollTo({
      top,
      behavior: "auto",
    });

    window.requestAnimationFrame(() => {
      html.style.scrollBehavior = previousHtmlScrollBehavior;
      body.style.scrollBehavior = previousBodyScrollBehavior;
    });
  };

  const toggleProjectList = () => {
    if (!showAllProjects) {
      const currentScrollY = window.scrollY;

      flushSync(() => {
        setShowAllProjects(true);
      });

      // Show All Projects: no animation / no smooth scroll
      scrollWithoutAnimation(currentScrollY);
      return;
    }

    // Show Featured Projects: keep existing smooth animation
    setShowAllProjects(false);

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(scrollToLastFeaturedProject);
    });
  };

  return (
    <section
      id="projects"
      className="py-20 animated-gradient relative overflow-hidden"
    >
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>

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
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Production Projects
              </h2>
              <div className="w-24 h-1.5 bg-linear-to-r from-cyan-500 to-teal-500 mx-auto mb-4 rounded-full"></div>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Real published and business-facing applications across
                marketplace, CRM, ERP, logistics, HRM, healthcare, and finance.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {projectCategories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => {
                    setSelectedCategory(category);
                    setShowAllProjects(false);
                  }}
                  className={`${
                    selectedCategory === category
                      ? "bg-linear-to-r from-cyan-500 to-teal-500 text-white shadow-lg glow-cyan"
                      : "glass border-cyan-500/30 text-cyan-400 hover:border-cyan-500 hover:bg-cyan-500/10"
                  } transition-all font-semibold`}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 [overflow-anchor:none]">
            {visibleProjects.map((project) => (
              <article
                key={project.id}
                ref={
                  selectedCategory === "All" &&
                  project.id === lastFeaturedProjectId
                    ? lastFeaturedProjectRef
                    : null
                }
                className="glass rounded-2xl overflow-hidden border border-cyan-500/20"
              >
                <div className="relative h-48 bg-linear-to-br from-ocean-800 to-ocean-900 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative z-10 text-center">
                      <div className="inline-block p-6 bg-linear-to-br from-cyan-500/20 to-teal-500/20 rounded-2xl backdrop-blur-sm border border-cyan-500/30">
                        <Image
                          src={project.image}
                          alt={project.name}
                          width={70}
                          height={70}
                          className="object-contain rounded-xl"
                        />
                      </div>
                      <p className="text-sm font-medium text-slate-400 mt-3">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-linear-to-r from-cyan-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <div className="mb-2 flex items-start justify-between gap-3">
                      <h3 className="text-xl font-bold text-white">
                        {project.name}
                      </h3>
                    </div>
                    <p className="mb-2 text-sm font-semibold text-cyan-400">
                      {project.role}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {project.impact && (
                    <div className="mb-4 rounded-xl border border-cyan-500/15 bg-ocean-900/70 p-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                        Impact
                      </p>
                      <p className="mt-1 text-sm text-slate-300">
                        {project.impact}
                      </p>
                    </div>
                  )}

                  {project.highlights?.length > 0 && (
                    <div className="mb-4 space-y-2">
                      {project.highlights.slice(0, 3).map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-slate-400"
                        >
                          <CheckCircle2
                            className="mt-0.5 shrink-0 text-cyan-400"
                            size={16}
                          />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-ocean-800 text-cyan-400 rounded-full font-mono border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.playStoreUrl || project.appStoreUrl ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.playStoreUrl && (
                        <a
                          href={project.playStoreUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center rounded-md border border-cyan-500/30 px-4 py-2 text-sm font-semibold text-cyan-400 transition-all hover:border-cyan-500 hover:bg-cyan-500/10"
                        >
                          <PlayStoreLogo />
                          Play Store
                        </a>
                      )}

                      {project.appStoreUrl && (
                        <a
                          href={project.appStoreUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center rounded-md border border-cyan-500/30 px-4 py-2 text-sm font-semibold text-cyan-400 transition-all hover:border-cyan-500 hover:bg-cyan-500/10"
                        >
                          <Apple className="mr-2" size={16} />
                          App Store
                        </a>
                      )}
                    </div>
                  ) : (
                    <div className="rounded-md border border-cyan-500/20 bg-ocean-900/70 px-4 py-2 text-center text-sm font-semibold text-slate-400">
                      Private/internal project
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {selectedCategory === "All" &&
            sortedProjects.length > featuredProjects.length && (
              <div className="mt-12 flex justify-center [overflow-anchor:none]">
                <Button
                  type="button"
                  variant="outline"
                  onClick={toggleProjectList}
                  className="glass border-cyan-500/30 text-cyan-400 hover:border-cyan-500 hover:bg-cyan-500/10"
                >
                  {showAllProjects
                    ? "Show Featured Projects"
                    : `Show All Projects (${hiddenProjectCount} more)`}
                </Button>
              </div>
            )}

          {visibleProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-slate-400 text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
