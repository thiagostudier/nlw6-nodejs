# NLW 6 - Node.js

Bootcamp da Rocketseat de Node.js

## Esboço do projeto

Sistema que permite o cadastro de Usuários, Tags e Elogios.

## Comandos para o desenvolvimento

Instalando ambiente
```
yarn init - y

yarn add typescript -D

node index.ts

yarn tsc --init
yarn tsc

yarn add express
yarn add @types/express
```

Instalando Banco de Dados com TypeORM e SQLite
```
npm install typeorm --save

npm install reflect-metadata --save

npm install sqlite3 --save

yarn add uuid
yarn add @types/uuid -D
```

Criando Migrations e Entidades
```
yarn typeorm migration:create -n CreateUsers

yarn typeorm migration:run
yarn typeorm migration:revert

yarn typeorm entity:create -n User

yarn add express-async-errors

```

Criar as TAGS
```
yarn typeorm migration:create -n CreateTags

yarn typeorm migration:run
```

Adicionar senha ao usuário
```
yarn migration:create -n AlterUserAddPasswordyarn
```

Adicionar bibliotecas de autenticação 
```
yarn add bcryptjs

yarn add @types/bcryptjs -D

yarn add jsonwebtoken
```

Adicionar tabela dos elogios
```
yarn typeorm migration:create -n CreateCompliments
```

Nova biblioteca: Class-Transformer
```
yarn add class-transformer
```