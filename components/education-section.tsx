"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

const education = [
  {
    degree: "BSc (Hons) Computing",
    status: "On Going",
    institution: "Twinkle College Myanmar (NCC Education)",
    period: "2025 Oct - Present",
    batch: "Batch-19",
    description: "Currently pursuing BSc (Hons) Computing degree with NCC Education curriculum.",
    highlight: true,
  },
  {
    degree: "Professional Web Development",
    institution: "Fairway Technology Myanmar",
    period: "2023",
    description: "Comprehensive training in full-stack web development including modern frameworks and best practices.",
    highlight: true,
  },
  {
    degree: "UI/UX & Front-End Web Design",
    institution: "Fairway Technology Myanmar",
    period: "2023",
    description: "Focused training on user interface design, user experience principles, and front-end development.",
    highlight: true,
  },
  {
    degree: "Academic Year Graduate",
    institution: "No (2), B.E.H.S Mingalardon",
    period: "2018-2019 Academic Year",
    description: "High school graduation with focus on mathematics and science.",
    highlight: false,
  },
]

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-24 relative bg-card/30">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Learning Journey</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-balance">Education & Training</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`group relative p-6 rounded-xl border transition-all ${
                edu.highlight
                  ? "bg-card border-primary/20 hover:border-primary/40"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              {/* Highlight badge */}
              {edu.highlight && (
                <div className="absolute -top-3 right-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                    {edu.status || "Completed"}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-1">{edu.degree}</h3>
              <p className="text-primary font-medium text-sm mb-3">{edu.institution}</p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Calendar size={14} />
                <span>{edu.period}</span>
                {edu.batch && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                    <span>{edu.batch}</span>
                  </>
                )}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-primary/5 rounded-tl-[40px] rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Certifications/Achievements */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 p-6 rounded-xl bg-card border border-border"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Key Achievements</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "NCC Education BSc Computing Student",
              "Fairway Technology Graduate",
              "2+ Years Professional Experience",
              "Corporate & Freelance Projects",
              "Full Stack Development Skills",
              "Continuous Learning Mindset",
            ].map((achievement, index) => (
              <motion.div
                key={achievement}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50"
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-foreground">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}
