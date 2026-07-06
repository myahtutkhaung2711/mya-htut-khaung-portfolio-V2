"use client"

import { motion } from "framer-motion"
import { User, Award, Target, Heart } from "lucide-react"
import { SectionHeader } from "./section-header"
import Image from "next/image"

const skills = [
  { icon: Award, title: "Quality", description: "Clean, reliable, and maintainable code." },
  { icon: Target, title: "Focused", description: "Dedicated to delivering quality results." },
  { icon: Heart, title: "Passionate", description: "Always learning and improving." },
]

export function AboutSection() {
  return (
    <section id="about" className="section-light py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background animation */}
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          badge="About Me"
          badgeIcon={User}
          subtitle="Passionate about building modern, scalable, and user-friendly web applications."
        />

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-full max-w-sm"
            >
              <div className="relative w-65 h-75 md:w-85 md:h-100 rounded-2xl overflow-hidden border border-border shadow-2xl">
                <Image
                  src="/images/mhk_profile.jpg"
                  alt="Mya Htut Khaung"
                  fill
                  className="object-cover object-fit"
                />
              </div>
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent blur-2xl -z-10"
              />
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed"
            >
              I&apos;m a dedicated <span className="font-semibold text-primary">Full Stack Developer</span>  passionate about building responsive, user-friendly, and modern web applications. I enjoy transforming ideas into scalable digital solutions with clean, maintainable code and intuitive user experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-sm sm:text-base text-muted-foreground mb-8 leading-relaxed"
            >
              My expertise includes <span className="font-semibold text-primary">PHP/Laravel, React.js, Next.js, Node.js, MySQL, and MongoDB</span>. I&apos;m committed to continuous learning, improving my skills, and staying up to date with modern web technologies and industry best practices.
            </motion.p>

            {/* Skills Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className="p-4 sm:p-5 rounded-lg border border-border hover:border-primary bg-card/50 hover:bg-card transition-all"
                  >
                    <motion.div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </motion.div>
                    <h3 className="font-semibold text-foreground text-sm sm:text-base mb-1">
                      {skill.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {skill.description}
                    </p>
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