'use client'

import { useState } from 'react'
import { stackGroups, levelColor, levelLabel } from '@/data/stack'

export default function StackSection() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null)

  const displayed = activeGroup
    ? stackGroups.filter(g => g.id === activeGroup)
    : stackGroups

  return (
    <div className="h-full scroll-area">
      <div
        className="max-w-2xl mx-auto px-6 py-8"
        style={{ paddingBottom: '80px' }}
      >
        {/* Header */}
        <div className="mb-6">
          <span className="font-mono text-xs" style={{ color: 'var(--accent)' }}>
            ⊞ STACK
          </span>
          <h1 className="text-2xl font-semibold text-text leading-tight mt-1.5">
            Ferramentas de produção.
          </h1>
          <p className="mt-1.5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Tecnologias que uso no dia-a-dia para construir sistemas que funcionam em produção.
          </p>
        </div>

        {/* Group filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setActiveGroup(null)}
            className="text-xs px-3 py-1.5 rounded-lg border transition-colors font-mono"
            style={{
              background: activeGroup === null ? 'var(--accent-subtle)' : 'transparent',
              color: activeGroup === null ? 'var(--accent)' : 'var(--text-muted)',
              borderColor: activeGroup === null ? 'transparent' : 'var(--border)',
            }}
          >
            Todos
          </button>
          {stackGroups.map(g => (
            <button
              key={g.id}
              onClick={() => setActiveGroup(activeGroup === g.id ? null : g.id)}
              className="text-xs px-3 py-1.5 rounded-lg border transition-colors font-mono"
              style={{
                background: activeGroup === g.id ? 'var(--accent-subtle)' : 'transparent',
                color: activeGroup === g.id ? 'var(--accent)' : 'var(--text-muted)',
                borderColor: activeGroup === g.id ? 'transparent' : 'var(--border)',
              }}
            >
              {g.icon} {g.label}
            </button>
          ))}
        </div>

        {/* Groups grid */}
        <div className="space-y-4">
          {displayed.map(group => (
            <div
              key={group.id}
              className="rounded-xl border p-5"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-base">{group.icon}</span>
                <h2 className="text-sm font-semibold text-text">{group.label}</h2>
                <span className="font-mono text-2xs ml-auto" style={{ color: 'var(--text-muted)' }}>
                  {group.items.length} items
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {group.items.map(tech => (
                  <div
                    key={tech.name}
                    className="flex items-center justify-between px-3 py-2 rounded-lg"
                    style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                  >
                    <span className="text-sm text-text">{tech.name}</span>
                    <span
                      className={`text-2xs font-mono ${levelColor[tech.level]}`}
                    >
                      {levelLabel[tech.level]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div
          className="mt-6 flex items-center gap-4 text-xs font-mono"
          style={{ color: 'var(--text-muted)' }}
        >
          <span>Nível:</span>
          <span className="text-accent">Expert</span>
          <span className="text-text">Proficiente</span>
          <span>A aprender</span>
        </div>
      </div>
    </div>
  )
}
