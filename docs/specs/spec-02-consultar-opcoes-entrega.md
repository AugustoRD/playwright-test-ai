# SPEC-02: Consultar opções de entrega

- **User Story relacionada:** [US-02](../user-stories/us-02-consultar-opcoes-entrega.md)
- **Status:** Em revisão
- **Data:** 2026-11-06

## 1. Objetivo

Especificar o comportamento da funcionalidade de consulta das opções de entrega no e-commerce da Renner, na página do produto, seção "CALCULAR FRETE", permitindo que o cliente informe um CEP e visualize as modalidades de entrega disponíveis, seus respectivos valores e prazos estimados.

> **Nota:** Os valores, prazos e modalidades de entrega apresentados devem ser considerados variáveis, pois dependem do CEP informado e da disponibilidade dos produtos na região.

## 2. Escopo

### Incluído

- Campo **"Digite seu CEP"** e botão **"OK"** na seção "CALCULAR FRETE" da página do produto.
- Máscara do campo de CEP (somente números, hífen automático).
- Consulta das opções de entrega disponíveis para o CEP informado.
- Apresentação das modalidades de entrega disponíveis.
- Exibição dos valores de entrega (em R$ ou **"Grátis"**).
- Exibição dos prazos estimados de entrega.
- Apresentação de mensagem informativa quando o CEP for inválido.
- Apresentação de mensagem informativa quando não houver opções de entrega disponíveis.

### Fora do escopo

- Login, cadastro ou qualquer ação que exija autenticação.
- Alteração do endereço cadastrado na conta do cliente.
- Finalização de compra e pagamento.
- Seleção de modalidade de entrega (não disponível na página do produto).
- Validação da exatidão dos valores e prazos calculados pela Renner.
- Link "Não sei meu CEP".
- Bloco "Quer comprar na loja?" (botão "CONSULTAR") e consulta de lojas para retirada.
- Opção "ENTREGAR PARA: DIGITE SEU CEP" da página "MINHA SACOLA".

## 3. Requisitos Funcionais

- **RF-01 (Informar CEP):** A seção "CALCULAR FRETE" da página do produto deve exibir o campo "Digite seu CEP" e o botão "OK".
- **RF-02 (Máscara do CEP):** O campo deve aceitar somente números, ignorando outros caracteres, e aplicar o hífen automaticamente no formato `00000-000`.
- **RF-03 (Consultar opções de entrega):** Ao clicar em "OK" com um CEP válido, o sistema deve consultar e exibir as opções de entrega para o produto.
- **RF-04 (Exibir modalidades):** O sistema deve apresentar as modalidades de entrega disponíveis, cada uma com nome e, quando houver, texto complementar (ex.: "Retire na loja", "Normal (valor de frete estimado)").
- **RF-05 (Exibir valores):** O sistema deve apresentar o valor de cada modalidade, no formato "R$ X,XX" ou "Grátis".
- **RF-06 (Exibir prazos):** O sistema deve apresentar o prazo estimado de cada modalidade, no formato "A partir de N dias úteis".
- **RF-07 (CEP inválido):** Para CEP incompleto (menos de 8 dígitos) ou inexistente, o sistema deve apresentar uma mensagem informativa e não exibir opções de entrega.
- **RF-08 (Sem opções disponíveis):** Caso não existam opções de entrega disponíveis para o CEP informado e os produtos da compra, o sistema deve apresentar uma mensagem informativa ao cliente.

## 4. Critérios de Aceite

| CA        | Descrição                                                                                                               | Requisitos relacionados |
| --------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| **CA-01** | Permitir informar um CEP válido para consultar as opções de entrega disponíveis.                                        | RF-01, RF-02, RF-03     |
| **CA-02** | Apresentar as modalidades de entrega disponíveis, com seus respectivos valores e prazos estimados.                      | RF-04, RF-05, RF-06     |
| **CA-03** | Apresentar uma mensagem informativa quando o CEP informado for inválido ou não existirem opções de entrega disponíveis. | RF-07, RF-08            |

## 5. Comportamentos Esperados

### 5.1 Fluxo positivo

**Cenário A: consultar opções de entrega com CEP válido**

1. O usuário visitante acessa a página de um produto e localiza a seção "CALCULAR FRETE".
2. O usuário digita os 8 números de um CEP válido, e o campo exibe o formato `00000-000`.
3. O usuário clica em "OK".
4. **Resultado esperado:**
   - O sistema apresenta as modalidades de entrega disponíveis.
   - Cada modalidade exibe nome, prazo ("A partir de N dias úteis") e valor ("R$ X,XX" ou "Grátis"). Ex.: "Retire na loja", 6 dias úteis, Grátis; "Normal", 4 dias úteis, R$ 9,99.

### 5.2 Fluxo alternativo

**Cenário B: máscara do campo de CEP**

1. O usuário visitante acessa a página de um produto e localiza a seção "CALCULAR FRETE".
2. O usuário tenta digitar letras ou símbolos no campo "Digite seu CEP".
3. **Resultado esperado:** O campo ignora os caracteres não numéricos.
4. O usuário digita 8 números.
5. **Resultado esperado:** O hífen é inserido automaticamente, no formato `00000-000`.

**Cenário C: trocar o CEP consultado**

1. O usuário visitante realiza uma consulta com um CEP válido (Cenário A).
2. O usuário informa outro CEP válido e clica em "OK".
3. **Resultado esperado:** As opções de entrega exibidas são atualizadas de acordo com o novo CEP.

### 5.3 Fluxo negativo

**Cenário D: consultar opções de entrega com CEP inválido**

1. O usuário visitante acessa a página de um produto e localiza a seção "CALCULAR FRETE".
2. O usuário informa um CEP incompleto (menos de 8 dígitos) ou inexistente.
3. O usuário clica em "OK".
4. **Resultado esperado:**
   - O sistema identifica que o CEP informado é inválido.
   - O sistema apresenta uma mensagem informativa.
   - O sistema não apresenta opções de entrega como resultado de uma consulta inválida.

**Cenário E: consultar opções de entrega sem disponibilidade para a região**

1. O usuário visitante acessa a página de um produto e localiza a seção "CALCULAR FRETE".
2. O usuário informa um CEP válido.
3. O usuário clica em "OK".
4. **Resultado esperado:**
   - O sistema identifica que não existem opções de entrega disponíveis.
   - O sistema apresenta uma mensagem informativa ao cliente.
   - Nenhuma modalidade indisponível deve ser apresentada como opção de entrega disponível.

## 6. Restrições

- **RN-01 (Usuário visitante):** Todo o fluxo de consulta deve ser executado sem necessidade de login ou cadastro.
- **RN-02 (Informações variáveis):** Os valores e prazos de entrega não devem ser tratados como informações fixas nos testes, pois podem variar conforme o CEP e a disponibilidade dos produtos.
- **RN-03 (Fidelidade ao site):** Textos, seletores e asserções devem refletir apenas elementos reais observados na interface, por meio de inspeção ou CodeGen. Comportamentos não confirmados não devem ser assumidos na automação.
- **RN-04 (Massa de dados):** Usar somente CEPs públicos (ex.: de órgãos ou empresas) nos testes e documentos. Nunca usar CEP pessoal.
