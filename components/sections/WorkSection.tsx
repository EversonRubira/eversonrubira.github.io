'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, type Project } from '@/data/projects'

const statusLabel: Record<Project['status'], string> = {
  production: 'Produção',
  beta: 'Beta',
  wip: 'Em curso',
  archived: 'Arquivo',
}

const statusColor: Record<Project['status'], string> = {
  production: '#4ade80',
  beta: '#fbbf24',
  wip: '#60a5fa',
  archived: 'var(--text-muted)',
}

function ProjectTile({ project, span }: { project: Project; span: string }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`${span} rounded-xl border p-5 flex flex-col gap-3 cursor-pointer transition-colors group`}
      style={{
        background: 'var(--surface)',
        borderColor: expanded ? 'var(--border-hover)' : 'var(--border)',
      }}
      onClick={() => setExpanded(e => !e)}
      onMouseEnter={e => {
        if (!expanded) (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-hover)'
      }}
      onMouseLeave={e => {
        if (!expanded) (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-text leading-tight">{project.title}</h3>
          <p className="text-xs mt-0.5 font-mono" style={{ color: 'var(--text-muted)' }}>
            {project.subtitle}
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
            {project.year}
          </span>
          <span
            className="inline-flex items-center gap-1 text-2xs font-mono px-1.5 py-0.5 rounded"
            style={{
              background: `${statusColor[project.status]}14`,
              color: statusColor[project.status],
            }}
          >
            <span
              className="w-1 h-1 rounded-full"
              style={{ background: statusColor[project.status] }}
            />
            {statusLabel[project.status]}
          </span>
        </div>
      </div>

      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.slice(0, 4).map(tag => (
          <span
            key={tag}
            className="text-2xs font-mono px-2 py-0.5 rounded"
            style={{
              background: 'var(--border)',
              color: 'var(--text-muted)',
            }}
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span
            className="text-2xs font-mono px-2 py-0.5 rounded"
            style={{ background: 'var(--border)', color: 'var(--text-muted)' }}
          >
            +{project.tags.length - 4}
          </span>
        )}
      </div>

      {/* Expanded */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div
              className="pt-3 mt-1 border-t space-y-3"
              style={{ borderColor: 'var(--border)' }}
            >
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {project.longDescription}
              </p>

              {project.metrics && (
                <div className="grid grid-cols-3 gap-2">
                  {project.metrics.map(m => (
                    <div
                      key={m.label}
                      className="rounded-lg p-2.5 text-center"
                      style={{ background: 'var(--bg)' }}
                    >
                      <p className="text-base font-semibold text-accent font-mono">{m.value}</p>
                      <p className="text-2xs mt-0.5 leading-tight" style={{ color: 'var(--text-muted)' }}>
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex gap-2">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg border transition-colors"
                    style={{
                      color: 'var(--text-secondary)',
                      borderColor: 'var(--border)',
                    }}
                    onClick={e => e.stopPropagation()}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'var(--border-hover)'
                      e.currentTarget.style.color = 'var(--text)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.color = 'var(--text-secondary)'
                    }}
                  >
                    ◆ GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg transition-colors"
                    style={{
                      background: 'var(--accent-subtle)',
                      color: 'var(--accent)',
                    }}
                    onClick={e => e.stopPropagation()}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'var(--accent-subtle-hover, rgba(217,119,87,0.14))'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'var(--accent-subtle)'
                    }}
                  >
                    ↗ Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expand hint */}
      <div
        className="flex items-center gap-1 text-2xs font-mono mt-auto pt-1"
        style={{ color: 'var(--text-muted)' }}
      >
        <span>{expanded ? '↑ Fechar' : '↓ Expandir'}</span>
      </div>
    </div>
  )
}

export default function WorkSection() {
  const spans = [
    'col-span-2 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-2 row-span-1',
  ]

  return (
    <div className="h-full scroll-area">
      <div
        className="max-w-3xl mx-auto px-6 py-8"
        style={{ paddingBottom: '80px' }}
      >
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs" style={{ color: 'var(--accent)' }}>
              ◈ WORK
            </span>
          </div>
          <h1 className="text-2xl font-semibold text-text leading-tight">
            Sistemas de IA em produção.
          </h1>
          <p className="mt-1.5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Backend Engineer a construir produtos de IA com Java, Spring Boot e LangChain.
            Foco em arquitecturas que funcionam — não só em demos.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 gap-3">
          {projects.map((project, i) => (
            <ProjectTile
              key={project.id}
              project={project}
              span={spans[i] ?? 'col-span-1'}
            />
          ))}
        </div>

        {/* Stats row */}
        <div
          className="mt-6 grid grid-cols-4 gap-3"
        >
          {[
            { value: '5+', label: 'Anos de eng.' },
            { value: '3', label: 'Sistemas IA' },
            { value: '94%', label: 'Precisão média' },
            { value: '12k', label: 'Items/hora' },
          ].map(stat => (
            <div
              key={stat.label}
              className="rounded-xl p-4 text-center"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            >
              <p className="text-xl font-semibold font-mono text-accent">{stat.value}</p>
              <p className="text-2xs mt-1 leading-tight" style={{ color: 'var(--text-muted)' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
