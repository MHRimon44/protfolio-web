import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        "hero",
        "about",
        "skills",
        "experience",
        "projects",
        "education",
        "leadership",
        "contact",
      ];

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-40 h-1 overflow-hidden border-b border-white/5 bg-ocean-950/90 backdrop-blur-md">
        <motion.div
          className="h-full origin-left bg-linear-to-r from-cyan-400 via-teal-400 to-cyan-400 shadow-[0_0_18px_rgba(0,217,255,0.35)]"
          style={{ scaleX }}
        />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b border-white/5 transition-all duration-500 ${
          isScrolled
            ? "navbar-glass shadow-lg shadow-ocean-950/25"
            : "navbar-glass"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => scrollToSection(e, "#hero")}
              className="text-2xl font-bold gradient-text-animated"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              MH
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`text-sm font-medium relative ${
                      isActive
                        ? "text-cyan-400"
                        : "text-slate-300 hover:text-cyan-400"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {link.name}
                  </motion.a>
                );
              })}

              <Button
                size="sm"
                className="bg-linear-to-r from-cyan-500 to-teal-500 text-white font-semibold"
                onClick={(e) => scrollToSection(e, "#contact")}
              >
                Get in Touch
              </Button>
            </div>

            {/* Mobile Button */}
            <motion.button
              className="md:hidden p-2 text-cyan-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden navbar-glass border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block px-3 py-2 text-slate-300 hover:text-cyan-400"
                >
                  {link.name}
                </a>
              ))}

              <Button
                className="w-full bg-linear-to-r from-cyan-500 to-teal-500 text-white"
                onClick={(e) => scrollToSection(e, "#contact")}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
