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