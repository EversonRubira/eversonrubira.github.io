'use client'

export default function ContactSection() {
  return (
    <div className="h-full scroll-area">
      <div
        className="max-w-lg mx-auto px-6 py-8"
        style={{ paddingBottom: '80px' }}
      >
        {/* Header */}
        <div className="mb-8">
          <span className="font-mono text-xs" style={{ color: 'var(--accent)' }}>
            ◎ CONTACT
          </span>
          <h1 className="text-2xl font-semibold text-text leading-tight mt-1.5">
            Falar é gratuito.
          </h1>
          <p className="mt-1.5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Disponível para posições de AI Engineering, projectos freelance e conversas sobre
            sistemas de IA.
          </p>
        </div>

        {/* Status */}
        <div
          className="rounded-xl p-4 mb-6 flex items-center gap-3"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        >
          <span className="w-2 h-2 rounded-full bg-green-dot animate-pulse-dot shrink-0" />
          <div>
            <p className="text-sm font-medium text-text">Disponível para oportunidades</p>
            <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
              Respondo em menos de 48h
            </p>
          </div>
        </div>

        {/* Primary actions */}
        <div className="space-y-3 mb-6">
          <a
            href="mailto:eversonrubira@gmail.com"
            className="flex items-center justify-between w-full px-5 py-4 rounded-xl border transition-all"
            style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.background = 'var(--accent-subtle)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.background = 'var(--surface)'
            }}
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">✉</span>
              <div>
                <p className="text-sm font-medium text-text">Email</p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  eversonrubira@gmail.com
                </p>
              </div>
            </div>
            <span className="text-accent">→</span>
          </a>

          <a
            href="https://linkedin.com/in/eversonrubira"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-5 py-4 rounded-xl border transition-all"
            style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--border-hover)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.background = 'var(--surface)'
            }}
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">◆</span>
              <div>
                <p className="text-sm font-medium text-text">LinkedIn</p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  linkedin.com/in/eversonrubira
                </p>
              </div>
            </div>
            <span style={{ color: 'var(--text-muted)' }}>↗</span>
          </a>

          <a
            href="https://github.com/eversonrubira"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-5 py-4 rounded-xl border transition-all"
            style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--border-hover)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.background = 'var(--surface)'
            }}
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">◆</span>
              <div>
                <p className="text-sm font-medium text-text">GitHub</p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  github.com/eversonrubira
                </p>
              </div>
            </div>
            <span style={{ color: 'var(--text-muted)' }}>↗</span>
          </a>
        </div>

        {/* CV download */}
        <div
          className="rounded-xl p-4 flex items-center justify-between"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        >
          <div>
            <p className="text-sm font-medium text-text">Curriculum Vitae</p>
            <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
              Versão completa em formato web + PDF
            </p>
          </div>
          <a
            href="/cv.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1.5 rounded-lg transition-colors shrink-0"
            style={{ background: 'var(--accent-subtle)', color: 'var(--accent)' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(217,119,87,0.14)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent-subtle)' }}
          >
            ↗ Ver CV
          </a>
        </div>

        {/* Footer note */}
        <p
          className="mt-6 text-xs text-center leading-relaxed"
          style={{ color: 'var(--text-muted)' }}
        >
          Projectos em Portugal · Remoto disponível · Preferência por missões em AI Engineering
        </p>
      </div>
    </div>
  )
}
