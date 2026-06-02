"use client";

import { motion } from "motion/react";
import {
  FileText,
  Lightbulb,
  ExternalLink,
  Database,
  Mic,
  MessageSquare,
  Server,
  Brain,
  Route,
  Search,
  Layout,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

const portfolioItems = [
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

export default function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Handle scroll events to update dot indicator natively without thrashing state
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;

    // Calculate which card is closest to the center of the scroll container
    const scrollCenter = container.scrollLeft + container.offsetWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    Array.from(container.children).forEach((child, index) => {
      const childElement = child as HTMLElement;
      const childCenter =
        childElement.offsetLeft + childElement.offsetWidth / 2;
      const distance = Math.abs(scrollCenter - childCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const child = container.children[index] as HTMLElement;

    if (child) {
      container.scrollTo({
        left:
          child.offsetLeft - container.offsetWidth / 2 + child.offsetWidth / 2,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  // Auto-scroll that pauses on hover (using native smooth scroll)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const nextIndex =
        activeIndex >= portfolioItems.length - 1 ? 0 : activeIndex + 1;
      scrollTo(nextIndex);
    }, 4000); // Autoscroll every 4 seconds

    return () => clearInterval(interval);
  }, [activeIndex, isHovered]);

  return (
    <section
      id="portfolio"
      className="py-24 relative border-t border-zinc-200 dark:border-zinc-800/50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
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
            projects across multiple domains including Healthcare, Supply Chain, and Finance.
          </p>
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 border-l-2 border-indigo-500/50 pl-4 md:pl-6">
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100">2+</span>
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mt-1">Publications</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100">1+</span>
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mt-1">Patents</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100">8+</span>
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mt-1">Projects</span>
            </div>
            <div className="flex flex-col justify-center translate-y-1 md:translate-y-2 w-full md:w-auto">
              <span className="text-sm font-medium text-indigo-400 italic">...& counting</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div
        className="relative w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-[7.5vw] md:px-[15%] pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth items-stretch"
        >
          {portfolioItems.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className={`relative px-8 py-8 md:py-10 rounded-3xl bg-zinc-100/40 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 transition-all duration-300 group flex flex-col justify-between shrink-0 hover:bg-zinc-200/40 dark:hover:bg-zinc-800/40 w-[85vw] md:w-[70%] h-[70vh] min-h-[450px] max-h-[600px] snap-center ${item.color}`}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pr-2">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-full bg-white/80 dark:bg-zinc-950/80 border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm transition-transform group-hover:scale-110 shrink-0">
                      <item.icon size={18} className={item.iconColor} />
                    </div>
                    <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 leading-snug group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  <p
                    className={`text-sm md:text-base font-semibold mb-6 ${item.iconColor}`}
                  >
                    {item.focus}
                  </p>

                  <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed whitespace-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between shrink-0">
                  <span className="text-xs font-medium font-mono text-zinc-500 bg-white/50 dark:bg-zinc-950/50 px-3 py-1.5 rounded-full border border-zinc-200/50 dark:border-zinc-800/50 truncate max-w-[200px] md:max-w-xs">
                    {item.venue}
                  </span>
                  <button className="w-8 h-8 rounded-full bg-zinc-100/80 dark:bg-zinc-800/80 flex items-center justify-center group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors shrink-0">
                    <ExternalLink
                      size={14}
                      className="text-zinc-600 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex items-center justify-center gap-3 mt-2">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-indigo-500"
                  : "w-2 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
