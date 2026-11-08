# Backlog

## EPIC-01 — Fundação do Projeto

| ID | Tarefa | Status |
| --- | --- | --- |
| PF-001 | Inicialização do repositório | Concluída |
| PF-002 | Configuração das ferramentas | Concluída |
| PF-003 | Estrutura arquitetural | Concluída |
| PF-004 | Configuração e contratos tipados | Concluída |
| PF-005 | Base visual e estilos globais | Concluída |
| PF-006 | Fundação de SEO | Concluída |
| PF-007 | Testes e validações | Concluída |
| PF-008 | Documentação do projeto | Concluída |
| PF-009 | Auditoria de encerramento | Concluída |

### PF-001 — Inicialização do repositório

Critérios: Git inicializado; Next.js, TypeScript, Tailwind e App Router
configurados; aplicação e build funcionais; README inicial criado.

Evidência disponível: scaffold em `frontend/`, `package.json`,
`package-lock.json`, `next.config.ts`, `tsconfig.json`, `src/app/` e README.
As validações posteriores confirmaram a execução da aplicação, o build de
produção e o funcionamento do App Router; a documentação inicial permanece
como evidência histórica da criação do scaffold.

### PF-002 — Configuração das ferramentas

Auditar ESLint; configurar Prettier sem conflitos; verificar TypeScript strict;
validar scripts `dev`, `build`, `start`, `lint`, `typecheck`, `format` e
`format:check`; garantir funcionamento dentro de `frontend/`.

Status: concluída. ESLint 9 com configuração flat baseada em
`eslint-config-next/core-web-vitals` e `eslint-config-prettier` foi configurado
em `frontend/eslint.config.mjs`. Prettier foi configurado em
`frontend/.prettierrc.json`, com artefatos gerados excluídos em
`frontend/.prettierignore`.

Scripts validados dentro de `frontend/`: `dev`, `build`, `start`, `lint`,
`typecheck`, `format` e `format:check`. O build de produção foi concluído; os
servidores de produção e desenvolvimento responderam HTTP 200 em smoke tests
locais.

### PF-003 — Estrutura arquitetural

Definir responsabilidades de diretórios; organizar componentes, features,
config, lib e types conforme necessidade; configurar aliases; evitar
dependências circulares; não acoplar a identidade da Emilly ao núcleo.

Status: concluída. As responsabilidades de `app`, `components`, `features`,
`config`, `lib` e `types`, além das regras de dependência e reutilização, estão
registradas em [ARCHITECTURE.md](./ARCHITECTURE.md). A estrutura atual mantém
`src/app`, `src/config` e `src/types`, pois PF-004 introduziu configuração e
contratos concretos. Diretórios vazios de componentes, features e lib não foram
criados para evitar complexidade desnecessária.

O alias `@/*` foi verificado em `frontend/tsconfig.json` e aponta para
`frontend/src/*`. ESLint e TypeScript foram executados sem erros, fornecendo
validação de imports e tipos para a estrutura atual. Não foram identificadas
dependências circulares.

### PF-004 — Configuração e contratos tipados

Centralizar configuração do site; criar contratos tipados para conteúdo e
navegação; separar dados e apresentação; evitar plugins e temas excessivamente
complexos.

Status: concluída. A configuração neutra do site está centralizada em
`frontend/src/config/site.ts`, e os contratos compartilhados de conteúdo e
navegação estão em `frontend/src/types/content.ts` e
`frontend/src/types/navigation.ts`. O layout usa `siteContent` para metadata,
mantendo dados separados da apresentação. Não foram introduzidos banco de
dados, plugins, temas ou conteúdo específico da Emilly.

### PF-005 — Base visual e estilos globais

Preparar estilos globais; definir tokens neutros iniciais; não implementar
identidade de marca; preparar a base do EPIC-02.

Status: concluída. `frontend/src/app/globals.css` mantém a importação do
Tailwind CSS 4 e define tokens semânticos neutros iniciais para canvas,
superfícies, bordas, conteúdo e foco, além de estilos globais mínimos para
reset de box sizing, corpo, links e foco visível. Não foram criados componentes
ou páginas do EPIC-02, nem aplicada identidade visual da Emilly.

### PF-006 — Fundação de SEO

Preparar Metadata API; implementar robots e sitemap adequadamente; evitar URLs
canônicas fictícias; documentar dependências de domínio.

