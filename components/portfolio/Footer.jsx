import React from 'react';
import { Heart, Mail, Phone, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { personalInfo } from "@/data/portfolio";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ocean-900 text-white relative overflow-hidden border-t border-cyan-500/20">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-3xl font-bold gradient-text mb-4">{personalInfo.name}</h3>
            <p className="text-slate-300 mb-4 font-semibold">
              {personalInfo.title}
            </p>
            <p className="text-sm text-slate-400">
              Building exceptional mobile experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-cyan-400">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-slate-400 hover:text-cyan-400 transition-colors text-sm hover:translate-x-2 inline-block transition-transform"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-cyan-400">Contact</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm group"
              >
                <Mail size={16} className="group-hover:scale-110 transition-transform" />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm group"
              >
                <Phone size={16} className="group-hover:scale-110 transition-transform" />
                <span>{personalInfo.phone}</span>
              </a>
              <div className="flex space-x-3 pt-2">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass rounded-lg hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500 transition-all hover:scale-110 border border-cyan-500/30"
                >
                  <LinkedinIcon size={20} className="text-cyan-400 hover:text-white transition-colors" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass rounded-lg hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500 transition-all hover:scale-110 border border-cyan-500/30"
                >
                  <GithubIcon size={20} className="text-cyan-400 hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-500/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400 mb-4 md:mb-0">
            © {currentYear} {personalInfo.name}. All rights reserved. Made with{' '}
            <Heart className="inline text-cyan-400 animate-pulse" size={16} /> and code.
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