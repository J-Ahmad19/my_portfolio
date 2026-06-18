'use client'

import { Home, Briefcase, Zap, Mail } from 'lucide-react'
import { TubeLightNavBar } from '@/components/ui/tubelight-navbar'

export function Navbar() {
  const navItems = [
    { name: 'Hero', url: '#hero', icon: Home },
    { name: 'Projects', url: '#projects', icon: Briefcase },
    { name: 'Tech', url: '#tech-stack', icon: Zap },
    { name: 'Contact', url: '#contact', icon: Mail },
  ]

  return <TubeLightNavBar items={navItems} />
}
