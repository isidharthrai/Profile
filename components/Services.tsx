"use client";

import { motion } from "motion/react";
import { Bot, LineChart, Globe } from "lucide-react";

const services = [
  {
    title: "Agentic AI",
    description:
      "Building advanced agentic AI applications to automate complex tasks and enhance decision-making processes.",
    icon: Bot,
    color: "text-indigo-400",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/20",
  },
  {
    title: "Data Science",
    description:
      "Crafting insights from data, deploying machine learning models, and diving into computer vision—bridging the gap between raw data and meaningful solutions.",
    icon: LineChart,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
  },
  {
    title: "Web Development",
    description:
      "Elevating digital presence with WordPress mastery—customized designs, seamless WooCommerce, Shopify integration, and dynamic layouts for a captivating online experience.",
    icon: Globe,
    color: "text-sky-400",
    bgColor: "bg-sky-500/10",
    borderColor: "border-sky-500/20",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            What I do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-600 dark:text-zinc-400 text-lg"
          >
            From understanding your requirements, designing a blueprint and
            delivering the final product, I do everything that falls in between
            these lines.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-zinc-100/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors group"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${service.bgColor} ${service.borderColor} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                {service.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
