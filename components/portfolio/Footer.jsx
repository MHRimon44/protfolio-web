import React from "react";
import { Mail, Phone, ArrowUp, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { personalInfo } from "@/data/portfolio";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-ocean-900 text-white relative overflow-hidden border-t border-cyan-500/20">
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-3xl font-bold gradient-text mb-4">
              {personalInfo.name}
            </h3>
            <p className="text-slate-300 mb-4 font-semibold">
              {personalInfo.title}
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              Building production-ready mobile applications for business, operations, and customer-facing digital products.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-cyan-400">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm hover:translate-x-1 inline-block transition-transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-cyan-400">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm group"
              >
                <Mail size={16} className="group-hover:scale-110 transition-transform" />
                <span className="break-all">{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm group"
              >
                <Phone size={16} className="group-hover:scale-110 transition-transform" />
                <span>{personalInfo.phone}</span>
              </a>
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <MapPin size={16} />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex space-x-3 pt-2">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="p-2 glass rounded-lg hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500 transition-all hover:scale-110 border border-cyan-500/30"
                >
                  <LinkedinIcon size={20} className="text-cyan-400 hover:text-white transition-colors" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="p-2 glass rounded-lg hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500 transition-all hover:scale-110 border border-cyan-500/30"
                >
                  <GithubIcon size={20} className="text-cyan-400 hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400 text-center md:text-left">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-3 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 rounded-full transition-all hover:scale-110 shadow-lg glow-cyan group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="group-hover:translate-y-[-4px] transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
