# Automação de Testes E2E com IA e Playwright — E-commerce Renner

Projeto de automação de testes de interface (E2E) para o e-commerce da **Renner**, combinando **Spec-Driven Development (SDD)**, **Playwright CodeGen** e **Agentes/Skills de Inteligência Artificial**.

---

## 🎯 Objetivo do Projeto

Desenvolver um fluxo estruturado de Engenharia de Qualidade (QA) apoiado por agentes e skills de IA, capaz de:

1. Transformar requisitos funcionais (_User Stories_ e _Specs_) em **Cenários de Teste abrangentes** e **Casos de Teste em Gherkin** com rastreabilidade.
2. Utilizar gravações reais geradas pelo **Playwright CodeGen** como base e refatorá-las automaticamente por meio de IA em uma arquitetura limpa baseada em **Page Object Model (POM)** e **Component Objects**, validada por TypeScript e ESLint.

---

## 🛠️ Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)** — Ambiente de execução JavaScript/TypeScript.
- **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática para segurança e manutenibilidade dos Page Objects e testes.
- **[Playwright Test](https://playwright.dev/)** — Framework de automação e execução de testes E2E.
- **[ESLint](https://eslint.org/) + `eslint-plugin-playwright` + `typescript-eslint`** — Análise estática de código para garantir boas práticas de automação.
- **Agentes e Skills de IA** — Instruções e fluxos especializados para geração de cenários, refatoração de código e revisão arquitetural.

---

## 🚀 Pré-requisitos e Instalação

1. **Clone o repositório e acesse a pasta do projeto:**

   ```bash
   git clone <url-do-repositorio>
   cd playwright-test-ai
   ```

2. **Instale as dependências do projeto:**

   ```bash
   npm install
   ```

3. **Instale os navegadores do Playwright:**
   ```bash
   npx playwright install
   ```

---

## 💻 Comandos Úteis

| Ação                                                  | Comando                                                 |
| :---------------------------------------------------- | :------------------------------------------------------ |
| **Executar todos os testes (Headless)**               | `npx playwright test`                                   |
| **Executar testes visualizando o navegador (Headed)** | `npx playwright test --headed`                          |
| **Abrir modo interativo (UI Mode)**                   | `npx playwright test --ui`                              |
| **Visualizar relatório HTML da última execução**      | `npx playwright show-report`                            |
| **Abrir o Playwright CodeGen no site da Renner**      | `npx playwright codegen https://www.lojasrenner.com.br` |
| **Executar análise estática (ESLint)**                | `npx eslint .`                                          |
| **Verificar tipagem TypeScript**                      | `npx tsc --noEmit`                                      |

---

## ⚠️ Restrições e Cuidados do Projeto

Por utilizar um ambiente público de terceiros (e-commerce da Renner), todas as gravações, testes e instruções de agentes **devem respeitar rigorosamente** as seguintes restrições:

- 🚫 **Não realizar login** no site da Renner.
- 🚫 **Não realizar cadastro** de novos usuários.
- 🚫 **Não finalizar compras** (checkout/pagamento).
- 🚫 **Não realizar operações que criem ou alterem dados persistentes** na loja pública ou modifiquem o estado do servidor sem autorização.
