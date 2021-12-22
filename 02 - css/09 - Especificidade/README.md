## Existe um cálculo para analisar qual o seletor é o mais importante (assistir aula novamente)

- O navegador pontua o seletor de acordo com sua estrutura
- Cada elemento, classe, id, vale pontos para este cálculo
- Pontuação:
- Composta por 4 números (0,0,0,0)
-- Quanto mais a esquerda, maior a relevância da pontuação
-- Vamos chamar esses números de (a,b,c,d)
-- Regra da pontuação (sobrescrevendo a herança)
--- Cada elemento / pseudo elemento -> d = +1 (0,0,0,1)
--- Cada id -> b = +1 (0,1,0,0)
-- Exemplo de pontuação: div#container ul li -> (0,1,0,3)