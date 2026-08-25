"use client"
import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"

import { SectionHeader } from "./section-header"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react"

// ─── Types ────────────────────────────────────────────────────────────────────
type Status = "idle" | "loading" | "success" | "error"

interface FormFields {
  name: string
  email: string
  subject: string
  message: string
  company: string
}

const EMPTY_FORM: FormFields = {
  name: "",
  email: "",
  subject: "",
  message: "",
  company: "",
}

// ─── Input component ──────────────────────────────────────────────────────────
function Field({
  label,
  id,
  error,
  children,
}: {
  label: string
  id: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            key="err"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="text-xs text-destructive flex items-center gap-1"
          >
            <AlertCircle size={12} />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground " +
  "focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"

// ─── Main component ───────────────────────────────────────────────────────────
export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView   = useInView(sectionRef, { once: true, margin: "-100px" })

  const [fields, setFields] = useState<FormFields>(EMPTY_FORM)
  const [errors, setErrors] = useState<Partial<FormFields>>({})
  const [status, setStatus] = useState<Status>("idle")

  // ── Validation ──────────────────────────────────────────────────────────────
  function validate(): boolean {
    const next: Partial<FormFields> = {}
    if (!fields.name.trim())                        next.name  = "Full name is required."
    if (!fields.email.trim())                       next.email = "Email address is required."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
                                                         next.email = "Please enter a valid email."
    if (!fields.subject.trim())                          next.subject    = "Subject is required."
    if (!fields.message.trim())                          next.message    = "Message cannot be empty."
    else if (fields.message.trim().length < 10)          next.message    = "Message must be at least 10 characters."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormFields]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  // ── Submit ──────────────────────────────────────────────────────────────────
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!validate()) return

    // Honeypot protection
    if (fields.company.trim()) {
      return
    }

    setStatus("loading")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          subject: fields.subject,
          message: fields.message,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to send a message."
        )
      }

      setStatus("success")
      setFields(EMPTY_FORM)

      setTimeout(() => {
        setStatus("idle")
      }, 5000)
    } catch (error) {
      console.error("Contact form error:", error)

      setStatus("error")

      setTimeout(() => {
        setStatus("idle")
      }, 5000)
    }
  }

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={sectionRef}>

        {/* Heading */}
        <SectionHeader
          badge="Get In Touch"
          badgeIcon={Mail}
          subtitle="Have a project in mind? Let's collaborate."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* ── Left: contact info ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-2">Contact Information</h3>

            {[
              {
                icon: Mail,
                label: "Email",
                value: "myahtutkhaung2002@gmail.com",
                href: "mailto:myahtutkhaung2002@gmail.com",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+959 250 899 121",
                href: "tel:+959250899121",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "North Okkalapa Township, Yangon, Myanmar",
                href: null,
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="group"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-foreground font-medium text-sm break-all">{item.value}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ) : (
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-foreground font-medium text-sm">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="pt-4"
            >
              <h4 className="text-sm font-medium text-muted-foreground mb-3">Connect with me</h4>
              <div className="flex gap-3">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/myahtutkhaung2711",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/mya-htut-khaung/",
                    label: "LinkedIn",
                  },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all text-sm sm:text-base"
                    aria-label={s.label}
                  >
                    <s.icon className="w-5 h-5" />
                    {s.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: form ─────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 sm:p-8 rounded-2xl bg-card border border-border"
          >
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

            {/* Status banner */}
            <AnimatePresence>
              {(status === "success" || status === "error") && (
                <motion.div
                  key={status}
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                  className={`mb-5 flex items-start gap-3 p-4 rounded-lg border text-sm font-medium ${
                    status === "success"
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                      : "bg-red-500/10 border-red-500/30 text-red-400"
                  }`}
                >
                  {status === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  )}
                  <span>
                    {status === "success"
                      ? "Message sent successfully! I'll get back to you soon."
                      : "Failed to send the message. Please try again or email me directly."}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full Name" id="name" error={errors.name}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={fields.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    autoComplete="name"
                    className={`${inputClass} ${
                      errors.name
                        ? "border-destructive focus:border-destructive focus:ring-destructive/20"
                        : ""
                    }`}
                  />
                </Field>

                <Field label="Email Address" id="email" error={errors.email}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={fields.email}
                    onChange={handleChange}
                    placeholder="john@gmail.com"
                    autoComplete="email"
                    className={`${inputClass} ${
                      errors.email
                        ? "border-destructive focus:border-destructive focus:ring-destructive/20"
                        : ""
                    }`}
                  />
                </Field>
              </div>

              <Field label="Subject" id="subject" error={errors.subject}>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={fields.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry / Freelance work"
                  className={`${inputClass} ${errors.subject ? "border-destructive focus:border-destructive focus:ring-destructive/20" : ""}`}
                />
              </Field>

              <Field label="Message" id="message" error={errors.message}>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={fields.message}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  placeholder="Tell me about your project or idea..."
                  className={`${inputClass} resize-none ${errors.message ? "border-destructive focus:border-destructive focus:ring-destructive/20" : ""}`}
                />
              </Field>

              <input
                type="text"
                name="company"
                value={fields.company}
                onChange={handleChange}
                autoComplete="off"
                tabIndex={-1}
                disabled={status === "loading"}
                className="hidden"
              />

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={status !== "loading" ? { scale: 1.05 } : {}}
                whileTap={status !== "loading" ? { scale: 0.95 } : {}}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-200 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-xs text-muted-foreground text-center">
                I'll usually reply within 24 hours. Thank you for reaching out!
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
    
  )
}
