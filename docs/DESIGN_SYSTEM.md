# Design System

## Estratégia

O design system será construído em duas etapas:

1. Um template neutro, inicialmente em tons de cinza, para validar composição,
   navegação, responsividade e componentes.
2. A identidade visual específica de cada implementação, sem acoplar a
   fundação a uma marca.

A identidade da Emilly Araújo Fotografia deve preservar sua marca original e
ser definida a partir dos materiais originais antes de transformar referências
em tokens definitivos.

## Direção visual aprovada

Para a implementação da Emilly, as referências incluem creme e marfim, rosé e
terracota, marrom, verde suave e tipografia serifada editorial. Essas referências
descrevem uma direção delicada e acolhedora; não são tokens finais e não devem
ser codificadas no template neutro.

## Tokens

O CSS global agora possui tokens neutros iniciais em escala de cinza, definidos
como variáveis semânticas em `src/app/globals.css`. Eles cobrem canvas,
superfície, borda, conteúdo e foco, e estão disponíveis como cores do tema do
Tailwind CSS 4. A tipografia inicial usa a pilha sans-serif do sistema.

Esses valores são uma base técnica provisória para o template neutro, não são a
identidade final de nenhuma implementação. A definição de tokens de marca deve
acontecer antes da personalização de telas e ser validada contra os materiais
originais.

Os tokens futuros devem:

- ter nomes sem referência indevida a uma marca quando forem compartilhados;
- possuir semântica clara para uso em componentes;
- manter contraste e estados interativos acessíveis;
- evitar duplicação de valores e decisões espalhadas pelas telas.

Ainda não foram definidos tokens específicos de tipografia editorial,
espaçamento, borda ou sombra, porque eles dependem de componentes e necessidades
concretas do EPIC-02.

## Componentes

O EPIC-02 poderá incluir Header, Footer, Hero, seções, galerias, cards, CTAs,
navegação e padrões responsivos. O shell estrutural em
`frontend/src/components/site-shell.tsx` já fornece Header, navegação
principal, conteúdo principal e Footer no layout raiz. O Header usa uma
composição empilhada em telas estreitas e horizontal em telas maiores; os links
permanecem disponíveis sem menu colapsável ou JavaScript. O Footer possui
navegação secundária e CTA neutros, configurados separadamente da apresentação.
Os componentes `Hero` e `ContentSection` também foram criados para demonstrar
hierarquia, CTAs e composição neutra na página inicial. A galeria e o `Card`
também foram criados com uso concreto, usando mídia SVG local e substituível.
A extração deve continuar orientada por uso real, não por antecipação.

Os links e CTAs do template usam foco visível, hover e feedback de ativação por
movimento/decoração, sem depender apenas de mudança de cor.

A regra global de links preserva herança somente em links sem classes, permitindo
que os tokens semânticos de texto e fundo dos componentes mantenham seus estados
e contraste.

## Conteúdo e composição

Conteúdo deve permanecer separado da apresentação quando a estrutura de páginas
for criada. A fundação pode compartilhar layout e comportamento, mas cada
implementação pode compor suas páginas e sua hierarquia de conteúdo de maneira
própria. A página inicial neutra já compõe o shell, Hero, seções, galeria,
cards e CTAs em uma sequência navegável; a identidade visual específica
continua fora do template.

## Limites

- Não implementar identidade visual da Emilly no template neutro.
- Manter os tokens neutros iniciais pequenos e sem criar um tema genérico
  complexo para resolver necessidades ainda hipotéticas.
- Não tratar tokens de referência como decisões finais.
- Não introduzir editor visual ou sistema de plugins.
- Validar comportamento responsivo e acessibilidade junto com cada componente.
