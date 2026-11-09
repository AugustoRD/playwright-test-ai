# Diretrizes de Agentes e Fluxo de IA (SDD + Playwright)

Este repositório implementa um fluxo estruturado de **Engenharia de Qualidade (QA) apoiado por Inteligência Artificial e Playwright** para testes E2E no e-commerce da **Renner**, utilizando **Spec-Driven Development (SDD)**.

---

## 1. Fluxo de Trabalho do Projeto

1. **User Stories (`docs/user-stories/us-XX-<slug>.md`):** Definem a necessidade do cliente, critérios de aceitação de alto nível e restrições gerais.
2. **Especificações Funcionais — SDD (`docs/specs/spec-XX-<slug>.md`):** Fonte de verdade detalhada de cada funcionalidade contendo escopo (incluído/fora do escopo), Requisitos Funcionais (`RF-XX`), Critérios de Aceitação (`CA-XX`), Comportamentos Esperados (fluxos positivo, alternativo e negativo) e Restrições (`RN-XX`).
3. **Especificações de Casos de Teste (`docs/test-cases/tc-XX-<slug>.md`):** Geradas pelo subagente `qa-analyst` utilizando a skill `gerador-casos-teste`, contendo análise da US, requisitos, ambiguidades, cenários (`[USXX-CN-XX]`), casos de teste em Gherkin (`[USXX-CT-XXX]`) e matriz de rastreabilidade.
4. **Gravação com Playwright CodeGen:** Execução manual guiada pelos Casos de Teste para gerar scripts iniciais de interação.
5. **Refatoração com IA para Arquitetura POM:** Transformação dos scripts do CodeGen em testes automatizados organizados em Page Objects (`pages/`), Component Objects (`components/`) e suítes de teste (`tests/`), validados com TypeScript e ESLint.

---

## 2. Estrutura de Diretórios e Convenções

| Diretório / Arquivo | Convenção de Nomenclatura | Descrição |
| :--- | :--- | :--- |
| `docs/user-stories/` | `us-XX-<slug>.md` | User Stories do projeto. |
| `docs/specs/` | `spec-XX-<slug>.md` | Especificações funcionais SDD de cada User Story. |
| `docs/test-cases/` | `tc-XX-<slug>.md` | Cenários, Casos de Teste BDD e Matriz de Rastreabilidade. |
| `pages/` | `<Nome>Page.ts` | Page Objects representando páginas do e-commerce. |
| `components/` | `<Nome>Component.ts` | Component Objects reutilizáveis da interface. |
| `tests/` | `*.spec.ts` | Testes automatizados E2E executáveis pelo Playwright Test. |
| `.agents/agents/` | `<nome-agente>.md` | Definições de subagentes especializados do projeto. |
| `.agents/skills/` | `<nome-skill>/SKILL.md` | Procedimentos, templates e regras técnicas utilizados pelos agentes. |

---

## 3. Agentes e Skills Disponíveis

### Subagente: `qa-analyst` (`.agents/agents/qa-analyst.md`)
- **Responsabilidade:** Analisar qualquer User Story (`docs/user-stories/`) e sua Spec funcional (`docs/specs/`) para produzir a documentação completa de testes em `docs/test-cases/tc-XX-<slug>.md`.
- **Skill associada:** `gerador-casos-teste` (`.agents/skills/gerador-casos-teste/SKILL.md`).
- **Saída obrigatória (6 seções):**
  1. Análise da User Story e Escopo
  2. Requisitos e Critérios de Aceitação Identificados
  3. Possíveis Ambiguidades e Pontos de Atenção para Automação
  4. Cenários (`[USXX-CN-XX]`) e Casos de Teste em Gherkin (`[USXX-CT-XXX]`)
  5. Detalhamento de resultados esperados na interface
  6. Matriz de Rastreabilidade (`CT` ↔ `CN` ↔ `CA` ↔ `RF` ↔ `RN`)

---

## 4. Restrições Inegociáveis do Projeto (Ambiente Público Renner)

Por utilizar o ambiente público de terceiros (`https://www.lojasrenner.com.br`), **todos os agentes, skills, casos de teste e scripts automatizados devem respeitar rigorosamente**:

- 🚫 **Proibido realizar login** no site (todos os fluxos devem rodar como **usuário visitante**).
- 🚫 **Proibido realizar cadastro** de novos usuários.
- 🚫 **Proibido finalizar compras** (nunca avançar para checkout ou pagamento).
- 🚫 **Proibido executar testes destrutivos, de carga/simultaneidade** ou ações que criem/alterem dados persistentes no servidor sem autorização.
- 🔒 **Massa de dados segura:** Utilizar apenas dados públicos ou fictícios seguros e nunca dados pessoais reais.
- 🔄 **Validação de dados dinâmicos:** Informações sujeitas a variação no ambiente público devem ser validadas por formato/padrão visual ou comparação relativa (`antes vs. depois` da ação) conforme definido em cada Spec, nunca por valores fixos hardcoded.
- 🎯 **Fidelidade à interface e à Spec:** Não inventar regras de negócio, seletores, interações, códigos HTTP ou contratos JSON que não façam parte da especificação e do comportamento real observado na interface.

---

## 5. Comandos de Verificação Técnica

- **Executar testes Playwright:** `npx playwright test`
- **Verificar tipagem TypeScript:** `npx tsc --noEmit`
- **Executar linter (ESLint + Playwright plugin):** `npx eslint .`
