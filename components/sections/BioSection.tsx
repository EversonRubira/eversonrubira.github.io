'use client'

export default function BioSection() {
  return (
    <div className="h-full scroll-area">
      <div
        className="max-w-2xl mx-auto px-6 py-8"
        style={{ paddingBottom: '80px' }}
      >
        {/* Header */}
        <div className="mb-8">
          <span className="font-mono text-xs" style={{ color: 'var(--accent)' }}>
            ◉ BIO
          </span>
          <h1 className="text-2xl font-semibold text-text leading-tight mt-1.5">
            Everson Rubira.
          </h1>
          <p className="mt-1.5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Backend Engineer a fazer a transição para AI Engineering.
          </p>
        </div>

        {/* Photo + intro */}
        <div className="flex gap-6 mb-8">
          <img
            src="/foto-perfil.jpeg"
            alt="Everson Rubira"
            className="w-20 h-20 rounded-xl object-cover shrink-0"
            style={{ border: '1px solid var(--border)' }}
          />
          <div className="min-w-0">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Comecei em Operações de Conteúdo, onde aprendi que sistemas de IA falham de formas
              previsíveis. Essa observação tornou-se obsessão: queria construir o sistema, não só
              usar o produto.
            </p>
            <p
              className="text-sm leading-relaxed mt-2"
              style={{ color: 'var(--text-secondary)' }}
            >
              Hoje combino 5+ anos de eng. backend com especialização em AI Engineering —
              construindo produtos que funcionam em produção, não só em demos.
            </p>
          </div>
        </div>

        {/* Credentials */}
        <div className="space-y-4">
          {/* Experience */}
          <div
            className="rounded-xl border p-5"
            style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
          >
            <h2 className="text-sm font-semibold text-text mb-4">Experiência</h2>
            <div className="space-y-4">
              {[
                {
                  role: 'Backend Engineer · AI Systems',
                  company: 'Freelance / Projectos próprios',
                  period: '2024 – presente',
                  note: 'Construção de sistemas de IA com Java, Spring Boot, LangChain e Claude API.',
                },
                {
                  role: 'Trust & Safety Analyst',
                  company: 'Empresa de tecnologia',
                  period: '2022 – 2024',
                  note: 'Revisão de conteúdo com assistência de IA. Automação de pipelines de moderação.',
                },
                {
                  role: 'Content Operations Specialist',
                  company: 'BPO / Serviços digitais',
                  period: '2019 – 2022',
                  note: 'Operações de conteúdo em escala. Primeiro contacto com limitações de LLMs.',
                },
              ].map(exp => (
                <div
                  key={exp.role}
                  className="flex gap-4 pb-4 border-b last:border-0 last:pb-0"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-text">{exp.role}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                      {exp.company}
                    </p>
                    <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {exp.note}
                    </p>
                  </div>
                  <span
                    className="text-xs font-mono shrink-0"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {exp.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div
            className="rounded-xl border p-5"
            style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
          >
            <h2 className="text-sm font-semibold text-text mb-4">Formação</h2>
            <div className="space-y-3">
              {[
                {
                  title: 'AI Engineering Roadmap',
                  org: 'Auto-estruturado · 7 fases',
                  year: '2024 – 2025',
                },
                {
                  title: 'Tecnologia em Sistemas de Informação',
                  org: 'Instituição de ensino superior',
                  year: '2018 – 2021',
                },
              ].map(edu => (
                <div key={edu.title} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-text">{edu.title}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                      {edu.org}
                    </p>
                  </div>
                  <span
                    className="text-xs font-mono shrink-0"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {edu.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div
            className="rounded-xl border p-5"
            style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
          >
            <h2 className="text-sm font-semibold text-text mb-4">Princípios</h2>
            <div className="space-y-3">
              {[
                {
                  title: 'Production first',
                  desc: 'Um sistema que funciona em produção vale mais do que 10 demos impressionantes.',
                },
                {
                  title: 'Construir antes de falar',
                  desc: 'Opiniões sobre AI sem ter construído são teoria. O código é o argumento.',
                },
                {
                  title: 'Transições têm valor',
                  desc: 'Vir de T&S dá-me contexto que alguém que só fez backend não tem: sei onde os LLMs falham.',
                },
              ].map(v => (
                <div key={v.title} className="flex gap-3">
                  <span className="text-accent shrink-0 mt-0.5">◈</span>
                  <div>
                    <p className="text-sm font-medium text-text">{v.title}</p>
                    <p className="text-xs mt-0.5 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