Status: concluída. A Metadata API agora define `noindex,nofollow` por padrão
em `frontend/src/app/layout.tsx`. `frontend/src/app/robots.ts` bloqueia
crawlers enquanto a indexação estiver desativada, e
`frontend/src/app/sitemap.ts` implementa o contrato do Next.js sem publicar
URLs quando não há domínio configurado. A política central está em
`frontend/src/config/seo.ts`, com `indexingEnabled: false` e sem domínio
inventado. Não há URL canônica nem `metadataBase`; a ativação futura depende de
domínio real e publicação autorizada.

### PF-007 — Testes e validações

Adicionar testes básicos, typecheck, lint, build e execução em produção local.

Status: concluída. Foram adicionados Vitest e testes unitários em
`frontend/tests/seo.test.ts` para validar a política de indexação, o bloqueio
de crawlers e o sitemap vazio sem domínio. O script `npm run test` foi
configurado e executado. Também foram validados `typecheck`, `lint`,
`format:check`, `build` e o servidor de produção local com resposta HTTP 200.

### PF-008 — Documentação do projeto

Manter README, roadmap, backlog, arquitetura e design system atualizados, com
comandos, decisões e validações consistentes com o código.

Status: concluída. README, roadmap, backlog, arquitetura e design system foram
revisados contra o código atual. Comandos, versões, estrutura, decisões,
política de SEO e validações estão registrados sem declarar como implementadas
as tecnologias futuras. O estado do backlog permanece PF-001 a PF-008
concluídas, com PF-009 concluída nesta auditoria.

### PF-009 — Auditoria de encerramento

Revisar critérios anteriores, confirmar ausência de bloqueios estruturais,
verificar complexidade desnecessária, registrar validações e pendências e
confirmar prontidão para o EPIC-02.

Status: concluída. A auditoria final confirmou:

- PF-001 a PF-008 documentadas como concluídas, com evidências coerentes com o
  código atual.
- `npm run test`: 1 arquivo e 3 testes aprovados.
- `npm run lint`, `npm run typecheck` e `npm run format:check`: aprovados.
- `npm run build`: aprovado, com as rotas `/`, `/_not-found`, `/robots.txt` e
  `/sitemap.xml`.
- Smoke test de produção: `/`, `/robots.txt` e `/sitemap.xml` responderam
  HTTP 200; `noindex`, `Disallow: /` e sitemap vazio foram confirmados.
- Nenhum arquivo foi criado em `src/components` ou `src/features`, não há
  complexidade estrutural sem uso concreto e não há referência à identidade da
  Emilly no código-fonte.

Pendências e limites: a aplicação ainda é um scaffold mínimo; o template
neutro do EPIC-02, conteúdo de marca, domínio e indexação pública ainda não
foram implementados. Supabase, Storage, Vercel, Analytics e Search Console
continuam sendo possibilidades futuras. A fundação está pronta para iniciar o
EPIC-02, sem declarar os EPICs seguintes como concluídos.

## EPIC-02 — Template Neutro

| ID | Tarefa | Status | Dependências |
| --- | --- | --- | --- |
| PF-010 | Definição dos contratos e dados neutros do template | Concluída | PF-004, PF-005 |
| PF-011 | Implementação do shell, layout e navegação | Concluída | PF-010 |
| PF-012 | Implementação do Header e navegação responsiva | Concluída | PF-011 |
| PF-013 | Implementação do Footer e CTAs institucionais | Concluída | PF-011 |
| PF-014 | Implementação de Hero, seções e CTAs de conteúdo | Concluída | PF-010, PF-011 |
| PF-015 | Implementação de galeria e cards reutilizáveis | Concluída | PF-010, PF-011 |
| PF-016 | Composição da página inicial do template | Concluída | PF-012, PF-013, PF-014, PF-015 |
| PF-017 | Validação de responsividade e estados de interação | Concluída | PF-016 |
| PF-018 | Validação de acessibilidade e navegação por teclado | Concluída | PF-016 |
| PF-019 | Validação final, documentação e encerramento do EPIC-02 | Concluída | PF-017, PF-018 |

### PF-010 — Definição dos contratos e dados neutros do template

Separar o conteúdo de demonstração da apresentação e definir somente os
contratos necessários para Header, Footer, Hero, seções, galeria, cards, CTAs e
navegação. Usar os contratos existentes em `frontend/src/types/` quando forem
suficientes e adicionar novos tipos apenas para necessidades comprovadas.

Status: concluída retroativamente após auditoria contra o código existente. Os
contratos tipados estão em `frontend/src/types/content.ts` e
`frontend/src/types/navigation.ts`; os dados neutros de site, Hero, seções,
galeria, Footer e navegação estão centralizados em
`frontend/src/config/site.ts`. A apresentação consome esses contratos sem
embutir dados nos componentes. A busca no código da aplicação não encontrou
`any`, casts usados para contornar tipos ou referências à identidade da Emilly;
o único `as const`, em `frontend/src/config/seo.ts`, preserva literalidade da
configuração de SEO. Links possuem rótulos e destinos definidos, e as três
imagens locais possuem texto alternativo. Não há persistência, integração
externa, CMS ou abstração de tema.

