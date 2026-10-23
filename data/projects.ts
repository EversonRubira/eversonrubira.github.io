export type ProjectStatus = 'production' | 'beta' | 'wip' | 'archived'
export type ProjectSize = 'large' | 'medium' | 'small'

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  tags: string[]
  status: ProjectStatus
  size: ProjectSize
  year: string
  repo?: string
  demo?: string
  metrics?: { label: string; value: string }[]
}

export const projects: Project[] = [
  {
    id: 'ai-sales-assistant',
    title: 'Assistente de Vendas IA',
    subtitle: 'LangChain · Claude API · Spring Boot',
    description: 'Agente conversacional que qualifica leads, responde dúvidas de produto e escala para humanos com contexto completo.',
    longDescription:
      'Arquitectura multi-agente com LangChain e LangGraph. O orquestrador delega para agentes especializados: qualificação de lead, lookup de produto (RAG sobre catálogo), e escalação. Integrado via webhook com CRM interno. Memória de conversa persistida em Redis.',
    tags: ['Java', 'Spring Boot', 'LangChain4j', 'Claude API', 'Redis', 'PostgreSQL'],
    status: 'production',
    size: 'large',
    year: '2024',
    metrics: [
      { label: 'Resolução sem humano', value: '74%' },
      { label: 'Tempo médio de resposta', value: '1.2s' },
      { label: 'Leads qualificados/dia', value: '340+' },
    ],
  },
  {
    id: 'intelligent-review',
    title: 'Sistema de Revisão Inteligente',
    subtitle: 'Claude API · Spring Boot · React',
    description: 'Pipeline de revisão de conteúdo com Claude API que detecta violações de política com 94% de precisão.',
    longDescription:
      'Sistema que processa submissões de conteúdo em tempo real. O pipeline usa Claude para classificação semântica, extracção de entidades e geração de justificativas auditáveis. Dashboard React para revisores humanos com flow de escalação.',
    tags: ['Java', 'Spring Boot', 'Claude API', 'React', 'TypeScript', 'Kafka'],
    status: 'production',
    size: 'medium',
    year: '2024',
    metrics: [
      { label: 'Precisão', value: '94%' },
      { label: 'Items processados/h', value: '12k' },
    ],
  },
  {
    id: 'nlp-api',
    title: 'API de Processamento NLP',
    subtitle: 'Java · Spring Boot · HuggingFace',
    description: 'API REST para análise de sentimento, extracção de entidades e classificação de intenção em português.',
    longDescription:
      'Wrapper production-ready sobre modelos HuggingFace fine-tuned para português. Rate limiting por API key, cache de respostas com Redis, observabilidade com Micrometer + Prometheus. Documentação automática com SpringDoc OpenAPI.',
    tags: ['Java', 'Spring Boot', 'HuggingFace', 'Redis', 'Docker', 'Prometheus'],
    status: 'beta',
    size: 'medium',
    year: '2023',
  },
  {
    id: 'roadmap-tracker',
    title: 'Roadmap Tracker PWA',
    subtitle: 'TypeScript · PWA · GitHub Actions',
    description: 'Aplicação offline-first para rastrear progresso no roadmap de AI Engineering, integrada com este portfolio.',
    longDescription:
      'PWA com sincronização via JSON estático (roadmap-summary.json) servido pelo GitHub Pages. Service Worker para funcionamento offline, notificações push para milestones. Dados partilhados com este portfolio via contrato JSON.',
    tags: ['TypeScript', 'PWA', 'Service Worker', 'GitHub Actions'],
    status: 'production',
    size: 'small',
    year: '2024',
    demo: '/learning-journey.html',
  },
]
