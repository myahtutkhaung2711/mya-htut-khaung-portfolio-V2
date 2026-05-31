"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Globe, Code2 } from "lucide-react"

const projects = [
  {
    title: "eJLS — e-Learning Japanese Language School",
    description:
      "A comprehensive e-learning platform for a Japanese Language School, featuring course management, student enrollment, lesson content delivery, and progress tracking. Built and maintained as part of the WILLTEC MYANMAR corporate system.",
    technologies: ["PHP", "Laravel", "MySQL", "HTML/CSS", "JavaScript"],
    category: "Web Application",
    demo: "#",
    repo: "https://github.com/myahtutkhaung2711",
    featured: true,
  },
  {
    title: "WILLTEC Myanmar Corporate Website",
    description:
      "Maintained and enhanced the official corporate website for WILLTEC MYANMAR CO., LTD., implementing new features, fixing bugs, and optimizing database performance to support business operations.",
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript"],
    category: "Corporate Website",
    demo: "#",
    repo: "https://github.com/myahtutkhaung2711",
    featured: true,
  },
  {
    title: "Full Stack Web Application (Freelance)",
    description:
      "Developed a full-stack web application for a freelance client, including REST API design, database architecture, and responsive front-end implementation. Delivered end-to-end from requirement gathering to deployment.",
    technologies: ["PHP", "Laravel", "MySQL", "React.js", "REST API"],
    category: "Freelance Project",
    demo: "#",
    repo: "https://github.com/myahtutkhaung2711",
    featured: false,
  },
  {
    title: "REST API Service",
    description:
      "Designed and implemented RESTful API endpoints for mobile and web application consumption, including authentication, data validation, and optimized query handling for scalable performance.",
    technologies: ["Node.js", "PHP", "Laravel", "MySQL", "Postman"],
    category: "API Development",
    demo: "#",
    repo: "https://github.com/myahtutkhaung2711",
    featured: false,
  },
  {
    title: "Responsive UI/UX Web Design",
    description:
      "Designed and developed responsive front-end interfaces with a focus on user experience, clean layout, and modern aesthetics using React.js and Tailwind CSS across multiple client projects.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "HTML/CSS"],
    category: "Frontend / UI-UX",
    demo: "#",
    repo: "https://github.com/myahtutkhaung2711",
    featured: false,
  },
  {
    title: "Database Design & Optimization",
    description:
      "Planned and optimized relational database schemas for web applications, including normalization, indexing strategies, and query performance tuning for MySQL-based systems.",
    technologies: ["MySQL", "PHP", "Laravel", "Query Optimization"],
    category: "Database",
    demo: "#",
    repo: "https://github.com/myahtutkhaung2711",
    featured: false,
  },
]

const categoryColors: Record<string, string> = {
  "Web Application": "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  "Corporate Website": "text-blue-400 bg-blue-400/10 border-blue-400/20",
  "Freelance Project": "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  "API Development": "text-orange-400 bg-orange-400/10 border-orange-400/20",
  "Frontend / UI-UX": "text-pink-400 bg-pink-400/10 border-pink-400/20",
  "Database": "text-violet-400 bg-violet-400/10 border-violet-400/20",
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      whileHover={{
        y: -8,
        rotateX: 2,
        rotateY: -2,
        scale: 1.02,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`group relative flex flex-col p-6 rounded-2xl border bg-card transition-all duration-300 ${
        project.featured
          ? "border-primary/25 hover:border-primary/50 shadow-lg hover:shadow-primary/10"
          : "border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
      }`}
    >
      {/* Featured glow */}
      {project.featured && (
        <motion.div
          className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      )}

      {/* Top row: category + featured badge */}
      <div className="flex items-center justify-between mb-4">
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
            categoryColors[project.category] ?? "text-primary bg-primary/10 border-primary/20"
          }`}
        >
          {project.category}
        </span>
        {project.featured && (
          <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
            Featured
          </span>
        )}
      </div>

      {/* Icon */}
      <motion.div
        className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
        animate={hovered ? { rotate: [0, -6, 6, 0] } : { rotate: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Code2 size={20} className="text-primary" />
      </motion.div>

      {/* Title & Description */}
      <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug">{project.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">{project.description}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-3 mt-auto">
        <motion.a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="flex items-center gap-2 flex-1 justify-center px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/85 transition-colors"
          aria-label={`Demo for ${project.title}`}
        >
          <Globe size={15} />
          Demo Link
        </motion.a>
        <motion.a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="flex items-center gap-2 flex-1 justify-center px-4 py-2.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium border border-border hover:border-primary/40 hover:bg-secondary/70 transition-all"
          aria-label={`View code for ${project.title}`}
        >
          <Github size={15} />
          View Code
        </motion.a>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 relative bg-card/30">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-balance">Featured Projects</h2>
          <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed">
            A selection of projects built across corporate, freelance, and personal work — spanning full-stack
            web applications, APIs, and UI/UX-focused interfaces.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <p className="text-muted-foreground text-sm">See more work on GitHub</p>
          <motion.a
            href="https://github.com/myahtutkhaung2711"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary border border-border hover:border-primary/40 text-sm font-medium transition-all"
          >
            <Github size={16} />
            github.com/myahtutkhaung2711
            <ExternalLink size={13} className="text-muted-foreground" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
