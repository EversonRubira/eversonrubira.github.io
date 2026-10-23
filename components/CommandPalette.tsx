'use client'

import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Section } from '@/hooks/useSection'

interface Command {
  id: string
  label: string
  subtitle?: string
  icon: string
  action: () => void
  group: string
}

interface CommandPaletteProps {
  open: boolean
  setOpen: (v: boolean) => void
  setActive: (s: Section) => void
}

export default function CommandPalette({ open, setOpen, setActive }: CommandPaletteProps) {
  const [query, setQuery] = useState('')
  const [cursor, setCursor] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  function navigate(section: Section) {
    setActive(section)
    setOpen(false)
    setQuery('')
  }

  const commands: Command[] = [
    { id: 'work', label: 'Work', subtitle: 'Projectos e experiência', icon: '◈', group: 'Navegar', action: () => navigate('work') },
    { id: 'ai-journey', label: 'AI Journey', subtitle: 'O meu percurso até AI Engineering', icon: '⟳', group: 'Navegar', action: () => navigate('ai-journey') },
    { id: 'stack', label: 'Stack', subtitle: 'Tecnologias e ferramentas', icon: '⊞', group: 'Navegar', action: () => navigate('stack') },
    { id: 'bio', label: 'Bio', subtitle: 'Sobre mim', icon: '◉', group: 'Navegar', action: () => navigate('bio') },
    { id: 'contact', label: 'Contact', subtitle: 'Falar comigo', icon: '◎', group: 'Navegar', action: () => navigate('contact') },
    {
      id: 'cv',
      label: 'Abrir CV',
      subtitle: 'Curriculum Vitae em PDF',
      icon: '↗',
      group: 'Links',
      action: () => { window.open('/cv.html', '_blank'); setOpen(false) },
    },
    {
      id: 'github',
      label: 'GitHub',
      subtitle: 'github.com/eversonrubira',
      icon: '◆',
      group: 'Links',
      action: () => { window.open('https://github.com/eversonrubira', '_blank'); setOpen(false) },
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      subtitle: 'linkedin.com/in/eversonrubira',
      icon: '◆',
      group: 'Links',
      action: () => { window.open('https://linkedin.com/in/eversonrubira', '_blank'); setOpen(false) },
    },
  ]

  const filtered = query.trim()
    ? commands.filter(
        c =>
          c.label.toLowerCase().includes(query.toLowerCase()) ||
          (c.subtitle?.toLowerCase().includes(query.toLowerCase()) ?? false)
      )
    : commands

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
      setCursor(0)
    } else {
      setQuery('')
    }
  }, [open])

  useEffect(() => { setCursor(0) }, [query])

  function onKey(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') { e.preventDefault(); setCursor(c => Math.min(c + 1, filtered.length - 1)) }
    if (e.key === 'ArrowUp') { e.preventDefault(); setCursor(c => Math.max(c - 1, 0)) }
    if (e.key === 'Enter' && filtered[cursor]) filtered[cursor].action()
    if (e.key === 'Escape') setOpen(false)
  }

  const groups = [...new Set(filtered.map(c => c.group))]

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50"
            style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <motion.div
            className="fixed z-50 w-full max-w-lg mx-auto rounded-xl border overflow-hidden"
            style={{
              top: '20vh',
              left: '50%',
              x: '-50%',
              background: 'var(--sidebar)',
              borderColor: 'var(--border-hover)',
              boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
            }}
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -4 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
          >
            {/* Search input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b" style={{ borderColor: 'var(--border)' }}>
              <span className="text-base" style={{ color: 'var(--text-muted)' }}>⌕</span>
              <input
                ref={inputRef}
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={onKey}
                placeholder="Pesquisar ou navegar..."
                className="flex-1 bg-transparent text-sm outline-none"
                style={{ color: 'var(--text)', caretColor: 'var(--accent)' }}
              />
              <kbd
                className="font-mono text-2xs px-1.5 py-0.5 rounded text-xs"
                style={{ background: 'var(--border)', color: 'var(--text-muted)' }}
              >
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="py-2 max-h-80 overflow-y-auto scroll-area">
              {filtered.length === 0 && (
                <p className="px-4 py-6 text-sm text-center" style={{ color: 'var(--text-muted)' }}>
                  Sem resultados
                </p>
              )}
              {groups.map(group => {
                const groupItems = filtered.filter(c => c.group === group)
                const flatIndex = filtered.indexOf(groupItems[0])
                return (
                  <div key={group}>
                    <p
                      className="px-4 py-1.5 text-2xs font-mono uppercase tracking-widest"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {group}
                    </p>
                    {groupItems.map((cmd, i) => {
                      const idx = flatIndex + i
                      const isHovered = cursor === idx
                      return (
                        <button
                          key={cmd.id}
                          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors"
                          style={{
                            background: isHovered ? 'var(--surface)' : 'transparent',
                            color: isHovered ? 'var(--text)' : 'var(--text-secondary)',
                          }}
                          onMouseEnter={() => setCursor(idx)}
                          onClick={cmd.action}
                        >
                          <span className="font-mono text-xs w-4 text-center shrink-0">{cmd.icon}</span>
                          <span className="flex-1">{cmd.label}</span>
                          {cmd.subtitle && (
                            <span className="text-xs shrink-0" style={{ color: 'var(--text-muted)' }}>
                              {cmd.subtitle}
                            </span>
                          )}
                        </button>
                      )
                    })}
                  </div>
                )
              })}
            </div>

            {/* Footer */}
            <div
              className="flex items-center gap-4 px-4 py-2 border-t text-xs font-mono"
              style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
            >
              <span>↑↓ navegar</span>
              <span>↵ seleccionar</span>
              <span>ESC fechar</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