Evidências: `npm run test` (1 arquivo e 3 testes), `npm run lint`,
`npm run typecheck` e `npm run format:check` passaram durante a auditoria.

Critérios de aceite:

- Os dados de demonstração são neutros, não citam a Emilly nem uma marca real e
  não ficam embutidos na árvore de componentes.
- Os contratos representam os dados realmente consumidos pela página e
  preservam TypeScript strict, sem `any` ou casts para contornar tipos.
- Links e itens de navegação possuem destino e rótulo claros; imagens de
  demonstração possuem texto alternativo ou são explicitamente decorativas.
- Nenhuma persistência, integração externa, CMS ou abstração de tema é
  introduzida.

### PF-011 — Implementação do shell, layout e navegação

Criar a composição estrutural do template dentro da fronteira `frontend/`,
respeitando App Router, a direção de dependências e os tokens neutros. O shell
deve permitir que páginas futuras componham conteúdo sem depender de uma marca.

Status: concluída. O componente `src/components/site-shell.tsx` foi conectado
ao layout raiz e fornece as regiões semânticas de Header, navegação principal,
conteúdo principal e Footer. A navegação consome `siteNavigation`, o título do
shell consome `siteContent` e os links usam `next/link`; não foram criados
destinos fictícios, conteúdo de marca ou integrações externas. A página inicial
foi ajustada para não aninhar outro elemento `<main>`. A validação foi realizada
com `npm run lint`, `npm run typecheck`, `npm run format:check`, `npm run test` e
`npm run build`, todos aprovados.

Critérios de aceite:

- O layout estrutural possui regiões semânticas para navegação, conteúdo
  principal e rodapé, sem duplicar configuração ou conteúdo.
- A página pode ser percorrida por links funcionais entre as áreas previstas,
  sem destinos fictícios que aparentem uma integração inexistente.
- Componentes compartilhados não importam conteúdo específico de marca ou
  feature, e não há dependências circulares.
- A apresentação usa os tokens neutros existentes; não cria tokens de creme,
  rosé, terracota, marrom, verde ou tipografia editorial.

### PF-012 — Implementação do Header e navegação responsiva

Implementar Header neutro com identidade textual/configurável do template,
navegação principal e comportamento adequado em telas estreitas, sem assumir a
arquitetura de uma marca específica.

Status: concluída. O Header do `src/components/site-shell.tsx` agora usa
composição empilhada em telas estreitas e composição horizontal a partir do
breakpoint `sm`, com espaçamento e padding adaptados. A navegação permanece
sem menu colapsável para manter todos os links funcionais sem JavaScript; os
itens continuam vindo de `siteNavigation`, com rótulos acessíveis e destinos
definidos. A implementação usa apenas tokens neutros e não introduz conteúdo
ou identidade de marca.

Critérios de aceite:

- A navegação principal é semanticamente identificável e cada item tem nome
  acessível e destino definido.
- O Header permanece utilizável em larguras móveis e desktop, sem sobreposição,
  corte de texto ou necessidade de rolagem horizontal.
- Se houver controle de expansão, ele possui estado, nome acessível, foco
  visível e pode ser operado por teclado; não depende apenas de hover.
- A navegação não exige JavaScript para que links básicos funcionem.

### PF-013 — Implementação do Footer e CTAs institucionais

Implementar Footer neutro com navegação secundária e CTAs de demonstração
compatíveis com os contratos definidos, sem publicar contatos ou URLs de
produção.

Status: concluída. O Footer do `src/components/site-shell.tsx` agora consome
`siteFooter`, com navegação secundária e CTA configurados em
`src/config/site.ts`, além da descrição neutra do site. O conteúdo foi separado
da apresentação por contratos em `src/types/content.ts`; o CTA usa um destino
interno válido para o conteúdo principal, sem telefone, e-mail, redes sociais,
depoimentos ou URLs de produção. Os links possuem foco visível e estados
visuais de interação, e o layout adapta-se a telas estreitas e maiores.

Critérios de aceite:

- O Footer usa região semântica, mantém hierarquia visual clara e não repete
  indiscriminadamente a navegação principal.
- CTAs possuem rótulos específicos, estados de foco/hover/disabled quando
  aplicável e destinos coerentes com o template.
