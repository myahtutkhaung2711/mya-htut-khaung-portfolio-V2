"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react"
import { SectionHeader } from "./section-header"

const experiences = [
  {
    id: 1,
    company: "WILLTEC MYANMAR",
    position: "Intern Web Developer",
    duration: "April 2024 - December 2024 (8 Months)",
    location: "Yangon, Myanmar",
    description: "Contributed to web application development and maintenance using PHP/Laravel while assisting with testing, debugging, and documentation.",
    highlights: "Redesigned web page with responsive design and improved user experience",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "MySQL", "Git", "Bootstrap", "REST APIs"],
  },
  {
    id: 2,
    company: "WILLTEC MYANMAR",
    position: "Junior Web Developer",
    duration: "January 2025 - March 2026 (1 Year 3 Months)",
    location: "Yangon, Myanmar",
    description: "Assisted in web development projects, learned modern frameworks and best coding practices.",
    highlights: "Built 2+ responsive web pages using PHP/Laravel and Bootstrapcontributing to improved user experience and functionality.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "MySQL", "Git", "Bootstrap", "REST APIs"],
  },
  {
    id: 3,
    company: "Freelance Web Development",
    position: "Full Stack Developer & UI/UX Designer",
    duration: "August 2025 - Present",
    location: "Remote",
    description: "Design and develop custom web solutions for clients. Manage full project lifecycle from design to deployment.",
    highlights: "Completed 3+ successful projects with 98% client satisfaction",
    technologies: ["PHP", "Laravel", "Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB", "Figma"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
}

const techBadgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
}

export function ExperienceSection() {
  return (
    <section id="experience" className="section-dark py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl"
          animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-accent/5 blur-3xl"
          animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          badge="Career Journey"
          badgeIcon={Briefcase}
          title="Experience"
          subtitle="My professional journey building innovative solutions."
        />

        {/* Experience List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              whileHover={{ x: 8 }}
              className="group relative"
            >
              <div className="flex gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl border border-border hover:border-primary bg-card/50 hover:bg-card transition-all duration-300">
                {/* Left accent line */}
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="w-1 bg-primary rounded-full flex-shrink-0"
                />

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="min-w-0">
                      <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.1 }}
                        viewport={{ once: true }}
                        className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors truncate"
                      >
                        {exp.position}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.15 }}
                        viewport={{ once: true }}
                        className="text-xs sm:text-sm text-primary font-semibold"
                      >
                        {exp.company}
                      </motion.p>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 45 }}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                    >
                      <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </motion.div>
                  </div>

                  {/* Meta info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-xs text-muted-foreground mb-3"
                  >
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      <span className="truncate">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      <span className="truncate">{exp.location}</span>
                    </div>
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.25 }}
                    viewport={{ once: true }}
                    className="text-xs sm:text-sm text-muted-foreground mb-4"
                  >
                    {exp.description}
                  </motion.p>

                  {/* Technologies */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2 mb-4"
                  >
                    {exp.technologies.map((tech, techIdx) => (
                      <motion.span
                        key={tech}
                        variants={techBadgeVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{
                          delay: index * 0.2 + 0.3 + techIdx * 0.05,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="px-2.5 py-1 text-xs font-medium border border-primary/40 text-primary bg-primary/5 rounded-full hover:border-primary/80 hover:bg-primary/10 transition-all"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Highlight */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + 0.35 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-lg hover:border-primary/60 transition-all cursor-pointer group/highlight"
                  >
                    <span className="text-xs font-medium text-primary">{exp.highlights}</span>
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-primary group-hover/highlight:translate-x-1 transition-transform"
                    >
                      <ArrowRight className="w-3 h-3" />
                    </motion.span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}