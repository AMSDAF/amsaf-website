# Portfolio Foundation

Fundação web reutilizável para portfólios profissionais. A primeira implementação
planejada é o portfólio comercial da Emilly Araújo Fotografia; posteriormente, a
mesma infraestrutura poderá apoiar um portfólio de desenvolvedor.

O projeto não pretende ser um SaaS, CMS genérico ou construtor visual. A
reutilização deve concentrar-se em infraestrutura e componentes comprovadamente
compartilhados, sem forçar a mesma experiência visual para todas as marcas.

## Estado atual

O repositório concluiu as tarefas PF-001 a PF-009 da fundação e PF-010 a PF-019
do EPIC-02. O shell estrutural envolve a aplicação com Header, navegação
principal, conteúdo principal e Footer; a página inicial também compõe Hero,
seções, galeria, cards e CTAs neutros. Identidade visual, conteúdo comercial,
painel administrativo, métricas e integrações ainda não foram implementados. A
infraestrutura SEO está preparada, mas a indexação permanece desativada até
existir domínio e publicação autorizada.
Consulte o [roadmap](./docs/ROADMAP.md) e o [backlog](./docs/BACKLOG.md) para o
estado detalhado.

## Stack instalada

- Next.js 16.4.1 com App Router e Turbopack.
- React e React DOM 19.3.0.
- TypeScript 5.9.3 com `strict` habilitado.
- Tailwind CSS 4.3.3, integrado pelo `@tailwindcss/turbopack`.
- Vitest 3.2.4 para testes unitários.
- npm.

As versões efetivamente instaladas têm como fonte de verdade o
[`frontend/package-lock.json`](./frontend/package-lock.json). Supabase, Vercel,
Google Analytics, Search Console e armazenamento de imagens são possibilidades
futuras, não integrações atuais.

## Requisitos

- Node.js 20.9.0 ou superior.
- npm disponível no ambiente.

Não são necessárias variáveis de ambiente ou serviços externos para o scaffold
atual.

## Instalação e desenvolvimento

Os comandos da aplicação devem ser executados dentro de `frontend/`:

```bash
cd frontend
npm ci
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000). Para encerrar o servidor,
pressione `Ctrl+C`.

## Comandos disponíveis atualmente

Dentro de `frontend/`:

| Comando | Situação |
| --- | --- |
| `npm run dev` | disponível |
| `npm run build` | disponível |
| `npm start` | disponível após um build |
| `npm run lint` | disponível |
| `npm run typecheck` | disponível |
| `npm run test` | disponível |
| `npm run format` | disponível |
| `npm run format:check` | disponível |

## Estrutura

```text
portfolio-foundation/
├── docs/                 # visão, arquitetura, design system e planejamento
├── frontend/
│   ├── public/
│   │   └── gallery/       # Mídia SVG local e substituível do template
│   ├── src/
│   │   ├── app/          # App Router e tela inicial atual
│   │   ├── components/   # Componentes compartilhados com uso concreto
│   │   ├── config/       # Configuração estática do site e SEO
│   │   └── types/        # Contratos compartilhados
│   ├── tests/            # Testes unitários da fundação
│   ├── vitest.config.ts
│   ├── next.config.ts
│   ├── package.json
│   └── tsconfig.json
├── .gitignore
├── AGENTS.md
└── README.md
```

O alias `@/*` aponta para `frontend/src/*`. O Tailwind CSS 4 usa
`@import "tailwindcss"` em `frontend/src/app/globals.css`, que também define
tokens neutros iniciais; ainda não há arquivo `tailwind.config`.

O diretório de componentes foi criado para o shell estrutural implementado na
PF-011. Features e bibliotecas serão criadas quando houver responsabilidades
concretas para elas. Os diretórios de configuração e tipos já existem porque
centralizam contratos e dados estáticos do scaffold atual; nenhuma camada
adicional é criada antecipadamente.

A indexação está desativada por padrão: não há domínio, URL canônica ou
publicação autorizada configurados. A ativação de SEO público deve definir um
domínio real e alterar explicitamente a política em `src/config/seo.ts`.

## Documentação

- [Arquitetura](./docs/ARCHITECTURE.md)
- [Design System](./docs/DESIGN_SYSTEM.md)
- [Roadmap](./docs/ROADMAP.md)
- [Backlog](./docs/BACKLOG.md)

As decisões e o planejamento devem permanecer consistentes com o código
implementado. Mudanças de escopo devem ser registradas na documentação
correspondente.
