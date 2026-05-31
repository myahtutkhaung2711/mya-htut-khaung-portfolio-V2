"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar, ChevronRight } from "lucide-react"

const experiences = [
  {
    title: "Junior Web Developer",
    company: "WILLTEC MYANMAR CO.,LTD.",
    period: "January 2025 - March 2026",
    type: "Full-time",
    responsibilities: [
      "Developed and maintained company websites using PHP and Laravel",
      "Fixed bugs and implemented new system features based on business requirements",
      "Designed and optimized MySQL database structures",
      "Performed testing, debugging, and system maintenance",
      "Collaborated with team members using Git version control",
      "Maintained and enhanced eJLS (e-Learning Japanese Language School) Website & Willtec Myanmar corporate website",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "WILLTEC MYANMAR CO.,LTD.",
    period: "April 2024 - December 2024",
    type: "Internship",
    responsibilities: [
      "Assisted in web application development using PHP and Laravel",
      "Supported website maintenance activities",
      "Conducted testing and bug fixing activities",
      "Prepared user guides and documentation",
      "Worked closely with senior developers during project development",
    ],
  },
  {
    title: "Freelance Full Stack Developer",
    company: "Self-Employed",
    period: "2025 - Present",
    type: "Freelance",
    responsibilities: [
      "Developed web applications using PHP, Laravel, and MySQL",
      "Designed and implemented REST APIs for mobile and web applications",
      "Worked with frontend technologies such as HTML, CSS, and JavaScript",
      "Collaborated with clients to understand requirements and deliver solutions",
    ],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 relative bg-card/30">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Career Journey</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-balance">Work Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                index % 2 === 0 ? "md:pr-8 md:text-right md:ml-0 md:mr-auto md:w-1/2" : "md:pl-8 md:ml-auto md:w-1/2"
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.2 }}
                className={`absolute top-0 w-4 h-4 rounded-full bg-primary border-4 border-background ${
                  index % 2 === 0 ? "left-0 md:left-auto md:-right-2 md:translate-x-1/2" : "left-0 md:-left-2 md:-translate-x-1/2"
                }`}
              />

              {/* Content card */}
              <motion.div
                whileHover={{ y: -4 }}
                className={`p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all ${
                  index % 2 === 0 ? "md:mr-4" : "md:ml-4"
                }`}
              >
                <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {exp.type}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
                <p className="text-primary font-medium mb-2">{exp.company}</p>
                
                <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-4 ${
                  index % 2 === 0 ? "md:justify-end" : ""
                }`}>
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>

                <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-left" : ""}`}>
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ChevronRight size={14} className="mt-1 flex-shrink-0 text-primary" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
