'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { phases, type Phase } from '@/data/phases'

const dotColor: Record<Phase['status'], string> = {
  done: '#4ade80',
  active: '#fbbf24',
  planned: '#3f3f46',
}

const dotBorder: Record<Phase['status'], string> = {
  done: '#4ade80',
  active: '#fbbf24',
  planned: '#52525b',
}

const statusLabel: Record<Phase['status'], string> = {
  done: 'Concluída',
  active: 'Em curso',
  planned: 'Planeada',
}

export default function AIJourneySection() {
  const [openPhase, setOpenPhase] = useState<number | null>(3)

  return (
    <div className="h-full scroll-area">
      <div
        className="max-w-2xl mx-auto px-6 py-8"
        style={{ paddingBottom: '80px' }}
      >
        {/* Header */}
        <div className="mb-8">
          <span className="font-mono text-xs" style={{ color: 'var(--accent)' }}>
            ⟳ AI JOURNEY
          </span>
          <h1 className="text-2xl font-semibold text-text leading-tight mt-1.5">
            De Operações a AI Engineering.
          </h1>
          <p className="mt-1.5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Não comecei em AI — cheguei até aqui. O percurso é a prova de que sei o que estou a construir.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[11px] top-4 bottom-4 w-px"
            style={{ background: 'var(--border)' }}
          />

          <div className="space-y-2">
            {phases.map(phase => {
              const isOpen = openPhase === phase.n
              const isActive = phase.status === 'active'
              const isDone = phase.status === 'done'

              return (
                <div key={phase.n} className="relative pl-8">
                  {/* Dot */}
                  <div
                    className="absolute left-0 top-4 w-6 h-6 rounded-full flex items-center justify-center z-10"
                    style={{
                      background: isDone
                        ? 'var(--surface)'
                        : isActive
                        ? 'var(--surface)'
                        : 'var(--bg)',
                      border: `2px solid ${dotBorder[phase.status]}`,
                    }}
                  >
                    {isDone ? (
                      <span className="text-xs" style={{ color: dotColor[phase.status] }}>✓</span>
                    ) : isActive ? (
                      <span
                        className="w-2 h-2 rounded-full animate-pulse-dot"
                        style={{ background: dotColor[phase.status] }}
                      />
                    ) : (
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ background: 'var(--text-muted)' }}
                      />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className="rounded-xl border transition-colors cursor-pointer"
                    style={{
                      background: isOpen ? 'var(--surface)' : 'transparent',
                      borderColor: isOpen
                        ? 'var(--border-hover)'
                        : isActive
                        ? `${dotColor.active}30`
                        : 'var(--border)',
                    }}
                    onClick={() => setOpenPhase(isOpen ? null : phase.n)}
                    onMouseEnter={e => {
                      if (!isOpen)
                        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-hover)'
                    }}
                    onMouseLeave={e => {
                      if (!isOpen)
                        (e.currentTarget as HTMLElement).style.borderColor = isActive
                          ? `${dotColor.active}30`
                          : 'var(--border)'
                    }}
                  >
                    {/* Card header */}
                    <div className="px-4 py-3 flex items-center gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className="text-xs font-mono"
                            style={{ color: 'var(--text-muted)' }}
                          >
                            Fase {phase.n}
                          </span>
                          <span
                            className="text-2xs font-mono px-1.5 py-0.5 rounded"
                            style={{
                              background: `${dotColor[phase.status]}14`,
                              color: dotColor[phase.status],
                            }}
                          >
                            {statusLabel[phase.status]}
                          </span>
                        </div>
                        <h3
                          className="text-sm font-semibold mt-0.5"
                          style={{
                            color:
                              phase.status === 'planned' ? 'var(--text-muted)' : 'var(--text)',
                          }}
                        >
                          {phase.title}
                        </h3>
                        <p className="text-xs font-mono mt-0.5" style={{ color: 'var(--text-muted)' }}>
                          {phase.subtitle}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1 shrink-0">
                        <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                          {phase.period}
                        </span>
                        <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                          {isOpen ? '↑' : '↓'}
                        </span>
                      </div>
                    </div>

                    {/* Expanded */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: 'easeInOut' }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div
                            className="px-4 pb-4 border-t space-y-3"
                            style={{ borderColor: 'var(--border)' }}
                          >
                            {phase.insight && (
                              <blockquote
                                className="mt-3 text-sm italic leading-relaxed pl-3 border-l-2"
                                style={{
                                  color: 'var(--text-secondary)',
                                  borderColor: 'var(--accent)',
                                }}
                              >
                                {phase.insight}
                              </blockquote>
                            )}

                            {phase.courses.length > 0 && (
                              <div className="space-y-1.5">
                                <p
                                  className="text-2xs font-mono uppercase tracking-widest"
                                  style={{ color: 'var(--text-muted)' }}
                                >
                                  Módulos
                                </p>
                                {phase.courses.map(course => (
                                  <div
                                    key={course.title}
                                    className="flex items-center gap-2.5 text-sm"
                                    style={{
                                      color: course.done
                                        ? 'var(--text-secondary)'
                                        : 'var(--text-muted)',
                                    }}
                                  >
                                    <span
                                      className="text-xs shrink-0"
                                      style={{
                                        color: course.done
                                          ? dotColor.done
                                          : 'var(--text-muted)',
                                      }}
                                    >
                                      {course.done ? '✓' : '○'}
                                    </span>
                                    {course.title}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Roadmap link */}
        <div
          className="mt-6 rounded-xl p-4 flex items-center justify-between"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        >
          <div>
            <p className="text-sm font-medium text-text">Roadmap completo</p>
            <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
              Tracker detalhado com todos os cursos e progresso
            </p>
          </div>
          <a
            href="/learning-journey.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1.5 rounded-lg transition-colors shrink-0"
            style={{ background: 'var(--accent-subtle)', color: 'var(--accent)' }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(217,119,87,0.14)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--accent-subtle)'
            }}
          >
            ↗ Ver tracker
          </a>
        </div>
      </div>
    </div>
  )
}
