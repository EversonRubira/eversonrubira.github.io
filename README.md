# eversonrubira.github.io

Portfólio pessoal de **Everson Rubira** — Backend Developer baseado em Seixal, Portugal. Site estático hospedado no GitHub Pages, construído inteiramente com HTML5, CSS3 e JavaScript vanilla, sem nenhum framework ou ferramenta de build.

🌐 **Live:** [eversonrubira.github.io](https://eversonrubira.github.io)

---

## Visão Geral

O site é composto por duas páginas:

| Ficheiro | Propósito |
|---|---|
| `index.html` | Portfólio completo (página principal) |
| `cv.html` | CV formal optimizado para impressão / PDF |

---

## Funcionalidades

- **Tema escuro / claro** — toggle com persistência via `localStorage`
- **Bilingue PT / EN** — comutação entre Português e Inglês via atributos `data-pt` / `data-en`, com preferência guardada em `localStorage`
- **Animação canvas no hero** — rede neuronal interactiva com 60 nós, física de partículas e atracção pelo rato, desenhada com a Canvas API e `requestAnimationFrame`
- **Integração com a GitHub API** — listagem dinâmica de repositórios e contador de repos ao vivo
- **Secções com fade-in** — `IntersectionObserver` acciona transições CSS ao entrar no viewport
- **Nav activa** — `IntersectionObserver` marca o link da secção actual
- **Menu mobile** — hamburger drawer para ecrãs ≤ 768 px
- **Scroll-to-top** — botão fixo que aparece após 300 px de scroll
- **Responsive** — CSS Grid + Flexbox com breakpoints em 480 px, 768 px e 1024 px
- **Print / PDF** — estilos `@media print` extensivos para geração de PDF limpo
- **CV dedicado** — `cv.html` com barras de progresso de aprendizagem activa e formatação A4

---

## Estrutura do Projecto

```
eversonrubira.github.io/
├── index.html              # Portfólio (HTML + CSS + JS inline)
├── cv.html                 # CV optimizado para impressão
├── foto-perfil.jpeg        # Foto de perfil (variante 1)
├── foto-perfil (2).jpeg    # Foto de perfil (variante 2)
├── foto-containers.jpg     # Imagem de fundo
└── .gitignore
```

Toda a lógica CSS e JavaScript está inline dentro dos ficheiros HTML — sem bundler, sem dependências npm, sem processo de build.

---

## Secções (index.html)

### Hero
- Animação canvas (rede neuronal interactiva)
- Subtítulo rotativo: *"Backend Developer"* → *"Java · Python · AI Integration"* (intervalo 3,1 s)
- CTAs: Ver Projetos, Contacto, Ver CV
- Links sociais: LinkedIn, GitHub, Email

### Sobre
- Bio e contexto profissional
- 4 métricas: anos de experiência, clientes em produção, repos no GitHub (dinâmico), horas de estágio

### Experiência
Timeline com 3 entradas:
1. **Pipoca Ágil @ Accenture Portugal** — Estágio Full-Stack (fev. 2026 – presente)
2. **ImplementIQ Systems** — Co-fundador & Developer (jan. 2024 – presente)
3. **Accenture Lisboa** — Trust & Safety Associate + mentor Agentic AI

### Projectos
Cards destacados + strip dinâmica com repositórios do GitHub:
- FitCheck (Claude API)
- Sulav Sushi Bar (produção)
- Boardly, GestaoSaudeMental, Wedding Clinic

### Stack Tecnológica

| Categoria | Tecnologias |
|---|---|
| Backend | Java 17/21, Spring Boot, Node.js, Python, FastAPI |
| Frontend | Angular, TypeScript, HTML/CSS, JavaScript |
| Bases de dados | PostgreSQL, MySQL, MongoDB, Supabase |
| Testing & QA | JUnit 5, Vitest, Postman, Robot Framework, Cypress |
| DevOps | Docker, Git, GitHub, Linux, Jira |
| IA & Automação | LangChain, Claude API, Anthropic SDK, LangGraph, Prompt Engineering |

### Formação
- **IPS TeSP** (2024 – dez. 2026)
- **Alura** — +30 certificações (Java, Spring Boot, QA, Python, Go, Cloud, IA)
- **Anthropic Academy** — Claude 101, Claude Code in Action, AI Fluency, Building with Claude API (em curso)

### Contacto
Email, WhatsApp, LinkedIn, GitHub — com texto de disponibilidade (Portugal, Espanha ou remoto).

---

## Design System

O site usa um sistema de variáveis CSS custom sem qualquer framework:

```css
--bg-base       /* Fundo principal */
--bg-surface    /* Superfícies de cards */
--accent        /* Indigo (#6366f1 / #818cf8 dark) */
--success       /* Verde para estados activos */
--warning       /* Laranja para estados "em desenvolvimento" */
--text-primary  /* Texto principal */
--text-muted    /* Texto secundário */
```

Todos os valores são sobrescritos na classe `.dark` do elemento `<html>`.

---

## JavaScript (sem bibliotecas)

| Módulo | Mecanismo |
|---|---|
| Tema | `localStorage` + toggle de classe `.dark` no `<html>` |
| Idioma | Leitura de `data-pt` / `data-en` + `localStorage` |
| Canvas | Canvas API + `requestAnimationFrame` + mouse events |
| Fade-in | `IntersectionObserver` (threshold 0,1) |
| Nav activa | `IntersectionObserver` por secção |
| GitHub API | `fetch` sem auth — filtra forks, exclui repos fixados, renderiza 8 cards |
| Scroll-to-top | `scroll` event + `window.scrollTo` smooth |
| Mobile menu | Toggle de classe `.open` no drawer |

---

## APIs Externas

| Serviço | Uso |
|---|---|
| Google Fonts (Inter) | Tipografia via CDN |
| GitHub REST API | Listagem pública de repos (sem autenticação) |

Sem analytics, sem tracking, sem cookies.

---

## CV (cv.html)

Versão formatada para impressão com:
- Cabeçalho com todos os contactos
- Mesmas secções do portfólio em layout compacto A4
- Barras de progresso de aprendizagem activa (ex.: *LangChain: Agentes de IA — 61%*)
- Botão "Print / Save PDF" + link de retorno ao portfólio
- Estilos `@media print` que removem botões, ajustam espaçamentos e forçam cores para impressão

---

## Deploy

O site é servido directamente pelo **GitHub Pages** a partir da branch `main`, sem processo de build. Qualquer push para `main` actualiza o site automaticamente.

```bash
# Clonar e abrir localmente
git clone https://github.com/EversonRubira/eversonrubira.github.io.git
cd eversonrubira.github.io

# Abrir no browser (sem servidor necessário)
open index.html
# ou simplesmente arrastar o ficheiro para o browser
```

---

## Autor

**Everson Rubira**
Backend Developer · Seixal, Portugal
[linkedin.com/in/eversonrubira](https://linkedin.com/in/eversonrubira) · [github.com/EversonRubira](https://github.com/EversonRubira) · eversonrubira@gmail.com
