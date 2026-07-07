import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ServicesSection } from "@/components/services-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Mya Htut Khaung | Full Stack Developer",
  description: "Portfolio of Mya Htut Khaung - Full Stack Developer specializing in PHP/Laravel, React.js, Node.js, and MySQL.",
  keywords: ["Full Stack Developer", "Web Developer", "PHP", "Laravel", "React.js", "Node.js", "MySQL", "Myanmar"],
  authors: [{ name: "Mya Htut Khaung" }],
  icons: {
    icon: "/images/terminal.svg",
    shortcut: "/images/terminal.svg",
    apple: "/images/terminal.png",
  },
  openGraph: {
    title: "Mya Htut Khaung | Full Stack Developer",
    description: "Portfolio of Mya Htut Khaung - Full Stack Developer",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}