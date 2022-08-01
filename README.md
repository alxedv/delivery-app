# Delivery App

Delivery App é uma aplicação web FullStack, feita em grupo e que simula um e-commerce de bebidas.
O objetivo deste projeto foi colocar em prática os conhecimentos adquiridos durante os módulos de Front-end e Back-end na Trybe, tais como:
 - HTML
 - CSS
 - React.js
 - ContextApi
 - Node.js
 - MySQL
 - Sequelize.
 - Versionamento de Código (Git e Github)

Além de metodologias ágeis como Scrum e Kanban. 

## Participantes
Estes foram os integrantes do grupo responsáveis pelo desenvolvimento deste projeto:
- [Alex Maia](https://github.com/alxedv)
- [Bruno Marques](https://github.com/blmarquess)
- [Gabriel Augusto](https://github.com/gabriel-am12)
- [Jonatas Passos](https://github.com/jonataspassos96)
- [Luis Gustavo](https://github.com/L-gustavo)
- [Yuri Franco](https://github.com/yuri-franco-18)

## Instalação
- É necessário ter o node instalado em sua máquina na versão 16 ou superior.
- É necessário também ter em sua máquina o MySQL

Uma vez que esteja na pasta raiz do projeto execute o comando abaixo para instalar as depêndencias.

```bash
npm install
```

## Como usar
### É possível rodar a aplicação de duas maneiras:
#### 1° - Simulando o banco de dados.
É possível simular o uso do banco de dados através de uma fakeApi criada para o desenvolvimento do Frontend, mas não está 100% funcional, já que esta foi uma medida utilizada apenas para agilizar o andamento do projeto.

Vá para a pasta de frontend e instale as dependências: 
```bash
cd frontend
npm install
```

Assim que todas as dependências estiverem instaladas, basta rodar o comando abaixo para que a aplicação comece a rodar no navegador.

```bash
npm run dev
```
Garanta que as portas 3000 e 3001 não estejam em uso.

É possível que a aplicação apresente erros durante o uso, assim como dito anteriormente.

É possivel fazer login com o usuário:
- email: customer@customer.com
- senha: customer1234

#### 2° - Utilizando o banco de dados local
Para isso é necessário criar um arquivo .env na raiz do projeto para definir algumas variáveis de ambiente.

```bash
HOSTNAME=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_DB_NAME=
APP_SECRET=
```
Após isso, basta rodar o comando abaixo para subir a aplicação:
```bash
npm start
```
*Atenção: Este projeto utiliza o pm2 para gerenciar a aplicação. Para parar a execução é necessário rodar o comando ```npm stop```.*