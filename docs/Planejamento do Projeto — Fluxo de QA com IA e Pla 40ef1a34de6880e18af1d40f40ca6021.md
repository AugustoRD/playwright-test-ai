# Planejamento do Projeto — Fluxo de QA com IA e Playwright

**Projeto:** Automação de testes de interface do e-commerce Renner utilizando Inteligência Artificial e Playwright.

## Objetivo geral

Desenvolver um fluxo de QA apoiado por agentes e skills de IA, capaz de transformar requisitos funcionais em Casos de Teste e cenários e, posteriormente, converter scripts gerados pelo Playwright CodeGen em testes automatizados organizados, reutilizáveis e seguindo boas práticas de desenvolvimento.

O principal desafio técnico do projeto é implementar um processo de refatoração com IA que transforme o código inicial do CodeGen em uma automação de qualidade, respeitando uma arquitetura previamente definida.

---

# Dedicação paralela: estudos e pesquisas

**Objetivo:** Adquirir os conhecimentos necessários para compreender as tecnologias, conceitos e ferramentas utilizadas no projeto, auxiliando nas decisões técnicas e no desenvolvimento das atividades.

**Tempo dedicado:** 2 horas diárias, durante os 11 dias úteis do projeto. Essa dedicação é adicional e não está contabilizada nas horas de desenvolvimento.

### Tópicos de estudo

- Estudar o funcionamento do Playwright CodeGen.
- Entender os conceitos de Spec-Driven Development (SDD).
- Compreender a relação entre User Stories, Specs, Casos de Teste, cenários BDD e automação.
- Explorar o site público da Renner e identificar as funcionalidades disponíveis para teste, priorizando a jornada de adicionar produto ao carrinho.
- Identificar limitações e cuidados necessários para executar testes em um site de terceiros.
- Estudar conceitos relacionados ao desenvolvimento com IA, como contexto, tokens, janela de contexto, agentes, skills e MCP.

---

# ENTREGA 1 — Especificação e geração de testes

**Objetivo:** Preparar a base do projeto, definir os requisitos e especificações da funcionalidade inicial e disponibilizar um agente de IA capaz de transformar User Stories em Cenários abrangentes e Casos de Teste escritos em Gherkin.

**Previsão de entrega:** 10/11/2026.

**Carga horária estimada:** 20 horas.

---

## 1. Criar User Stories e definir as funcionalidades que serão testadas

**Objetivo:** Definir o escopo do projeto e criar as especificações que servirão de entrada para o agente responsável pela geração dos Cenários e Casos de Teste.

**Tempo estimado:** 4 horas (Dia 1).

### O que precisa ser feito

- Identificar e selecionar as funcionalidades que farão parte do projeto.
- Criar as Users Story correspondente.
- Definir critérios de aceitação.
- Identificar pré-condições, regras de negócio e restrições.
- Revisar as Users Story para garantir que esteja clara e testável.

### Como fazer

Documentar:

- Identificador e título.
- História do usuário.
- Pré-condições.
- Regras e restrições.

A User Story deverá ser revisada considerando o comportamento real do site, sem assumir funcionalidades ou regras que ainda não foram confirmadas.

### Entregáveis

- US documentada.
- Critérios de aceitação definidos.

---

## 2. Iniciar o repositório do projeto e definir a arquitetura

**Objetivo:** Criar a estrutura inicial do projeto e estabelecer os padrões técnicos que deverão ser seguidos tanto pelos desenvolvedores quanto pelos agentes de IA.

**Tempo estimado:** 2 horas (Dia 2).

### O que precisa ser feito

- Criar o repositório Git.
- Inicializar o projeto com Node.js e TypeScript.
- Instalar e configurar o Playwright Test.
- Definir a arquitetura da automação.
- Criar a estrutura de diretórios.
- Definir padrões de nomenclatura e organização.

### Como fazer

**Tecnologias iniciais:**

- Node.js.
- TypeScript.
- Playwright Test.
- ESLint.
- Git.

**Arquitetura: Page Object Model (POM).**

