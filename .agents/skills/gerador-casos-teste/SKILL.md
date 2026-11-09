---
name: gerador-casos-teste
description: >-
  Use esta skill sempre que precisar analisar User Stories (docs/user-stories/) e Especificações
  Funcionais SDD (docs/specs/) para desenhar Cenários de Teste abrangentes, Casos de Teste
  detalhados em Gherkin (BDD) e Matriz de Rastreabilidade.
---

# Skill: Geração Padronizada de Cenários e Casos de Teste (QA Engineering & SDD)

Ao analisar uma User Story (`docs/user-stories/us-XX-<slug>.md`) em conjunto com sua Especificação Funcional SDD (`docs/specs/spec-XX-<slug>.md`), decomponha a demanda em uma **Análise Estruturada**, **Cenários de Teste (alto nível)**, **Casos de Teste detalhados em Gherkin (baixo nível)** e **Matriz de Rastreabilidade**, aplicando engenharia de testes sistemática sob a abordagem caixa-preta.

---

## 1. Técnicas Obrigatórias de Desenho de Testes (ISTQB v4.0 — Abordagem Caixa-Preta)

Não gere apenas testes óbvios. Aplique ativamente as seguintes técnicas sobre cada Critério de Aceite (`CA-XX`) e Requisito Funcional (`RF-XX`), mantendo **fidelidade estrita ao escopo da User Story e da Spec analisada**:

1. **Particionamento de Equivalência (EP):**
   - Identifique classes de entradas, seleções, filtros ou interações válidas e inválidas previstas na especificação (ex.: campos vazios, formatos incorretos, opções disponíveis vs. indisponíveis, caracteres ignorados por máscaras) sem criar testes redundantes para a mesma partição.
2. **Análise de Valor Limite (BVA):**
   - Sempre que houver limites numéricos, tamanhos mínimos/máximos de campos, quantidades ou contadores definidos na US/Spec, crie casos de teste cobrindo os valores de fronteira aplicáveis.
3. **Transição de Estados e Comportamento Visual de Interface (UI):**
   - Valide mudanças de estado observáveis na tela descritas na Spec: elementos habilitados vs. desabilitados, destaque visual de seleção ativa, abertura e fechamento de componentes dinâmicos (modais, notificações, alertas) e atualização de informações ou resumos na página.
4. **Restrições Inegociáveis do Projeto (Ambiente Público de Terceiros):**
   - **Usuário Visitante (Sem Autenticação):** Todos os fluxos devem ser executados sem login e sem cadastro de usuário.
   - **Proibição de Checkout:** **NUNCA** inclua passos que acionem finalização de compra, checkout ou pagamento.
   - **Sem Testes Destrutivos ou de Concorrência:** **NUNCA** crie cenários de carga, sessões simultâneas ou operações que criem/alterem dados persistentes no servidor sem autorização.
   - **Dados Dinâmicos e Massa Segura:** Utilize apenas dados de entrada públicos ou fictícios seguros (nunca dados pessoais reais). Quando a funcionalidade envolver informações variáveis do ambiente (valores monetários, prazos, disponibilidade de itens ou contadores), valide padrões/formatos visuais e variações relativas (`antes vs. depois` da ação) conforme definido na Spec, sem assumir valores fixos hardcoded.
   - **Proibição de Scripts e Payloads Maliciosos (`<script>` / SQLi):** **NUNCA** insira tags HTML/JavaScript (`<script>alert(1)</script>`) ou comandos SQL (`' OR 1=1 --`) nos passos BDD. Para validar restrições de caracteres ou máscaras de entrada, utilize apenas caracteres comuns.
5. **Regra de Ouro — Não-Alucinação Técnica (Caixa-Preta):**
   - **NUNCA** invente regras de negócio, elementos de tela, códigos de status HTTP (`HTTP 200`, `400`, `404`, `500`), cabeçalhos de rede, contratos JSON ou jargões de banco de dados que não estejam descritos na User Story ou na Spec.
   - Escreva todos os passos sob a perspectiva de **interações reais do usuário** e **comportamentos visuais observáveis na interface**.

