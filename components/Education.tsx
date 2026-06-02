"use client";

import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Science - MS, Machine Learning and AI Articulation",
    institution: "Liverpool John Moores University",
    location: "United Kingdom (Remote)",
    period: "May 2025 – Apr 2026",
    description: "",
  },
  {
    degree: "Executive Postgraduate Diploma, Machine Learning & Artificial Intelligence",
    institution: "International Institute of Information Technology Bangalore",
    location: "Bengaluru, India",
    period: "Mar 2024 – Apr 2025",
    description: "",
  },
  {
    degree: "Bachelor of Engineering (B.E.), Computer Science",
    institution: "CHANDIGARH UNIVERSITY",
    location: "Chandigarh, India",
    period: "Aug 2016 – May 2020",
    description: "",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Sunbeam English School, Bhagwanpur",
    location: "Varanasi, India",
    period: "2002 – 2015",
    description: "",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-zinc-100/50 dark:bg-zinc-900/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            My Education
          </h2>
        </motion.div>

        <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-4 md:ml-6 space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[21px] top-1 w-10 h-10 rounded-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-3 sm:gap-2">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{edu.degree}</h3>
                <span className="inline-flex self-start sm:self-auto items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium whitespace-nowrap shrink-0">
                  {edu.period}
                </span>
              </div>

              <div className="text-zinc-700 dark:text-zinc-300 font-medium flex items-center gap-2 mb-2">
                <GraduationCap size={16} className="text-zinc-400 dark:text-zinc-500" />
                {edu.institution}
              </div>

              {edu.description && (
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed max-w-3xl">
                  {edu.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
