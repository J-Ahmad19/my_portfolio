'use client'

import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { TechStack } from '@/components/tech-stack'
import { Contact } from '@/components/contact'
import { FloatingBg } from '@/components/floating-bg'

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden">
      <FloatingBg />
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="tech-stack">
        <TechStack />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  )
}
