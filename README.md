Case Stone.
An application to find information about Marvel comics and characters.

---
# Case 1 - Cultura

[Assista ao Manifesto Stone 2017](https://youtu.be/oq8h5VUnwzU), pesquise bastante sobre história e nossa cultura e construa um case sobre:

- Quais são os seus valores e como você se conecta com os valores da Stone?
- Como a missão da Stone faz a diferença na sociedade brasileira?
- Quais são os pros e contras de trabalhar na empresa?

Apresente o seu case da forma que achar melhor e se sentir mais confortável: slides, oralmente, vídeo, etc.

# Case 2 - Técnico

- Implementar uma aplicação client-side onde será encontrar todas as informações sobre as comics e characters da marvel;
- Implementar uma aplicação server-side que conterá funções de autenticação, gerenciamentos de usuários e de comics/characters favoritos.

## API

- Utilizar a api de developer da marvel (https://developer.marvel.com/).

## Navegação

- Deve existir uma página de cadastro de usuário para a aplicação;
- Ao cadastrar o usuário será possível realizar o login;
- Ao logar na aplicação deverá ser possível realizar a alterações dos dados do usuário. ex: login, senha, etc...;
- Ao logar na aplicação deverá ser possível realizar a busca de characters e comics da marvel e os favoritos do usuário;
- Buscando por Comics: ao encontrar uma comic desejada deve ser possível favoritar e visualizar as informações da mesma e a exibição dos characteres presentes nela, sendo possível selecionar um character e visualizar as informações do mesmo;
- Buscando por Characteres: ao encontrar um character desejado deve ser possível favoritar e visualizar as informações do mesmo e a exibição das comics onde ele participa, sendo possível selecionar uma comic e visualizar as informações da mesma;
- Exibindo favoritos: deve existir páginas que exibe as comics favoritas e os characters favoritos do usuário, podendo exibir as informações dos mesmos.

## Requisitos

- Eu, como usuário, desejo me cadastrar na aplicação e efetuar login/logout;
- Eu, como usuário, desejo editar minhas informações;
- Eu, como usuário, desejo ver a listagem e detalhes das comics, podendo favoritar ou desfavoritar; 
- Eu, como usuário, desejo ver a listagem e detalhes dos characters, podendo favoritar ou desfavoritar; 
- Eu, como usuário, desejo ver a listagem e detalhes dos characters e comics favoritos.
 
## Dicas e Sugestões

### Client-Side

- Não é obrigatório o uso de um framework ou lib, mas recomendamos a utilização do React;
- É obrigatório o uso de rotas.

### Server-Side

- A linguagem do backend não é restrita e nem o uso de framework, mas recomendamos a utilização de Javascript;
- Para melhorar segurança da aplicação sugerimos a utilização de JWT para a autenticação;
- Sugerimos a utilização de um banco de dados relacional;
- É obrigatório utilizar API com arquitetura REST.

## Submissão

- O desafio deve ser entregue pelo GitHub. As aplicações devem estar hospedadas (ex: GitHub Pages, Now, Netlify, Firebase, Heroku, etc) e suas URLs devem ser enviadas por email.


## Critérios de Avaliação

- O desafio será avaliado através de cinco critérios:

### Entrega

* O código possui algum controle de dependências?
* O resultado final está completo para ser executado?
* O resultado final atende ao que se propõe fazer?
* O resultado final atende totalmente aos requisitos propostos?
* O resultado final é visualmente elegante?

### Boas Práticas

* O código está de acordo com o guia de estilo da linguagem?
* O código está bem estruturado?
* O código está fluente na linguagem?
* O código faz o uso correto de _Design Patterns_?

### Documentação

* O código foi entregue com um arquivo de README claro de como se guiar?
* O código possui comentários pertinentes?
* O código está em algum controle de versão?
* Os commits são pequenos e consistentes?
* As mensagens de commit são claras?

### Código Limpo

* O código possibilita expansão para novas funcionalidades?
* O código é _Don't Repeat Yourself_?
* O código é fácil de compreender?

### Controle de Qualidade

* O código possui configuração de lint?
* O código possui testes unitários?
* O código possui teste de cobertura?
* O código está em Integração Contínua?

## Material de Estudo
* [Boas Práticas na Stone](https://github.com/stone-payments/stoneco-best-practices/blob/master/README_pt.md)
