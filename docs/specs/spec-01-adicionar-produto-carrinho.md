# SPEC-01: Adicionar produto à sacola

- **User Story relacionada:** [US-01](../user-stories/us-01-adicionar-produto-carrinho.md)
- **Status:** Em revisão
- **Data:** 2026-11-06

## 1. Objetivo

Especificar o comportamento da funcionalidade de adicionar um produto à sacola de compras no e-commerce da Renner, a partir da Página de Detalhes do Produto (PDP), por um usuário visitante (não autenticado). Esta especificação serve como fonte de verdade para a geração de cenários, casos de teste e automação com Playwright.

> **Nota:** Os exemplos citados (camiseta, cor "Branco", tamanho "M", R$ 69,90) são ilustrativos. A seleção de **cor** e **tamanho** só se aplica a produtos que possuem essas variações.

## 2. Escopo

### Incluído

- Seleção de **cor** e/ou **tamanho** na PDP, quando aplicável ao produto.
- Identificação de tamanhos indisponíveis.
- Acionamento do botão **"ADICIONAR À SACOLA"** na PDP.
- Modal **"Selecione os detalhes do item"**, exibido quando a variação obrigatória não foi selecionada.
- Confirmação visual de inclusão (notificação **"Produto adicionado"**) e atalho **"ABRIR SACOLA"**.
- Atualização do contador de itens no ícone da sacola no cabeçalho.
- Conferência do item na página **"MINHA SACOLA"** (nome, variação, quantidade e valor).
- Adição repetida do mesmo produto e variação (incremento de quantidade).

### Fora do escopo

- Login, cadastro ou qualquer ação que exija autenticação.
- Finalização de compra (botão **"FINALIZAR COMPRA"**), pagamento e checkout.
- Cálculo de frete (campo **"DIGITE SEU CEP"**) e aplicação de cupom de desconto.
- Alteração manual de quantidade, troca de tamanho ou remoção de item na página da sacola.
- Funcionalidades auxiliares da PDP: favoritar, "Complete o look", "Buscar similares", "Avaliações", "Encontre seu tamanho", "Tabela de medidas" e compartilhamento em redes sociais.

## 3. Requisitos Funcionais

- **RF-01 (Seleção de cor):** Quando o produto possuir variação de cor, a PDP deve exibir as cores como opções selecionáveis e apresentar o nome da cor selecionada no rótulo **"Cor: \<nome\>"**.
- **RF-02 (Seleção de tamanho):** Quando o produto possuir variação de tamanho, a PDP deve exibir os tamanhos e destacar visualmente o tamanho selecionado (botão preenchido em preto com texto branco).
- **RF-03 (Indicação de indisponibilidade):** Tamanhos sem estoque devem ser exibidos esmaecidos e riscados na diagonal, e **não devem ser clicáveis**.
- **RF-04 (Adicionar à sacola):** Com as variações obrigatórias selecionadas (quando aplicável), o acionamento de **"ADICIONAR À SACOLA"** deve incluir o produto na sacola do usuário visitante.
- **RF-05 (Modal de seleção obrigatória):** Ao acionar **"ADICIONAR À SACOLA"** sem selecionar a variação obrigatória, o sistema não deve adicionar o produto e deve abrir o modal **"Selecione os detalhes do item"**, contendo:
  - nome e preço do produto;
  - instrução **"Selecione a cor e/ou tamanho"**;
  - opções de cor e/ou tamanho, com as mesmas regras de indisponibilidade da PDP;
  - botão **"ADICIONAR À SACOLA"**;
  - botão de fechar (**X**).
- **RF-06 (Confirmação de inclusão):** Após a inclusão, o sistema deve exibir a notificação **"Produto adicionado"** com o atalho **"ABRIR SACOLA"**.
- **RF-07 (Atualização do contador):** Após a inclusão, o contador do ícone da sacola no cabeçalho deve ser incrementado em relação ao valor anterior.
- **RF-08 (Conteúdo da sacola):** A página **"MINHA SACOLA"** deve listar o produto adicionado com nome, vendedor, variação selecionada (quando aplicável), quantidade, valor total do item e subtotal no "Resumo da compra".
- **RF-09 (Incremento de quantidade):** Ao adicionar novamente o mesmo produto com a mesma variação, o sistema deve incrementar a quantidade do item já existente na sacola, sem criar uma nova linha.

## 4. Critérios de Aceite

| CA | Descrição | Requisitos relacionados |
| :--- | :--- | :--- |
| **CA-01** | Permitir adicionar um produto à sacola após a seleção das características obrigatórias (cor e tamanho, quando aplicável). | RF-01, RF-02, RF-04, RF-05, RF-08 |
| **CA-02** | Após adicionar o produto, apresentar confirmação de inclusão e atualizar a quantidade de itens na sacola. | RF-06, RF-07, RF-08, RF-09 |
| **CA-03** | Não permitir adicionar um produto indisponível em estoque. | RF-03 |

