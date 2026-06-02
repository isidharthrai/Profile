"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Mail, FileText, ArrowRight, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl opacity-50 mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-50 mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          <div className="max-w-3xl lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/50 dark:bg-zinc-800/50 border border-zinc-300/50 dark:border-zinc-700/50 text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for new opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
            >
              Hello, my name is <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Sidharth R.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-4 font-light"
            >
              Lead Software Engineer @ Persistent Systems | Data Engineering &
              GenAI Expert
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base text-zinc-500 mb-10 max-w-2xl leading-relaxed"
            >
              Specializing in Generative AI for healthcare. Leveraging Vertex
              AI, Vespa AI, and AWS to build scalable AI solutions.{" "}
              <br className="hidden md:block" />
              Ex IBM | MS in ML & AI @ LJMU &apos;26 | PGD @ IIIT-B &apos;25 |
              B.E. @ CU &apos;20
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-medium rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                Get in touch
                <ArrowRight size={18} />
              </a>

              <div className="flex items-center gap-3 ml-4">
                <a
                  href="https://linkedin.com/in/isidharthrai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
                >
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/isidharthrai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
                >
                  <Github size={20} />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="mailto:isidharthrai@gmail.com"
                  className="p-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
                >
                  <Mail size={20} />
                  <span className="sr-only">Email</span>
                </a>
                <a
                  href="#"
                  className="p-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex items-center gap-2"
                >
                  <FileText size={20} />
                  <span className="text-sm font-medium hidden sm:block">
                    Resume
                  </span>
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/3 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl bg-transparent">
                <Image
                  src="/profile_image.png"
                  alt="Sidharth R."
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Instagram Floating Icon */}
              <motion.a
                href="https://www.instagram.com/isidharthrai"
                target="_blank"
                rel="noopener noreferrer"
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="absolute top-12 left-0 md:-left-4 z-20 p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-pink-500 rounded-full shadow-2xl hover:scale-110 hover:border-pink-500/50 transition-all pointer-events-auto"
              >
                <Instagram size={24} />
              </motion.a>

              {/* YouTube Floating Icon */}
              <motion.a
                href="https://www.youtube.com/@isidharthrai"
                target="_blank"
                rel="noopener noreferrer"
                animate={{ y: [8, -8, 8] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="absolute bottom-12 right-0 md:-right-4 z-20 p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-red-500 rounded-full shadow-2xl hover:scale-110 hover:border-red-500/50 transition-all pointer-events-auto"
              >
                <Youtube size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
