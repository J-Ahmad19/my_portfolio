'use client'

import { Mail, Link2, Code, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')

    try {
      const supabase = createClient()
      const { error } = await supabase.from('messages').insert([
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Contact',
          message: formData.message,
        },
      ])

      if (error) {
        setStatus('error')
        setStatusMessage('Failed to send message. Please try again.')
        console.error('[v0] Supabase error:', error)
      } else {
        setStatus('success')
        setStatusMessage('Message sent successfully! I will get back to you soon.')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      setStatus('error')
      setStatusMessage('An error occurred. Please try again.')
      console.error('[v0] Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:jawwadahmad568@gmail.com',
      color: 'hover:text-primary',
    },
    {
      name: 'LinkedIn',
      icon: Link2,
      href: 'https://www.linkedin.com/in/jawwad-ahmad-126999312/',
      color: 'hover:text-primary',
    },
    {
      name: 'GitHub',
      icon: Code,
      href: 'https://github.com/J-Ahmad19',
      color: 'hover:text-primary',
    },
  ]

  return (
    <section className="relative py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
              Let&apos;s Connect
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Open to discussing AI projects, optimization challenges, and innovative ideas. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-card to-card/50 border border-primary/20 rounded-2xl p-8 hover:border-primary/60 transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/20 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/20 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject (Optional)</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/20 transition-colors"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/20 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 p-3 bg-aurora-green/10 border border-aurora-green/30 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-aurora-green" />
                  <p className="text-sm text-aurora-green">{statusMessage}</p>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 bg-accent/10 border border-accent/30 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-accent" />
                  <p className="text-sm text-accent">{statusMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-6 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold rounded-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Quick Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-card to-card/50 border border-primary/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Quick Facts</h3>
              <ul className="space-y-4 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>FOSSEE Fellow at IIT Bombay</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Expert in Edge AI &amp; Efficient Inference</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Data Engineering &amp; Database Optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Available for freelance &amp; consulting</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-card to-card/50 border border-primary/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-background/50 border border-primary/20 rounded-lg ${link.color} transition-all duration-300 hover:bg-primary/10 hover:border-primary/60`}
                      title={link.name}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center border-t border-primary/10 pt-12">
          <p className="text-foreground/70 mb-6">
            Or reach out directly at{' '}
            <a
              href="mailto:jawwadahmad568@gmail.com"
              className="text-primary hover:text-primary/80 font-bold transition-colors"
            >
              jawwadahmad568@gmail.com
            </a>
          </p>
          <p className="text-sm text-foreground/60">
            Based in New Delhi, India • Open to remote opportunities worldwide
          </p>
        </div>
      </div>
    </section>
  )
}
