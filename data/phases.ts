export type PhaseStatus = 'done' | 'active' | 'planned'

export interface Course {
  title: string
  done: boolean
}

export interface Phase {
  n: number
  title: string
  subtitle: string
  period: string
  status: PhaseStatus
  courses: Course[]
  insight?: string
}

export const phases: Phase[] = [
  {
    n: 1,
    title: 'Operações de Conteúdo',
    subtitle: 'Trust & Safety · Moderação · Qualidade',
    period: '2019 – 2022',
    status: 'done',
    courses: [],
    insight: 'Aprendi que sistemas de IA falham de formas previsíveis. Ficou a semente.',
  },
  {
    n: 2,
    title: 'T&S e Automação',
    subtitle: 'Pipelines · Classificação · Revisão humana',
    period: '2022 – 2023',
    status: 'done',
    courses: [],
    insight: 'Vi de perto onde os modelos acertam e onde precisam de humanos. Queria construir o sistema, não usar o produto.',
  },
  {
    n: 3,
    title: 'Fundações de GenAI',
    subtitle: 'LLMs · Prompting · LangChain · RAG',
    period: '2024',
    status: 'active',
    courses: [
      { title: 'Agentes com LangChain e LangGraph', done: false },
      { title: 'Claude API e MCP', done: false },
      { title: 'RAG Avançado com Vector Stores', done: false },
      { title: 'Fine-tuning e Avaliação de LLMs', done: false },
    ],
    insight: 'A fase onde tudo clica: backend skills + LLMs = capacidade de construir produtos de IA reais.',
  },
  {
    n: 4,
    title: 'Backend AI Integration',
    subtitle: 'Spring AI · Microserviços · Observabilidade',
    period: '2025 Q1',
    status: 'planned',
    courses: [
      { title: 'Spring AI e Integração com LLMs', done: false },
      { title: 'Arquitectura de Microserviços com IA', done: false },
      { title: 'Observabilidade para Sistemas de IA', done: false },
    ],
  },
  {
    n: 5,
    title: 'AI Systems Engineering',
    subtitle: 'MLOps · Deploy · Avaliação em produção',
    period: '2025 Q2',
    status: 'planned',
    courses: [
      { title: 'MLOps com GitHub Actions e Docker', done: false },
      { title: 'Avaliação e Guardrails para LLMs', done: false },
      { title: 'Sistemas de IA em Produção', done: false },
    ],
  },
]
