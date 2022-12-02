<h1>Desafio 2 - Curso Full Cycle - Docker</h1>

<br><br>
Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.<br><br>

O retorno da aplicação node.js para o nginx deverá ser:<br><br>

<h1>Full Cycle Rocks!</h1><br><br>

- Lista de nomes cadastrada no banco de dados.<br><br>

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.<br><br>

Suba tudo em um repositório e faça a entrega.<br><br>

* A linguagem de programação para este desafio é <b>Node/JavaScript.</b>