# Roadmap

O roadmap é incremental. Cada EPIC depende de decisões e validações do anterior;
a documentação não substitui os critérios de aceite das tarefas.

## EPIC-01 — Fundação do Projeto

Estabelecer estrutura técnica, ferramentas, configurações, documentação e
validações.

- Entregáveis: repositório Next.js, arquitetura, contratos, base visual, SEO,
  validações e documentação.
- Dependências: nenhuma.
- Limites: não construir o site comercial completo nem o painel.
- Estado: PF-001 a PF-009 concluídas. A fundação está pronta para iniciar o
  EPIC-02; isso não implica que o template neutro já tenha sido implementado.

## EPIC-02 — Template Neutro

Construir uma interface navegável em tons de cinza, com conteúdo de demonstração
neutro, layouts e componentes reutilizáveis orientados por uso real.

- Entregáveis: contratos e dados de demonstração, shell da aplicação, Header,
  Footer, navegação, Hero, seções, galeria, cards, CTAs, composição da página
  inicial, estados responsivos e validações de acessibilidade.
- Dependências: PF-001 a PF-009 concluídas; uso dos contratos de
  `frontend/src/types/`, da configuração existente e dos tokens neutros de
  `frontend/src/app/globals.css`. Não depende de banco, armazenamento,
  autenticação, domínio ou serviço externo.
- Sequência: PF-010 e PF-011 estabelecem contratos e shell; PF-012 a PF-015
  entregam componentes; PF-016 compõe a página; PF-017 e PF-018 validam
  comportamento responsivo e acessibilidade; PF-019 encerra o epic com
  validação e documentação.
- Critério de saída: a aplicação deve oferecer uma página inicial navegável,
  responsiva e acessível em conteúdo neutro, com componentes reutilizáveis
  somente onde houver uso concreto, sem dependência de identidade de marca.
- Limites: não aplicar identidade visual da Emilly, não publicar conteúdo
  comercial real, não criar CMS, backend, autenticação, persistência,
  integrações de métricas ou sistema de temas/plugins; a indexação continua
  desativada conforme a fundação.
- Estado: concluído; PF-010 a PF-019 concluídas com evidências registradas no
  backlog. O template neutro está pronto para as decisões e materiais do
  EPIC-03.

## EPIC-03 — Emilly Araújo Fotografia

Aplicar identidade visual e conteúdo específicos da fotógrafa, preservando a
marca original.

- Entregáveis: home, portfólio por categorias, sobre, serviços, depoimentos
  autorizados, campanhas e CTAs de contato.
- Dependências: template neutro e materiais originais da marca.
- Limites: cores e tipografia de referência não são tokens finais; publicar
  fotos de clientes exige as autorizações necessárias.
- Estado: futuro.

## EPIC-04 — Gerenciamento de Conteúdo

Adicionar autenticação, persistência, armazenamento de imagens e painel
administrativo.

- Entregáveis: gerenciamento prioritário de campanhas e portfólio, além de
  edição de conteúdo selecionado e configurações básicas.
- Dependências: necessidade concreta de operação e definição da estratégia de
  dados.
- Limites: não construir editor visual genérico.
- Estado: futuro; Supabase e Storage são possibilidades, não decisões de
  implementação atual.

## EPIC-05 — SEO, GEO e Métricas

Implementar e validar descoberta, indexação, desempenho e mensuração de
conversões.

- Entregáveis: Metadata API, sitemap, robots, URLs semânticas, dados
  estruturados, imagens otimizadas, conteúdo de serviços e métricas.
- Dependências: domínio, conteúdo e requisitos de privacidade definidos.
- Limites: não prometer indexação, posicionamento ou resultado de aquisição.
- Estado: futuro; Search Console e Analytics ainda não estão configurados.

## EPIC-06 — Portfólio do Desenvolvedor

Criar uma segunda implementação usando a fundação existente.

- Entregáveis: projetos, tecnologias, experiência e estudos de caso.
- Dependências: evidência de reutilização real após EPIC-02 e EPIC-03.
- Limites: extrair abstrações somente quando justificadas por mais de uma
  necessidade concreta.
- Estado: futuro.
