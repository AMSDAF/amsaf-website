<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Regras do projeto

- Inspecione o repositório e as instruções existentes antes de alterar arquivos.
- Trabalhe somente na tarefa solicitada; não avance automaticamente para a
  próxima tarefa do backlog.
- Preserve alterações externas ou não relacionadas à tarefa.
- Não execute commit ou push sem solicitação explícita.
- Execute validações proporcionais ao escopo e registre limitações quando uma
  validação não estiver disponível.
- Mantenha a documentação sincronizada com a implementação e não marque tarefas
  como concluídas sem evidência.
- Não introduza dependências, abstrações ou integrações sem necessidade concreta.
- Respeite a separação: a aplicação Next.js permanece em `frontend/` e os
  documentos gerais ficam na raiz.
- Siga as convenções de nomes e commits descritas na documentação do projeto.
- Ao concluir, reporte arquivos alterados, validações executadas, pendências e
  inconsistências encontradas.

## Execução de tarefas do backlog

O `docs/BACKLOG.md` é a fonte oficial de tarefas e critérios de aceite.

Quando receber um identificador como `PF-002`:

1. Leia `docs/BACKLOG.md` e localize a tarefa solicitada.
2. Consulte `docs/ARCHITECTURE.md` para verificar decisões e restrições técnicas.
3. Consulte `docs/ROADMAP.md` quando precisar entender dependências ou objetivos do EPIC.
4. Consulte `docs/DESIGN_SYSTEM.md` quando a tarefa envolver interfaces ou identidade visual.
5. Consulte o `README.md` e os arquivos reais do projeto para confirmar comandos, versões e configurações.
6. Verifique os critérios de aceite e o estado atual da implementação.
7. Execute exclusivamente a tarefa solicitada.
8. Realize as validações pertinentes.
9. Atualize o status, os critérios atendidos e as evidências no `docs/BACKLOG.md`.
10. Apresente um relatório final com resultados, pendências e limitações.

Se uma tarefa estiver incompleta ou bloqueada, registre seu estado real. Nunca declare conclusão sem evidências.

Se houver conflitos entre o backlog, a arquitetura e o código existente, investigue e reporte antes de tomar decisões que alterem o escopo.

Não avance automaticamente para outras tarefas.