Utilizar o Page Object Model como padrão inicial para organizar as interações com as páginas e separar a lógica dos testes da implementação dos elementos da interface.

### Entregáveis

- Repositório Git inicializado.
- Projeto Node.js e TypeScript configurado.
- Playwright instalado e funcionando.
- ESLint configurado.
- Arquitetura inicial definida.
- Ambiente preparado para desenvolvimento dos testes.

---

## 2.1. Definição dos Specs (SDD)

**Objetivo:** Definir um padrão de especificação que sirva como fonte de verdade para o desenvolvimento e para os agentes de IA.

**Tempo estimado:** 6 horas (Dias 2, 3).

### O que precisa ser feito

Definir um padrão de especificação que sirva como referência para o desenvolvimento e para os agentes de IA.

Cada especificação deverá descrever:

- Objetivo e escopo da funcionalidade.
- Requisitos funcionais.
- Critérios de aceitação.
- Comportamentos esperados.
- Restrições.

### Como fazer

- Definir a estrutura e o padrão dos Specs funcionais.
- Criar um modelo de especificação.
- Documentar os elementos que deverão compor cada Spec.
- Elaborar o primeiro Spec com base na US.
- Estabelecer como os agentes deverão consultar e utilizar as especificações.
- Revisar a especificação para verificar se os requisitos e comportamentos estão claros e consistentes.

### Entregáveis

- Modelo de Spec funcional.
- Spec da US documentado.
- Estrutura de documentação definida.
- Padrão de especificação estabelecido.
- Orientações de utilização dos Specs pelos agentes.

---

## 3. Refinar o agente que transforma User Stories em Casos de Teste e cenários

**Objetivo:** Revisar e aprimorar o agente já desenvolvido, garantindo que consiga interpretar corretamente as User Stories e gerar Casos de Teste e cenários consistentes.

**Tempo estimado:** 8 horas (Dias 3 a 5).

### O que precisa ser feito

- Revisar as instruções atuais do agente.
- Verificar como ele interpreta as User Stories.
- Melhorar as regras de identificação e geração dos Cenários.
- Definir como os Casos de Teste serão decompostos a partir dos Cenários.
- Padronizar a escrita dos Casos de Teste em Gherkin.
- Garantir rastreabilidade entre requisitos, critérios de aceitação, Cenários e Casos de Teste.
- Testar o agente com a US-001 e diferentes situações de entrada.
- Corrigir inconsistências identificadas durante os testes.

### Como fazer

**Revisão das instruções**

Avaliar se o agente:

- Compreende corretamente a história do usuário.
- Identifica requisitos e critérios de aceitação.
- Reconhece informações ambíguas ou ausentes.
- Não inventa regras de negócio.
- Identifica cenários positivos e negativos.
- Considera as restrições do projeto.

**Padronização das saídas**

Definir que cada execução deverá produzir:

1. Análise da User Story.
2. Requisitos identificados.
3. Possíveis ambiguidades.
4. Cenários abrangentes, com descrição do comportamento ou situação que deverá ser testada.
5. Casos de Teste escritos em Gherkin dentro de cada Cenário.
6. Relação entre os Casos de Teste, seus Cenários e os critérios de aceitação.

### Entregáveis

- Agente de User Stories revisado.
- Instruções atualizadas.
- Padrão de saída definido.
- Casos de Teste e cenários da US.
- Resultados da validação do agente.

---

## Critérios de conclusão da Entrega 1

- User Story inicial documentada.
- Requisitos e critérios de aceitação definidos.
- Repositório e ambiente de desenvolvimento configurados.
- Arquitetura inicial definida.
- Modelo e primeiro Spec funcional documentados.
- Agente de QA revisado e funcionando.
- Casos de Teste e cenários gerados para a US.
- Rastreabilidade entre User Story, requisitos, CTs e cenários estabelecida.

**Resultado esperado:** Uma base de projeto configurada, com requisitos e especificações documentados e um agente funcional capaz de transformar User Stories em Cenários abrangentes e Casos de Teste escritos em Gherkin.