---

## 2. Cobertura Obrigatória de Cenários

Agrupe os Cenários e Casos de Teste nas três categorias alinhadas às Especificações Funcionais (SDD):

- **Fluxo Positivo (Caminho Feliz):** Fluxos principais de sucesso onde todas as pré-condições e ações obrigatórias são atendidas conforme especificado.
- **Fluxo Alternativo:** Caminhos secundários ou variações de interação previstas na especificação (ex.: fluxos assistivos via modais, limpeza/troca de parâmetros consultados, formatação automática por máscara de campo, fechamento de componentes sem concluir a ação).
- **Fluxo Negativo e Restrições:** Tentativas inválidas, entradas incompletas/inexistentes ou interações bloqueadas pela interface conforme as regras e restrições da Spec.

---

## 3. Regras Estritas de Padronização e Rastreabilidade (SDD)

Para garantir a rastreabilidade exigida pelo fluxo **Spec-Driven Development (SDD)**, **obedeça rigorosamente**:

1. **Hierarquia Estrutural e Prefixo da User Story Obrigatório:**
   - Todos os códigos de Cenário e Caso de Teste devem incluir o prefixo `USXX` em caixa alta (sem hífen dentro do prefixo do código, ex.: `US01`, `US02`, `US03`):
   - **Cenário:** `### Cenário: [USXX-CN-XX] - [Título do Cenário]` com 2 dígitos sequenciais (ex.: `[US01-CN-01]`, `[US01-CN-02]`).
   - **Caso de Teste:** `##### Caso de Teste: [USXX-CT-XXX] - [Título do Caso de Teste]` com 3 dígitos sequenciais ao longo de todo o documento (ex.: `[US01-CT-001]`, `[US01-CT-002]`).
2. **Rastreabilidade Explícita por Caso de Teste:**
   - Cada Caso de Teste deve informar no campo **Critérios / Requisitos Cobertos** os identificadores correspondentes da User Story e da Spec (ex.: `CA-01 | RF-01, RF-02 | RN-01`).
3. **Valores Fechados de `Tipo` (Select Único):** Use **exatamente um** dos 4 valores abaixo por CT:
   - `Funcional` | `Validação` | `Exceção` | `Restrição`
4. **Valores Fechados de `Prioridade` (Select Único baseado em Risco):** Use **exatamente um** dos 3 valores abaixo:
   - `Alta` (fluxo principal crítico, validações centrais dos critérios de aceite ou bloqueios obrigatórios)
   - `Média` (fluxos alternativos, atualizações secundárias de estado ou validações complementares)
   - `Baixa` (formatação visual, máscaras de entrada ou cancelamento/fechamento de componentes)
5. **Regras de Escrita Gherkin (BDD):**
   - **1 Comportamento por CT:** Não encadeie múltiplos fluxos independentes (`Quando... Então... Quando... Então`) no mesmo CT.
   - **Passos Claros sob a Ótica do Usuário:** Descreva ações e verificações claras na interface (`acessa a página`, `preenche o campo`, `seleciona a opção`, `clica no botão`), mantendo fidelidade aos termos da Spec.
   - **Formatação Multi-linha:** Cada passo deve estar em sua própria linha com a palavra-chave em negrito (`**Dado**`, `**Quando**`, `**E**`, `**Então**`).

---

## 4. Template Oficial de Saída (Markdown)

O documento gerado deve ser salvo em `docs/test-cases/tc-XX-<slug>.md` e conter obrigatoriamente as **6 seções** abaixo:

