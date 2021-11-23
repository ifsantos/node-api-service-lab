npm init --y
npm i typescript -D
npx tsc --init
npm i ts-node-dev --also=dev
npm i express @types/express --also=dev
npm i tyepeorm reflect-metadata
npm i mysql
npx typeorm migration:create -n CreateUsers
npm i uuid
npm i @types/uuid --also=dev
npm i jest @types/jest ts-jest --also=dev

# Set on tsconfig.json
# target: es6
# strict: false

# Set on package.json
# scripts: { dev: "ts-node-dev index.ts", ... }

# To run Jest tests easily, install vscode-jest-runner plugin from store
# or cl: npm test

# MySQL config to connect from NodeJS+TypeORM:
# alter USER 'foo'@'%' IDENTIFIED WITH mysql_native_password BY 'bar';
# FLUSH PRIVILEGES;    
# create schema nodelab;
# grant all privileges on nodelab.* to foo;

# To run it on dev: 
npm run dev