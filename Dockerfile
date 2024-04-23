FROM node:alpine AS build

RUN npm install -g pnpm

RUN pnpm install

COPY . ./

RUN pnpm run build

CMD["pnpm", "run", "dev"]