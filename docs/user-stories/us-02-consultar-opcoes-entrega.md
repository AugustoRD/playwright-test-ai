# US-02. Consultar opções de entrega

## História

Como cliente da Renner, eu quero consultar as opções de entrega disponíveis para um produto para escolher a modalidade mais adequada.

## Critérios de aceitação

1. O sistema deve permitir informar um CEP para consultar as opções de entrega disponíveis.
2. O sistema deve apresentar as modalidades de entrega disponíveis, seus respectivos valores e prazos estimados.
3. Caso o CEP seja inválido ou não existam opções de entrega disponíveis, o sistema deve apresentar uma mensagem informativa.

## Regras e restrições

- Não é necessário estar autenticado (logado) no site para consultar as opções de entrega.
- A consulta deve ser realizada mediante o preenchimento de um CEP válido.
- Os valores e prazos de entrega devem considerar o CEP informado e a disponibilidade do produto na região.
