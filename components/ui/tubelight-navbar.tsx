'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function TubeLightNavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      className={cn(
        'fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6',
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-background/5 border border-primary/30 backdrop-blur-lg py-1 px-1 rounded-full shadow-2xl shadow-primary/20">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                'relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-all duration-300',
                'text-foreground/70 hover:text-primary hover:shadow-lg hover:shadow-primary/30',
                isActive && 'text-primary shadow-lg shadow-secondary/40',
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  {/* Top tube light glow */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-t-full">
                    <div className="absolute w-12 h-8 bg-gradient-to-b from-primary/40 to-transparent rounded-full blur-lg -top-3 -left-2" />
                    <div className="absolute w-10 h-6 bg-gradient-to-b from-secondary/30 to-transparent rounded-full blur-md -top-2" />
                    <div className="absolute w-6 h-4 bg-primary/40 rounded-full blur-sm top-0 left-1" />
                  </div>
                  
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-full blur-md opacity-60" />
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
