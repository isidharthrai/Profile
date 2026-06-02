"use client";

import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Data Engineer / Lead Software Engineer",
    company: "Persistent Systems",
    location: "Gurugram, India",
    period: "April 2025 - Present",
    description:
      "Designed scalable data solutions and ETL/ELT pipelines using Databricks, Unity Catalog, Delta Lake, and Medallion Architecture. Built unified distributed search orchestration APIs with FastAPI, OpenTelemetry, and Kubernetes. Led backend engineering with MongoDB Atlas (Vector Search) and engineered React-based AI Micro-Frontends. Integrated Agentic AI, RAG frameworks, and advanced Prompt Engineering to build transformative Generative AI deployments.",
  },
  {
    role: "Application Developer & Associate System Engineer",
    company: "IBM",
    location: "Gurugram / Bengaluru, India",
    period: "Jan 2021 - April 2025",
    description:
      "Focused on machine learning model development, optimization, and deployment using Python and TensorFlow. Facilitated end-to-end ML lifecycles, structured robust data environments, and mentored team members.",
  },
  {
    role: "Software Development Engineer",
    company: "AXL Electric Vehicles",
    location: "Toronto, Canada (Remote)",
    period: "Jun 2020 - Dec 2020",
    description:
      "Led the development of a sentiment analysis system for tweets, achieving 80% accuracy. Conducted in-depth research and architected features for a secure, end-to-end encrypted messaging application.",
  },
  {
    role: "Software Developer",
    company: "Tecnovix - Soluções Inteligentes",
    location: "São Paulo, Brazil (Remote)",
    period: "Jan 2019 - Mar 2019",
    description:
      "Implemented data pre-processing techniques and developed effective Machine Learning models using Python. Promoted to project mentor to guide colleagues in ML implementations.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            My Experience
          </h2>
        </motion.div>

        <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
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
                <div className="w-3 h-3 rounded-full bg-indigo-500" />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-3 sm:gap-2">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{exp.role}</h3>
                <span className="inline-flex self-start sm:self-auto items-center px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium whitespace-nowrap shrink-0">
                  {exp.period}
                </span>
              </div>

              <div className="text-zinc-700 dark:text-zinc-300 font-medium mb-4 flex items-center gap-2">
                <Briefcase size={16} className="text-zinc-400 dark:text-zinc-500" />
                {exp.company} <span className="text-zinc-400 dark:text-zinc-600">•</span>{" "}
                {exp.location}
              </div>

              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
