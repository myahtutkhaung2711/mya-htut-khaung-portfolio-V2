"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-balance">
            Passionate about building digital experiences
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed text-pretty">
              I&apos;m a passionate Full Stack Web Developer with over 2 years of experience in web application development, 
              maintenance, and system enhancement. I specialize in building responsive and user-friendly web applications 
              using modern technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              With a strong understanding of backend development, database design, API integration, debugging, and system 
              optimization, I&apos;ve worked in both team-based and independent development environments, including corporate 
              and freelance projects.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              I continuously learn modern technologies and best practices to deliver efficient and scalable solutions. 
              My goal is to contribute to innovative projects while continuously improving my technical and professional skills.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { label: "Problem Solving", icon: "🎯" },
              { label: "Team Collaboration", icon: "🤝" },
              { label: "Communication", icon: "💬" },
              { label: "Time Management", icon: "⏰" },
              { label: "Analytical Thinking", icon: "🧠" },
              { label: "Self-Learning", icon: "📚" },
            ].map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all cursor-default"
              >
                <span className="text-2xl mb-2 block">{skill.icon}</span>
                <span className="text-sm font-medium text-foreground">{skill.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 pt-12 border-t border-border"
        >
          <h3 className="text-lg font-semibold mb-6">Languages</h3>
          <div className="flex flex-wrap gap-4">
            {[
              { name: "Myanmar", level: "Native" },
              { name: "English", level: "Working Proficiency" },
              { name: "Japanese", level: "Basic" },
            ].map((lang) => (
              <div
                key={lang.name}
                className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm"
              >
                <span className="font-medium">{lang.name}</span>
                <span className="text-muted-foreground ml-2">· {lang.level}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
