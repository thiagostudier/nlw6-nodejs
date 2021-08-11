# NLW 6 - Node.js

Bootcamp da Rocketseat de Node.js

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

