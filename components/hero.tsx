'use client'

import { ArrowRight, Sparkles } from 'lucide-react'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-40 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>

      {/* Introduction Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 hover:bg-primary/20 transition-colors">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI Engineer & Data Specialist</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Crafting
            </span>
            <br />
            <span className="text-foreground">Intelligent Systems</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Building efficient AI inference, edge computing solutions, and sophisticated database systems that push the boundaries of what's possible.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold rounded-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground/5 border border-primary/30 text-foreground font-bold rounded-lg hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-20 pt-12 border-t border-primary/10">
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-primary">5+</div>
              <div className="text-sm text-foreground/60">Projects Shipped</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-primary">3+</div>
              <div className="text-sm text-foreground/60">Years Experience</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-foreground/60">Code Quality</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Animation Section */}
      <div className="relative z-20">
        <ContainerScroll
          titleComponent={
            <div className="space-y-4 mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Featured Project
              </h2>
              <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto">
                Scroll down to see the interactive preview of my flagship project
              </p>
            </div>
          }
        >
          <div className="w-full h-full bg-gradient-to-br from-card to-card/50 rounded-2xl overflow-hidden flex items-center justify-center p-4">
            <div className="text-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold text-primary">USBot</h3>
                <p className="text-foreground/70 text-sm md:text-base max-w-md mx-auto">
                  Intelligent Urdu/Punjabi-Speaking Chatbot with RAG Architecture
                </p>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-foreground/60">LLMs • RAG • Vector Databases • FastAPI</p>
                <p className="text-primary font-semibold">Click projects section to learn more →</p>
              </div>
            </div>
          </div>
        </ContainerScroll>
      </div>
    </section>
  )
}
