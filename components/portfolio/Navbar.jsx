import React, { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const THEME_STORAGE_KEY = "portfolio-theme";
const THEME_CHANGE_EVENT = "portfolio-theme-change";

const getSystemTheme = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";

const getStoredTheme = () => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const theme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return theme === "light" || theme === "dark" ? theme : null;
  } catch {
    return null;
  }
};

const setStoredTheme = (theme) => {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {}
};

const getPreferredTheme = () => getStoredTheme() ?? getSystemTheme();
const getServerTheme = () => "dark";

const subscribeToTheme = (onStoreChange) => {
  if (typeof window === "undefined") {
    return () => {};
  }

  const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
  const handleChange = () => onStoreChange();

  mediaQuery.addEventListener("change", handleChange);
  window.addEventListener(THEME_CHANGE_EVENT, handleChange);

  return () => {
    mediaQuery.removeEventListener("change", handleChange);
    window.removeEventListener(THEME_CHANGE_EVENT, handleChange);
  };
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getPreferredTheme,
    getServerTheme,
  );

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
        "case-studies",
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

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Case Studies", href: "#case-studies" },
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

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    setStoredTheme(nextTheme);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  };

  const ThemeIcon = theme === "dark" ? Sun : Moon;
  const themeLabel =
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  const renderThemeToggleButton = () => (
    <motion.button
      type="button"
      aria-label={themeLabel}
      title={themeLabel}
      aria-pressed={theme === "dark"}
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:text-white"
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
    >
      <ThemeIcon size={20} />
    </motion.button>
  );

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
                    aria-current={isActive ? "page" : undefined}
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

              {renderThemeToggleButton()}
            </div>

            <div className="flex items-center gap-2 md:hidden">
              {renderThemeToggleButton()}

              {/* Mobile Button */}
              <motion.button
                type="button"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                className="p-2 text-cyan-400"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
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