---

# ENTREGA 2 — Automação e refatoração com IA

**Objetivo:** Utilizar os Casos de Teste gerados na primeira entrega para produzir scripts iniciais com CodeGen e desenvolver agentes e skills capazes de transformar esses scripts em testes automatizados organizados, seguindo a arquitetura e os padrões definidos.

**Previsão de entrega:** 18/11/2026.

**Carga horária estimada:** 24 horas.

---

## 4. Utilizar o CodeGen para transformar os Casos de Teste em scripts simples

**Objetivo:** Utilizar os Casos de Teste como roteiro para executar manualmente as interações no site e gerar os scripts iniciais por meio do Playwright CodeGen.

**Tempo estimado:** 4 horas (Dia 6).

### O que precisa ser feito

- Selecionar os Casos de Teste gerados pelo agente.
- Executar manualmente os passos de cada cenário no navegador.
- Utilizar o CodeGen para registrar as interações.
- Gerar os scripts iniciais de teste.
- Revisar os seletores gerados.
- Criar ou ajustar assertions para verificar os resultados esperados.
- Executar os scripts para confirmar seu funcionamento.
- Armazenar os arquivos originais sem modificações.

### Como fazer

Para cada Caso de Teste:

1. Abrir o site da Renner utilizando o CodeGen.
2. Executar manualmente as ações descritas no cenário.
3. Registrar as interações e gerar o código TypeScript.
4. Verificar se as ações registradas correspondem aos passos do cenário.
5. Adicionar ou revisar as assertions necessárias.
6. Executar o script e verificar se o comportamento esperado foi identificado.
7. Salvar o código original.

O objetivo desta etapa é gerar scripts simples e funcionais, sem aplicar ainda a arquitetura completa de Page Objects.

Os scripts originais deverão ser preservados para serem utilizados posteriormente como entrada do agente de refatoração.

### Entregáveis

- Scripts originais gerados pelo CodeGen.
- Scripts executáveis e revisados no ambiente permitido.

---

## 5. Criar agentes e skills para transformar os scripts do CodeGen em testes automatizados organizados

**Objetivo:** Desenvolver o principal componente de inteligência artificial do projeto: agentes e skills capazes de analisar os scripts gerados pelo CodeGen e transformá-los em automações organizadas, reutilizáveis e alinhadas à arquitetura definida.

**Tempo estimado:** 14 horas (Dias 7 a 10).

### O que precisa ser feito

- Definir a responsabilidade dos agentes envolvidos.
- Desenvolver a skill responsável pela refatoração do código.
- Criar as instruções do agente de refatoração.
- Criar instruções para análise e revisão da automação.
- Definir as entradas e saídas esperadas.
- Implementar o processo de transformação do código.
- Garantir que os padrões arquiteturais sejam respeitados.
- Validar o código produzido por meio de execução, TypeScript e ESLint.
- Ajustar as instruções conforme os resultados.

### Como fazer

**5.1. Definir o fluxo de trabalho da IA**

O agente deverá receber:

- User Story original.
- Especificação funcional correspondente.
- Casos de Teste.
- Cenários.
- Script original gerado pelo CodeGen.
- Documento de arquitetura.
- Instruções gerais do projeto.

A partir dessas informações, deverá analisar o código e propor sua transformação.

**5.2. Criar a skill de refatoração**

Criar uma skill contendo um procedimento obrigatório:

1. Analisar o script original.
2. Identificar páginas, elementos e interações.
3. Identificar seletores que podem ser reutilizados.
4. Planejar a distribuição do código entre testes, páginas e componentes.
5. Criar os Page Objects necessários.
6. Refatorar os scripts para utilizar a arquitetura definida.
7. Implementar assertions adequadas.
8. Verificar se o comportamento original foi preservado.

**5.3. Criar o agente de refatoração**

Criar um agente especializado em Playwright e arquitetura de automação.

Suas responsabilidades serão:

