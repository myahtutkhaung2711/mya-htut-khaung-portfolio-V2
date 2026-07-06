"use client"

import { motion } from "framer-motion"
import { Code2, Palette, Wrench } from "lucide-react"
import { SectionHeader } from "./section-header"

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Full-stack web development using cutting-edge technologies.",
    icon: Code2,
    features: ["React & Next.js", "PHP/Laravel", "Node.js APIs", "Database Design", "Real-time Features"],
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "Web Design",
    description: "Create stunning designs focused on user experience.",
    icon: Palette,
    features: ["UI/UX Design", "Brand Identity", "Prototyping", "Design Systems", "Responsive Design"],
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 3,
    title: "Website Maintenance",
    description: "Keep your website secure and performing at peak levels.",
    icon: Wrench,
    features: ["Security Updates", "Content Management", "Performance Tuning", "24/7 Monitoring", "Bug Fixes"],
    color: "from-green-500 to-green-600",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="section-dark py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="What I Offer"
          badgeIcon={Code2}
          title="Services I Provide"
          subtitle="Comprehensive web solutions tailored to your business needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="p-6 sm:p-8 rounded-xl border border-border hover:border-primary bg-card/50 hover:bg-card transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ y: { duration: 3, repeat: Infinity, delay: index * 0.2 } }}
                  className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-5`}
                >
                  <IconComponent className="w-7 h-7 text-white" />
                </motion.div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 + idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, x: 3 }}
                  className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                >
                  Get Started →
                </motion.a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}