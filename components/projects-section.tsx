"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Sparkles } from "lucide-react"
import { SectionHeader } from "./section-header"

const projects = [
  {
    id: 1,
    title: "Personal Blog System Website",
    description: "A personal blog system website with Admin Panel for managing posts and categories",
    image: "project/PHP_Blog_System_Project.png",
    technologies: ["PHP", "Bootstrap", "MySQL"],
    demoLink: "#",
    githubLink: "https://github.com/myahtutkhaung2711/PHP-Blog-System",
    category: "PHP Development",
  },
  {
    id: 2,
    title: "E-commerce Website (Online Shopping)",
    description: "An e-commerce website with product listings, shopping cart, and checkout functionality",
    image: "project/project_coming_soon.jpg",
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript"],
    demoLink: "#",
    githubLink: "https://github.com/myahtutkhaung2711/ecommerce_app",
    category: "Full Stack Development",
  },
  {
    id: 3,
    title: "The Phyo - Appointment Booking System (Freelance Project)",
    description: "Appointment Booking System for Customer services",
    image: "project/project_coming_soon.jpg",
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    demoLink: "https://thephyo.com",
    githubLink: "#",
    category: "Full Stack Development",
  },
  {
    id: 4,
    title: "School Project - FEWD (Bean Boutique - Coffee Shop)",
    description: "A responsive coffee shop website built as a school project",
    image: "project/Coffee_Bean_Project.png",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    demoLink: "https://myahtutkhaung2711.github.io/Coffee-Bean-Frontend-Design/index.html",
    githubLink: "https://github.com/myahtutkhaung2711/Coffee-Bean-Frontend-Design",
    category: "Frontend Design",
  },
  {
    id: 5,
    title: "School Project - Database (Database Design and Optimization)",
    description: "A database design and optimization project for a school assignment",
    image: "project/project_coming_soon.jpg",
    technologies: ["MySQL", "StarUML", "Data Dictionary & Normalization"],
    demoLink: "#",
    githubLink: "#",
    category: "Database Design",
  },
  // {
  //   id: 7,
  //   title: "Database Optimization",
  //   description: "Query optimization and database architecture",
  //   image: "project/project_coming_soon.jpg",
  //   technologies: ["MySQL", "PostgreSQL", "Redis", "Optimization"],
  //   demoLink: "#",
  //   githubLink: "https://github.com/myahtutkhaung2711",
  //   category: "Database Design",
  // },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="section-light py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
          animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/10 blur-3xl"
          animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Featured Work"
          badgeIcon={Sparkles}
          title="My Latest Projects"
          subtitle="Showcase of my recent work demonstrating expertise in development and design."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all"
            >
              {/* Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden bg-secondary">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center gap-3"
                >
                  <motion.a
                    href={project.demoLink}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 sm:p-3 bg-primary rounded-full text-foreground"
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 sm:p-3 bg-primary rounded-full text-foreground"
                  >
                    <Github size={18} />
                  </motion.a>
                </motion.div>
                <div className="absolute top-3 left-3 px-3 py-1 bg-primary/90 text-foreground text-xs font-bold rounded-full">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */} 
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="px-2.5 py-1 text-xs font-semibold bg-primary/15 text-primary rounded-full border border-primary/30"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}