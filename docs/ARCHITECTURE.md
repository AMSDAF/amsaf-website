# Arquitetura

## Escopo

O Portfolio Foundation é uma única aplicação Next.js inicialmente. Seu objetivo
é fornecer uma base reutilizável para portfólios profissionais, começando pela
Emilly Araújo Fotografia e podendo receber uma segunda implementação para um
desenvolvedor de software. Não é um SaaS, CMS genérico ou construtor visual.

## Estrutura atual

```text
portfolio-foundation/
├── docs/
├── frontend/
│   ├── public/
│   │   └── gallery/
│   ├── src/
│   │   ├── app/
│   │   │   ├── globals.css
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── robots.ts
│   │   │   └── sitemap.ts
│   │   ├── config/
│   │   │   ├── seo.ts
│   │   │   └── site.ts
│   │   ├── components/
│   │   │   ├── card.tsx
│   │   │   ├── content-section.tsx
│   │   │   ├── gallery.tsx
│   │   │   ├── hero.tsx
│   │   │   └── site-shell.tsx
│   │   └── types/
│   │       ├── content.ts
│   │       └── navigation.ts
│   ├── tests/
│   │   └── seo.test.ts
│   ├── vitest.config.ts
│   ├── next.config.ts
│   ├── package.json
│   ├── package-lock.json
│   └── tsconfig.json
├── .gitignore
├── AGENTS.md
└── README.md
```

O código da aplicação permanece em `frontend/`; essa fronteira não deve ser
reorganizada. `src/config` e `src/types` agora existem porque PF-004 introduziu
configuração centralizada e contratos compartilhados; `src/config/seo.ts`
centraliza a ativação explícita da indexação definida na PF-006. Os componentes
do template em `src/components/` foram criados no EPIC-02 porque possuem uso
concreto no layout raiz e na página inicial. Features e lib continuam ausentes
porque o scaffold atual ainda não possui responsabilidades que justifiquem
essas camadas.

## Responsabilidades dos diretórios

Quando forem necessários, os diretórios terão responsabilidades distintas:

- `src/app/`: rotas, layouts e arquivos reconhecidos pelo App Router.
- `src/components/`: componentes de interface compartilháveis e sem conteúdo
  específico de uma marca.
- `src/features/`: fluxos ou áreas de negócio que combinam apresentação,
  comportamento e dados da própria feature.
- `src/config/`: configuração estática da aplicação e integrações, sem lógica
  de apresentação. Inclui a configuração do site e a política de SEO.
- `src/lib/`: utilitários e serviços independentes de componentes React.
- `src/types/`: contratos TypeScript compartilhados quando não pertencerem a
  uma feature específica. Atualmente contém os contratos neutros de conteúdo e
  navegação.
- `tests/`: testes unitários da fundação, sem dependência da interface ou de
  serviços externos.

Esses diretórios não devem ser criados apenas como scaffolding vazio. Uma
feature pode manter seus tipos, dados e utilitários próximos dela quando isso
reduzir acoplamento; mover algo para uma camada compartilhada exige uso
concreto em mais de um ponto.

## Tecnologias atuais

- Next.js 16.4.1, App Router e Turbopack.
- React e React DOM 19.3.0.
- TypeScript 5.9.3, com `strict: true`.
- Tailwind CSS 4.3.3 e `@tailwindcss/turbopack`.
- Vitest 3.2.4 para testes unitários.
- npm.

As versões e configurações instaladas estão em
`frontend/package.json`, `frontend/package-lock.json`, `frontend/tsconfig.json`,
`frontend/next.config.ts` e `frontend/vitest.config.ts`.

O alias `@/*` já está configurado em `frontend/tsconfig.json` para apontar para
`frontend/src/*`. Ele deve ser usado para imports entre áreas da aplicação
quando melhorar a clareza, sem substituir a separação de responsabilidades.

## Decisões arquiteturais

1. Uma aplicação única inicialmente; não criar backend separado neste estágio.
2. Conteúdo estático primeiro; persistência e painel vêm depois.
3. Separar dados, contratos tipados e apresentação. A configuração estática
   fica em `src/config`, enquanto os contratos ficam em `src/types`.
4. A indexação permanece desativada até existir domínio e publicação autorizada.
5. Extrair componentes compartilhados somente após existir necessidade concreta.
6. O núcleo não pode depender da identidade visual da Emilly.
7. Reutilizar infraestrutura e componentes quando fizer sentido, sem exigir que
   toda implementação tenha a mesma experiência visual.
8. Evitar sistemas de plugins, temas e abstrações genéricas sem caso de uso.
9. Não adicionar banco de dados à fundação antes do EPIC-04.

## Tecnologias futuras

Supabase (persistência e autenticação), Supabase Storage ou alternativa para
imagens, Vercel, Google Analytics 4, Search Console e ferramentas de conversão
são possibilidades planejadas. Nenhuma está implementada ou deve ser descrita
como dependência atual.

## Regras de dependência

- `app` pode compor `features`, `components`, `config`, `lib` e `types`.
- `features` pode usar componentes compartilhados, configuração, lib e tipos,
  mas não deve ser importada por uma feature irmã.
- `components` não deve importar conteúdo específico de uma marca ou feature.
- `config`, `lib` e `types` não devem importar componentes de apresentação.
- Dados não devem importar componentes de apresentação.
- `config` pode importar contratos de `types`, mas `types` não pode importar
  configuração ou componentes.
- `robots.ts` e `sitemap.ts` devem consumir a política de SEO centralizada, sem
  duplicar domínio ou estado de indexação.
- Integrações externas devem ficar atrás de limites claros e só serão
  introduzidas quando a tarefa correspondente for iniciada.
- Evitar dependências circulares e manter aliases relativos ao `@/*` existente.

O fluxo preferencial é direcionado para dentro: `app` compõe as camadas
inferiores, enquanto as camadas inferiores não importam rotas nem a identidade
de uma implementação. Dependências entre áreas devem ser introduzidas somente
quando houver uma relação funcional explícita.

## Convenções

Arquivos e diretórios usam kebab-case; componentes, tipos e interfaces usam
PascalCase; variáveis e funções usam camelCase. Commits usam inglês e
Conventional Commits. Tarefas usam o formato `PF-###`.
