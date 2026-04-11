import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink,
  Store,
  Smartphone,
  ShoppingCart,
  Users,
  Package,
  Truck,
  FileText,
  Building2,
  Heart,
} from "lucide-react";
import { projects, projectCategories } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

const categoryIcons = {
  "E-commerce": ShoppingCart,
  CRM: Users,
  ERP: Building2,
  POS: Package,
  Logistics: Truck,
  HRM: FileText,
  Healthcare: Heart,
  default: Smartphone,
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="projects"
      className="py-20 animated-gradient relative overflow-hidden"
    >
      {/* Background decoration */}
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
              <h2 className="text-5xl font-bold text-white mb-4">Projects</h2>
              <div className="w-24 h-1.5 bg-linear-to-r from-cyan-500 to-teal-500 mx-auto mb-4 rounded-full"></div>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                A showcase of applications I&apos;ve built across various
                domains
              </p>
            </motion.div>
          </div>

          {/* Category Filter */}
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
                  onClick={() => setSelectedCategory(category)}
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

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => {
              const CategoryIcon =
                categoryIcons[project.category] || categoryIcons.default;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="glass rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 card-hover glow-cyan group cursor-pointer"
                >
                  {/* Project Visual - Abstract Geometric Design */}
                  <div className="relative h-48 bg-linear-to-br from-ocean-800 to-ocean-900 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Animated background pattern */}
                      <motion.div
                        className="absolute inset-0"
                        animate={
                          hoveredProject === project.id
                            ? {
                                background: [
                                  "radial-gradient(circle at 20% 50%, rgba(0, 217, 255, 0.1) 0%, transparent 50%)",
                                  "radial-gradient(circle at 80% 50%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)",
                                  "radial-gradient(circle at 20% 50%, rgba(0, 217, 255, 0.1) 0%, transparent 50%)",
                                ],
                              }
                            : {}
                        }
                        transition={{ duration: 2, repeat: Infinity }}
                      />

                      {/* Icon and geometric shapes */}
                      <div className="relative z-10 text-center group-hover:scale-110 transition-transform duration-500">
                        <motion.div
                          animate={
                            hoveredProject === project.id
                              ? { rotate: 360 }
                              : { rotate: 0 }
                          }
                          transition={{ duration: 0.8 }}
                          className="inline-block p-6 bg-linear-to-br from-cyan-500/20 to-teal-500/20 rounded-2xl backdrop-blur-sm border border-cyan-500/30"
                        >
                          <CategoryIcon className="text-cyan-400" size={48} />
                        </motion.div>
                        <p className="text-sm font-medium text-slate-400 mt-3">
                          {project.category}
                        </p>
                      </div>

                      {/* Decorative elements */}
                      <motion.div
                        className="absolute top-4 right-4 w-16 h-16 border-2 border-cyan-500/20 rounded-lg"
                        animate={{
                          rotate: hoveredProject === project.id ? 180 : 0,
                        }}
                        transition={{ duration: 0.6 }}
                      />
                      <motion.div
                        className="absolute bottom-4 left-4 w-12 h-12 border-2 border-teal-500/20 rounded-full"
                        animate={{
                          scale: hoveredProject === project.id ? 1.2 : 1,
                        }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>

                    {project.featured && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-3 right-3 bg-linear-to-r from-cyan-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
                      >
                        Featured
                      </motion.div>
                    )}

                    {/* Overlay gradient on hover */}
                    <div className="absolute inset-0 bg-linear-to-t from-ocean-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-slate-400 text-sm line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.1 }}
                          className="text-xs px-3 py-1 bg-ocean-800 text-cyan-400 rounded-full font-mono border border-cyan-500/20 hover:border-cyan-500/40 transition-all"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* View Details Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="space-y-3">
                        {(project.playStoreUrl || project.appStoreUrl) && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {project.playStoreUrl ? (
                              <a
                                href={project.playStoreUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-md border border-cyan-500/30 px-4 py-2 text-sm font-semibold text-cyan-400 transition-all hover:border-cyan-500 hover:bg-cyan-500/10"
                              >
                                <Store className="mr-2" size={16} />
                                Play Store
                              </a>
                            ) : (
                              <Button
                                variant="ghost"
                                disabled
                                className="w-full border border-cyan-500/20 text-slate-500"
                              >
                                Play Store
                              </Button>
                            )}

                            {project.appStoreUrl ? (
                              <a
                                href={project.appStoreUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-md border border-cyan-500/30 px-4 py-2 text-sm font-semibold text-cyan-400 transition-all hover:border-cyan-500 hover:bg-cyan-500/10"
                              >
                                <ExternalLink className="mr-2" size={16} />
                                App Store
                              </a>
                            ) : (
                              <Button
                                variant="ghost"
                                disabled
                                className="w-full border border-cyan-500/20 text-slate-500"
                              >
                                App Store
                              </Button>
                            )}
                          </div>
                        )}

                        {/* <Button
                          variant="ghost"
                          className="w-full text-cyan-400 hover:text-white hover:bg-linear-to-r hover:from-cyan-500 hover:to-teal-500 border border-cyan-500/30 hover:border-transparent transition-all"
                        >
                          View Details
                          <ExternalLink className="ml-2" size={16} />
                        </Button> */}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {filteredProjects.length === 0 && (
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
