'use client'

import { ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  link?: string
  github?: string
  image?: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: '1',
    title: 'USBot',
    description: 'Edge AI Assistant',
    longDescription: 'Privacy-centric Edge AI assistant enabling zero-latency ML inference entirely on-device. Optimized local LLM inference pipelines for sub-second interactions.',
    tags: ['Python', 'Ollama', 'RAG', 'FastAPI', 'PySide6'],
    featured: true,
    link: 'https://drive.google.com/file/d/1wnVjn6MVgvAIXUG03DSlKGCPtOFjM9-n/view?usp=sharing',
  },
  {
    id: '2',
    title: 'Health Schemes Monitor',
    description: 'Database Management System',
    longDescription: 'Full-stack administrative portal with normalized PostgreSQL schema for 5,000+ patient eligibility records. ETL pipelines and real-time analytics dashboard.',
    tags: ['Flask', 'PostgreSQL', 'SQL', 'Data Analytics', 'ETL'],
    featured: true,
    link: 'https://hospital-1r2w.onrender.com/',
  },
  {
    id: '3',
    title: 'Language Agnostic Chatbot',
    description: 'Multi-language RAG System',
    longDescription: 'NLP query system powered by Groq LPU inference achieving ultra-low latency responses. Integrated vector databases with Google GenAI embeddings.',
    tags: ['Streamlit', 'Google GenAI', 'Vector DB', 'Groq', 'NLP'],
    featured: true,
    link: 'https://langagnosticbott.streamlit.app/',
  },
  {
    id: '4',
    title: 'OsBridgeLCCA',
    description: 'Life Cycle Cost Analysis',
    longDescription: '30% computational efficiency improvement through Python architecture refactoring. Processes 10,000+ multi-dimensional parameters for predictive cost modeling.',
    tags: ['Python', 'Algorithm Optimization', 'Matplotlib', 'xarray', 'ezDXF'],
    featured: false,
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section className="relative py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Showcasing my expertise in AI engineering, data systems, and cutting-edge software development.
          </p>
        </div>

        {/* Bento Grid - Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Large featured project */}
          <div
            className="md:col-span-2 md:row-span-2 group"
            onMouseEnter={() => setHoveredId(featuredProjects[0]?.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="relative h-full bg-gradient-to-br from-card to-card/50 border border-primary/20 rounded-2xl p-8 overflow-hidden hover:border-primary/60 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-primary/10">
              {/* Background gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/5 to-transparent"></div>

              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">{featuredProjects[0]?.title}</h3>
                <p className="text-foreground/80 mb-4">{featuredProjects[0]?.description}</p>
                <p className="text-foreground/60 mb-6 leading-relaxed">{featuredProjects[0]?.longDescription}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProjects[0]?.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {featuredProjects[0]?.link && (
                  <a
                    href={featuredProjects[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium group/link"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Two smaller featured projects */}
          {featuredProjects.slice(1, 3).map((project) => (
            <div
              key={project.id}
              className="group"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-full bg-gradient-to-br from-card to-card/50 border border-primary/20 rounded-2xl p-6 overflow-hidden hover:border-primary/60 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-primary/10 hover:scale-105">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/5 to-transparent"></div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-sm text-foreground/80 mb-3">{project.description}</p>
                  <p className="text-xs text-foreground/60 mb-4 line-clamp-2">{project.longDescription}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded border border-primary/20">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 text-xs text-foreground/60">+{project.tags.length - 3}</span>
                    )}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 font-medium"
                    >
                      View
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Other Notable Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-gradient-to-br from-card to-card/50 border border-primary/20 rounded-xl p-6 hover:border-primary/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:scale-105"
                >
                  <h3 className="text-lg font-bold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-sm text-foreground/80 mb-2">{project.description}</p>
                  <p className="text-sm text-foreground/60 mb-4">{project.longDescription}</p>

                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
