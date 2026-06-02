"use client";

import { motion } from "motion/react";

const skills = [
  {
    category: "Generative & Agentic AI",
    technologies: "Azure OpenAI, RAG, LoRA, Agentic AI, LLMs",
    proficiency: 95,
  },
  {
    category: "AI Models & Frameworks",
    technologies:
      "Claude, Gemini, Llama, LangChain, Sentence Transformers, ONNX, LightGBM",
    proficiency: 90,
  },
  {
    category: "Data Engineering & Processing",
    technologies:
      "PySpark, Databricks, Medallion Architecture, Delta Lake, Argo Workflows",
    proficiency: 95,
  },
  {
    category: "Backend & MLOps",
    technologies:
      "FastAPI, Python, OpenTelemetry, Pydantic, Async HTTP, Docker, Kubernetes",
    proficiency: 90,
  },
  {
    category: "Databases & Search",
    technologies:
      "MongoDB Atlas (Vector Search), Qdrant, Vespa, SQL, Elasticsearch",
    proficiency: 90,
  },
  {
    category: "Frontend & UI Architecture",
    technologies:
      "React 18, TypeScript, Module Federation (Micro-Frontends), MUI, Tailwind CSS, Jest",
    proficiency: 85,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 relative bg-white/50 dark:bg-zinc-950/50 border-y border-zinc-200 dark:border-zinc-800/50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Skills
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl">
            Technical proficiency across the modern data and AI stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-end mb-2">
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {skill.category}
                  </h3>
                  <p className="text-sm text-zinc-500 mt-1">
                    {skill.technologies}
                  </p>
                </div>
                <span className="text-sm font-mono text-indigo-400">
                  {skill.proficiency}%
                </span>
              </div>
              <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.2 + index * 0.1,
                    ease: "easeOut",
                  }}
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
