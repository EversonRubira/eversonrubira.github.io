'use client'

import { useState, useEffect, useCallback } from 'react'

export type Section = 'work' | 'ai-journey' | 'stack' | 'bio' | 'contact'

const SECTIONS: Section[] = ['work', 'ai-journey', 'stack', 'bio', 'contact']

function isSection(s: string): s is Section {
  return SECTIONS.includes(s as Section)
}

export function useSection() {
  const [active, setActiveState] = useState<Section>('work')

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (isSection(hash)) setActiveState(hash)
  }, [])

  const setActive = useCallback((section: Section) => {
    setActiveState(section)
    window.history.replaceState(null, '', `#${section}`)
  }, [])

  return { active, setActive }
}
