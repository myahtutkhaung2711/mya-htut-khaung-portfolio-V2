"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react"
import Image from "next/image"

const roles = ["Full Stack Developer", "Freelancer", "UI/UX Designer", "Web Developer"]

export function HeroSection() {
  return (
    <section id="hero" className="section-light min-h-screen flex items-center justify-center py-12 sm:py-20 lg:py-20 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/10 blur-3xl"
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 sm:mb-6"
            >
              <p className="text-sm sm:text-base text-primary font-semibold">Welcome to my portfolio</p>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-4xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6"
            >
              Hi, I&apos;m <br /> Mya Htut Khaung
            </motion.h1>

            {/* Animated Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-3 sm:mb-3"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold h-12 sm:h-14 md:h-16">
                <AnimatedRole roles={roles} />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-lg"
            >
              I'm a <span className="text-primary">Full-Stack Web Developer</span> passionate about building modern, scalable, and high-performance web applications. I specialize in <span className="text-primary">PHP, Laravel, React.js, Node.js, and MySQL</span>, creating clean, maintainable, and user-centered digital solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-3 mb-6 sm:mb-6"
            >
              <motion.a
                href="/cv/Mya_Htut_Khaung_CV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all text-sm sm:text-base"
              >
                <Download size={18} />
                View Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 sm:gap-6"
            >
              {[
                { Icon: Github, link: "https://github.com/myahtutkhaung2711", label: "GitHub" },
                { Icon: Linkedin, link: "https://www.linkedin.com/in/mya-htut-khaung/", label: "LinkedIn" },
                { Icon: Mail, link: "mailto:myahtutkhaung2711@gmail.com", label: "Email" },
              ].map(({ Icon, link, label }) => (
                <motion.a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="p-3 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-all"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96">
                {/* Animated rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, linear: true }}
                  className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary/50 border-r-primary/30"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, linear: true }}
                  className="absolute inset-4 rounded-full border-2 border-transparent border-t-primary/30 border-r-primary/50"
                />

                {/* Profile Image */}
                <div className="absolute inset-6 rounded-full overflow-hidden border-4 border-primary/20 bg-card">
                  <Image
                    src="/images/profile.jpg"
                    alt="Mya Htut Khaung"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Glow effect */}
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 text-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function AnimatedRole({ roles }: { roles: string[] }) {
  const [currentRole, setCurrentRole] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [roles.length])

  return (
    <motion.div
      key={`${currentRole}-${roles[currentRole]}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
    >
      {roles[currentRole]}
    </motion.div>
  )
}

import React from "react"