- Não são incluídos telefone, e-mail, redes sociais, depoimentos ou outros
  dados reais da marca.
- O conteúdo permanece separado da apresentação e pode ser trocado sem alterar
  a estrutura do componente.

### PF-014 — Implementação de Hero, seções e CTAs de conteúdo

Criar os padrões de Hero e seções necessários para demonstrar hierarquia de
conteúdo, chamadas para ação e composição editorial neutra.

Status: concluída. Foram criados os componentes `Hero` e `ContentSection`, com
dados neutros configurados em `src/config/site.ts` e contratos em
`src/types/content.ts`. A página inicial usa um único `h1`, duas seções com
hierarquia `h2` e CTA interno com rótulo descritivo. Os CTAs usam contraste,
foco visível e estados de hover, sem estilos inline, tokens de marca, serviços,
categorias, campanhas ou conteúdo comercial da Emilly.

Critérios de aceite:

- O Hero possui um único título principal na composição da página, texto neutro
  e CTA com destino definido.
- Seções possuem títulos e estrutura semântica coerentes, sem depender de
  estilos inline ou valores de marca espalhados.
- CTAs mantêm contraste, foco visível e rótulos que descrevem a ação.
- O componente não presume serviços, categorias, campanhas ou conteúdo
  comercial da implementação da Emilly.

### PF-015 — Implementação de galeria e cards reutilizáveis

Criar galeria e cards apenas com as variações necessárias ao conteúdo de
demonstração, mantendo dados, mídia e apresentação desacoplados.

Status: concluída. Foram criados os componentes `Gallery` e `Card`, com
contratos `GalleryItem` e dados neutros em `src/config/site.ts`. A galeria é
usada concretamente na página inicial, organiza os itens em grade responsiva e
usa três SVGs locais substituíveis com texto alternativo. O card possui título,
descrição opcional e ação opcional; quando há ação, o card inteiro é um link
semântico com foco visível. Não foram introduzidos armazenamento, CDN,
dependências externas ou conteúdo protegido de terceiros.

Critérios de aceite:

- A galeria exibe itens neutros com proporções previsíveis, texto alternativo
  adequado e comportamento sem quebra em larguras móveis.
- Cards possuem estrutura consistente, título, descrição quando fornecida e
  ação opcional semanticamente identificável.
- Não é criado um componente genérico sem uso concreto nem uma abstração de
  mídia que dependa de serviço externo.
- Imagens e recursos utilizados são locais ou deliberadamente substituíveis,
  sem exigir armazenamento, CDN ou conteúdo protegido de terceiros.

### PF-016 — Composição da página inicial do template

Compor a página inicial navegável a partir dos componentes entregues, mantendo
uma experiência demonstrável e neutra.

Status: concluída. `src/app/page.tsx` compõe o Header e o Footer fornecidos pelo
shell com Hero, duas seções de conteúdo, galeria e cards. Os dados vêm de
`src/config/site.ts`, e os CTAs e links apontam para âncoras internas existentes
(`#template-overview`, `#template-principles` e `#main-content`). A composição
mantém um único `h1`, não contém identidade ou conteúdo comercial da Emilly e
preserva a política de indexação desativada. A validação executada nesta tarefa
passou com `npm run lint`, `npm run typecheck`, `npm run test` e
`npm run format:check`; o build será repetido ao final desta execução.

Critérios de aceite:

- A página inicial usa Header, Hero, seções, galeria/cards, CTAs e Footer onde
  cada elemento tiver função real, sem duplicação ornamental.
- A hierarquia apresenta uma narrativa completa do template e oferece
  navegação para os destinos definidos nos contratos.
- A composição não contém identidade, conteúdo ou tokens específicos da
  Emilly, nem declara integrações futuras como disponíveis.
- A rota inicial renderiza sem erros no ambiente local e preserva a política
  existente de indexação desativada.

### PF-017 — Validação de responsividade e estados de interação

Verificar e ajustar o comportamento do template em larguras móveis, médias e
desktop, incluindo estados interativos e ausência de overflow.

Status: concluída. Foram verificadas as larguras de viewport 320, 375, 768 e
1280 px em execução local. Em todas, `document.documentElement.scrollWidth` não
excedeu `window.innerWidth`; Header, navegação, Hero, seções, galeria, cards,
CTAs e Footer permaneceram dentro da viewport. Em telas estreitas o Header e o
Footer ficam empilhados, enquanto a galeria usa uma coluna; em telas médias e
desktop a navegação e o Footer podem alinhar-se horizontalmente e a galeria
usa duas e três colunas, respectivamente. Links e CTAs foram ajustados para
manter foco visível, hover e feedback de ativação por sublinhado ou movimento,
sem depender apenas de cor. A validação foi feita no navegador integrado contra
`http://localhost:3000`; o servidor já existente foi reutilizado, e um
servidor adicional não foi iniciado por a porta estar ocupada. Não foi feita
validação de acessibilidade por teclado nesta tarefa, pois pertence à PF-018.