- Interpretar a gravação original.
- Seguir as instruções da skill.
- Aplicar os padrões de arquitetura.
- Criar e modificar arquivos necessários.
- Manter os testes organizados e tipados.
- Não adicionar interações que não estejam especificadas.

**5.4. Criar o agente revisor**

Desenvolver um agente responsável por analisar o resultado da refatoração.

A revisão deverá verificar:

- Se os Casos de Teste estão contemplados.
- Se as interações do CodeGen foram preservadas.
- Se os Page Objects estão organizados corretamente.
- Se os seletores seguem as boas práticas.
- Se as assertions validam os resultados esperados.
- Se existem duplicações ou abstrações desnecessárias.
- Se existem esperas arbitrárias ou seletores frágeis.
- Se o código respeita as restrições de segurança do projeto.

**5.5. Validar e aprimorar o processo**

Executar o fluxo utilizando os scripts da etapa 4.

Comparar o código original com o refatorado e verificar se a IA:

- Preservou o comportamento.
- Produziu código executável.
- Respeitou a arquitetura.
- Aplicou boas práticas.
- Não introduziu ações ou comportamentos indevidos.

Utilizar os resultados para aprimorar as instruções dos agentes e das skills.

### Entregáveis

- Agente de refatoração.
- Skill de refatoração.
- Agente revisor ou checklist de revisão.
- Instruções e padrões documentados.
- Scripts refatorados e organizados.
- Processo de validação da qualidade do código.

---

## 6. Validação final do fluxo

**Objetivo:** Realizar uma validação integrada do processo, verificando se todas as etapas funcionam em conjunto e se os resultados produzidos atendem aos requisitos estabelecidos para o projeto.

**Tempo estimado:** 6 horas (Dias 10 e 11).

### O que precisa ser feito

- Percorrer o fluxo completo da User Story até o teste refatorado.
- Verificar a integração entre os agentes.
- Conferir a rastreabilidade entre Specs, CTs, cenários, gravações e testes finais.
- Executar as verificações técnicas.
- Analisar os resultados do Playwright.
- Registrar problemas e ajustes necessários.

### Como fazer

1. Conferir se todas as etapas do fluxo foram executadas corretamente.
2. Verificar se os cenários BDD representam os critérios de aceitação.
3. Comparar o script original do CodeGen com a automação refatorada.
4. Executar o teste no ambiente permitido.
5. Executar as verificações de TypeScript e ESLint.
6. Consultar o relatório HTML nativo do Playwright.
7. Registrar o que funcionou, o que precisa de ajuste e o que ficará para uma próxima iteração.

### Critérios de sucesso

- O agente interpreta corretamente a User Story.
- Os Cenários representam os comportamentos e situações que devem ser testados.
- Os Casos de Teste escritos em Gherkin cobrem os critérios de aceitação.
- O CodeGen gera scripts correspondentes aos passos dos Casos de Teste executados.
- A IA converte os scripts para a arquitetura definida.
- Os testes refatorados são executáveis.
- Os testes seguem as boas práticas estabelecidas.
- O código passa pelas verificações de TypeScript e ESLint.
- O relatório nativo do Playwright apresenta os resultados das execuções.
- As restrições de segurança são respeitadas.

---

## Critérios de conclusão da Entrega 2

- Scripts iniciais gerados e preservados pelo CodeGen.
- Skill de refatoração implementada.
- Agente principal de refatoração configurado.
- Processo de revisão implementado.
- Scripts transformados para a arquitetura POM.
- Código validado com TypeScript, ESLint e Playwright.
- Fluxo integrado demonstrado.

**Resultado esperado:** Fluxo de QA com IA funcionando desde a geração dos Casos de Teste até a transformação dos scripts do CodeGen em automações organizadas, reutilizáveis e validadas.

---

# 7. Cronograma e estimativa geral

O desenvolvimento será realizado durante 11 dias úteis, de 04/11/2026 a 18/11/2026, com dedicação de 4 horas diárias para as atividades práticas.

As pesquisas e os estudos serão realizados paralelamente, com dedicação adicional de 2 horas por dia, não contabilizada nas horas de desenvolvimento.

