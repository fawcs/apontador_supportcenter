# apontador_supportcenter
Aponta horas através de um CSV no support center

Utilitário pra quem tem preguiça de entrar chamado em chamado pra apontar :)

# Configurações

Editar arquivo config.json, na *apikey* coloque a chave de api do Support Center Engine encontrado em:
Preferências -> Acesso à API -> Chave API

Em *consultant* coloque o nome do consultor que aparece nas opções para seu apontamento.

# Apontamentos

Utilize o arquivo apontamentos.csv como exemplo

Dicas:
 - Não utilize caracteres estranhos
 - Não implementei apontamentos em minutos ;)
 - As datas devem ser conforme encontradas no SC no campo "Tempo executado" na parte de apontamentos , por ex: 04 Nov 2019, 03 Oct 2019 etc etc
 
 Exemplo do layout do csv, separado por virgula
 
 | id | Data      | Descricao          |Horas|
 |----|-----------|--------------------|-----|
 |196 |04 Oct 2019| resolvendo chamados|2    |
 
 Onde:
 
 |Campo    |Descrição|
 |---------|---------|
 |id       |Id do chamado no support center|
 |Data     |Data a ser realizado o apontamento, deve ser no formato do SC, ex: 04 Nov 2019, 03 Oct 2019|
 |Descricao| Descrição do apontamento|
 |Horas    | Horas a serem apontadas, utilize número inteiro!|
