API User test

A API USER é uma API RESTful que permite o acesso a dados sobre usuários.
Endpoints

A API possui os seguintes endpoints disponíveis:
POST /generate

Este endpoint permite realizar cadastro de usuários com os envios de dados em JSON. Para realizar um cadastro, é necessário enviar uma requisição POST com os seguintes campos:

    name: nome completo do usuário;
    linkedin: link do perfil do usuário no LinkedIn;
    github: link do perfil do usuário no GitHub;
    description: uma descrição breve do usuário.

GET /:name/:id

Este endpoint retorna um usuário cadastrado na API em formato JSON, filtrando pelo nome e id do usuário. Para realizar a consulta, é necessário enviar uma requisição GET com os seguintes parâmetros na URL:

    name: nome completo do usuário;
    id: identificador único do usuário.
