"use client"

import { motion } from "framer-motion"
import { Zap } from "lucide-react"
import { SectionHeader } from "./section-header"
// import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

const skillCategories = [
  {
    name: "Backend",
    skills: [
      { name: "PHP", level: 90 },
      { name: "Laravel", level: 90 },
      { name: "Node.js", level: 75 },
      { name: "REST API", level: 85 },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React.js", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "Database Design", level: 85 },
      { name: "Query Optimization", level: 80 },
    ],
  },
  {
    name: "Tools & DevOps",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 80 },
    ],
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState(0)
  return (
    
    <section id="skills" className="section-dark py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Minimal background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          badge="Technical Skills"
          badgeIcon={Zap}
          subtitle="Proficient in modern technologies and frameworks."
        />

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === index
                  ? "bg-primary text-primary-secondary-foreground"
                  : "border-2 border-primary text-primary text-primary hover:bg-secondary/80"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-foreground">{skill.name}</span>
                <span className="text-sm text-primary font-medium">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 sm:mt-16 p-5 sm:p-6 rounded-lg border border-border bg-card/50"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { label: "Years Experience", value: "2+" },
              { label: "Projects Completed", value: "7+" },
              { label: "Technologies", value: "24+" },
              { label: "Client Satisfaction", value: "75%" },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.08 + 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-14"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="iflex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all text-sm sm:text-base"
          >
            <span>Get In Touch </span> →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}