### Estimativa por atividade

| Etapa | Atividade | Tempo estimado |
| --- | --- | --- |
| 1 | User Stories e definição do escopo | 4h |
| 2 | Repositório e arquitetura | 4h |
| 2.1 | Definição dos Specs (SDD) | 6h |
| 3 | Refinamento do agente de US para CTs e BDD | 6h |
| **Entrega 1** | **Especificação e geração de testes** | **20h** |
| 4 | Gravação e scripts iniciais com CodeGen | 4h |
| 5 | Agentes e skills de refatoração | 14h |
| 6 | Validação final integrada | 6h |
| **Entrega 2** | **Automação e refatoração com IA** | **24h** |
| **Total** | **11 dias úteis** | **44h** |

### Cronograma de 11 dias

| Dia | Data | Atividades principais | Dedicação |
| --- | --- | --- | --- |
| **Dia 1** | 04/11 – Quarta | Criar US-001 e definir critérios de aceitação. | 4h |
| **Dia 2** | 05/11 – Quinta | Criar repositório, inicializar Node.js e TypeScript, instalar e configurar Playwright. | 4h |
| **Dia 3** | 06/11 – Sexta | Definir e documentar a arquitetura; iniciar a criação dos Specs. | 4h |
| **Dia 4** | 09/11 – Segunda | Finalizar Specs (2h); iniciar refinamento do agente de QA (2h). | 4h |
| **Dia 5** | 10/11 – Terça | Finalizar refinamento do agente de QA e validar geração dos CTs e cenários BDD. | 4h |
| **Dia 6** | 11/11 – Quarta | Utilizar CodeGen para gravar os testes, revisar seletores e validar scripts iniciais. | 4h |
| **Dia 7** | 12/11 – Quinta | Definir fluxo de trabalho da IA e desenvolver a skill de refatoração. | 4h |
| **Dia 8** | 13/11 – Sexta | Desenvolver e configurar o agente principal de refatoração. | 4h |
| **Dia 9** | 16/11 – Segunda | Executar primeira refatoração, organizar Page Objects e aplicar revisão de qualidade. | 4h |
| **Dia 10** | 17/11 – Terça | Finalizar ajustes da skill e do agente (2h); iniciar validação integrada (2h). | 4h |
| **Dia 11** | 18/11 – Quarta | Finalizar validação integrada, executar testes e registrar resultados e pendências. | 4h |
| **Total** |  |  | **44h** |

### Dedicação total

- Desenvolvimento: 4 horas diárias durante 11 dias úteis (44 horas).
- Estudos e pesquisas: 2 horas diárias durante 11 dias úteis (22 horas).
- Dedicação total prevista: 66 horas.

---

# 8. Restrições e cuidados do projeto

Todas as etapas devem respeitar as seguintes restrições:

- Não realizar login no site da Renner.
- Não realizar cadastro de usuários.
- Não finalizar compras.

- Não realizar operações que criem ou alterem dados persistentes na loja.
- Evitar ações que possam modificar o estado do servidor sem autorização.
- Priorizar funcionalidades públicas e consultas de informações.
- Preservar os scripts originais do CodeGen.
- Não permitir que os agentes inventem interações ou resultados esperados.

A interação com funcionalidades como carrinho e cupom deverá ser avaliada separadamente antes de ser incorporada ao escopo.

A ação efetiva de adicionar um produto ao carrinho deverá ser validada com requisição interceptada/mockada ou em ambiente de teste autorizado, sem alterar dados persistentes na loja pública.

---

# 9. Resultado esperado

Ao final do projeto, espera-se ter um fluxo de QA com IA capaz de receber User Stories, gerar Casos de Teste e cenários BDD, orientar a gravação dos testes com Playwright CodeGen e transformar os scripts gerados em uma automação estruturada, seguindo padrões de arquitetura e boas práticas.

O principal resultado técnico será a capacidade de utilizar IA para transformar código inicial de gravação em testes automatizados organizados, reutilizáveis, verificáveis e de fácil manutenção.