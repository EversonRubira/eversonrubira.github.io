export interface Tech {
  name: string
  level: 'expert' | 'proficient' | 'learning'
}

export interface StackGroup {
  id: string
  label: string
  icon: string
  items: Tech[]
}

export const stackGroups: StackGroup[] = [
  {
    id: 'backend',
    label: 'Backend',
    icon: '⚙️',
    items: [
      { name: 'Java 21', level: 'expert' },
      { name: 'Spring Boot', level: 'expert' },
      { name: 'Spring Security', level: 'proficient' },
      { name: 'Hibernate / JPA', level: 'proficient' },
      { name: 'Maven', level: 'expert' },
      { name: 'REST APIs', level: 'expert' },
    ],
  },
  {
    id: 'ai',
    label: 'AI / ML',
    icon: '🧠',
    items: [
      { name: 'Claude API', level: 'proficient' },
      { name: 'LangChain4j', level: 'proficient' },
      { name: 'LangGraph', level: 'learning' },
      { name: 'RAG Pipelines', level: 'proficient' },
      { name: 'Prompt Engineering', level: 'proficient' },
      { name: 'HuggingFace', level: 'learning' },
    ],
  },
  {
    id: 'data',
    label: 'Dados',
    icon: '🗄️',
    items: [
      { name: 'PostgreSQL', level: 'expert' },
      { name: 'MongoDB', level: 'proficient' },
      { name: 'Redis', level: 'proficient' },
      { name: 'Kafka', level: 'learning' },
      { name: 'SQL', level: 'expert' },
    ],
  },
  {
    id: 'infra',
    label: 'Infra / DevOps',
    icon: '🚀',
    items: [
      { name: 'Docker', level: 'proficient' },
      { name: 'GitHub Actions', level: 'proficient' },
      { name: 'AWS (EC2, S3, RDS)', level: 'proficient' },
      { name: 'Linux', level: 'proficient' },
      { name: 'Nginx', level: 'proficient' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '🎨',
    items: [
      { name: 'TypeScript', level: 'proficient' },
      { name: 'React', level: 'proficient' },
      { name: 'Next.js', level: 'learning' },
      { name: 'Tailwind CSS', level: 'proficient' },
    ],
  },
]

export const levelLabel: Record<Tech['level'], string> = {
  expert: 'Expert',
  proficient: 'Proficiente',
  learning: 'A aprender',
}

export const levelColor: Record<Tech['level'], string> = {
  expert: 'text-accent',
  proficient: 'text-text',
  learning: 'text-text-secondary',
}
