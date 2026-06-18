'use client'

import { useEffect, useRef } from 'react'

const technologies = [
  { name: 'Python', category: 'Language' },
  { name: 'SQL/PostgreSQL', category: 'Database' },
  { name: 'C++', category: 'Language' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'RAG & Vector Databases', category: 'AI/ML' },
  { name: 'PyTorch', category: 'AI/ML' },
  { name: 'Ollama & Local LLMs', category: 'AI/ML' },
  { name: 'FastAPI', category: 'Backend' },
  { name: 'Flask', category: 'Backend' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Git/GitHub', category: 'Tools' },
  { name: 'Data Engineering', category: 'Specialization' },
]

export function TechStack() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="relative py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
              Tech & Tools
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            Cutting-edge technologies for modern problem-solving
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group relative bg-gradient-to-br from-card to-card/50 border border-primary/20 rounded-xl p-6 hover:border-primary/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:scale-105 cursor-pointer"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/5 to-transparent rounded-xl"></div>

              <div className="relative z-10">
                <div className="text-xs font-semibold text-primary/60 mb-2 uppercase tracking-wider">
                  {tech.category}
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {tech.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-card to-card/50 border border-primary/20 rounded-2xl p-8 hover:border-primary/60 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-primary">Languages</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>• Python (Advanced)</li>
              <li>• SQL & PostgreSQL</li>
              <li>• C++</li>
              <li>• JavaScript</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-card to-card/50 border border-primary/20 rounded-2xl p-8 hover:border-primary/60 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-primary">AI & Data Science</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>• RAG Systems</li>
              <li>• Vector Databases</li>
              <li>• Local LLM Inference</li>
              <li>• NLP & PyTorch</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-card to-card/50 border border-primary/20 rounded-2xl p-8 hover:border-primary/60 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-primary">Data Engineering</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>• SQL Optimization</li>
              <li>• ETL Pipelines</li>
              <li>• Data Modeling</li>
              <li>• Big Data Visualization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
