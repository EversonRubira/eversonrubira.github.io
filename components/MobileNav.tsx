'use client'

import type { Section } from '@/hooks/useSection'

interface MobileNavProps {
  active: Section
  setActive: (s: Section) => void
}

const items: { id: Section; label: string; icon: string }[] = [
  { id: 'work', label: 'Work', icon: '◈' },
  { id: 'ai-journey', label: 'AI', icon: '⟳' },
  { id: 'stack', label: 'Stack', icon: '⊞' },
  { id: 'bio', label: 'Bio', icon: '◉' },
  { id: 'contact', label: 'Contact', icon: '◎' },
]

export default function MobileNav({ active, setActive }: MobileNavProps) {
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around px-2 border-t"
      style={{
        height: '56px',
        paddingBottom: 'env(safe-area-inset-bottom)',
        background: 'var(--sidebar)',
        borderColor: 'var(--border)',
      }}
    >
      {items.map(item => {
        const isActive = active === item.id
        return (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-colors min-w-0"
            style={{
              color: isActive ? 'var(--accent)' : 'var(--text-muted)',
            }}
          >
            <span className="font-mono text-base leading-none">{item.icon}</span>
            <span
              className="text-2xs font-medium leading-none"
              style={{ fontSize: '10px' }}
            >
              {item.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