## 5. Comportamentos Esperados

### 5.1 Fluxo positivo

**Cenário A: adicionar produto com variação disponível**

1. O usuário visitante acessa a PDP de um produto disponível e registra o valor atual do contador da sacola no cabeçalho.
2. Quando aplicável, o usuário seleciona uma cor e o rótulo passa a exibir a cor escolhida (ex.: "Cor: Branco").
3. Quando aplicável, o usuário seleciona um tamanho disponível (ex.: "M") e o tamanho fica destacado em preto.
4. O usuário clica em **"ADICIONAR À SACOLA"**.
5. **Resultado esperado:**
   - É exibida a notificação verde **"Produto adicionado"** com o atalho **"ABRIR SACOLA"**.
   - O contador do ícone da sacola no cabeçalho é incrementado em relação ao valor registrado no passo 1.
6. O usuário clica em **"ABRIR SACOLA"**.
7. **Resultado esperado:** A página **"MINHA SACOLA"** exibe o produto com a variação selecionada (ex.: "Cor: Branco", "Tamanho: M"), a quantidade, o valor do item e o subtotal correspondente no "Resumo da compra".

**Cenário B: adicionar novamente o mesmo produto e variação**

1. Com o produto já presente na sacola (Cenário A), o usuário retorna à mesma PDP e seleciona a mesma variação.
2. O usuário clica em **"ADICIONAR À SACOLA"**.
3. **Resultado esperado:** A notificação **"Produto adicionado"** é exibida, o contador do cabeçalho é incrementado e, na página **"MINHA SACOLA"**, a quantidade do item existente aumenta em 1, sem criar uma nova linha.

### 5.2 Fluxo alternativo

**Adicionar sem selecionar a variação obrigatória**

1. O usuário visitante acessa a PDP de um produto com variação de tamanho, sem tamanho selecionado.
2. O usuário clica em **"ADICIONAR À SACOLA"** sem selecionar o tamanho.
3. **Resultado esperado:**
   - O produto **não** é adicionado à sacola e o contador do cabeçalho não é alterado.
   - Abre o modal **"Selecione os detalhes do item"** com nome e preço do produto, a instrução "Selecione a cor e/ou tamanho", as opções de variação e o botão **"ADICIONAR À SACOLA"**.
4. No modal, o usuário seleciona um tamanho disponível e clica em **"ADICIONAR À SACOLA"**.
5. **Resultado esperado:** O produto é adicionado à sacola, com o mesmo comportamento descrito no passo 5 do Cenário A (notificação e incremento do contador).

**Variação: fechar o modal sem selecionar**

1. Com o modal aberto, o usuário clica no botão de fechar (**X**).
2. **Resultado esperado:** O modal é fechado, o produto não é adicionado e o contador do cabeçalho não é alterado.

### 5.3 Fluxo negativo

**Tamanho indisponível em estoque**

1. O usuário visitante acessa a PDP de um produto que possui tamanho indisponível (exibido esmaecido e riscado).
2. O usuário tenta clicar no tamanho indisponível.
3. **Resultado esperado:** O tamanho não é clicável e não fica selecionado. Não é possível adicionar essa variação à sacola, e o contador do cabeçalho não é alterado.

## 6. Restrições

- **RN-01 (Usuário visitante):** Todo o fluxo deve ser executado sem login ou cadastro.
- **RN-02 (Sem checkout):** Nenhum cenário ou teste deve acionar **"FINALIZAR COMPRA"** ou avançar para pagamento.
- **RN-03 (Ambiente público):** A adição à sacola é feita como usuário visitante, sem mock de requisição, e validada pela interface (notificação, contador e página "MINHA SACOLA"). Cada teste deve rodar em contexto de navegador isolado (padrão do Playwright), sem reaproveitar cookies ou sacolas de execuções anteriores.
- **RN-04 (Contador relativo):** A sacola pode conter itens de sessões ou testes anteriores. A validação do contador deve comparar o valor **antes e depois** da ação, e não um valor absoluto.
- **RN-05 (Sem reserva de estoque):** Conforme aviso exibido na sacola, "produtos na sacola não ficam reservados". Os testes não devem depender de um produto ou tamanho específico permanecer em estoque, e a massa de teste deve ser verificada antes da execução.
- **RN-06 (Fidelidade ao site):** Textos, seletores e asserções devem refletir apenas elementos reais observados na interface (via inspeção ou CodeGen). Comportamentos não confirmados não devem ser assumidos na automação.
