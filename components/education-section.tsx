"use client"

import { motion } from "framer-motion"
import { BookOpen, Calendar, Award } from "lucide-react"
import { SectionHeader } from "./section-header"

const educations = [
  {
    id: 1,
    institution: "No.(2) Basic Education High School, Mingalardon Township",
    qualification: "Academic High School Graduate",
    duration: "2018 - 2019 Academic Year",
    details: "Completed high school education with a 3 Distinction.",
  },
  {
    id: 2,
    institution: "Twinkle College Myanmar (NCC Education)",
    qualification: "BSc (Hons) Computing",
    duration: "2025 Oct - Ongoing",
    details: "Comprehensive study of computer science fundamentals and software development.",
  },
  {
    id: 3,
    institution: "Fairway Technology Myanmar",
    qualification: "Web Development Certificate",
    duration: "2023",
    details: "Professional training in full-stack web development and modern frameworks.",
  },
  {
    id : 4,
    institution: "Fairway Technology Myanmar",
    qualification: "UI/UX & Frontend-End Web Design Certificate",
    duration: "2023",
    details: "Specialized training in user interface and user experience design principles.",
  }
]

export function EducationSection() {
  return (
    <section id="education" className="section-light py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Education"
          badgeIcon={BookOpen}
          subtitle="Continuous learning through formal education and professional certifications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {educations.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="p-6 sm:p-8 rounded-xl border border-border hover:border-primary bg-card/50 hover:bg-card transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">
                    {edu.qualification}
                  </h3>
                  <p className="text-sm sm:text-base text-primary font-semibold">
                    {edu.institution}
                  </p>
                </div>
                <motion.div
                  whileHover={{ rotate: 20 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"
                >
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </motion.div>
              </div>

              <div className="flex items-center gap-2 mb-4 text-xs sm:text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 text-primary" />
                {edu.duration}
              </div>

              <p className="text-sm text-muted-foreground">
                {edu.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}