```markdown
# Especificação de Testes: US-XX - [Título da Funcionalidade]

- **User Story:** [`docs/user-stories/us-XX-<slug>.md`](../user-stories/us-XX-<slug>.md)
- **Especificação Funcional (SDD):** [`docs/specs/spec-XX-<slug>.md`](../specs/spec-XX-<slug>.md)

---

## 1. Análise da User Story e Escopo

[Resumo objetivo do valor de negócio da User Story, perfil do ator (usuário visitante), contexto da funcionalidade na interface e delimitação do que está dentro e fora do escopo de testes conforme a Spec.]

---

## 2. Requisitos e Critérios de Aceitação Identificados

### Critérios de Aceitação (CA)
- **CA-01:** [Descrição]
- **CA-02:** [Descrição]

### Requisitos Funcionais (RF) e Restrições (RN)
- **RF-01:** [Descrição]
- **RN-01:** [Descrição]

---

## 3. Possíveis Ambiguidades e Pontos de Atenção

- **[Ponto 01 - Título]:** [Descrição de ambiguidades ou lacunas da US esclarecidas pela Spec, comportamentos dinâmicos do ambiente e pontos de atenção relevantes para os testes.]

---

## 4. Cenários e Casos de Teste (BDD / Gherkin)

### Cenário: [USXX-CN-01] - [Título do Cenário em Alto Nível]

- **Categoria:** Fluxo Positivo (Caminho Feliz) | Fluxo Alternativo | Fluxo Negativo e Restrições
- **Objetivo:** [Explicação concisa do comportamento ou situação que este cenário valida]
- **Critérios de Aceitação Relacionados:** CA-XX

##### Caso de Teste: [USXX-CT-001] - [Título sucinto da ação e resultado esperado]

- **Critérios / Requisitos Cobertos:** CA-XX | RF-XX | RN-XX
- **Tipo:** Funcional | Validação | Exceção | Restrição
- **Prioridade:** Alta | Média | Baixa
- **Pré-condições:** [Estado inicial necessário, sessão como usuário visitante e características da massa de teste]
- **Passos de Execução (BDD):**
  **Dado** [contexto inicial na interface com o estado necessário]
  **Quando** [ação executada pelo usuário visitante na página]
  **E** [ação ou seleção complementar na interface, se aplicável]
  **Então** [resultado principal observável na tela]
  **E** [validação complementar de estado ou mensagem]
- **Resultado Esperado Detalhado:** [Descrição clara dos elementos visuais, textos, feedbacks e estados esperados na interface conforme a Spec, sem inventar status HTTP, JSON ou detalhes técnicos internos]

---

## 5. Matriz de Rastreabilidade

| Caso de Teste | Título Resumido | Cenário | Categoria | Critérios de Aceite (CA) | Requisitos Funcionais (RF) | Restrições (RN) | Prioridade |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **[USXX-CT-001]** | [Título] | `[USXX-CN-01]` | Fluxo Positivo | CA-01 | RF-01, RF-02 | RN-01 | Alta |
```

---

## 5. Checklist de Auto-Validação (Antes de Entregar)

Antes de finalizar o documento, verifique internamente:

- [ ] O documento contém todas as **6 entregas padronizadas** (1. Análise da US, 2. Requisitos/CA identificados, 3. Ambiguidades/Pontos de atenção, 4. Cenários abrangentes, 5. Casos de Teste em Gherkin e 6. Matriz de Rastreabilidade)?
- [ ] Todos os códigos seguem o padrão `[USXX-CN-XX]` e `[USXX-CT-XXX]` com numeração sequencial e sem duplicatas?
- [ ] Todos os Critérios de Aceitação (`CA-XX`), Requisitos Funcionais (`RF-XX`) e Restrições (`RN-XX`) da Spec estão cobertos e mapeados na Matriz de Rastreabilidade?
- [ ] As restrições globais do projeto (**usuário visitante sem login/cadastro**, **sem checkout/pagamento**, **sem ações destrutivas**, **uso de dados públicos** e **tratamento adequado de dados variáveis**) foram integralmente respeitadas?
- [ ] Os passos em Gherkin refletem exclusivamente as regras da US/Spec analisada sob a ótica do usuário na interface?
- [ ] O documento está **100% livre** de detalhes técnicos inventados (sem códigos HTTP, sem JSON, sem banco de dados e sem tags `<script>` ou comandos SQL)?
