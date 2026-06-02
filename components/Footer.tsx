"use client";

import { Github, Linkedin, Instagram, Mail, ArrowUpRight, Code2, Youtube } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 pt-24 pb-12 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-indigo-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-20 justify-between items-start mb-20 lg:mb-24">
          <div className="max-w-md w-full">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Let&apos;s create something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">extraordinary.</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8 leading-relaxed font-light">
              I&apos;m open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <a
              href="mailto:isidharthrai@gmail.com"
              className="group inline-flex items-center gap-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 px-6 py-3 rounded-full font-medium transition-transform hover:scale-105 active:scale-95"
            >
              Get in touch
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-12 sm:gap-16 w-full lg:w-auto">
            <div>
              <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-6">Expertise</h3>
              <ul className="space-y-4">
                {['Agentic AI & GenAI', 'Machine Learning', 'Data Engineering', 'Full Stack Development'].map((item) => (
                  <li key={item}>
                    <span className="text-zinc-500 font-light hover:text-indigo-400 transition-colors cursor-default">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-6">Connect</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://github.com/isidharthrai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors group"
                  >
                    <Github size={18} className="text-zinc-500 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors" />
                    <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/isidharthrai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                  >
                    <Linkedin size={18} className="text-zinc-500 group-hover:text-blue-400 transition-colors" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:isidharthrai@gmail.com"
                    className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors group"
                  >
                    <Mail size={18} className="text-zinc-500 group-hover:text-rose-400 transition-colors" />
                    <span>Email</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/isidharthrai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors group"
                  >
                    <Instagram size={18} className="text-zinc-500 group-hover:text-pink-400 transition-colors" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@isidharthrai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-400 transition-colors group"
                  >
                    <Youtube size={18} className="text-zinc-500 group-hover:text-red-400 transition-colors" />
                    <span>YouTube</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6 w-full">
          <div className="flex items-center gap-3 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            <Code2 size={24} className="text-indigo-500" />
            <span>Sidharth R<span className="text-indigo-500">.</span></span>
          </div>
          
          <p className="text-sm text-zinc-600 font-medium text-center md:text-left">
            © {new Date().getFullYear()} Sidharth R. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-zinc-600 font-medium">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
