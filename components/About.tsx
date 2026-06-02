"use client";

import { motion } from "motion/react";
import { Code2, Database, BrainCircuit } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 relative border-t border-zinc-200 dark:border-zinc-800/50 bg-white/50 dark:bg-zinc-950/50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left Column: Heading & Stats */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                About me
              </h2>
              <p className="text-xl text-indigo-400 font-medium mb-6">
                I engineer applications using data intelligence.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-zinc-100/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl">
                  <div className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">6+</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                    Years of Experience
                  </div>
                </div>
                <div className="p-6 bg-zinc-100/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl">
                  <div className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">
                    GenAI
                  </div>
                  <div className="text-sm text-zinc-400 font-medium">
                    & Data Engineering
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-7 lg:pl-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 text-zinc-600 dark:text-zinc-400 leading-relaxed"
            >
              <p>
                <strong className="text-zinc-900 dark:text-zinc-200">Sidharth R.</strong> is a
                Lead Software Engineer at Persistent Systems with over 6 years
                of experience, specializing in Generative AI applications within
                the healthcare domain. Leveraging tools like Vertex AI and AWS,
                he drives enterprise-grade production deployments that deliver
                real-world impact.
              </p>
              <p>
                From architecting scalable data solutions with Databricks, Unity
                Catalog, and Medallion architectures to designing
                high-performance Distributed Search Orchestration and Agentic AI
                workflows, Sidharth R. brings comprehensive expertise across the
                entire data and AI lifecycle. His strong foundation was honed at
                IBM, focusing on model development, optimization, and advanced
                analytics using Python and PyTorch.
              </p>
              <p>
                Passionate about the transformative potential of AI, he is
                continuously enhancing his expertise through an MS in Machine
                Learning and AI from Liverpool John Moores University and a
                Postgraduate Diploma from IIIT-Bangalore.
              </p>
              <p>
                Sidharth R. is a certified expert in Azure AI, Data Science, and
                GenAI (including Gemini and Imagen). His technical arsenal
                features advanced methodologies like Machine Learning (LightGBM,
                ONNX), Retrieval-Augmented Generation (RAG), LLM fine-tuning,
                and Agentic AI, backed by a history of research publications,
                patents, and enterprise-scale deployments.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
