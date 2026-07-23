"use client";

import { AnimatePresence, motion } from "motion/react";
import {
  FileText,
  Lightbulb,
  Database,
  Mic,
  MessageSquare,
  Server,
  Brain,
  Route,
  Search,
  Layout,
  X,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type PortfolioItem = {
  type: string;
  title: string;
  venue: string;
  focus: string;
  description: string;
  icon: LucideIcon;
  color: string;
  iconColor: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    type: "Research Paper",
    title: "Strategic: Risk, Return and Technical Analysis of Stock Prices",
    venue: "SSRN Publication",
    focus: "Quantitative Finance, Predictive Modeling & ML",
    description:
      'This research addresses the high volatility and complexity of stock market movements by synthesizing fundamental indicators with technical analysis. The paper introduces and implements a novel machine learning framework engineered specifically to filter market "noise" and predict asset price trajectories under volatile conditions, offering a robust empirical model for algorithmic decision-making.',
    icon: FileText,
    color: "from-blue-500/10 to-indigo-500/10 hover:border-indigo-500/50",
    iconColor: "text-indigo-400",
  },
  {
    type: "Patent",
    title: "Desmogging Framework for Intelligent Transport",
    venue: "Patent IN 201911036469",
    focus: "Computer Vision & Infrastructure",
    description:
      'A proprietary hardware-and-software-aligned framework designed to perform real-time, low-latency "desmogging" (dehazing) on live visual data streams. Ensures operational safety of autonomous transit networks in polluted urban ecosystems.',
    icon: Lightbulb,
    color: "from-emerald-500/10 to-teal-500/10 hover:border-emerald-500/50",
    iconColor: "text-emerald-400",
  },
  {
    type: "Research Paper",
    title: "Adaptive Prompt Engineering Strategies for GenAI in Finance",
    venue: "Research Publication",
    focus: "Generative AI Architecture, LLMs, & Financial NLP",
    description:
      "Tackles critical bottlenecks of deploying LLMs within highly precise, domain-specific environments like finance. The methodology centers on designing dynamic orchestration techniques like Tree-of-Thought (ToT) and Chain-of-Thought (CoT) to guide an LLM to self-evaluate, deliberate on intermediate financial metrics, and correct its course mid-generation.",
    icon: FileText,
    color: "from-purple-500/10 to-pink-500/10 hover:border-purple-500/50",
    iconColor: "text-purple-400",
  },
  {
    type: "Enterprise Project",
    title: "GenAI Solutions for Supply Chain & Business Intelligence",
    venue: "Industry Deployment",
    focus:
      "Azure OpenAI, RAG, LLM Fine-Tuning (PEFT/LoRA) & Predictive Analytics",
    description:
      "Developed Generative AI models using Azure OpenAI and RAG to optimize supply chain intelligence. Built an AI CRM bot using LoRA reducing response times by 27%, and a LangChain SQL Query Generator improving performance by 35%. Integrated predictive time-series models to reduce forecasting inefficiencies by 20%.",
    icon: Database,
    color: "from-blue-500/10 to-cyan-500/10 hover:border-blue-500/50",
    iconColor: "text-blue-400",
  },
  {
    type: "Enterprise Project",
    title: "GenAI-Powered Supply Chain Optimization Bot",
    venue: "Enterprise Solution",
    focus: "Conversational AI, Demand Forecasting & Voice Assistants",
    description:
      "Engineered an AI-powered chatbot and voice assistant for real-time inventory tracking, demand forecasting, and vendor management. The voice bot enables hands-free operational updates through natural language commands, leveraging Azure AI Speech Services, STT, and Power BI embedded APIs.",
    icon: Mic,
    color: "from-emerald-500/10 to-teal-500/10 hover:border-emerald-500/50",
    iconColor: "text-emerald-400",
  },
  {
    type: "Enterprise Project",
    title: "Conversational AI for SQL Queries Bot",
    venue: "Enterprise Solution",
    focus: "Azure OpenAI, LangChain, RAG & Vector Databases",
    description:
      "Developed an AI-powered query generator enabling users to retrieve database insights via natural language. Built with Azure OpenAI, LangChain, and RAG architectures integrated with Qdrant vector databases and SQLAlchemy, significantly improving dynamic database query resolution by 35%.",
    icon: MessageSquare,
    color: "from-orange-500/10 to-amber-500/10 hover:border-orange-500/50",
    iconColor: "text-orange-400",
  },
  {
    type: "Enterprise Project",
    title: "Data Engineering Library & ETL Pipelines",
    venue: "Healthcare Data Platform",
    focus: "PySpark, Databricks, Medallion Architecture & Delta Lake",
    description:
      "Developed a reusable Python library and ETL suite for large-scale healthcare data processing on cloud-based Databricks clusters. Implemented a full Medallion architecture for patient and provider data ingestion from AWS S3, utilizing PySpark for complex transformations. Enabled advanced TF-IDF scoring and geocoding enrichment, processing millions of records for real-time healthcare search indexing via MongoDB Atlas.",
    icon: Server,
    color: "from-indigo-500/10 to-violet-500/10 hover:border-indigo-500/50",
    iconColor: "text-indigo-400",
  },
  {
    type: "Enterprise Project",
    title: "Enterprise MongoDB Data Platform",
    venue: "Healthcare & Enterprise Solutions",
    focus: "FastAPI, MongoDB Atlas, NLP (Transformers) & Argo Workflows",
    description:
      "Architected a scalable MongoDB data platform serving diverse knowledge bases with a strong emphasis on healthcare data structures. Implemented multi-step Argo Workflow pipelines for automated data ingestion. Built FastAPI-based REST services and integrated Sentence Transformers for semantic embedding generation enabling intelligent provider search, processing millions of complex medical documents.",
    icon: Brain,
    color: "from-pink-500/10 to-rose-500/10 hover:border-pink-500/50",
    iconColor: "text-pink-400",
  },
  {
    type: "Enterprise Project",
    title: "Search Orchestration API & Service Aggregation Library",
    venue: "Unified Search Architecture",
    focus:
      "FastAPI, Async HTTP, OpenTelemetry, Kubernetes & Distributed Systems",
    description:
      "Architected a search orchestration API and reusable library to multiplex requests across diverse search backends and consolidate results. Leveraging an abstract base class pattern, it enables plug-and-play integration for providers like Vespa and MongoDB Search. Implemented high-performance async communication via httpx, OpenTelemetry distributed tracing, and Pydantic for type-safe DTOs. Containerized and deployed on Kubernetes to improve response times and centralize search routing.",
    icon: Route,
    color: "from-green-500/10 to-teal-500/10 hover:border-green-500/50",
    iconColor: "text-green-400",
  },
  {
    type: "Enterprise Project",
    title: "ML-Powered Provider Search with Semantic Ranking",
    venue: "Healthcare Search Architecture",
    focus: "MongoDB Atlas Vector Search, LightGBM, ONNX & Databricks",
    description:
      "Architected an ML-powered healthcare provider search system featuring multi-phase ranking: MongoDB Atlas Vector Search for candidate retrieval and LightGBM for personalized re-ranking. Engineered 384-dimensional ONNX sentence transformer embeddings for semantic encoding and built full-load Databricks ingestion pipelines. Achieved sub-millisecond query performance via denormalized schema design, deployed seamlessly on Kubernetes.",
    icon: Search,
    color: "from-amber-500/10 to-yellow-500/10 hover:border-amber-500/50",
    iconColor: "text-amber-400",
  },
  {
    type: "Enterprise Project",
    title: "AI-Powered Search Micro-Frontend",
    venue: "Frontend Architecture",
    focus: "React 18, TypeScript, Module Federation, MUI & Real-Time AI",
    description:
      "Developed a React-based micro-frontend for healthcare provider search, featuring an AI-powered conversational interface with real-time streaming. Built interactive management UIs with dynamic filtering, geolocation proximity search, and comprehensive export functionalities. Configured Module Federation via Rsbuild for seamless host integration as an independently deployable unit, ensuring component reliability across breakpoints with Jest.",
    icon: Layout,
    color: "from-cyan-500/10 to-blue-500/10 hover:border-cyan-500/50",
    iconColor: "text-cyan-400",
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Research Papers", value: "Research Paper" },
  { label: "Patents", value: "Patent" },
  { label: "Enterprise", value: "Enterprise Project" },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: portfolioItems.length };
    for (const f of filters) {
      if (f.value === "all") continue;
      map[f.value] = portfolioItems.filter((i) => i.type === f.value).length;
    }
    return map;
  }, []);

  const visibleItems = useMemo(
    () =>
      activeFilter === "all"
        ? portfolioItems
        : portfolioItems.filter((i) => i.type === activeFilter),
    [activeFilter]
  );

  // Close modal on Escape and lock body scroll while open
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [selected]);

  return (
    <section
      id="portfolio"
      className="py-24 relative border-t border-zinc-200 dark:border-zinc-800/50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Portfolio & Works
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl font-light mb-8">
            A showcase of my research publications, patents, and engineering
            projects across multiple domains including Healthcare, Supply Chain,
            and Finance.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 border-l-2 border-indigo-500/50 pl-4 md:pl-6 mb-10">
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                2+
              </span>
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mt-1">
                Publications
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                1+
              </span>
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mt-1">
                Patents
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                8+
              </span>
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mt-1">
                Projects
              </span>
            </div>
            <div className="flex flex-col justify-center translate-y-1 md:translate-y-2 w-full md:w-auto">
              <span className="text-sm font-medium text-indigo-400 italic">
                ...&amp; counting
              </span>
            </div>
          </div>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;
            return (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-white dark:text-zinc-950"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="portfolio-filter-pill"
                    className="absolute inset-0 rounded-full bg-zinc-900 dark:bg-white"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">
                  {filter.label}
                  <span
                    className={`ml-1.5 ${
                      isActive
                        ? "text-white/60 dark:text-zinc-950/60"
                        : "text-zinc-400 dark:text-zinc-600"
                    }`}
                  >
                    {counts[filter.value]}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Cards grid */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item) => (
              <motion.button
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onClick={() => setSelected(item)}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/5 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:shadow-black/40 ${item.color}`}
              >
                {/* Gradient tint that appears on hover */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${item.color}`}
                />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-full border border-zinc-200/80 bg-white/80 p-2.5 shadow-sm transition-transform group-hover:scale-110 dark:border-zinc-800/80 dark:bg-zinc-950/80">
                      <item.icon size={18} className={item.iconColor} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="mb-3 text-lg font-bold leading-snug text-zinc-900 transition-colors group-hover:text-zinc-950 dark:text-zinc-100 dark:group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className={`mb-4 text-sm font-semibold ${item.iconColor}`}>
                    {item.focus}
                  </p>

                  <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-zinc-200/60 pt-4 dark:border-zinc-800/60">
                    <span className="truncate rounded-full border border-zinc-200/50 bg-white/50 px-3 py-1 font-mono text-xs text-zinc-500 dark:border-zinc-800/50 dark:bg-zinc-950/50">
                      {item.venue}
                    </span>
                    <span className="shrink-0 text-xs font-semibold text-zinc-400 transition-colors group-hover:text-indigo-500 dark:group-hover:text-indigo-400">
                      Read more →
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6"
          >
            <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm" />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selected.title}
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-zinc-200 bg-white p-7 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 md:p-9"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                <X size={18} />
              </button>

              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-full border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-950">
                  <selected.icon size={22} className={selected.iconColor} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                  {selected.type}
                </span>
              </div>

              <h3 className="mb-3 text-2xl font-bold leading-tight text-zinc-900 dark:text-white">
                {selected.title}
              </h3>

              <p className={`mb-5 text-sm font-semibold ${selected.iconColor}`}>
                {selected.focus}
              </p>

              <p className="mb-6 leading-relaxed text-zinc-600 dark:text-zinc-300">
                {selected.description}
              </p>

              <div className="border-t border-zinc-200 pt-5 dark:border-zinc-800">
                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 font-mono text-xs text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950">
                  {selected.venue}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
