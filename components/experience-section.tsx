"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react"
import { SectionHeader } from "./section-header"

const experiences = [
  {
    id: 1,
    company: "WILLTEC MYANMAR",
    position: "Intern Web Developer",
    duration: "April 2024 - Dec 2024 ( 8 Months )",
    location: "Yangon, Myanmar",
    description: "Contributed to web application development and maintenance using PHP/Laravel while assisting with testing, debugging, and documentation.",
    highlights: "PHP, Laravel, website maintenance, testing, debugging, documentation, and collaboration with senior developers.",
  },
  {
    id: 2,
    company: "WILLTEC MYANMAR",
    position: "Junior Web Developer",
    duration: "Jan 2025 - March 2026 ( 1 Year 3 Months )",
    location: "Yangon, Myanmar",
    description: "Developed and maintained scalable web applications using PHP/Laravel while supporting ongoing system improvements",
    highlights: "PHP, Laravel, MySQL, feature development, bug fixing, debugging, testing, system maintenance, Git version control, and website support.",
  },
  {
    id: 3,
    company: "Freelance Projects",
    position: "Full Stack Developer & UI/UX Designer",
    duration: "August 2025 - Present",
    location: "Freelance / Remote",
    description: "Developed and maintained web applications using PHP, Laravel, and MySQL, including REST API integration and frontend development.",
    highlights: "PHP, Laravel, MySQL, REST APIs, HTML, CSS, JavaScript, and client communication.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export function ExperienceSection() {
  return (
    <section id="experience" className="section-dark py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-accent/5 blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          badge="Career Journey"
          badgeIcon={Briefcase}
          title="Experience"
          subtitle="My professional journey building innovative solutions and growing as a developer."
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
              {/* Experience Item */}
              <div className="flex gap-6 p-6 rounded-xl border border-border hover:border-primary bg-card/50 hover:bg-card transition-all duration-300">
                {/* Left accent line */}
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="w-1 bg-gradient-to-b from-primary to-primary/50 rounded-full flex-shrink-0"
                />

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.1 }}
                        viewport={{ once: true }}
                        className="text-xl font-bold text-foreground group-hover:text-primary transition-colors"
                      >
                        {exp.position}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.15 }}
                        viewport={{ once: true }}
                        className="text-sm text-primary font-semibold"
                      >
                        {exp.company}
                      </motion.p>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 45 }}
                      className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                    >
                      <Briefcase className="w-5 h-5 text-primary" />
                    </motion.div>
                  </div>

                  {/* Meta info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-3"
                  >
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      {exp.location}
                    </div>
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.25 }}
                    viewport={{ once: true }}
                    className="text-sm text-muted-foreground mb-3"
                  >
                    {exp.description}
                  </motion.p>

                  {/* Highlight */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all text-sm sm:text-base"
          >
            <span>View My Projects</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}