Critérios de aceite:

- A página é utilizável nos breakpoints adotados pelo projeto, sem overflow
  horizontal, elementos sobrepostos ou controles inacessíveis.
- Header, navegação, galeria, cards e CTAs mantêm legibilidade e ordem de
  interação em telas estreitas.
- Estados de foco, hover e ativação são distinguíveis sem depender apenas de
  cor, respeitando os tokens neutros.
- A validação registra dimensões/condições verificadas e eventuais limitações
  de ferramentas, sem declarar teste visual não executado como aprovado.

### PF-018 — Validação de acessibilidade e navegação por teclado

Validar a interface navegável com foco em semântica, teclado, foco visível,
nomes acessíveis, contraste e mídia.

Status: concluída. A validação no navegador confirmou um Header, um conteúdo
principal, um Footer e duas navegações nomeadas, com um único `h1`, títulos
`h2`/`h3` em ordem e três imagens com texto alternativo. Os seis links
interativos foram alcançados em sequência por `Tab`, todos exibiram outline
visível de 2 px com offset de 3 px, e os CTAs/cards mantiveram destinos
acionáveis por teclado. Foi corrigida a regra global de links que sobrescrevia
o token `text-canvas` dos CTAs; após o ajuste, os CTAs usam texto claro sobre
fundo escuro com contraste calculado de 17.93:1. Não foram encontradas falhas
pendentes nesta validação.

Critérios de aceite:

- A ordem de foco acompanha a leitura e todos os controles interativos podem
  ser alcançados e acionados pelo teclado.
- Elementos semânticos e landmarks permitem identificar navegação, conteúdo
  principal e rodapé; títulos seguem hierarquia válida.
- Imagens têm alternativa textual apropriada, e elementos decorativos não
  introduzem ruído para tecnologias assistivas.
- Contraste e foco visível permanecem adequados nos estados definidos; falhas
  encontradas são corrigidas ou registradas como pendência explícita.

### PF-019 — Validação final, documentação e encerramento do EPIC-02

Consolidar evidências das tarefas do epic, atualizar a documentação relacionada
e confirmar que a fundação continua íntegra.

Status: concluída. As validações finais passaram: `npm run test`
(1 arquivo e 3 testes), `npm run lint`, `npm run typecheck`,
`npm run format:check`, `npm run build` e `git diff --check`. O build gerou as
rotas `/`, `/_not-found`, `/robots.txt` e `/sitemap.xml`. O smoke test local
confirmou HTTP 200 para `/`, `/robots.txt` e `/sitemap.xml`; robots retorna
`Disallow: /` e o sitemap permanece vazio enquanto a indexação estiver
desativada. A página inicial renderizou com o shell, Hero, seções, galeria,
cards, CTAs e Footer sem serviço externo.

A documentação foi sincronizada em `ROADMAP.md`, `BACKLOG.md`,
`ARCHITECTURE.md`, `DESIGN_SYSTEM.md` e `README.md`. A auditoria retroativa da
PF-010 confirmou os contratos e dados já utilizados pelas tarefas seguintes,
eliminando a pendência documental. A tentativa de abrir `/robots.txt` no
navegador integrado falhou, mas a mesma rota foi validada por HTTP local; não
há impacto funcional identificado.

Critérios de aceite:

- `npm run test`, `npm run lint`, `npm run typecheck`, `npm run format:check` e
  `npm run build`, executados dentro de `frontend/`, passam ou têm falhas
  registradas com causa e impacto.
- A página inicial e as rotas criadas são verificadas em execução local, sem
  depender de serviços externos não documentados.
- `ROADMAP.md`, `BACKLOG.md`, `ARCHITECTURE.md`, `DESIGN_SYSTEM.md` e README
  permanecem consistentes com o que foi implementado e com o que continua
  futuro.
- O status do EPIC-02 só é alterado para concluído com evidência de todos os
  critérios; pendências não são ocultadas nem atribuídas a tarefas futuras.

## Demais EPICs

EPIC-03 a EPIC-06 estão registrados em nível de escopo no
[ROADMAP.md](./ROADMAP.md). Suas tarefas definitivas ainda não foram detalhadas
e não devem ser inventadas neste momento.
