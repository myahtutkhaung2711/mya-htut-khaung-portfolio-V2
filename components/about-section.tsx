"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Code2, Cpu, Globe, Users } from "lucide-react"

const softSkills = [
  { label: "Problem Solving", icon: Code2 },
  { label: "Team Collaboration", icon: Users },
  { label: "Communication", icon: Globe },
  { label: "Analytical Thinking", icon: Cpu },
]

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
          className="mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-balance">
            Passionate about building digital experiences
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left — Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-3 rounded-2xl border border-primary/15" />
              <div className="absolute -inset-6 rounded-3xl border border-primary/8" />

              <div className="relative w-64 h-72 md:w-72 md:h-80 rounded-2xl overflow-hidden border border-border shadow-2xl">
                <Image
                  src="/images/profile-1.jpg"
                  alt="Mya Htut Khaung"
                  fill
                  className="object-cover object-top"
                /> 
                <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-background/50 to-transparent" />
              </div>

              {/* Stat pill */}
              <motion.div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 px-5 py-2.5 rounded-full bg-card border border-border shadow-lg whitespace-nowrap"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium text-foreground bg-success">Open to new opportunities</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Text + Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed text-pretty">
              I&apos;m a passionate Full Stack Web Developer with over 2 years of experience in web application
              development, maintenance, and system enhancement. I specialize in building responsive and
              user-friendly web applications using modern technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              With a strong understanding of backend development, database design, API integration, debugging,
              and system optimization, I&apos;ve worked in both team-based and independent environments,
              including corporate and freelance projects.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              I continuously learn modern technologies and best practices to deliver efficient and scalable
              solutions, contributing to innovative projects while steadily growing my technical skills.
            </p>

            {/* Soft skills grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all cursor-default"
                  >
                    <Icon size={18} className="text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">{skill.label}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
