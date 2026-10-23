'use client'

import type { Section } from '@/hooks/useSection'

interface NavItem {
  id: Section
  label: string
  icon: string
  kbd?: string
}

const navItems: NavItem[] = [
  { id: 'work', label: 'Work', icon: '◈' },
  { id: 'ai-journey', label: 'AI Journey', icon: '⟳' },
  { id: 'stack', label: 'Stack', icon: '⊞' },
  { id: 'bio', label: 'Bio', icon: '◉' },
  { id: 'contact', label: 'Contact', icon: '◎' },
]

interface SidebarProps {
  active: Section
  setActive: (s: Section) => void
  onOpenPalette: () => void
}

export default function Sidebar({ active, setActive, onOpenPalette }: SidebarProps) {
  return (
    <aside
      className="hidden md:flex flex-col h-full shrink-0 border-r"
      style={{
        width: 'var(--sidebar-width)',
        background: 'var(--sidebar)',
        borderColor: 'var(--border)',
      }}
    >
      {/* Identity */}
      <div className="p-4 border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="flex items-center gap-3">
          <img
            src="/foto-perfil.jpeg"
            alt="Everson Rubira"
            className="w-8 h-8 rounded-full object-cover shrink-0"
          />
          <div className="min-w-0">
            <p className="text-sm font-medium text-text leading-tight truncate">Everson Rubira</p>
            <p className="text-xs leading-tight" style={{ color: 'var(--text-secondary)' }}>
              Backend · AI Systems
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 mt-3">
          <span className="w-1.5 h-1.5 rounded-full bg-green-dot animate-pulse-dot shrink-0" />
          <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
            Disponível para oportunidades
          </span>
        </div>
      </div>

      {/* Command palette trigger */}
      <div className="px-3 pt-3">
        <button
          onClick={onOpenPalette}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-colors"
          style={{
            background: 'var(--surface)',
            color: 'var(--text-muted)',
            border: '1px solid var(--border)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--border-hover)'
            e.currentTarget.style.color = 'var(--text-secondary)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border)'
            e.currentTarget.style.color = 'var(--text-muted)'
          }}
        >
          <span>⌘</span>
          <span className="flex-1 text-left">Pesquisar...</span>
          <kbd
            className="font-mono text-2xs px-1 py-0.5 rounded"
            style={{ background: 'var(--border)', color: 'var(--text-muted)' }}
          >
            K
          </kbd>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-3 space-y-0.5">
        <p
          className="px-3 mb-2 text-2xs font-mono uppercase tracking-widest"
          style={{ color: 'var(--text-muted)' }}
        >
          Navegação
        </p>
        {navItems.map(item => {
          const isActive = active === item.id
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors text-left"
              style={{
                background: isActive ? 'var(--accent-subtle)' : 'transparent',
                color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
              }}
              onMouseEnter={e => {
                if (!isActive) {
                  e.currentTarget.style.background = 'var(--surface)'
                  e.currentTarget.style.color = 'var(--text)'
                }
              }}
              onMouseLeave={e => {
                if (!isActive) {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = 'var(--text-secondary)'
                }
              }}
            >
              <span className="font-mono text-xs w-4 text-center shrink-0">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
              {isActive && (
                <span
                  className="ml-auto w-1 h-1 rounded-full shrink-0"
                  style={{ background: 'var(--accent)' }}
                />
              )}
            </button>
          )
        })}
      </nav>

      {/* Footer links */}
      <div className="px-2 pb-4 border-t pt-3" style={{ borderColor: 'var(--border)' }}>
        <div className="space-y-0.5">
          {[
            { href: '/cv.html', label: 'Curriculum Vitae', icon: '↗' },
            { href: 'https://github.com/eversonrubira', label: 'GitHub', icon: '◆' },
            {
              href: 'https://linkedin.com/in/eversonrubira',
              label: 'LinkedIn',
              icon: '◆',
            },
          ].map(link => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--surface)'
                e.currentTarget.style.color = 'var(--text-secondary)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--text-muted)'
              }}
            >
              <span className="font-mono text-xs w-4 text-center">{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}
